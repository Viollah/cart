function Factory() {

    let smallQuantity = 0;
    let mediumQuantity = 0;
    let largeQuantity = 0;

    let smallCost = 0;
    let mediumCost = 0;
    let largeCost = 0;
    let totalCart = 0;

    function BtnClicked(event) {
        if (event === "smallPlus") {
            smallQuantity++;
        } else if (event === "mediumPlus") {
            mediumQuantity++;
        } else if (event === "largePlus") {
            largeQuantity++;
        }
        if (event === "smallMinus") {
            smallQuantity--;
            if (smallQuantity < 0) {
                smallQuantity = 0;
            }
        } else if (event === "mediumMinus") {
            mediumQuantity--;
            if (mediumQuantity < 0) {
                mediumQuantity = 0;
            }
        } else if (event === "largeMinus") {
            largeQuantity--;
            if (largeQuantity< 0) {
                largeQuantity = 0;
            }
        }
    }
    function quantityUpdate() {
        return {
            smallQuantity,
            mediumQuantity,
            largeQuantity
        }
    }

    function priceUpdate() {
        smallCost = (smallQuantity * 49).toFixed(2);
        mediumCost = (mediumQuantity * 89).toFixed(2);
        largeCost = (largeQuantity * 129).toFixed(2);
        totalCart = (smallQuantity * 49.00 + mediumQuantity * 89.00 + largeQuantity * 129.00).toFixed(2);

        return {
            smallCost,
            mediumCost,
            largeCost,
            totalCart
        }
    }
    function change(amount) {
        return (amount - totalCart).toFixed(2);
    }

    function resetCart() {
        smallQuantity = 0;
        mediumQuantity = 0;
        largeQuantity = 0;
        smallCost = 0;
        mediumCost = 0;
        largeCost = 0;
        totalCart = 0;

        return {
            smallQuantity,
            mediumQuantity,
            largeQuantity,
            smallCost,
            mediumCost,
            largeCost,
            totalCart,
        }
    }

    return {
        BtnClicked,
        quantityUpdate,
        priceUpdate,
        change,
        resetCart,
    }


    }