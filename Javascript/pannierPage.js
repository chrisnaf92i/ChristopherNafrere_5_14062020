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


    document.getElementById("pannier").appendChild(cloneElt)
}