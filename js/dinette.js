var dinetteList = document.getElementById("furnitures3")
var screenPic3 = document.getElementsByClassName("picHolder");
var pics3 = document.getElementsByClassName("cardPic");
var newOrder3 = {}
var dinList = []
var dinFur = {}

for (let i = 0; i < furnitures.length; i++) {
    var randomPriceLiving = Math.floor((Math.random() * 4000) + 4000);
    if (furnitures[i].category == "dinette") {
        for (let j = -1; j < dinList.length; j++) {
            dinFur = {
                id: furnitures[i].id,
                furName: furnitures[i].furName,
                price: randomPriceLiving,
                description: furnitures[i].description,
                category: furnitures[i].category,
                pictures: furnitures[i].pictures
            }
        } dinList.push(dinFur)
    }
}

console.log(dinList);

for (let i = 0; i < dinList.length; i++) {
    dinetteList.innerHTML += `<div class="card">
    <div class="picHolder">
    <img class="cardPic firstPic" src="${dinList[i].pictures[0]}">
    <img class="cardPic secondPic" src="${dinList[i].pictures[1]}">
    </div>
    <div class="furInfo">
    <p style="text-align:center;"><i style="height:100%;" class="fa fa-camera"></i>  <button class="chnagePic3">1 </button>/ <button class="chnagePic4">2</button></p>
    <p style="text-align:center;font-weight: 600;">"${dinList[i].furName}"</p>
    <p class="cardText">Description: ${dinList[i].description}</p>
    <p class="cardText">Category: ${dinList[i].category}</p>
    <p class="cardText">Price: ${dinList[i].price}$</p>
    <button class="btn3" type="button"><i class="fa fa-shopping-cart"></i></button>
    </div>
    </div>`
}

var firstPic = document.getElementsByClassName("firstPic");
var secondPic = document.getElementsByClassName("secondPic");
var chngePic3 = document.getElementsByClassName("chnagePic3");
var chngePic4 = document.getElementsByClassName("chnagePic4");

for (let i = 0; i < dinList.length; i++) {
    chngePic3[i].onclick = () => {
        firstPic[i].style.opacity = 1;
        secondPic[i].style.opacity = 0;
    }
    chngePic4[i].onclick = () => {
        firstPic[i].style.opacity = 0;
        secondPic[i].style.opacity = 1;
    }
}

var btn3 = document.getElementsByClassName("btn3");
var cartPop = document.getElementById("cartPop");
var cartPopFurs = document.getElementById("cartPopFurs");
var cartCounter = document.getElementById("cartCounter");
var CartIcon = document.getElementById("CartIcon");

for (let i = 0; i < 3; i++) { cartPopFurs.innerHTML = "" }

function popCart() {
    for (let i = 0; i < customerCart.length; i++) {
        var randomPrice = Math.floor((Math.random() * 4000) + 6000);
        cartPopFurs.innerHTML += `
        <div class="cartPopItems">
        <div class="cartImgHolder">
        <img class="cartImg" src="${customerCart[i].pictures[0]}">
        </div>
        <div class="cartfurInfo">
        <p>"${customerCart[i].furName}"</p>
        <p>category: ${customerCart[i].category}</p>
        <p>price: ${randomPrice}$</p>
        </div>
        <div class="cartRemove"><i class="fa fa-minus"></i></div>
        </div>`
    }
}
popCart()

var exitCart = document.getElementById("exitCart");
var cartRemove = document.getElementsByClassName("cartRemove");
var cartPopItems = document.getElementsByClassName("cartPopItems");
var card = document.getElementsByClassName("card");
var queryBtn = document.getElementById("queryBtn");
var queryLinks = document.getElementById("queryLinks");
var closeNav = document.getElementById("closeNav");

queryBtn.addEventListener("mouseenter",()=>{queryLinks.style.visibility = "visible"})
closeNav.addEventListener("click",()=>{queryLinks.style.visibility = "hidden"})

CartIcon.onclick = () => {
    cartPop.style.visibility = "visible";
    for (let i = 0; i < card.length; i++) {
        card[i].style.zIndex = "-1";
    }
};

exitCart.onclick = () => {
    cartPop.style.visibility = "hidden";
    for (let i = 0; i < card.length; i++) {
        card[i].style.zIndex = "0";
    }
};

function removeFromPopCart() {
    for (let i = 0; i < cartPopItems.length; i++) {
        cartRemove[i].onclick = () => {
            cartPopItems[i].innerHTML = "";
            cartPopItems[i].style.borderTop = "0px";
            cartCounter.innerText--;
        }
    }
}
removeFromPopCart()

for (let i = 0; i < dinList.length; i++) {
    btn3[i].onclick = () => {
        cartCounter.innerText++;
        newOrder3 = {
            id: dinList[i].id,
            furName: dinList[i].furName,
            price: dinList[i].price,
            description: dinList[i].description,
            category: dinList[i].category,
            pictures: dinList[i].pictures,
        }
        customerCart.push(newOrder3);
        cartPopFurs.innerHTML = "";
        cartPopFurs.style.overflow = "scroll";
        cartPopFurs.style.height = "70vh";
        cartPopFurs.style.borderLeft = "2px solid white";
        cartPopFurs.style.borderRight = "2px solid white";
        popCart();
        removeFromPopCart()
    }
}
console.log(customerCart);

