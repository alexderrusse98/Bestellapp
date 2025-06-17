 function orders(){
    if (basket.length === 0) {
        showOrderMessage("Dein Warenkorb ist leer");
        return;
    }
    
 basket = [];
 
 showOrderMessage("Vielen Dank für die Bestellung");
}
 function calculateTotalCosts() {
    let total = 0;
    for (let item of basket) {
        total += item.price * item.amount;
    }
    if (isDelivery) {
        total += deliveryCosts;
    }
    return total.toFixed(2);
}


 
  