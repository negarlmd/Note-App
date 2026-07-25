const inputElem = document.querySelector("#input-feild");
const btnSave = document.querySelector("#btn-save");
const btnDelet = document.querySelector("#btn-delete");
const container = document.querySelector("#listed");
const colors = document.querySelectorAll(".color-box");

colors.forEach((color) => {
  color.addEventListener("click", (event) => {
    let mainColor = event.target.style.backgroundColor;
    inputElem.style.backgroundColor = mainColor;
    console.log(mainColor);
    console.log(color);
  });
});

container.addEventListener("click", (event) => {
  if (event.target.tagName === "P") {
    event.target.parentElement.remove();
  }
});

let selectedCard = null;
container.addEventListener("click", (event) => {
  const card = event.target.closest(".card");

  if (!card) return;

  if(selectedCard){
    selectCard.classList.remove('selected');
  }

  selectedCard = card
  selectedCard.classList.add('selected')
});

btnDelet.addEventListener('click',()=>{
if(selectedCard){
  selectedCard.remove();
  selectedCard = null
}
})


function generate() {
  let newDiv = document.createElement("div");
  newDiv.className = " card ";
  
  let newP = document.createElement("p");
  newP.className = "paragraph";
  newP.innerHTML = inputElem.value;
  newP.style.backgroundColor=inputElem.style.backgroundColor
  newDiv.append(newP);
  container.append(newDiv);
}


btnSave.addEventListener("click", generate);
