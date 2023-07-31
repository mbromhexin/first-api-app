

function getPizza()
{
    return new Promise(function(callback){
        var recipesList = [];
        var http = new XMLHttpRequest();
        http.open('GET', `https://forkify-api.herokuapp.com/api/search?q=pizza`)
        http.send();
        http.addEventListener('readystatechange',function(){
            if(http.readyState === 4 && http.status == 200)
            {
                var myApi = JSON.parse(http.response);
                recipesList = myApi.recipes;
                console.log('pizza',recipesList)
                callback()
            }
        })
    
    });
}


function getPotato()
{
    return new Promise(function(callback){
        var recipesList = [];
        var http = new XMLHttpRequest();
        http.open('GET', `https://forkify-api.herokuapp.com/api/search?q=potato`)
        http.send();
        http.addEventListener('readystatechange',function(){
            if(http.readyState === 4 && http.status == 200)
            {
                var myApi = JSON.parse(http.response);
                recipesList = myApi.recipes;
                console.log('potato',recipesList)
                callback()
            }
        })
    
    });
}


function getFish()
{
    return new Promise(function(callback){
        var recipesList = [];
        var http = new XMLHttpRequest();
        http.open('GET', `https://forkify-api.herokuapp.com/api/search?q=fish`)
        http.send();
        http.addEventListener('readystatechange',function(){
            if(http.readyState === 4 && http.status == 200)
            {
                var myApi = JSON.parse(http.response);
                recipesList = myApi.recipes;
                console.log('fish',recipesList)
                callback()
            }
        })
    
    });
}
function getSteak()
{
    return new Promise(function(callback){
        var recipesList = [];
        var http = new XMLHttpRequest();
        http.open('GET', `https://forkify-api.herokuapp.com/api/search?q=steak`)
        http.send();
        http.addEventListener('readystatechange',function(){
            if(http.readyState === 4 && http.status == 200)
            {
                var myApi = JSON.parse(http.response);
                recipesList = myApi.recipes;
                console.log('steak',recipesList)
                callback()
            }
        })
    
    });
}

function getChocolate()
{
    return new Promise(function(callback){
        var recipesList = [];
        var http = new XMLHttpRequest();
        http.open('GET', `https://forkify-api.herokuapp.com/api/search?q=chocolate`)
        http.send();
        http.addEventListener('readystatechange',function(){
            if(http.readyState === 4 && http.status == 200)
            {
                var myApi = JSON.parse(http.response);
                recipesList = myApi.recipes;
                console.log('chocolate',recipesList)
                callback()
            }
        })
    
    });
}



function done()
{
    console.log('done')
}

//getChocolate => getSteak => getPotato => getPizza => getFish => done





/*
getChocolate()
.then(function(){return getSteak()})
.then(function(){return getFish()})
.then(function(){return getPizza()})
.then(function(){return getPotato()})
.then(function(){return done()})
*/


/*
getFish();   
getPizza();  
getPotato(); 
getSteak();    
getChocolate(); 
done();
*/

























//getChocolate => getSteak => getPotato => getPizza => getFish => done


/*
getFish();   // async code
getPizza();  // async code
getPotato(); // async code
getSteak();    // async code
getChocolate(); // async code
done();



getChocolate(()=>{
    getSteak(()=>{
        getPotato(()=>{
            getPizza(()=>{
                getFish(()=>{
                    done()
                })
            })
        })
    })
})
*/




//callback hill
/*
getChocolate(function(){
    getSteak(function(){
        getPotato(function(){
            getPizza(function(){
                getFish(function(){
                    done()
                })
            })
        })
    })
})
*/











