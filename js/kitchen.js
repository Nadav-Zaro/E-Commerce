var kitchenList = document.getElementById("furnitures2")
var screenPic2 = document.getElementsByClassName("picHolder");
var pics2 = document.getElementsByClassName("cardPic");
var newOrder2 = {}
var kitList = []
var kitFur = {}

for (let i = 0; i < furnitures.length; i++) {
    var randomPriceLiving = Math.floor((Math.random() * 8000) + 9000);
    if (furnitures[i].category == "kitchens") {
        for (let j = -1; j < kitList.length; j++) {
            kitFur = {
                id: furnitures[i].id,
                furName: furnitures[i].furName,
                price: randomPriceLiving,
                description: furnitures[i].description,
                category: furnitures[i].category,
                pictures: furnitures[i].pictures
            }
        } kitList.push(kitFur)
    }
}

console.log(kitList);

for (let i = 0; i < kitList.length; i++) {
    kitchenList.innerHTML += `<div class="card">
    <div class="picHolder">
    <img class="cardPic firstPic" src="${kitList[i].pictures[0]}">
    <img class="cardPic secondPic" src="${kitList[i].pictures[1]}">
    </div>
    <div class="furInfo">
    <p style="text-align:center;"><i style="height:100%;" class="fa fa-camera"></i>  <button class="chnagePic1">1 </button>/ <button class="chnagePic2">2</button></p>
    <p style="text-align:center;font-weight: 600;">"${kitList[i].furName}"</p>
    <p class="cardText">Description: ${kitList[i].description}</p>
    <p class="cardText">Category: ${kitList[i].category}</p>
    <p class="cardText">Price: ${kitList[i].price}$</p>
    <button class="btn2" type="button"><i class="fa fa-shopping-cart"></i></button>
    </div>
    </div>`
}

var firstPic = document.getElementsByClassName("firstPic")
var secondPic = document.getElementsByClassName("secondPic")
var chngePic1 = document.getElementsByClassName("chnagePic1");
var chngePic2 = document.getElementsByClassName("chnagePic2");

for (let i = 0; i < kitList.length; i++) {
    chngePic1[i].onclick = () => {
        firstPic[i].style.opacity = 1;
        secondPic[i].style.opacity = 0;
    }
    chngePic2[i].onclick = () => {
        firstPic[i].style.opacity = 0;
        secondPic[i].style.opacity = 1;
    }
}

var btn2 = document.getElementsByClassName("btn2");
var cartPop = document.getElementById("cartPop");
var cartPopFurs = document.getElementById("cartPopFurs");
var cartCounter = document.getElementById("cartCounter");
var CartIcon = document.getElementById("CartIcon");

for (let i = 0; i < 3; i++) { cartPopFurs.innerHTML = "" }


function popCart() {
    for (let i = 0; i < customerCart.length; i++) {
        var randomPrice = Math.floor((Math.random() * 4000) + 6000);
        cartPopFurs.innerHTML += `
    <div class="cartPopItems" id="${customerCart[i].id}">
    <div class="cartImgHolder">
    <img class="cartImg" src="${customerCart[i].pictures[0]}">
    </div>
    <div class="cartfurInfo">
    <p>"${customerCart[i].furName}"</p>
    <p>category: ${customerCart[i].category}</p>
    <p>price: ${randomPrice}$</p>
    </div>
    <div class="cartRemove"><i class="fa fa-minus" onclick= "removeFromPopCart(${customerCart[i].id})"></i></div>
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

for (let i = 0; i < kitList.length; i++) {
    btn2[i].onclick = () => {
        cartCounter.innerText++;
        newOrder2 = {
            id: kitList[i].id,
            furName: kitList[i].furName,
            price: kitList[i].price,
            description: kitList[i].description,
            category: kitList[i].category,
            pictures: kitList[i].pictures,
        }
        customerCart.push(newOrder2);
        cartPopFurs.innerHTML = "";
        cartPopFurs.style.overflow = "scroll";
        cartPopFurs.style.height = "70vh";
        cartPopFurs.style.borderLeft = "2px solid rgba(65, 147, 224, 0.833)";
        cartPopFurs.style.borderRight = "2px solid rgba(65, 147, 224, 0.833)";
        popCart();
        removeFromPopCart();
    }
}
console.log(customerCart);



