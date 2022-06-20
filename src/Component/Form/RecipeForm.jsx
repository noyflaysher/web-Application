import * as React from "react";
import { Button } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
const Ingrediant = ({ count }) => {
  return (
    <Grid item xs={6}>
      <TextField
        fullWidth
        name="recipeIngredient"
        label={`Ingrediant#${count + 1}`}
        type="textbox"
        id={`Ingrediant${count + 1}`}
      />
    </Grid>
  );
};
export default function RecipeForm() {
  const [ingrediantList, setIngrediantList] = React.useState([]);
  const addIngrediant = () => {
    console.log("ADD INGREDIANT");
    setIngrediantList(
      ingrediantList.concat(
        <Ingrediant key={ingrediantList.length} count={ingrediantList.length} />
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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
          <Typography component="h1" variant="h5">
            Create A New Recipe
          </Typography>
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
                  required
                  fullWidth
                  id="recipeTitle"
                  label="Recipe Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="recipeImage"
                  fullWidth
                  id="recipeImage"
                  label="Link an image..."
                  autoFocus
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
                  variant="text"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Add Ingrediant
                </Button>
              </Grid>
              {ingrediantList}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Publish
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
