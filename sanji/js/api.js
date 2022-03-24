document.addEventListener('DOMContentLoaded', main);

function main() {

}

function getInputRecipe() {
    let input = document.querySelector('input')
    const promesse = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=336d97609abb44efb102c4a66b61ddec&query=${input.value}`);

    promesse
        .then(returnRecipe)
        .catch(ajaxError);

    function returnRecipe(res) {
        let resultContainer = document.querySelector('.resultContainer');
        resultContainer.innerHTML=''
        res.data.results.forEach(plat => {
            let platName = plat.title;
            let platImage = plat.image;

            resultContainer.innerHTML += `
            <div class="listeRecettes">
                <div class="recette">
                    <img src="${platImage}" alt="${platName}">
                    <h2>${platName}</h2>
                </div>
            </div>
            `;
        })
    }
}

function getRandomRecipe() {
    let boutonRandom = document.querySelector('.randomButton')
    const promesseRandom = axios.get(`https://api.spoonacular.com/recipes/random?apiKey=336d97609abb44efb102c4a66b61ddec`);

    promesseRandom
        .then(returnRandomRecipe)
        .catch(ajaxError)
        let resultContainer = document.querySelector('.resultContainer');
        resultContainer.innerHTML = ''

        function returnRandomRecipe(res) {
            let nomPlat = res.data.recipes[0].title;
            let imagePlat = res.data.recipes[0].image;

            resultContainer.innerHTML += `
            <div class="listeRecettes">
                <div class="recette">
                    <img src="${imagePlat}" alt="${imagePlat}">
                    <h2>${nomPlat}</h2>
                </div>
            </div>
            `;
        }
}

function ajaxError(error) {
    console.log(`Erreur Ajax : ${error}`)
}