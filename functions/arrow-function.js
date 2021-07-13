// arrow function
// many times we pass anyonmous function (  ) no paramters inside 
const addPack = (currentPack) => {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
        <li>Volume: ${currentPack.volume}</li>
        <li>Color: ${currentPack.volume}</li>
        <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
    `;
    return newArticle;
};