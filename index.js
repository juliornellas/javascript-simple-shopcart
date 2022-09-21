/**
 * DATA
 */
let cart = [
    {
        id: 1,
        name: "Coxinha",
        quantity: 1,
        price: 3.64,
        orderTime: new Date
    },
    {
        id: 1,
        name: "Coxinha",
        quantity: 1,
        price: 3.64,
        orderTime: new Date
    },
    {
        id: 1,
        name: "Coxinha",
        quantity: 1,
        price: 3.64,
        orderTime: new Date
    },
    {
        id: 2,
        name: "Pão de Queijo",
        quantity: 1,
        price: 1.37,
        orderTime: new Date
    },
    {
        id: 2,
        name: "Pão de Queijo",
        quantity: 1,
        price: 1.37,
        orderTime: new Date
    },
    {
        id: 2,
        name: "Pão de Queijo",
        quantity: 1,
        price: 1.37,
        orderTime: new Date
    },
    {
        id: 2,
        name: "Pão de Queijo",
        quantity: 1,
        price: 1.37,
        orderTime: new Date
    },
    {
        id: 3,
        name: "Pão na chapa",
        quantity: 1,
        price: 0.96,
        orderTime: new Date
    },
    {
        id: 4,
        name: "Café",
        quantity: 1,
        price: 0.51,
        orderTime: new Date
    },
    {
        id: 4,
        name: "Café",
        quantity: 1,
        price: 0.51,
        orderTime: new Date
    },
    {
        id: 5,
        name: "Brigadeiro",
        quantity: 1,
        price: 2.37,
        orderTime: new Date
    }
]
// console.log('DATA', cart)

//Data manipulation using FOR
// let reduceCart = []
// cart.forEach((item) => {
//     let qtt = Object.keys(reduceCart).includes(item.name) ? reduceCart[item.name].quantity +=1 : item.quantity
//     reduceCart[item.name] = {
//         name: item.name,
//         quantity: qtt,
//         price: item.price,
//         total: qtt * item.price
//     }
// })
// console.log('REDUCE CART', reduceCart)

//Data manipulation using MAP
let quantityEachItem = [], quantityTotalItems = 0;
cart.map((item) => {
    let qtt = Object.keys(quantityEachItem).includes(item.name) ? quantityEachItem[item.name].quantity +=1 : item.quantity
    quantityEachItem[item.name] = {
        name: item.name,
        quantity: qtt,
        price: item.price,
        total: qtt * item.price
    }
    quantityTotalItems++;
})

//Array with values
let products = Object.values(quantityEachItem)
// console.log('PRODUCTS', products)
// console.log('PRODUCTS QTT TOTAL ITEMS', quantityTotalItems)

//Data manipulation SUM 
let finalPrice = products.reduce((acc, item) => acc += item.total, 0).toFixed(2)
// console.log('Final price Cart', finalPrice.toFixed(2))

/**
 * DOM
 */

//Catch main div
const app = document.querySelector("#app")

//Create div for shopcart element
const shopCart = document.createElement("div")
shopCart.setAttribute("id","shopCart")

//Create Shopcart table
const tableShopCart = document.createElement("div")
tableShopCart.setAttribute("id","tableShopCart")
tableShopCart.setAttribute("class","col-md-5 col-lg-4 order-md-last m-2 shadow-sm")

//Card header
tableShopCart.innerHTML = `
    <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary">ShopCart</span>
        <span class="badge bg-primary rounded-pill">${quantityTotalItems}</span>
    </h4>
`
//Card body
let ul = document.createElement("ul")
ul.setAttribute("class", "list-group mb-3")
tableShopCart.appendChild(ul)

products.forEach((item, index) => {
    let li = document.createElement("li")
    li.setAttribute("id", index)
    li.setAttribute("class", "list-group-item d-flex justify-content-between lh-sm")
    li.innerHTML = `
        <div>
            <h6 class="my-0">${item.name}</h6>
            <small class="text-muted">$${item.price} (x${item.quantity})</small>
        </div>
        <span class="text-muted">$${item.total}</span>
    `
    ul.appendChild(li)
})

//Card footer
let li = document.createElement("li")
li.setAttribute("class", "list-group-item d-flex justify-content-between")
li.innerHTML = `
    <span>Total (USD)</span>
    <strong>$${finalPrice}</strong>
`
ul.appendChild(li)

//Add card to shopcart div element
shopCart.appendChild(tableShopCart)

//Add shopcart to main div
app.appendChild(shopCart)

