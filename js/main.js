

var links = Array.from(document.querySelectorAll('.nav-link')) 
var clickedMeal;
for(var i = 0; i<links.length;i++)
{
    links[i].addEventListener('click',function(e){
        clickedMeal = e.target.id
        console.log(clickedMeal)
        getRecipe(clickedMeal)
    })
}

var recipesList = [];
getRecipe()

function getRecipe(Meal = 'pizza')
{
    var http = new XMLHttpRequest();
    http.open('GET', `https://forkify-api.herokuapp.com/api/search?q=${Meal}`)
    http.send();
    http.addEventListener('readystatechange',function(){
        if(http.readyState === 4 && http.status == 200)
        {
            var myApi = JSON.parse(http.response);
            recipesList = myApi.recipes;
            showRecipesList()
        }
    })
    
}
    







function showRecipesList()
{
    var cartona = '';
    for(var i=0; i<recipesList.length; i++)
    {
        // console.log(recipesList[i].image_url)
        // console.log(recipesList[i].title)
        // console.log(recipesList[i].source_url)
        // console.log('---------------------------------')
        cartona +=
        `
        <div class="col-md-4 shadow">
            <div class="item text-center p-3">
                <img src="${recipesList[i].image_url}" alt="" class="w-100">
                <h4 class="py-3">${recipesList[i].title}</h4>
                <a class="btn btn-info" href="${recipesList[i].source_url}">Source</a>
            </div>
        </div>

        `
    }
    document.getElementById('demo').innerHTML = cartona
}

























