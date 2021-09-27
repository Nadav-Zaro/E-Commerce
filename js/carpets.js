var carpetsList = document.getElementById("furnitures4")
var screenPic4 = document.getElementsByClassName("picHolder");
var pics4 = document.getElementsByClassName("cardPic");
var newOrder4 = {}
var carpList = []
var carpFur = {}

for (let i = 0; i < furnitures.length; i++) {
    var randomPriceLiving = Math.floor((Math.random() * 2000) + 1000);
    if (furnitures[i].category == "carpets") {
        for (let j = -1; j < carpList.length; j++) {
            carpFur = {
                id: furnitures[i].id,
                furName: furnitures[i].furName,
                price: randomPriceLiving,
                description: furnitures[i].description,
                category: furnitures[i].category,
                pictures: furnitures[i].pictures
            }
        } carpList.push(carpFur)
    }
}

console.log(carpList);


    for (let i = 0; i < carpList.length; i++) {
        carpetsList.innerHTML += `<div class="card">
    <div class="picHolder">
    <img class="cardPic firstPic" src="${carpList[i].pictures[0]}">
    <img class="cardPic secondPic" src="${carpList[i].pictures[1]}">
    </div>
    <div class="furInfo">
    <p style="text-align:center;"><i style="color:white;" style="height:100%;" class="fa fa-camera"></i> <button class="chnagePic5">1 </button>/ <button class="chnagePic6"> 2</button></p>
    <p style="text-align:center;font-weight: 600;">"${carpList[i].furName}"</p>
    <p class="cardText">Description: ${carpList[i].description}</p>
    <p class="cardText">Category: ${carpList[i].category}</p>
    <p class="cardText">Price: ${carpList[i].price}$</p>
    <button class="btn4" type="button"><i class="fa fa-shopping-cart"></i></button>
    </div>
    </div>`
    }


var firstPic = document.getElementsByClassName("firstPic");
var secondPic = document.getElementsByClassName("secondPic");
var chngePic5 = document.getElementsByClassName("chnagePic5");
var chngePic6 = document.getElementsByClassName("chnagePic6");

for (let i = 0; i < carpList.length; i++) {
    chngePic5[i].onclick = () => {
        firstPic[i].style.opacity = 1;
        secondPic[i].style.opacity = 0;
    }
    chngePic6[i].onclick = () => {
        firstPic[i].style.opacity = 0;
        secondPic[i].style.opacity = 1;
    }
}

var btn4 = document.getElementsByClassName("btn4");
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

for (let i = 0; i < carpList.length; i++) {
    btn4[i].onclick = () => {
        cartCounter.innerText++;
        newOrder4 = {
            id: carpList[i].id,
            furName: carpList[i].furName,
            price: carpList[i].price,
            description: carpList[i].description,
            category: carpList[i].category,
            pictures: carpList[i].pictures,
        }
        customerCart.push(newOrder4);
        cartPopFurs.innerHTML = "";
        cartPopFurs.style.overflow = "scroll";
        cartPopFurs.style.height = "70vh";
        cartPopFurs.style.borderLeft= "2px solid black";
        cartPopFurs.style.borderRight= "2px solid black";
        popCart();
        removeFromPopCart() 
    }
}
console.log(customerCart);

