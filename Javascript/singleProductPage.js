(function()
{
    let paramet = new URLSearchParams(window.location.search);
    console.log(paramet.get("id"))
    addToPannier()
})()

function addToPannier()
{
    let btnAdd = document.getElementById("btnAddPannier");
    console.log(localStorage.pannier)
    btnAdd.addEventListener("click", function()
    {
        alert("Teddie Ajouter au panier")
    })
}
