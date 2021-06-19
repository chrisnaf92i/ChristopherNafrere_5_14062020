
(async function()
    {
        const teddies = await getTeddies()

        for (const teddie of teddies) {
            displayTeddies(teddie)
        }
        openDetailPage(teddies)


    }
)()


function getTeddies()
{
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

function displayTeddies(teddie)
{
    const template = document.getElementById("TemplateTeddie")
    const cloneElt = document.importNode(template.content, true)

    cloneElt.getElementById("teddie__image").setAttribute("src", teddie.imageUrl)

    cloneElt.getElementById("teddie__text__title").textContent = teddie.name
    cloneElt.getElementById("teddie__text__description").textContent = teddie.description
    cloneElt.getElementById("teddie__text__price").textContent = teddie.price + "€"


    document.getElementById("mainAllTeddies").appendChild(cloneElt)
    
}

function openDetailPage(_teddie)
{
    let peluche = document.getElementsByClassName("teddie")

    for (let i = 0; i < peluche.length; i++) {
        peluche[i].addEventListener("click", function()
        {
            window.open("../product.html?id=" + _teddie[i]._id, "__blank")
        })
    }
    

}
