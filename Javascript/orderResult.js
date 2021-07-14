let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let city = document.getElementById("city")
let address = document.getElementById("address")
let id = document.getElementById("id")
let listTeddies = document.getElementById("list-teddies")
let price = document.getElementById("price")
let totalPrice = 0


const resultOrder = JSON.parse(localStorage.resultOrder)

let contact = resultOrder.contact

firstName.textContent = contact.firstName
lastName.textContent = contact.lastName
address.textContent = contact.address
city.textContent = contact.city

for (let i = 0; i<resultOrder.products.length; i++)
{
    let li = document.createElement("li")
    li.innerHTML = resultOrder.products[i].name
    listTeddies.appendChild(li)
}

for (const teddie of resultOrder.products) {
    totalPrice += teddie.price
}

price.textContent = totalPrice/100

id.textContent = resultOrder.orderId