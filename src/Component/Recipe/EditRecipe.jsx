import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "../Button/Button";

function EditRecipe({
  title,
  image,
  time,
  servings,
  publisher,
  description,
  ingrediants,
  exitEditMode,
}) {
  const [ingrediantList, setIngrediantList] = React.useState([]);

  React.useEffect(() => {
    setIngrediantList(
      ingrediants.map((i) => (
        <Ingrediant count={ingrediantList.length} value={i} />
      ))
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

  const [titleError, setTitleError] = React.useState(false);
  const [servingsError, setServingsError] = React.useState(false);
  const [timeError, setTimeError] = React.useState(false);

  const formValidation = (data) => {
    setTitleError(data.get("recipeTitle") === "");
    setServingsError(data.get("recipeServings") === "");
    setTimeError(data.get("recipePrepTime") === "");
    return !(
      data.get("recipeTitle") === "" ||
      data.get("recipeServings") === "" ||
      data.get("recipePrepTime") === ""
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!formValidation(data)) return;
    const ingList = [];
    ingrediantList.forEach((ing, index) => {
      const val = data.get(`Ingrediant${index + 1}`);
      if (val !== "") ingList.push(val);
    });
    if (ingList.length === 0) return;
    const newRecipe = {
      title: data.get("recipeTitle"),
      imageSrc: data.get("recipeImage"),
      servings: data.get("recipeServings"),
      time: data.get("recipePrepTime"),
      description: data.get("recipeDescription"),
      ingrediants: ingList,
    };
    console.log(newRecipe);
    exitEditMode();
  };

  return (
    <>
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
