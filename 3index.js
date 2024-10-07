function createCart() {
    const cart = [];

    return {
        addItem: function(item) {
            cart.push(item);
            console.log(`${item} added to the cart.`);
        },
        getCartItems: function() {
            return cart;
        },
        removeItem: function(item) {
            const index = cart.indexOf(item);
            if (index > -1) {
                cart.splice(index, 1);
                console.log(`${item} removed from the cart.`);
            } else {
                console.log(`${item} is not in the cart.`);
            }
        },
        clearCart: function() {
            cart.length = 0;
            console.log("Cart has been cleared.");
        }
    };
}

const myCart = createCart();

myCart.addItem("Laptop");
myCart.addItem("Smartphone");
console.log(myCart.getCartItems());
myCart.removeItem("Laptop");
console.log(myCart.getCartItems());
myCart.clearCart();
console.log(myCart.getCartItems());
