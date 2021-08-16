  
const smallPlusBtn = document.querySelector(".plusBtn.small");
const mediumPlusBtn = document.querySelector(".plusBtn.medium");
const largePlusBtn = document.querySelector(".plusBtn.large");

const smallPlusBtnBuy = document.querySelector(".plusBtn.small.buy");
const mediumPlusBtnBuy = document.querySelector(".plusBtn.medium.buy");
const largePlusBtnBuy = document.querySelector(".plusBtn.large.buy");

const smallMinusBtn = document.querySelector(".minusBtn.small");
const mediumMinusBtn = document.querySelector(".minusBtn.medium");
const largeMinusBtn = document.querySelector(".minusBtn.large");

const smallPizzaQuantity = document.querySelector(".smallPizzaQuantity");
const mediumPizzaQuantity = document.querySelector(".mediumPizzaQuantity");
const largePizzaQuantity= document.querySelector(".largePizzaQuantity");

const smallPizzaTotal = document.querySelector(".smallPizzaTotal");
const mediumPizzaTotal = document.querySelector(".mediumPizzaTotal");
const largePizzaTotal = document.querySelector(".largePizzaTotal");
const cartTotal = document.querySelector(".cartTotal");

const checkOut = document.querySelector(".checkOut");

const payOut = document.querySelector(".payOut");
const message = document.querySelector(".message");
const payAmt = document.querySelector(".payAmt");
const payBtn = document.querySelector(".payBtn");

const containerBox = document.querySelector(".containerBox");
const closeBtn = document.querySelector(".close");

var width = screen.availWidth;
var height = screen.availHeight;

containerBox.style.width = width + 'px';
containerBox.style.height = height + 'px';
containerBox.style.paddingTop = height*1/3 + 'px';

var smallQuantity = 0;
var mediumQuantity = 0;
var largeQuantity= 0;
var totalCart = 0;

function BtnClick() {
    if (event.target.className == "plusBtn small" ||
     event.target.className == "plusBtn small buy") {
        smallQuantity++;
        smallPizzaQuantity.innerHTML = smallQuantity;
    } else if (event.target.className == "plusBtn medium" ||
     event.target.className == "plusBtn medium buy") {
        mediumQuantity++;
        mediumPizzaQuantity.innerHTML = mediumQuantity;
    } else if (event.target.className == "plusBtn large" ||
     event.target.className == "plusBtn large buy") {
        largeQuantity++;
        largePizzaQuantity.innerHTML = largeQuantity;
    }

    if (event.target.className === "minusBtn small") {
        smallQuantity--;
        if (smallQuantity < 0) {
            smallQuantity = 0;
        }
        smallPizzaQuantity.innerHTML = smallQuantity;
    } else if (event.target.className === "minusBtn medium") {
        mediumQuantity--;
        if (mediumQuantity < 0) {
            mediumQuantity = 0;
        }
        mediumPizzaQuantity.innerHTML = mediumQuantity;
    } else if (event.target.className === "minusBtn large") {
        largeQuantity--;
        if (largeQuantity < 0) {
            largeQuantity = 0;
        }
        largePizzaQuantity.innerHTML = largeQuantity;
    }

    smallPizzaTotal.innerHTML = (smallQuantity * 49).toFixed(2);
    mediumPizzaTotal.innerHTML = (mediumQuantity * 89).toFixed(2);
    largePizzaTotal.innerHTML = (largeQuantity * 129).toFixed(2);
    totalCart = smallQuantity * 49.00 + mediumQuantity * 89.00 + largeQuantity * 129.00;
    cartTotal.innerHTML = totalCart.toFixed(2);

    if (totalCart > 0) {
        checkOut.classList.remove('hidden');
    } else {
        checkOut.classList.add('hidden');
        payOut.classList.add('hidden');
    }
}


function checkOutClick(){
    checkOut.classList.add('hidden');
    payOut.classList.remove('hidden');
}

function payment() {
    containerBox.classList.remove('hidden');
    var paymentAmt = Number(payAmt.value);
    if (paymentAmt == totalCart) {
        containerBox.style.backgroundColor = 'rgba(120, 255, 120, 0.95)';
        message.innerHTML = "Enjoy your Pizza!";
        smallQuantity = 0;
        mediumQuantity= 0;
        largeQuantity= 0;
        totalCart = 0;

        smallPizzaQuantity.innerHTML = smallQuantity;
        mediumPizzaQuantity.innerHTML = mediumQuantity;
        largePizzaQuantity.innerHTML = largeQuantity;

        smallPizzaTotal.innerHTML = (smallQuantity * 49).toFixed(2);
        mediumPizzaTotal.innerHTML = (mediumQuantity* 89).toFixed(2);
        largePizzaTotal.innerHTML = (largeQuantity * 129).toFixed(2);
        totalCart = smallQuantity * 49.00 + mediumQuantity * 89.00 + largeQuantity * 129.00;
        cartTotal.innerHTML = totalCart.toFixed(2);

        setTimeout(function () {
            containerBox.classList.add('hidden');
            checkOut.classList.remove('hidden');
            payOut.classList.add('hidden');
            payAmt.value = "";
        }, 4500);

    } else if (paymentAmt > totalCart) {
        var change = paymentAmt - totalCart;
        containerBox.style.backgroundColor = 'rgba(120, 255, 120, 0.95)';
        message.innerHTML = "Enjoy your Pizza!"
        smallQuantity = 0;
        mediumQuantity = 0;
        largeQuantity = 0;
        totalCart = 0;

        smallPizzaQuantity.innerHTML = smallQuantity;
        mediumPizzaQuantity.innerHTML = mediumQuantity;
        largePizzaQuantity.innerHTML = largeQuantity;

        smallPizzaTotal.innerHTML = (smallQuantity * 49).toFixed(2);
        mediumPizzaTotal.innerHTML = (mediumQuantity * 89).toFixed(2);
        largePizzaTotal.innerHTML = (largeQuantity * 129).toFixed(2);
        totalCart = smallQuantity * 49.00 + mediumQuantity * 89.00 + largeQuantity * 129.00;
        cartTotal.innerHTML = totalCart.toFixed(2);

        setTimeout(function () {
            containerBox.classList.add('hidden');
            checkOut.classList.remove('hidden');
            payOut.classList.add('hidden');
            payAmt.value = "";
        }, 4500);

    } else {
        containerBox.style.backgroundColor = 'rgba(255, 120, 120, 0.95)';
        message.innerHTML = "Sorry, insuffient!";
        setTimeout(function () {
            containerBox.classList.add('hidden');
        }, 4500);
    }
}

function close() {
    containerBox.classList.add('hidden');
}



smallPlusBtn.addEventListener('click', BtnClick);
smallMinusBtn.addEventListener('click', BtnClick);
smallPlusBtnBuy.addEventListener('click',BtnClick);

mediumPlusBtn.addEventListener('click', BtnClick);
mediumMinusBtn.addEventListener('click', BtnClick);
mediumPlusBtnBuy.addEventListener('click',BtnClick);

largePlusBtn.addEventListener('click', BtnClick);
largeMinusBtn.addEventListener('click', BtnClick);
largePlusBtnBuy.addEventListener('click',BtnClick);

checkOut.addEventListener('click', checkOutClick)

payBtn.addEventListener('click',payment)