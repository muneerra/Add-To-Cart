// let budget =document.getElementById('budget')
// let balanceValue=document.getElementById('balanceValue')

// function add_balance(){
//     balanceValue.innerText=budget.value-totalValue.innerText
// }

// let apple = 10
// let mango  =20
// let banana  = 15

// let addApple = document.getElementById('addApple')
// let addMango = document.getElementById('addMango')
// let addBanana = document.getElementById('addBanana')

// let minusApple = document.getElementById('minusApple')
// let minusMango = document.getElementById('minusMango')
// let minusBanana= document.getElementById('minusBanana')

// let appleQty =document.getElementById('appleQty')
// let mangoQty =document.getElementById('mangoQty')
// let bananaQty =document.getElementById('bananaQty')


// let totalValue =document.getElementById('totalValue')

// // apple quantity inc and dec
// addApple.onclick=function(){
//     if(balanceValue.innerText>0 && balanceValue.innerText>=apple){
//     appleQty.innerText=parseInt(appleQty.innerText)+1
//     totalValue.innerText=parseInt(totalValue.innerText)+1*apple
//     balance_add(apple)
//     }

// }
// minusApple.onclick=function(){
//     if(totalValue.innerText>0 && appleQty.innerText>0){
//     appleQty.innerText=parseInt(appleQty.innerText)-1
//     totalValue.innerText=parseInt(totalValue.innerText)-1*apple
//     balance_minus(apple)
//     }

// }

// // mango quantity inc and dec


// addMango.onclick=function(){
//     if(balanceValue.innerText>0 && balanceValue.innerText>=mango){
//     mangoQty.innerText=parseInt(mangoQty.innerText)+1
//     totalValue.innerText=parseInt(totalValue.innerText)+1*mango
//     balance_add(mango)
//     }

// }
// minusMango.onclick=function(){
//     if(totalValue.innerText>0 && mangoQty.innerText>0){
//     mangoQty.innerText=parseInt(mangoQty.innerText)-1
//     totalValue.innerText=parseInt(totalValue.innerText)-1*mango
//     balance_minus(mango)
//     }


// }

// // banana quantity inc and dec
// addBanana.onclick=function(){
//     if(balanceValue.innerText>0 && balanceValue.innerText>=banana){
//     bananaQty.innerText=parseInt(bananaQty.innerText)+1
//     totalValue.innerText=parseInt(totalValue.innerText)+1*banana
//     balance_add(banana)
//     }

// }
// minusBanana.onclick=function(){
//     if(totalValue.innerText>0 && bananaQty.innerText>0){
//     bananaQty.innerText=parseInt(bananaQty.innerText)-1
//     totalValue.innerText=parseInt(totalValue.innerText)-1*banana
//     balance_minus(banana)
//     }


// }


// function balance_minus(value){
//     if(totalValue.innerText>=0){
//     balanceValue.innerText=parseInt(balanceValue.innerText)+value
//     }
// }
// function balance_add(value){
//     if(value<=balancValue.innerText){
//     balanceValue.innerText=parseInt(balanceValue.innerText)-value
//     }
// }
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