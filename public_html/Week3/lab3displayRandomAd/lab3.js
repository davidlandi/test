// Created by David Landi 2014

function popAds ()

{
    //1. Create an array that has five(5) JSON objects.
var products = [];

//a. Create 5 different ads
products.push({"title" : 'OxiClean 2in1 Stain Fighter After Life Liguid', "desc" : 'Fights Stains, Whitens Whites, Brightens Colors' });
products.push({"title" : 'OxiClean Max Force Laundry Stain Remover', "desc" : 'Tackles More Dried-In Stains Than Ever' });
products.push({"title" : 'OxiClean Max Force Gel Stick', "desc" : 'Don’t let tough stains stick to your clothes!' });
products.push({"title" : 'OxiClean 2in1 Stain Fighter Power Paks', "desc" : 'Fights Stains, Whitens Whites, Brightens Colors' });
products.push({"title": 'OxiClean Baby Stain Soaker', "desc" : 'You Never Know' });

// var for random index
var rAd = rand(products.length);
console.log(rAd);
console.log(products[rAd]["title"] + " " + products[rAd]["desc"]);


var div = document.getElementById("ad");
div.innerHTML = products[rAd]["title"]+ "  " + products[rAd]["desc"];

document.title= products[rAd]["title"]+ "  " + products[rAd]["desc"].substr(0,10);
console.clear(rAd); // want to clear to make it change without refesh of page but its not working 
}


function rand(max)
{
    return (Math.floor(Math.random()* max)); // random number tp select arr
    
}

popAds();//main function 
