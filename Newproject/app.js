$(document).ready(function () {




    
    $('button').click(function(){
        var userInput = $('.search').val();
       // console.log(userInput);
       // var url = "https://pokeapi.co/api/v2/pokemon/"+userInput;
        var url = "https://www.themealdb.com/api/json/v1/1/random.php"+userInput;
     //   var url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+userInput;



    
        $.get(url, function(res){
            console.log(userInput);
            console.log(res);
            console.log(res.meals[0].strMealThumb);
            console.log(res.meals[0].strIngredient5);

            $('.product').html(res.meals[0].strMeal);
            $('.desc').html(res.meals[0].strInstructions);
            
            $('.mealThumb').attr('src', res.meals[0].strMealThumb);
            $('.video').html('src', res.meals[0].strYoutube);
            //$('.Ingredients').html(res.meals[0].strIngredient);
            //     for(var i=0; i<Array.length; i++){
             $('.Ingredients').html(res.meals[0].strIngredient1);
            // }


            html_str += `<h1>${res.name}</h1>`
            html_str +=   `<img id="2" src="${res.sprites.front_default}">`
            html_str += `<h3>Types</h3>`
            html_str += `<ul>`
            for(var i=0; i<res.ingredArray; i++){
                html_str += `<li>${res.types[i].type.name}</li>`
                console.log(i);
            }
            
            //strIngredient1
            //../images/ingredients/Coriander.png


          

        })





        
      })

    //   $('button').click(function(){
    //     var userInput = $('.btn-warning').val();
    //   var url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+userInput;
  
  
  
  
  
    //   });
    });