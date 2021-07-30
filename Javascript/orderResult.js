// récupération des élément d'affichage 
let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let city = document.getElementById("city")
let address = document.getElementById("address")
let id = document.getElementById("id")
let listTeddies = document.getElementById("list-teddies")
let price = document.getElementById("price")
let totalPrice = 0

// récupérationd de la réponse de la commande
const resultOrder = JSON.parse(localStorage.resultOrder)

// récupération de l'objet contact
let contact = resultOrder.contact

// changement des élément d'affichage avec les valeur de l'objet contacte
firstName.textContent = contact.firstName
lastName.textContent = contact.lastName
address.textContent = contact.address
city.textContent = contact.city


// affichage du pannier
for (let i = 0; i<resultOrder.products.length; i++)
{
    let li = document.createElement("li")
    li.innerHTML = resultOrder.products[i].name
    listTeddies.appendChild(li)
}

// calcul du prix total
for (const teddie of resultOrder.products) {
    totalPrice += teddie.price
}

// affichage du prix en euro
price.textContent = totalPrice/100

// affichage de l'id de commande
id.textContent = resultOrder.orderId