let budget = document.getElementById('budget');
let balance = document.getElementById('balanceValue');
let total = document.getElementById('totalValue')



function addBalance() {
    balance.innerText = budget.value - total.innerText
}

function minusBalance(value) {
    if (total.innerText >= 0) {
        balance.innerText = parseInt(balance.innerText) + value
    }
}
// crete variables for price
const productOne = 1250
const productTwo = 2280
const productThree = 2500

// create variabes for adding products
let addProductOne = document.getElementById('addProductOne')
let addProductTwo = document.getElementById('addProductTwo')
let addProductThree = document.getElementById('addProductThree')

// create variables for subtracting products
let minusProductOne = document.getElementById('minusProductOne')
let minusProductTwo = document.getElementById('minusProductTwo')
let minusProductThree = document.getElementById('minusProductThree')

// products
let productOneQty = document.getElementById('productOneQty')
let productTwoQty = document.getElementById('productTwoQty')
let productThreeQty = document.getElementById('productThreeQty')

// product One quantity increment and decrement

addProductOne.onclick = function() {
    if (balance.innerText > 0 && balance.innerText >= productOne) {
        productOneQty.innerText = parseInt(productOneQty.innerText) + 1
        total.innerText = parseInt(total.innerText) + 1 * productOne
        addBalance(productOne)
    }

}

minusProductOne.onclick = function() {
    if (total.innerText > 0 && productOneQty.innerText > 0) {
        productOneQty.innerText = parseInt(productOneQty.innerText) - 1
        total.innerText = parseInt(total.innerText) - 1 * productOne
        minusBalance(productOne)
    }
}

// product Two quantity increment and decrement
addProductTwo.onclick = function() {
    if (balance.innerText > 0 && balance.innerText >= productTwo) {
        productTwoQty.innerText = parseInt(productTwoQty.innerText) + 1
        total.innerText = parseInt(total.innerText) + 1 * productTwo
        addBalance(productTwo)
    }

}

minusProductTwo.onclick = function() {
    if (total.innerText > 0 && productTwoQty.innerText > 0) {
        productTwoQty.innerText = parseInt(productTwoQty.innerText) - 1
        total.innerText = parseInt(total.innerText) - 1 * productTwo
        minusBalance(productTwo)
    }
}

// product Three quantity increment and decrement
addProductThree.onclick = function() {
    if (balance.innerText > 0 && balance.innerText >= productThree) {
        productThreeQty.innerText = parseInt(productOneQty.innerText) + 1
        total.innerText = parseInt(total.innerText) + 1 * productThree
        addBalance(productThree)
    }

}

minusProductThree.onclick = function() {
    if (total.innerText > 0 && productThreeQty.innerText > 0) {
        productThreeQty.innerText = parseInt(productThreeQty.innerText) - 1
        total.innerText = parseInt(total.innerText) - 1 * productThree
        minusBalance(productThree)
    }
}
