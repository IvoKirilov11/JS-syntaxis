//add hero to list
function addHero(){
let heroNameElement = document.getElementById('hero-name');
let heroListElement = document.getElementById('hero-list');

//add hero correctly
let newHeroItemElement = document.createElement('li');
newHeroItemElement.textContent = heroNameElement.value;
heroListElement.appendChild(newHeroItemElement);

// add hero by clone element
//let firstListItemElement = heroListElement.children[0];
//let newCloneItemElement = firstListItemElement.cloneNode(true);
//newCloneItemElement.textContent = heroNameElement.value;
//heroListElement.prepend(newCloneItemElement);

heroNameElement.value = '';
}

//delete last hero
function deleteHero(){
    let heroListElement = document.querySelector('#hero-list');
    let lastHeroElement = heroListElement.children[heroListElement.children.length -1];

    //heroListElement.removeChild(lastHeroElement);
    lastHeroElement.remove();

}

// with HTML atribut
function heroesMouseOverHandler(e){
    
    console.log(e.target.textContent);
}

// with DOM element properties
let heroNameElement = document.getElementById('hero-name');
heroNameElement.onfocus = function(){
    console.log('Start typing a hero');
}

heroNameElement.onblur = () => console.log('Stop typing a hero');

// with DOM event handler
function heroNameInputHandler(event){
    //console.log(heroNameElement.value);
    console.log(event.currentTarget.value);
}
heroNameElement.addEventListener('input',heroNameInputHandler);

// click on Hero. Not the best
//let heroListItemElement = document.querySelectorAll('#hero-list li');
//for (const heroElement of heroListItemElement) {
//    heroElement.addEventListener('click', (e) => {
 //    console.log(`You clicked on Hero: ${e.target.textContent}`);
 //   })
//}

//clik on Hero the Best
let heroListElement = document.getElementById('hero-list');

heroListElement.addEventListener('click',()=>{
    if(e.target.tagName != 'LI'){
        return;
    }
    console.log(`You clicked on Hero: ${e.target.textContent}`);
})