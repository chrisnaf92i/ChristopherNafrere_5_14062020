// création de la variable du pannier
if(!localStorage.pannier)
{
    localStorage.setItem("pannier", JSON.stringify([]))
    console.log(localStorage.pannier)
}