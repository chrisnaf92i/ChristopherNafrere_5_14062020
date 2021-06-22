main()

function main()
{
    let pannier = JSON.parse(localStorage.pannier)
    let displayTotalPrice = document.getElementById("totalPrice")
    let totalPrice = 0;
    for (const teddie of pannier) {
        displayPannier(teddie)
        totalPrice += teddie.price;
    }
    if(totalPrice != 0)
    {
        displayTotalPrice.textContent = "prix : " + totalPrice + " €"

    }
    else
    {
        displayTotalPrice.textContent = "prix : 0 €"

    }
}

function displayPannier(_teddie)
{
    console.log(_teddie)
    let template = document.getElementById("articlePannierCommand")
    let cloneElt = document.importNode(template.content, true)

    cloneElt.getElementById("PannierResult__teddies__left__nom").textContent = _teddie.name
    cloneElt.getElementById("PannierResult__teddies__left__description").textContent = _teddie.description
    cloneElt.getElementById("PannierResult__teddies__price").textContent = _teddie.price + "€"


    document.getElementById("PannierResult").appendChild(cloneElt)
}