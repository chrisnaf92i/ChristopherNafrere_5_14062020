// intégration des fonctions dans la boucle de base
(async function()
{
    // récupération de l'url
    let parameter = new URLSearchParams(window.location.search);

    // récupération de l'id dans l'url
    let teddy = await getTeddieInformation(parameter.get("id"))

    // appel de la fonction d'affichage de l'article a partir de l'id
    displayTeddyInformation(teddy)

    // appel de la fonction d'ajout de l'article au pannier
    addToPannier(teddy)
    setLoadingSpinner(teddy)
})()

function getTeddieInformation(id)
{
    // récupération de l'api a partir de l'id
    return fetch("http://localhost:3000/api/Teddies/" + id)
        .then(function(httpBodyResponse)
        {
            return httpBodyResponse.json()
        })
        .then(function(teddie)
        {
            return teddie
        })
        .catch(function(error)
        {
            alert(error)
        })
}

function displayTeddyInformation(_teddy)
{
    // récupération des élément qui compose la page
    let image = document.getElementById("teddieSolo__image")
    let name = document.getElementById("teddieSolo__text__nom")
    let description = document.getElementById("teddieSolo__text__description")
    let price = document.getElementById("teddieSolo__text__price")
    let colorSelect = document.getElementById("select-color")

    // modification des élément composant la page a partir des information de l'api
    image.setAttribute("src", _teddy.imageUrl)
    name.textContent = _teddy.name;
    description.textContent = _teddy.description;
    price.textContent = (_teddy.price/100) + " €";
    
    // ajout du selecteur de couleur
    _teddy.colors.forEach(function(_color, key)
    {
        console.log(key + " = " + _color)
        var opt = document.createElement("option")
        var opt = document.createElement("option")
        opt.innerHTML = _color
        colorSelect.appendChild(opt)
    });
}

// fonction d'ajout au pannier
function addToPannier(_teddy)
{
    // récupération du bouton d'ajout
    let btnAdd = document.getElementById("btnAddPannier");
    // création d'un faut pannier de la page
    let pannierTemporaire = []
    
    // récupération l'appui sur le bouton
    btnAdd.addEventListener("click", function()
    {
        /* // ajout de l'article au format json dans le pannier de la page
        pannierTemporaire.push(_teddie)

        // affichage du pannier de la page
        console.log(pannierTemporaire)

        // création d'une variable du site pour le panier générale avec la valeur du panier de la page
        localStorage.setItem("pannier", JSON.stringify(pannierTemporaire))

        alert("ajout au pannier")

        // teste de récupération du pannier
        let tabPannier = localStorage.pannier

        console.log(tabPannier) */

        pannierTemporaire = JSON.parse(localStorage.getItem("pannier"))
        pannierTemporaire.push(_teddy)

        console.log(pannierTemporaire)

        localStorage.pannier = JSON.stringify(pannierTemporaire)
        alert("Ajout de " + _teddy.name + " au pannier")
    })
}

function setLoadingSpinner(_teddy)
{
    let teddyName = document.getElementById("container-loading__name")

    teddyName.textContent = _teddy.name
    
}