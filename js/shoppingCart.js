var customerCart = [
    {
        id: 1,
        furName: "Alfred",
        price: 2000,
        description: "most compfortable",
        category: "living-room",
        pictures: [
            "../images/id1.jpg",
            "../images/id11.jpg"
        ]
    },
    {
        id: 31,
        furName: "Dominik",
        price: 10000,
        description: "most astonishing",
        category: "kitchens",
        pictures: [
            "../images/id19.jpg",
            "../images/id191.jpg"
        ]
    },
    {
        id: 37,
        furName: "Lemon",
        price: 5000,
        description: "most spectacular",
        category: "dinette",
        pictures: [
            "../images/id37.jpg",
            "../images/id371.jpg"
        ]
    },
]

var sum = 0;
var table = document.getElementById("table")
var total = document.getElementById("total")

function shopList() {
    for (let i = 0; i < customerCart.length; i++) {
        sum += customerCart[i].price;
        table.innerHTML += `                
    <tr class="row" id="${customerCart[i].id}">
    <td class="item">
        <div class="furInfo">
            <div class="furImg">
                <img src="${customerCart[i].pictures[0]}">
            </div>
            <div class="furDetail">
                <h3>"${customerCart[i].furName}"</h3>
                <p>${customerCart[i].description}</p>
                <p>${customerCart[i].category}</p>
                <div class="options"> 
                    <select>
                        <option>Color</option>
                        <option>Black</option>
                        <option>White</option>
                        <option>Peach</option>
                    </select>
                    <select>
                        <option>Quantity</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select><br>
                </div><br>
                Remove: <button onclick= "deleteItem(${customerCart[i].id})" class="removeItem" type="button""><i class="fa fa-minus"></i></button>
            </div>
            <div class="furPrice"><h3>${customerCart[i].price}$</h3></div>
        </div>
    </td>
    </tr>`
    }
}
shopList()

const removeItem = document.getElementsByClassName("removeItem")
const deliver = document.getElementById("deliver")
const removeOrders = document.getElementById("removeOrders")
const row = document.getElementsByClassName("row")
const item = document.getElementsByClassName("item")
const cartHeader = document.getElementById("cartHeader")
const summary = document.getElementById("summary")
const summary2 = document.getElementById("summary2")
const totalItems = document.getElementById("totalItems")

summary.innerText = `${sum}$`;
totalItems.innerText = `${customerCart.length}`;
summary2.innerText = `${sum + 150}$`;
const submit = document.getElementById("submit");
const orderSent = document.getElementById("orderSent");

submit.onclick = () => {
    orderSent.style.visibility = "visible";
    orderSent.style.transform = "scale(1)";
    setTimeout(() => {
        orderSent.style.visibility = "hidden";
        orderSent.style.transform = "scale(.1)";
    }, 1500);
}

function deleteItem(id) {
    for (let i = 0; i < customerCart.length; i++) {
        if (customerCart[i].id == id) {
            customerCart.splice(i, 1);
            document.getElementById(id).innerHTML = "";
            let sum2 = itemSum()
            summary.innerText = `${sum2}$`;
            summary2.innerText = `${sum2 + 150}$`;
            totalItems.innerText = `${customerCart.length}`;
            console.log(customerCart);
        }
    }
}

function itemSum() {
    let sum2 = 0;
    for (let i = 0; i < customerCart.length; i++) {
        sum2 += customerCart[i].price;
    }
    return sum2;
}

var queryBtn = document.getElementById("queryBtn");
var queryLinks = document.getElementById("queryLinks");
var closeNav = document.getElementById("closeNav");

queryBtn.addEventListener("mouseenter", () => { queryLinks.style.visibility = "visible" })

closeNav.addEventListener("click", () => { queryLinks.style.visibility = "hidden" })

for (let i = 0; i < row.length; i++) {
    removeOrders.onclick = () => {
        row[0].innerText = "";
        row[1].innerText = "";
        row[2].innerText = "";
        sum = 0;
        cusLength = 0;
        summary.innerText = sum + "$";
        summary2.innerText = sum + 150 + "$";
        totalItems.innerText = cusLength;
        customerCart = [];
        console.log(customerCart);
    }
}

const exitForm = document.getElementById("exitForm")

deliver.onclick = () => {
    formContainer.style.visibility = "visible"
    formContainer.style.zIndex = "1"
}

exitForm.onclick = () => {
    formContainer.style.visibility = "hidden"
}

function removeFromPopCart(id) {
    for (let i = 0; i < customerCart.length; i++) {
        if (customerCart[i].id == id) {
            customerCart.splice(i, 1);
            document.getElementById(id).innerHTML = "";
            cartPopItems[i].style.borderTop = "0px";
            cartCounter.innerText = customerCart.length;
        }
    }
}

var topSales1 = [
    {
        id: 3,
        furName: "Bellevue",
        price: 2600,
        description: "most compfortable",
        category: "living-room",
        pictures: [
            "../images/id31.jpg",
            "../images/id3.jpg"
        ]
    },
    {
        id: 22,
        furName: "Maru",
        price: 15000,
        description: "most astonishing",
        category: "kitchens",
        pictures: [
            "../images/id196.jpg",
            "../images/id197.jpg"
        ]
    },
    {
        id: 38,
        furName: "Grizzly",
        price: 4500,
        description: "most spectacular",
        category: "dinette",
        pictures: [
            "../images/id372.jpg",
            "../images/id373.jpg"
        ]
    },
    {
        id: 57,
        furName: "Riri",
        price: 70000,
        description: "most serene",
        category: "carpets",
        pictures: [
            "../images/id554.jpg",
            "../images/id555.jpg"
        ]
    },
]

const topSalesCon = document.getElementById("topSalesCon");
var salesNum = 1;

for (let i = 0; i < topSales1.length; i++) {
    topSalesCon.innerHTML += `  <div class="topFur" id="${topSales1[i].id}"><p style="width: 3%;">${salesNum++}</p>
    <img src="${topSales1[i].pictures[0]}" style="width: 35%;height: 100%;">
    <p style="width: 25%;height: 100%;">"${topSales1[i].furName}"</p>
    <p style="width: 20%;height: 100%;">${topSales1[i].price}$</p>
    <buttom type="button" onclick= "topSalesToCart(${topSales1[i].id})" style="width: 10%;height: 100%;cursor:pointer;"><i class="fa fa-plus" style="text-align:center;"></i></button></div>`
}

function topSalesToCart(id) {
    for (let i = 0; i < topSales1.length; i++) {
        if (topSales1[i].id == id) {
            customerCart.push(topSales1[i]);
            console.log(customerCart);
            table.innerHTML = "";
            shopList();
        }
    }
}


