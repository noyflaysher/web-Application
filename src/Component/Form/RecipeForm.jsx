import * as React from "react";
import { Button } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
const Ingrediant = ({ count }) => {
  return (
    <Grid item xs={6}>
      <TextField
        fullWidth
        name={`Ingrediant${count + 1}`}
        label={`Ingrediant #${count + 1}`}
        type="textbox"
        id={`Ingrediant${count + 1}`}
      />
    </Grid>
  );
};
export default function RecipeForm() {
  const [ingrediantList, setIngrediantList] = React.useState([]);
  const [titleError, setTitleError] = React.useState(false);
  const [servingsError, setServingsError] = React.useState(false);
  const [timeError, setTimeError] = React.useState(false);
  const [ingrediantError, setIngrediantError] = React.useState(false);

  const addIngrediant = () => {
    setIngrediantList(
      ingrediantList.concat(
        <Ingrediant key={ingrediantList.length} count={ingrediantList.length} />
      )
    );
  };

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
    if (setIngrediantError(ingList.length === 0)) return;
    const newRecipe = {
      title: data.get("recipeTitle"),
      imageSrc: data.get("recipeImage"),
      servings: data.get("recipeServings"),
      time: data.get("recipePrepTime"),
      description: data.get("recipeDescription"),
      ingrediants: ingList,
    };
    console.log(newRecipe);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Create A New Recipe</h2>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="recipeTitle"
                  error={titleError}
                  required
                  fullWidth
                  id="recipeTitle"
                  label="Recipe Title"
                  autoFocus
                  helperText="Title is required"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="recipeImage"
                  fullWidth
                  id="recipeImage"
                  label="Link an image..."
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  name="recipeServings"
                  label="No. of servings"
                  type="textbox"
                  id="recipeServings"
                  required
                  helperText="Servings is required"
                  error={servingsError}
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
                  helperText="Time is required"
                  error={timeError}
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
                  maxRows={5}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={() => addIngrediant()}
                  fullWidth
                  variant={ingrediantError ? "outlined" : "text"}
                  color={ingrediantError ? "secondary" : "default"}
                >
                  Add Ingrediant
                </Button>
              </Grid>
              {ingrediantList}
            </Grid>
            <Button type="submit" fullWidth variant="contained">
              Publish
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
