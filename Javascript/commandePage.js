main()

function main()
{
    let pannier = JSON.parse(localStorage.pannier)
    let displayTotalPrice = document.getElementById("totalPrice")
    let buttonSubmit = document.getElementById("btn-submit")
    let totalPrice = 0;
    let orderID = [];

    for (const teddie of pannier) {
        displayPannier(teddie)
        totalPrice += teddie.price;
        orderID.push(teddie._id);
    }

    console.log(orderID)
    if(totalPrice != 0)
    {
        displayTotalPrice.textContent = "Prix : " + (totalPrice/100) + " €"

    }
    /* récupération et envoi des donné de l'objet contact vers l'input hidden */
    let contact = getInfo()

    console.log(contact)

    displayOrderInfo(orderID, contact)

    buttonSubmit.addEventListener("click", () => 
    {
        sendOrderData(contact, orderID)
        
    })
    
}

function displayPannier(_teddie)
{
    let template = document.getElementById("articlePannierCommand")
    let cloneElt = document.importNode(template.content, true)

    cloneElt.getElementById("PannierResult__teddies__left__nom").textContent = _teddie.name
    cloneElt.getElementById("PannierResult__teddies__left__description").textContent = _teddie.description
    cloneElt.getElementById("PannierResult__teddies__price").textContent = (_teddie.price/100) + " €"

    document.getElementById("PannierResult").appendChild(cloneElt)
}
/* envoi du pannier et du formulaire de contact */
function displayOrderInfo(ordersID, contactInfo)
{

    console.log(ordersID);
    console.log(contactInfo);
}
/* récupération et application des information du site du formulaire  */
function getInfo()
{
    let _firstName = document.getElementById("firstName");
    let _lastName = document.getElementById("lastName");
    let _city = document.getElementById("city");
    let _address = document.getElementById("address");
    let _email = document.getElementById("email");
    
    let contact = {
        firstName,
        lastName,
        address,
        city,
        email
    }

    _firstName.addEventListener("input", function(e)
    {
        contact.firstName = _firstName.value
        console.log(contact)
    });

    _lastName.addEventListener("input", function(e)
    {
        contact.lastName = _lastName.value
        console.log(contact)
    });

    _address.addEventListener("input", function(e)
    {
        contact.address = _address.value
        console.log(contact)
    });

    _city.addEventListener("input", function(e)
    {
        contact.city = _city.value
        console.log(contact)
    });

    _email.addEventListener("input", function(e)
    {
        contact.email = _email.value
        console.log(contact)
    });

    return contact
}

function sendOrderData(orderDataContact, orderDataPannier)
{
    console.log("envoi de la commande\n\t- " + JSON.stringify(orderDataContact))
    console.log(orderDataContact)
    let data = {contact:orderDataContact, products:orderDataPannier}
    console.log(data)
    
    const response = fetch("http://localhost:3000/api/teddies/order", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data) })
    console.log(response)
    return response
}