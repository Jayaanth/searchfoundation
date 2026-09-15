const quantityElement =
    document.getElementById("quantity");

const increaseQuantity =
    document.getElementById("increaseQuantity");

const decreaseQuantity =
    document.getElementById("decreaseQuantity");

const addToCart =
    document.getElementById("addToCart");

const buyNow =
    document.getElementById("buyNow");

const cartCount =
    document.getElementById("cartCount");


let quantity = 1;
let cartItems = 0;


increaseQuantity.addEventListener("click", () => {

    quantity++;

    quantityElement.textContent = quantity;

});


decreaseQuantity.addEventListener("click", () => {

    if (quantity > 1) {

        quantity--;

        quantityElement.textContent = quantity;

    }

});


addToCart.addEventListener("click", () => {

    cartItems += quantity;

    cartCount.textContent = cartItems;

    addToCart.textContent = "Added To Cart";

    setTimeout(() => {

        addToCart.textContent = "Add To Cart";

    }, 1500);

});


buyNow.addEventListener("click", () => {

    cartItems += quantity;

    cartCount.textContent = cartItems;

    window.location.href = "#cart";

});


const optionButtons =
    document.querySelectorAll(".optionButton");


optionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const group =
            button.closest(".optionButtons");

        group
            .querySelectorAll(".optionButton")
            .forEach(item => {
                item.classList.remove("active");
            });

        button.classList.add("active");

    });

});


const tabs =
    document.querySelectorAll(".productTab");

const panels =
    document.querySelectorAll(".tabPanel");


tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target =
            tab.dataset.tab;


        tabs.forEach(item => {

            item.classList.remove("active");

        });


        panels.forEach(panel => {

            panel.classList.remove("active");

        });


        tab.classList.add("active");


        document
            .getElementById(target)
            .classList.add("active");

    });

});


const thumbnails =
    document.querySelectorAll(".thumbnail");


thumbnails.forEach(thumbnail => {

    thumbnail.addEventListener("click", () => {

        thumbnails.forEach(item => {

            item.classList.remove("active");

        });

        thumbnail.classList.add("active");

    });

});


const pincodeInput =
    document.getElementById("pincode");

const checkPincode =
    document.getElementById("checkPincode");

const deliveryMessage =
    document.getElementById("deliveryMessage");


checkPincode.addEventListener("click", () => {

    const pincode =
        pincodeInput.value.trim();


    if (!/^[0-9]{6}$/.test(pincode)) {

        deliveryMessage.textContent =
            "Please enter a valid 6 digit PIN code.";

        return;

    }


    deliveryMessage.textContent =
        "Delivery availability will be checked when the delivery service is connected.";

});