import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = '';
    let authorPhoto = '';
    let authorName = 'Lorac';

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

function RecipeDescription () {
    return (
        <div> 
   <div>
      <h1>Recipe Title</h1>
      <p>Short recipe description</p>
   </div>
   <RecipeAuthor />
</div>
    )
}


export default RecipeDescription;