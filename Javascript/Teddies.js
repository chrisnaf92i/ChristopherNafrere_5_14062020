// intégration des fonctions dans la boucle de base
(async function()
    {
        // appelle de la fonction de récupération de l'api
        const teddies = await getTeddies()

        // affichage des articles
        for (const teddie of teddies) {
            displayTeddies(teddie)
        }

        // appel de la fonction d'ouverture de l'api 
        openDetailPage(teddies)


    }
)()


function getTeddies()
{
    // récupération de l'api
    return fetch("http://localhost:3000/api/teddies")
        .then(function(httpBodyResponse)
        {
            return httpBodyResponse.json()
        })
        .then(function(teddies)
        {
            return teddies
        })
        .catch(function(error)
        {
            alert(error)
        })
}

function displayTeddies(_teddie)
{
    // clone de l'élément type d'article
    const template = document.getElementById("TemplateTeddie")
    const cloneElt = document.importNode(template.content, true)

    // affichage des valeurs des article a partir de l'api
    cloneElt.getElementById("teddie__image").setAttribute("src", _teddie.imageUrl)

    cloneElt.getElementById("teddie__text__title").textContent = _teddie.name
    cloneElt.getElementById("teddie__text__description").textContent = _teddie.description
    cloneElt.getElementById("teddie__text__price").textContent = (_teddie.price/100) + " €"

    // ajout de l'article l'interface
    document.getElementById("mainAllTeddies").appendChild(cloneElt)
    
}

function openDetailPage(_teddie)
{
    // récupération des articles
    let peluche = document.getElementsByClassName("teddie")

    // récupéré le clique sur chaqu'un des articles
    for (let i = 0; i < peluche.length; i++) {
        peluche[i].addEventListener("click", function()
        {
            // ouverture de la page de détail des articles et ajout de l'id de l'article a l'url
            window.open("../product.html?id=" + _teddie[i]._id, "__blank")
        })
    }
}
