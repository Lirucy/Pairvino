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
  "white_wine",
  "dry_white_wine",
  "assyrtiko",
  "pinot_blanc",
  "cortese",
  "roussanne",
  "moschofilero",
  "muscadet",
  "viognier",
  "verdicchio",
  "greco",
  "marsanne",
  "white_burgundy",
  "chardonnay",
  "gruener_veltliner",
  "white_rioja",
  "frascati",
  "gavi",
  "l_acadie_blanc",
  "trebbiano",
  "sauvignon_blanc",
  "catarratto",
  "albarino",
  "arneis",
  "verdejo",
  "vermentino",
  "soave",
  "pinot_grigio",
  "dry_riesling",
  "torrontes",
  "mueller_thurgau",
  "grechetto",
  "gewurztraminer",
  "chenin_blanc",
  "white_bordeaux",
  "semillon",
  "riesling",
  "sauternes",
  "sylvaner",
  "lillet_blanc",
  "red_wine",
  "dry_red_wine",
  "petite_sirah",
  "zweigelt",
  "baco_noir",
  "bonarda",
  "cabernet_franc",
  "bairrada",
  "barbera_wine",
  "primitivo",
  "pinot_noir",
  "nebbiolo",
  "dolcetto",
  "tannat",
  "negroamaro",
  "red_burgundy",
  "corvina",
  "rioja",
  "cotes_du_rhone",
  "grenache",
  "malbec",
  "zinfandel",
  "sangiovese",
  "carignan",
  "carmenere",
  "cesanese",
  "cabernet_sauvignon",
  "aglianico",
  "tempranillo",
  "shiraz",
  "mourvedre",
  "merlot",
  "nero_d_avola",
  "bordeaux",
  "marsala",
  "port",
  "gamay",
  "dornfelder",
  "concord_wine",
  "sparkling_red_wine",
  "pinotage",
  "agiorgitiko",
  "dessert_wine",
  "pedro_ximenez",
  "moscato",
  "late_harvest",
  "ice_wine",
  "white_port",
  "lambrusco_dolce",
  "madeira",
  "banyuls",
  "vin_santo",
  "port",
  "rose_wine",
  "sparkling_rose",
  "sparkling_wine",
  "cava",
  "cremant",
  "champagne",
  "prosecco",
  "spumante",
  "sparkling_rose",
  "sherry",
  "cream_sherry",
  "dry_sherry",
  "vermouth",
  "dry_vermouth",
  "fruit_wine",
  "mead",
];
// console.log(wineList);

const foodData = document.querySelector("#food-data");
const dropdownList = document.querySelector("#dropdown");

const fetchFoodData = async (wineParam) => {
  try {
    const foodCallUrl = `https://api.spoonacular.com/food/wine/dishes?apiKey=0f106abf85fb4610af9663136788962f&wine=${wineParam}`;

    const foodResponse = await axios.get(foodCallUrl);
    const foodPairDescript = foodResponse.data.text;
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
  const input = document.querySelector("option");
  foodData.innerHTML = "";
  fetchFoodData(input.value);
};

dropdownList.addEventListener("change", wineChoiceHandler);
