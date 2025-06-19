 let deliveryCosts = 3.50;
 let isDelivery = true;

function init(){
    renderMeals();
    updateBasketCount();
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

function updateBasketCount() {
    let basketNumber = document.getElementById('basketCount');
    let count = 0;
    for (let i = 0; i < basket.length; i++) {
        count += basket[i].amount;
    }

   if (count === 0) {
        basketNumber.classList.add('display_none');
    } else {
        basketNumber.classList.remove('display_none');
        basketNumber.innerText = count;
    }
    basketNumber.innerText = count;
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
    updateBasketCount();
}

function addMealInBasket(basketIndex) {
    basket[basketIndex].amount++;
    renderBasket();
    updateBasketCount();
}

function removeMeal(index) {
    if (basket[index].amount > 1) {
        basket[index].amount--;
    } else {
        basket.splice(index, 1); 
    }
    renderBasket();
    updateBasketCount();
}

 function deleteMeal(index) {
    basket.splice(index, 1);
    renderBasket();
    updateBasketCount();
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
    updateBasketCount();
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