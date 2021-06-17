main()

function main()
{
    for (const teddie of localStorage.pannier) {
        displayPannier(teddie)
        console.log(teddie)
    }
}

function displayPannier(_teddie)
{
    let template = document.getElementById("articlePanier");
    let cloneElt = document.importNode(template.content, true)

    cloneElt.getElementById("pannier__teddies__text__name").textContent = _teddie.name

    document.getElementById("pannier").appendChild(cloneElt)
}