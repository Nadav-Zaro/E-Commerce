var livingList = document.getElementById("furnitures")
var screenPic = document.getElementsByClassName("picHolder");
var pics = document.getElementsByClassName("cardPic");
var newOrder = {}
var livingRoomList = []
var livingFur = {}

for (let i = 0; i < furnitures.length; i++) {
    var randomPriceLiving = Math.floor((Math.random() * 4000) + 6000);
    if (furnitures[i].category == "living-room") {
        for (let j = -1; j < livingRoomList.length; j++) {
            livingFur = {
                id: furnitures[i].id,
                furName: furnitures[i].furName,
                price: randomPriceLiving,
                description: furnitures[i].description,
                category: furnitures[i].category,
                pictures: furnitures[i].pictures
            }
        } livingRoomList.push(livingFur)
    }
}

console.log(livingRoomList);

for (let i = 0; i < livingRoomList.length; i++) {
    livingList.innerHTML += `<div class="card">
    <div class="picHolder">
    <img class="cardPic firstPic" src="${livingRoomList[i].pictures[0]}">
    <img class="cardPic secondPic" src="${livingRoomList[i].pictures[1]}">
    </div>
    <div class="furInfo">
    <p style="text-align:center;"><i style="height:100%;" class="fa fa-camera"></i>  <button class="chnagePic">1 </button>/ <button class="chnagePic0">2</button></p>
    <p style="text-align:center;font-weight: 600;">"${livingRoomList[i].furName}"</p>
    <p class="cardText">Description: ${livingRoomList[i].description}</p>
    <p class="cardText">Category: ${livingRoomList[i].category}</p>
    <p class="cardText">Price: ${livingRoomList[i].price}$</p>
    <button class="btn" type="button"><i class="fa fa-shopping-cart"></i></button>
    </div>
    </div>`
}

var firstPic = document.getElementsByClassName("firstPic")
var secondPic = document.getElementsByClassName("secondPic")
var chngePic = document.getElementsByClassName("chnagePic");
var chngePic0 = document.getElementsByClassName("chnagePic0");

for (let i = 0; i < livingRoomList.length; i++) {
    chngePic[i].onclick = () => {
        firstPic[i].style.opacity = 1;
        secondPic[i].style.opacity = 0;
    }
    chngePic0[i].onclick = () => {
        firstPic[i].style.opacity = 0;
        secondPic[i].style.opacity = 1;
    }
}

var btn = document.getElementsByClassName("btn");
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

for (let i = 0; i < livingRoomList.length; i++) {
    btn[i].onclick = () => {
        cartCounter.innerText++;
        newOrder = {
            id: livingRoomList[i].id,
            furName: livingRoomList[i].furName,
            price: livingRoomList[i].price,
            description: livingRoomList[i].description,
            category: livingRoomList[i].category,
            pictures: livingRoomList[i].pictures,
        }
        customerCart.push(newOrder);
        cartPopFurs.innerHTML = "";
        cartPopFurs.style.overflow = "scroll";
        cartPopFurs.style.height = "70vh";
        cartPopFurs.style.borderLeft = "2px solid rgba(65, 224, 113, 0.833)";
        cartPopFurs.style.borderRight = "2px solid rgba(65, 224, 113, 0.833)";
        popCart();
        removeFromPopCart();
    }

}
console.log(customerCart);