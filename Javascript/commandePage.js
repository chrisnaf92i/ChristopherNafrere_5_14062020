main()

function main()
{
    let pannier = JSON.parse(localStorage.pannier)
    let displayTotalPrice = document.getElementById("totalPrice")
    let buttonSubmit = document.getElementById("btn-submit")
    let totalPrice = 0;
    let orderID = [];
    let orderResult;

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
    let contact = {
        firstName:"",
        lastName:"",
        city:"",
        address:"",
        email:""
    };

    let _firstName = document.getElementById("first-name");
    let _lastName = document.getElementById("last-name");
    let _city = document.getElementById("city");
    let _address = document.getElementById("address");
    let _email = document.getElementById("email");
    


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

function checkContact(orderDataContact)
{
    if(!orderDataContact.email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i))
    {
        alert("adresse email invalide")
        return false
    }

    if(!orderDataContact.firstName ||
       !orderDataContact.lastName || 
       !orderDataContact.address ||
       !orderDataContact.email)
    {
        alert("tout les champs ne sont pas rempli")
        return false
    }

    return true
}

function sendOrderData(orderDataContact, orderDataPannier)
{
    console.log("envoi de la commande\n\t- " + JSON.stringify(orderDataContact))

    let validContact = checkContact(orderDataContact)
    let promise;
    if(validContact)
    {
        
        let data = {contact:orderDataContact, products:orderDataPannier}
        
        promise = fetch("http://localhost:3000/api/teddies/order", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data) }) 

    }
    
    promise.then(async (response) => 
    {
        try
        {
            console.log(response)
            const content = await response.json()
            localStorage.resultOrder = JSON.stringify(content)
        }catch(err)
        {
            alert(err)
        }
    })

    window.open("../OrderResultPage.html")
    
}