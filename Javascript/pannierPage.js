main()
// intégration des fonctions dans la boucle de base
function main()
{

    // récupération des élément du panier
    let PannierResult = JSON.parse(localStorage.pannier)

    // affichage de la liste des résultat dans la console
    console.log(PannierResult)

    // affichage de la liste du pannier
    displayPannier(PannierResult)
}

function displayPannier(_teddie)
{
    // clonnage de l'élément du panier type
    let template = document.getElementById("articlePanier");
    let cloneElt = document.importNode(template.content, true)

    // intégration des valeurs
    cloneElt.getElementById("pannier__teddies__text__name").textContent = _teddie.name
    cloneElt.getElementById("pannier__teddies__text__description").textContent = _teddie.description
    cloneElt.getElementById("pannier__teddies__text__price").textContent = _teddie.price + " €"

    // ajout a l'interface de l'élément du pannier
    document.getElementById("pannier").appendChild(cloneElt)
}