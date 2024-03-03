const countries = JSON.parse(window.sessionStorage.getItem("countries")) || [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
    name: "Germany",
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin",
    isLike: false,
    isBasket: false
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
    name: "Spany",
    population: "323,947,000",
    region: "Americas",
    capital: "Madrid",
    isLike: false,
    isBasket: false
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
    name: "Brazil",
    population: "206,135,893",
    region: "Americas",
    capital: "Brasília",
    isLike: false,
    isBasket: false
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1024px-Flag_of_Iceland.svg.png",
    name: "Iceland",
    population: "334,300",
    region: "Europe",
    capital: "Reykjavík",
    isLike: false,
    isBasket: false
  },
  {
    id: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1024px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png",
    name: "Afghanistan",
    population: "27,657,145",
    region: "Asia",
    capital: "Kabul",
    isLike: false,
    isBasket: false
  },
  {
    id: 6,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png",
    name: "Uzbekistan",
    population: "35,482,369",
    region: "Asia",
    capital: "Tashkent",
    isLike: false,
    isBasket: false
  },
  {
    id: 7,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png",
    name: "Albania",
    population: "2,886,026",
    region: "Europe",
    capital: "Tirana",
    isLike: false,
    isBasket: false
  },
  {
    id: 8,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png",
    name: "Algeria",
    population: "40,400,000",
    region: "Africa",
    capital: "Algiers",
    isLike: false,
    isBasket: false
  },
]

window.sessionStorage.setItem("countries", JSON.stringify(countries))

let elCountryList = document.querySelector(".hero__countries")
let elSelect = document.querySelector(".hero__select")
let elModalWrapper = document.querySelector(".modal-wrapper")
let elInput = document.querySelector(".hero__input")
let elModal = document.querySelector(".modal")

function renderCountry(arr) {
  elCountryList.innerHTML = ""
  const sortedArr = arr.sort((a, b) => a.name < b.name ? -1 : 1)
  sortedArr.map(item => {
    let elItem = document.createElement("li")
    
    elItem.classList.add("hero__item")
    elItem.innerHTML = `
    <img class="hero__img" src=${item.img} alt="Country img" width="100%" height="200"/>
    <h2 class="hero__name">Country : ${item.name}</h2>
    <p class="hero__population">Population : ${item.population}</p>
    <p class="hero__region">Region : ${item.region}</p>
    <p class="hero__capital">Capital : ${item.capital}</p>

    <div class="hero__basic-content">
     <div class="js-btn">

    <button onclick="likeBtnClick(${item.id})" id="${item.id}" class="js-like-btn ${item.isLike ? "like" : "dislike"}">
     <svg class="js-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
     <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
     </svg>
     <span>Like</span>
    </button>
    
    <button id="${item.id}" class="js-basket-btn ${item.isBasket ? "basket" : "unbasket"}" onclick="BasketBtnClick(${item.id})">
      <svg class="js-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
      </svg>
      <span>Buy</span>
     </button>

    <button onclick="MoreBtnClicked(${item.id})" id="${item.id}" class="js-more-btn">
      <svg class="js-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="currentColor" /><path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" /><path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="currentColor" /></svg>
      <span>More</span>
     </button>

     </div>
     
     <div>
     <button>Update</button>
     <button>Delete</button>
     </div>
     </div>
     `
    elCountryList.appendChild(elItem)
  })
}

// Modal click start -----------------------------------
function MoreBtnClicked(clickedId) {
  elModalWrapper.classList.add("open-modal")
  const data = countries.find(item => item.id == clickedId)
  elModal.innerHTML = `
  <div class="modal__img-wrapper">
    <img class="hero__img modal__img" src=${data.img} alt="Country img" width="100%" height="200"/>
  </div>

  <div class="modal__content-wrapper">
    <b>${data.id}</b>
    <h2 class="hero__name">Country : ${data.name}</h2>
    <p class="hero__population">Population : ${data.population}</p>
    <p class="hero__region">Region : ${data.region}</p>
    <p class="hero__capital">Capital : ${data.capital}</p>
    </div>
  `
}
elModalWrapper.addEventListener("click", function(evt) {
  if(evt.target.id == "modal-wrapper") {
    elModalWrapper.classList.remove("open-modal")
  }
})
// Modal click start -----------------------------------

// Select options created ------------------------------
function renderSelectOptions(arr, innerTag) {
  arr.map(item => {
    let elOption = document.createElement("option")
    elOption.setAttribute("value", item.id)
    elOption.textContent = item.name
    innerTag.appendChild(elOption)
  })
}
renderSelectOptions(countries, elSelect)
// Select options created ------------------------------

renderCountry(countries);

elSelect.addEventListener("change", function(evt) {
  const clickId = evt.target.value;
  if(clickId == 0) {
    renderCountry(countries)
  }
  else{
    const filteredArr = countries.filter(item => item.id == clickId)
    renderCountry(filteredArr)
  }
})

// Mode change start ---------------------------------
let elModeBtn = document.querySelector(".header__mode-btn")
elModeBtn.addEventListener("click", function(){
  document.body.classList.toggle("mode")
})
// Mode change end ---------------------------------

// Search input start -----------------------------
elInput.addEventListener("keyup", function(evt) {
   const inputVal = evt.target.value.trim();
   const data = countries.filter(item => item.name.toLowerCase().includes(inputVal.toLowerCase()) || item.population.split(",").join("").includes(inputVal));
   renderCountry(data)
})
// Search input end -------------------------------

// Like start ----------------------------------------
let elLikeCount = document.querySelector(".like-count")
let elCountWrapperBtn = document.querySelector(".header__heart-btn")
elLikeCount.textContent = countries.filter(item => item.isLike == true).length

function likeBtnClick(id) {
  countries.filter(item => item.id ==  id ? item.isLike = !item.isLike : "")
  elLikeCount.textContent = countries.filter(item => item.isLike == true).length
  renderCountry(countries)
  window.sessionStorage.setItem("countries", JSON.stringify(countries))
  
}
elCountWrapperBtn.addEventListener("click", function() {
  const countFilter = countries.filter(item => item.isLike == true)
  renderCountry(countFilter)
})
// Like end ------------------------------------------

// Basket count start --------------------------------
let elBasketCountBtn = document.querySelector(".header__basket-btn")
let countBasket = document.querySelector(".basket-count")
countBasket.textContent = countries.filter(item => item.isBasket == true).length

function BasketBtnClick(id) {
  countries.filter(item => item.id ==  id ? item.isBasket = !item.isBasket : "")
  countBasket.textContent = countries.filter(item => item.isBasket == true).length
  renderCountry(countries)
  window.sessionStorage.setItem("countries", JSON.stringify(countries))
  
}
elBasketCountBtn.addEventListener("click", function() {
  const countFilter = countries.filter(item => item.isBasket == true)
  renderCountry(countFilter)
})
// Basket count end ----------------------------------