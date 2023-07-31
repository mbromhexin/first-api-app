

async function getRecipe(Meal)
{
    var apiRespons = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${Meal}`);
    var myData = await apiRespons.json()
    console.log(myData);
}



getAll()

async function getAll()
{
    await getRecipe('chocolate'); 
    await getRecipe('fish');   
    await getRecipe('steak');    
    await getRecipe('pizza');  
    await getRecipe('potato'); 
}






function done()
{
    console.log('done')
}

//getChocolate => getSteak => getPotato => getPizza => getFish => done
// getAll()

// async function getAll()
// {
//     await getChocolate(); 
//     await getFish();   
//     done();
//     await getSteak();    
//     await getPizza();  
//     await getPotato(); 
// }



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











