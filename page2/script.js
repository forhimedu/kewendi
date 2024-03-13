let card = document.querySelector('.cardContainer');
let nextButton = document.getElementById('nextButton');
let frontText = document.getElementById('frontText');
let backText = document.getElementById('backText');
let front = document.querySelector('.front');
let back = document.querySelector('.back');
let showButton = document.getElementById('showButton')
let previousListener;
let showButtonListener;
let pressed = 0;

card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});


let data = [
  ["тетрааквацинк ионы", `[Zn(H\u2082O)\u2084]\u00B2\u207A`],
  ["диамминкүміс(I) ионы", `[Ag(H\u2082O)\u2082]\u207A`],
  ["гексааквахром(III)", `[Cr(H\u2082O)\u2086]\u00B3\u207A`],
  ["хлорпентаакватемір(III) ионы", `[Fe(H\u2082O)\u2085Cl]\u00B2\u207A`],
  ["дигидроксотетраакваалюминий ионы", `[Al(H\u2082O)\u2084(OH)\u2082]\u207A`],
  ["сульфитопентаамминкобальт(III) ионы", `[Co(NH\u2083)\u2085SO\u2083]\u207A`],
  ["тетрагидроксоцинкат ионы", `[Zn(OH)\u2084]\u00B2\u207B`],
  ["ди(тиосульфато)аргентат(I) ионы", `[Ag(S\u2082O\u2083)\u2082]\u00B3\u207B`],
  ["гексацианохромат(III) ионы", `[Cr(CN)\u2086]\u00B3\u207B`],
  ["тетрагидроксодиакваалюминат ионы", `[Al(H\u2082O)\u2082(OH)\u2084]\u207B`],
  ["тетранитродиамминкобальтат(III) ион", `[Co(NH\u2083)\u2082(NO\u2082)\u2084]\u207B`],
  ["пентацианоакваферрат(II) ион", `[Fe(H\u2082O)(CN)\u2085]\u00B3\u207B`],
  ["пентакарбонилтемір", `[Fe(CO)\u2085]`],
  ["дибензолхром", `[Cr(C\u2086H\u2086)\u2082]`],
  ["трихлороамминкобальт", `[Co(NH\u2083)Cl\u2083]`],
  ["дибромодиамминплатина", `[Pt(NH\u2083)\u2082Br\u2082]`],
  ["калий гексацианоферраты(III)", `K\u2083[Fe(CN)\u2086]`],
  ["калий гексацианоферраты(II)", `K\u2084[Fe(CN)\u2086]`],
  ["калий гексахлороплатинаты(IV)", `K\u2082[PtCl\u2086]`],
  ["калий дикарбонатоберрилаты", `K\u2082[Be(CO\u2083)\u2082]`],
  ["гексаамминплатина(IV) хлориді", `[Pt(NH\u2083)\u2086]Cl\u2084`],
  ["тетрахлородиамминплатина(IV)", `[Pt(NH\u2083)\u2082Cl\u2084]`],
  ["калий тетрацианодиамминферраты(III)", `K[Fe(NH\u2083)\u2082(CN)\u2084]`],
  ["аммоний тетрахлородигидроксоплатинаты(IV)", `(NH\u2084)\u2082[Pt(OH)\u2082Cl\u2084]`],
  ["дихлоротетраамминплатина(IV) хлориді", `[Pt(NH\u2083)\u2084Cl\u2082]Cl\u2082`],
  ["диамминкүміс(I)", `[Ag(NH\u2083)\u2082]Cl`],
  ["тринитротриаквакобальт", `[Co(NO\u2082)\u2083(H\u2082O)\u2083]`]
]





function App() {
  let randQuestion = getRandomItem(data);
  if (card.classList.contains('is-flipped')) {
    back.classList.remove('makeBack');
    back.classList.add('makeFront');
    backText.innerHTML = randQuestion[0];
    front.classList.remove('makeFront');
    front.classList.add('makeBack');
    frontText.innerHTML = randQuestion[1];
  } else {
    front.classList.remove('makeBack');
    front.classList.add('makeFront');
    frontText.innerHTML = randQuestion[0];
    back.classList.remove('makeFront');
    back.classList.add('makeBack');
    backText.innerHTML = randQuestion[1];
  }
}


function toSup(a) {
  return a.sup();
}

function toSub(a) {
  return a.sub();
}






function handleButtonClick() {
  pressed = 0;
  if (previousListener) {
    nextButton.removeEventListener('click', previousListener);
  }

  App();

  previousListener = () => {
    handleButtonClick();
  };
  nextButton.addEventListener('click', previousListener);
}

handleButtonClick();

function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}