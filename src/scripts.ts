type Character ={
  created:string
  episode:string[]
  gender:string
  id:number
  image:string,
  location:{
    name:string,
    url:string
  };
  name:string,
  origin:{
    name:string,
    url:string
  };
  status:string,
  species:string,
  type:string,
  url:string
}
// const card = document.querySelectorAll<HTMLDivElement>('.character-description');
const btn = document.querySelectorAll<HTMLButtonElement>('.btn');
const cardImg = document.querySelectorAll<HTMLImageElement>('.character-image__img');
const cardName = document.querySelectorAll<HTMLHeadingElement | null>('.character-description--name');
const cardStatus = document.querySelectorAll<HTMLParagraphElement | null>('.character-description--status-species__status');
const cardSpecies = document.querySelectorAll<HTMLParagraphElement | null>('.character-description--status-species__species');
const cardLocation = document.querySelectorAll<HTMLParagraphElement | null>('.character-description--location__place');
const cardFirstEpisode = document.querySelectorAll<HTMLParagraphElement | null>('.character-description--first-seen__episode');
const cardStatusColorCircle = document.querySelectorAll<HTMLParagraphElement | null>('.character-description--status-species__color');
const displayData = (data:any) => {
  const character:Character[] = data.results;

  console.log(character);
  for (let i = 0; i < character.length; i += 1) {
    cardImg[i].src = character[i].image;
    cardName[i].innerHTML = character[i].name;
    cardStatus[i].innerHTML = character[i].status;
    if (character[i].status === 'Alive') {
      cardStatusColorCircle[i].style.color = 'green';
    } else {
      cardStatusColorCircle[i].style.color = 'red';
    }
    cardSpecies[i].innerHTML = character[i].species;
    cardLocation[i].innerHTML = character[i].location.name;
    cardFirstEpisode[i].innerHTML = character[i].origin.name;
  }
};
let apiLink = 'https://rickandmortyapi.com/api/character/';
let count = 1;
const fetchData = () => {
  fetch(apiLink).then((response) => response.json()).then(displayData);
};

btn[0].addEventListener('click', () => {
  count -= 1;
  apiLink = `https://rickandmortyapi.com/api/character/?page=${count}`;
  fetchData();
});

btn[1].addEventListener('click', () => {
  count += 1;
  apiLink = `https://rickandmortyapi.com/api/character/?page=${count}`;
  fetchData();
});

console.log(count);
fetchData();
