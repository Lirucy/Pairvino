const fetchWineData = async (foodParam) => {
  try {
    const wineCallUrl = `https://api.spoonacular.com/food/wine/pairing?apiKey=0f106abf85fb4610af9663136788962f&food=${foodParam}`;
    const wineResponse = await axios.get(wineCallUrl);
    const winePairInfo = wineResponse.data;
    const winePairDescript = winePairInfo.pairingText;
    // const wineImage = pairInfo.productMatches[0].imageUrl;
    // console.log(wineImage);
    renderWineData(winePairDescript);
  } catch (error) {
    console.error(error);
  }
};
// fetchData('lamb');

const renderWineData = (WinePairDescript) => {
  const wineData = document.querySelector("#wine-data");

  const pairDescriptEl = document.createElement("p");
  pairDescriptEl.innerText = WinePairDescript;
  wineData.append(pairDescriptEl);
  // const wineImg = document.createElement('img');
  // wineImg.src = wineImage;
  // wineData.append(wineImg);
};
// fetchData(wineData.value);

const submitHandler = (event) => {
  event.preventDefault();
  const wineData = document.querySelector("#wine-data");
  const input = document.querySelector("#wine-search");
  wineData.innerHTML = "";
  fetchWineData(input.value);
  input.value = "";
};

const getWine = document.querySelector("#dish-form");

getWine.addEventListener("submit", submitHandler);

//Get pairing dish app below
const wineList = [
  "agiorgitiko",
  "aglianico",
  "albarino",
  "arneis",
  "assyrtiko",
  "baco_noir",
  "bairrada",
  "banyuls",
  "barbera_wine",
  "bonarda",
  "bordeaux",
  "cabernet_franc",
  "cabernet_sauvignon",
  "carignan",
  "carmenere",
  "catarratto",
  "cava",
  "cesanese",
  "champagne",
  "chardonnay",
  "chenin_blanc",
  "chianti",
  "concord_wine",
  "cortese",
  "corvina",
  "cotes_du_rhone",
  "cream_sherry",
  "cremant",
  "dessert_wine",
  "dolcetto",
  "dornfelder",
  "dry_red_wine",
  "dry_riesling",
  "dry_sherry",
  "dry_vermouth",
  "dry_white_wine",
  "frascati",
  "fruit_wine",
  "gamay",
  "gavi",
  "gewurztraminer",
  "grechetto",
  "greco",
  "grenache",
  "gruener_veltliner",
  "ice_wine",
  "l_acadie_blanc",
  "lambrusco_dolce",
  "late_harvest",
  "lillet_blanc",
  "madeira",
  "malbec",
  "marsala",
  "marsanne",
  "mead",
  "merlot",
  "moscato",
  "moschofilero",
  "mourvedre",
  "mueller_thurgau",
  "muscadet",
  "nebbiolo",
  "negroamaro",
  "nero_d_avola",
  "pedro_ximenez",
  "petite_sirah",
  "pinot_blanc",
  "pinot_grigio",
  "pinot_noir",
  "pinotage",
  "port",
  "port",
  "primitivo",
  "prosecco",
  "red_burgundy",
  "red_wine",
  "riesling",
  "rioja",
  "rose_wine",
  "roussanne",
  "sangiovese",
  "sauternes",
  "sauvignon_blanc",
  "semillon",
  "sherry",
  "shiraz",
  "soave",
  "sparkling_red_wine",
  "sparkling_rose",
  "sparkling_rose",
  "sparkling_wine",
  "spumante",
  "sylvaner",
  "tannat",
  "tempranillo",
  "torrontes",
  "trebbiano",
  "verdejo",
  "verdicchio",
  "vermentino",
  "vermouth",
  "vin_santo",
  "viognier",
  "white_bordeaux",
  "white_burgundy",
  "white_port",
  "white_rioja",
  "white_wine",
  "zinfandel",
  "zweigelt",
];
// console.log(wineList);

const foodData = document.querySelector("#food-data");
const dropdownList = document.querySelector("#dropdown");

const fetchFoodData = async (wineParam) => {
  try {
    const foodCallUrl = `https://api.spoonacular.com/food/wine/dishes?apiKey=0f106abf85fb4610af9663136788962f&wine=${wineParam}`;

    const foodResponse = await axios.get(foodCallUrl);
    const foodPairDescript =
      foodResponse.data.text || foodResponse.data.message;
    renderFoodData(foodPairDescript);
  } catch (error) {
    console.error(error);
  }
};
// fetchFoodData("chianti");

// const getWines =

wineList.forEach((wine) => {
  const dropdownChoice = document.createElement("option");
  dropdownChoice.value = wine;
  dropdownChoice.innerText = wine;
  dropdownList.append(dropdownChoice);
});

const renderFoodData = (foodPairDescript) => {
  const foodData = document.querySelector("#food-data");
  const pairDescriptEl = document.createElement("p");
  pairDescriptEl.innerText = foodPairDescript;
  foodData.append(pairDescriptEl);
};

const wineChoiceHandler = (event) => {
  event.preventDefault();
  const foodData = document.querySelector("#food-data");
  const input = document.querySelector("select");
  foodData.innerHTML = "";
  fetchFoodData(input.value);
};

dropdownList.addEventListener("change", wineChoiceHandler);

const emailSubmit = document.querySelector("#email-form");

emailSubmit.addEventListener("submit", function () {
  alert("Thanks for being part of our Wine of the Month Club!");
});
