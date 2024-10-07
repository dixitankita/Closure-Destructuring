function createCart() {
    const cart = [];

    return {
        addToCart: function(product) {
            const existingProduct = cart.find(item => item.productId === product.productId);
            if (existingProduct) {
                existingProduct.quantity += product.quantity;
                console.log(`Updated ${existingProduct.name} quantity to ${existingProduct.quantity}.`);
            } else {
                cart.push(product);
                console.log(`${product.name} added to the cart.`);
            }
        },
        getCartItems: function() {
            return cart;
        },
        removeItem: function(productId) {
            const index = cart.findIndex(item => item.productId === productId);
            if (index > -1) {
                const removedItem = cart.splice(index, 1)[0];
                console.log(`${removedItem.name} removed from the cart.`);
            } else {
                console.log(`Product with ID ${productId} is not in the cart.`);
            }
        }
    };
}

const myCart = createCart();

myCart.addToCart({ productId: 1, name: "Laptop", quantity: 1, price: 1000 });
myCart.addToCart({ productId: 2, name: "Smartphone", quantity: 1, price: 500 });
console.log(myCart.getCartItems());
myCart.removeItem(1);
console.log(myCart.getCartItems());
