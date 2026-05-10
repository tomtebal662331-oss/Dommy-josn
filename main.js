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
