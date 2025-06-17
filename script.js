 let deliveryCosts = 3.50;
 let isDelivery = true;

function init(){
    renderMeals();
    renderBasket();
}

 function renderMeals(){
    let contentRef = document.getElementById('content_Meals');
    contentRef.innerHTML = "";

    for (let mealIndex = 0; mealIndex < pizzas.length; mealIndex++) {
        contentRef.innerHTML += templateMeals(mealIndex);
    }
 }

function renderBasket() {
    let total = 0;
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = basketHead();
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        total += basket[basketIndex].price * basket[basketIndex].amount;
        basketRef.innerHTML += getTemplateBasket(basketIndex);
    }
    if (basket.length < 1) {
        basketRef.innerHTML = basketHead() + emptyBasket();
    }
         showCosts(total,basketRef);
}

function showCosts(total, basketRef) {
    let delivery = 0;

    if (isDelivery) {
        delivery = deliveryCosts;
    }

    let completeSum = total + delivery;

    basketRef.innerHTML += costsTemplate(total, delivery, completeSum);
}

function toggleDelivery(delivery) {
    isDelivery = delivery;
    renderBasket();
}

function moveMealFromMenu(mealIndex) {
    let { name, price } = pizzas[mealIndex];
    let existing = basket.find(item => item.name === name);

    if (existing) {
        existing.amount++;
    } else {
        basket.push({ name, price, amount: 1 });
    }
    renderBasket();
}

function addMealInBasket(basketIndex) {
    basket[basketIndex].amount++;
    renderBasket();
}

function removeMeal(index) {
    if (basket[index].amount > 1) {
        basket[index].amount--;
    } else {
        basket.splice(index, 1); 
    }
    renderBasket();
}

 function deleteMeal(index) {
    basket.splice(index, 1);
    renderBasket();
}

function orders() {
    let basketRef = document.getElementById('basket');
    if (basket.length === 0) {
        basketRef.innerHTML = orderMessage();

        setTimeout(() => {
            renderBasket();
        }, 2000);
        
        return;
    }

    basket = [];
    
    basketRef.innerHTML = basketHead();
    basketRef.innerHTML += orderAlert();

    setTimeout(() => {
        renderBasket();
    }, 3000);
}


function toggleBasketMenu(menuIcon) {
    menuIcon.classList.toggle("change");
    document.getElementById("basket").classList.toggle('open');
    document.getElementById("content_Meals").classList.toggle('content_max');
}

function shortPrice(price){
    return price.toFixed(2).replace('.', ',');
}