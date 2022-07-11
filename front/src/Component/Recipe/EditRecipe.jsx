import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "../Button/Button";
import ErrorModal from "../Modal-Backdrop/ErrorModal";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../hooks/http-hook";

function EditRecipe({
  id,
  title,
  image,
  time,
  servings,
  description,
  ingrediants,
  exitEditMode,
}) {
  const [ingrediantList, setIngrediantList] = React.useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  React.useEffect(() => {
    setIngrediantList(
      ingrediants.map((i, index) => <Ingrediant count={index} value={i} />)
    );
  }, []);

  function addIngrediant() {
    setIngrediantList(
      ingrediantList.concat(
        <Ingrediant count={ingrediantList.length} value={""} />
      )
    );
  }

  const Ingrediant = ({ count, value }) => {
    return (
      <Grid item xs={6}>
        <TextField
          fullWidth
          name={`Ingrediant${count + 1}`}
          label={`Ingrediant #${count + 1}`}
          type="textbox"
          id={`Ingrediant${count + 1}`}
          defaultValue={value}
          key={count}
        />
      </Grid>
    );
  };

  const formValidation = (data) => {
    return !(
      data.get("recipeTitle") === "" ||
      data.get("recipeServings") === "" ||
      data.get("recipePrepTime") === ""
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!formValidation(data)) return;
    const ingList = [];
    ingrediantList.forEach((ing, index) => {
      const val = data.get(`Ingrediant${index + 1}`);
      if (val !== "") ingList.push(val);
    });
    if (ingList.length === 0) return;
    try {
      await sendRequest(
        `http://localhost:3000/recipe/update/${id}`,
        "PATCH",
        JSON.stringify({
          imageSrc: data.get("recipeImage"),
          title: data.get("recipeTitle"),
          time: data.get("recipePrepTime"),
          servings: data.get("recipeServings"),
          ingrediants: ingList,
          identifiers: "sweet",
          description: data.get("recipeDescription"),
        }),
        { "Content-Type": "application/json" }
      );
      exitEditMode();
    } catch (err) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        className="edit-from-container"
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="recipeTitle"
              required
              fullWidth
              id="recipeTitle"
              label="Recipe Title"
              defaultValue={title}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="recipeImage"
              fullWidth
              id="recipeImage"
              label="Link an image..."
              defaultValue={image}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="recipeServings"
              label="No. of servings"
              type="textbox"
              id="recipeServings"
              defaultValue={servings}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="recipePrepTime"
              label="Prep Time"
              type="textbox"
              id="recipePrepTime"
              required
              defaultValue={time}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="recipeDescription"
              label="write down recipe description..."
              type="textbox"
              id="recipeDescription"
              multiline
              maxRows={4}
              defaultValue={description}
            />
          </Grid>
          {ingrediantList}
          <Grid item xs={12}>
            <Button
              className="btn btn--add-ingrediant"
              fullWidth
              onClick={addIngrediant}
            >
              Add Ingrediant
            </Button>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="btn btn--submit"
        >
          Publish
        </Button>
      </Box>
    </>
  );
}

export default EditRecipe;
