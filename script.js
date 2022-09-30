 //change heading
 let headingElement = document.getElementById('superhero-list-heading');
 headingElement.textContent += ' from Marvel';

 //Show inner HTML

 let superHeroSectionElement = document.getElementById('super-hero-section');
 console.log(superHeroSectionElement.innerHTML);

 //change Background
 let siteWripper = document.getElementById('wrapper');
 siteWripper.style.backgroundColor = 'lightblue';

 //add value from input
function addSuperHero(){
let superHeroInputElement = document.getElementById('superhero-name');
let superHeroName = superHeroInputElement.value
console.log(superHeroName);
//delete value when add button is clicked
superHeroInputElement.value = '';

//add hero to list
let superHeroElement = document.getElementById('superhero-list');
superHeroElement.innerHTML += `<li class='good'>${superHeroName}</li>`; //danger xss atacks
}


// targeting elements by class

let goodSuperHeroListElemments = document.getElementsByClassName('good');
console.log(goodSuperHeroListElemments);

//change Background body element
let bodyElement = siteWripper.parentElement;
bodyElement.style.backgroundColor = 'lightblue';
// get children of elements
let superHeroListElement = document.getElementById('superhero-list');
let childrenList = superHeroListElement.children;
console.log(childrenList);

//use hide/show css logic
function toggleSuperHeroes(){
    
    let toggleHerosButtonelement = document.getElementById('toggle-heros-button');
    if(superHeroListElement.style.display == 'none')
    {
      superHeroListElement.style.display = "block";
      toggleHerosButtonelement.textContent = "Hide";
    }else{
    superHeroListElement.style.display = "none";
    toggleHerosButtonelement.textContent = "Show";
    }
}

// add striped style

let oddHeros = document.querySelectorAll('#super-hero-section li:nth-of-type(2n)');
for (const hero of oddHeros) {
    hero.style.backgroundColor ='red';
}