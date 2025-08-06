import recipedata from "./recipe.json";

function RecipeImage() {

   return (
    <>
      <img src={recipedata.recipeImage} alt={recipedata.name} className = "recipeImage"/>
    
    </>


   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 