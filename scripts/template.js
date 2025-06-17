 function basketHead(){
    return `
    <div class="basket_head">
        <div>
            <button class="deliver" onclick="toggleDelivery(true)"> 
                <img class="deliver_pic" src="./assets/pics/bike.png" alt="">
                Lieferung
            </button>
        </div>
        <div>
            <button class="collect" onclick="toggleDelivery(false)">
                <img class="collect_pic" src="./assets/pics/man.png" alt="">
                Abholung wählen
            </button>
        </div>
    </div>    
            <h2 class='title_basket'>Warenkorb</h2>
   
    `;
} 

function emptyBasket(){
    return `
    <div class="empty_basket">
        <img class="empty_basket_pic" src="./assets/pics/bag.png" alt="">
        <div class="empty_basket_p_tag">
        
        <p>Wähle leckere Gerichte aus der Karte und</p>
        <p>bestelle Dein Menü</p>
        </div>
    </div>
    `;
}

function templateMeals(mealIndex){
    return `
      <div class="meal">
        <div class="addButtonDiv">
            <h3>${pizzas[mealIndex].name}</h3>
            <button class="addButton" onclick="moveMealFromMenu(${mealIndex})">+</button>
        </div>    
        <div class="content_meals">
            <p>${pizzas[mealIndex].description}</p>
            <p class="price_meal"><b>${shortPrice(pizzas[mealIndex].price)}€</b></p>
        </div>
      </div>
    `;
}
  
function getTemplateBasket(basketIndex) {
    return`  
        <div class="basket_meal">
            <div>
                <h3>${basket[basketIndex].name}</h3>
                <div class="basket_menu">
                    <button class="basket_remove" onclick="removeMeal(${basketIndex})">-</button>
                    <p>${basket[basketIndex].amount}x</p>
                    <button class="basket_add" onclick="addMealInBasket(${basketIndex})">+</button>
                    <p>${shortPrice(basket[basketIndex].price)}€</p>
                    <button class="basket_delet" onclick="deleteMeal(${basketIndex})">
                        <img class="trash_pic" src="./assets/pics/trash.png" alt="">
                    </button>
                </div>
            </div>
        </div>
    `;
}

function costsTemplate(subtotal, delivery, total) {
    return `
        <div class="basket_footer">
            <div class="subtotal"><p>Zwischensumme: ${shortPrice(subtotal)}€</p></div>
            ${delivery > 0 ? `<div class="total_costs"><p>Lieferkosten: ${shortPrice(delivery)}€</p></div>` : ''}
            <div class="total_price"><p>Gesamt: ${shortPrice(total)}€</p></div>

            <div id="orderMessage"></div>

            <div class="order_button">
                <button class="order" onclick="orders()"><b>Bestellen</b></button>
            </div>
        </div>
    `;
}

function orderAlert(){
    return `
    <div class="order_alert">
        <p>Vielen Dank für deine Bestellung!</p>
    </div>
    `;
}

function orderMessage(){
    return `
    <div class="orderMessage" id="orderMessage">
        <p><b>Bitte füge Produkte zum Warenkorb hinzu.</b></p>
    </div>
    `;
}