const productCards = [
    ...document.querySelectorAll(".shopProductCard")
];

const categoryFilters = [
    ...document.querySelectorAll(".categoryFilter")
];

const goalFilters = [
    ...document.querySelectorAll(".goalFilter")
];

const productCount =
    document.getElementById("productCount");

const sortProducts =
    document.getElementById("sortProducts");

const clearFilters =
    document.getElementById("clearFilters");


function getSelectedValues(filters) {

    return filters
        .filter(filter => filter.checked)
        .map(filter => filter.value);

}


function filterProducts() {

    const categories =
        getSelectedValues(categoryFilters);

    const goals =
        getSelectedValues(goalFilters);


    let visibleProducts = [];


    productCards.forEach(card => {

        const category =
            card.dataset.category;

        const goalsData =
            card.dataset.goal.split(" ");


        const categoryMatch =
            categories.length === 0 ||
            categories.includes(category);


        const goalMatch =
            goals.length === 0 ||
            goals.some(goal =>
                goalsData.includes(goal)
            );


        const visible =
            categoryMatch && goalMatch;


        card.style.display =
            visible ? "" : "none";


        if (visible) {
            visibleProducts.push(card);
        }

    });


    productCount.textContent =
        `${visibleProducts.length} Products`;

}


function sortProductCards() {

    const value =
        sortProducts.value;


    const sorted =
        [...productCards].sort((a, b) => {

            if (value === "priceLow") {

                return (
                    Number(a.dataset.price) -
                    Number(b.dataset.price)
                );

            }


            if (value === "priceHigh") {

                return (
                    Number(b.dataset.price) -
                    Number(a.dataset.price)
                );

            }


            if (value === "name") {

                return a.dataset.name.localeCompare(
                    b.dataset.name
                );

            }


            return 0;

        });


    const grid =
        document.getElementById("shopProductGrid");


    sorted.forEach(card => {
        grid.appendChild(card);
    });

}


categoryFilters.forEach(filter => {

    filter.addEventListener(
        "change",
        filterProducts
    );

});


goalFilters.forEach(filter => {

    filter.addEventListener(
        "change",
        filterProducts
    );

});


sortProducts.addEventListener(
    "change",
    sortProductCards
);


clearFilters.addEventListener(
    "click",
    () => {

        categoryFilters.forEach(
            filter => filter.checked = false
        );


        goalFilters.forEach(
            filter => filter.checked = false
        );


        filterProducts();

    }
);


filterProducts();