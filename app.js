console.log(houseToRent);
const cards = document.querySelector(".cards");
// console.log(cards)

const createCard = (cardToDisplay) => {
    cardToDisplay.forEach(element => {
        cards.insertAdjacentHTML(
            "beforeend",
        `<div class="card">
            <div class="card-header">
                <div class="card-img" style="background-image:url(${element.img}) "></div>
            </div>
            <div class="card-body">
                <h2 class="card-title">${element.name}</h2>
                <p class="card-description">${element.desc}</p>
                <button class="card-button">I want it!</button>
            </div>
        </div>`
        );
    });
}

createCard(houseToRent);

// const filters = {type: 'house', available: true};

const select = document.querySelector(".select");
const checkBox = document.querySelector('.available-checkbox');
select.addEventListener("change", (event) => {
    //....
    // filters.type = select.value
    cards.innerHTML="";
    select.value === "All" ? createCard(houseToRent) : createCard(houseToRent.filter(house => (house.type === select.value)));
}); 

checkBox.addEventListener("change", (event) =>{
    cards.innerHTML="";
    event.target.checked ? createCard(houseToRent.filter(house => house.available)) : createCard(houseToRent);
});