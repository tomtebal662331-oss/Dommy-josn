let productsContainer = document.querySelector('#container');

function init() {
    let r = new XMLHttpRequest();
    
    r.open("GET", "https://dummyjson.com/recipes", true);
    
    r.onload = function () {
        if (r.status == 200 && r.readyState == 4) {
            let response = JSON.parse(r.responseText);
            let allRecipes = response.recipes; 
            
            let htmlContent = "";
            
            allRecipes.forEach((ele) => {
                htmlContent += `
                    <div class="card">
                    <img src="${ele.image}"">
                    <div class"contant-card">
                    <h3>${ele.name}</h3>
                    <p>Kitchen: ${ele.cuisine}</p>
                    <p>Evaluation: ${ele.ingredients}</p>
                    <a href="#">${"See Recipe"}</a>
                    </div>
                    
                </div> 
                `;
            });
            
            productsContainer.innerHTML = htmlContent;
        }
    };
    
    r.send();
}

init();

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const container = document.getElementById('container');

searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query === '') {
    return;
  }
  searchInput.value = '';
  searchRecipes(query);
});

function searchRecipes(query) {
  container.innerHTML = '<p>Loading...</p>';
  fetch(`https://dummyjson.com/recipes/search?q=Margherita(query)}`)
    .then(function(response) {
      return response.json();
    })
}

function displayRecipes(recipes) {
  const cardsHTML = recipes.map(function(recipe) {
    return `
      <div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>${recipe.name}</h3>
        <p>Cuisine: ${recipe.cuisine}</p>
        <p>Difficulty: ${recipe.difficulty}</p>
      </div>
    `;
  }).join('');
  container.innerHTML = cardsHTML;
}


