if(!localStorage.pannier)
{
    console.log("nulle")
    localStorage.setItem("pannier", JSON.stringify([]))
    console.log(localStorage.pannier)
}