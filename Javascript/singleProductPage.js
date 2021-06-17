(async function()
{
    let parameter = new URLSearchParams(window.location.search);

    let teddie = await getTeddieInformation(parameter.get("id"))

    displayTeddieInformation(teddie)
    addToPannier(teddie)
    
})()

function getTeddieInformation(id)
{
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

function displayTeddieInformation(_teddie)
{

    console.log(_teddie)
    let image = document.getElementById("teddieSolo__image")
    let name = document.getElementById("teddieSolo__text__nom")
    let description = document.getElementById("teddieSolo__text__description")
    let price = document.getElementById("teddieSolo__text__price")
    let colorSelect = document.getElementById("select-color")

    image.setAttribute("src", _teddie.imageUrl)
    name.textContent = _teddie.name;
    description.textContent = _teddie.description;
    price.textContent = _teddie.price + " €";


    console.log(colorSelect)

}

function addToPannier(_teddie)
{
    let btnAdd = document.getElementById("btnAddPannier");
    let pannierTest = []
    btnAdd.addEventListener("click", function()
    {
        pannierTest.push(_teddie)

        console.log("ajout d'un nouvel ours")

        localStorage.setItem("pannier", pannierTest)
    })
}
