

const fetchData = async (foodParam) => {
    try {
        const url = `https://api.spoonacular.com/food/wine/pairing?apiKey=0f106abf85fb4610af9663136788962f&food=${foodParam}`;
        const response = await axios.get(url);
        const pairInfo = response.data;
        const pairDescript = pairInfo.pairingText;
        const wineImage = pairInfo.productMatches[0].imageUrl;
        // console.log(wineImage);
        renderData(pairDescript, wineImage);

    }catch (error) {
        console.error(error);
    }

} 
// fetchData('lamb');


const renderData = (pairDescript, wineImage) => {

    const wineData = document.querySelector('#wine-data');

    const pairDescriptEl = document.createElement('p');
    pairDescriptEl.innerText = pairDescript;
    wineData.append(pairDescriptEl);

    const wineImg = document.createElement('img');
    wineImg.src = wineImage;
    wineData.append(wineImg);
} 


const submitHandler = (event) => {
    event.preventDefault();
    const inputValue = document.querySelector('#wine-search').value;
    fetchData(inputValue);
}

const form = document.querySelector('form');

form.addEventListener('submit', submitHandler);