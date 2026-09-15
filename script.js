const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});


const mobileLinks = mobileNav.querySelectorAll("a");

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    });
});


const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    alert("Search functionality will be added in the next build.");
});


const productButtons = document.querySelectorAll(".smallButton");

productButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const product =
            button
                .closest(".productCard")
                .querySelector("h3")
                .textContent;

        console.log(`Selected product: ${product}`);

    });

});