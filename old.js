/**
 * Before use Bootstrap
 */

//Create Shopcart table
// const tableShopCart = document.createElement("table")
const tableShopCart = document.createElement("div")
tableShopCart.setAttribute("id","tableShopCart")
tableShopCart.setAttribute("class","col-md-5 col-lg-4 order-md-last m-2 card p-2 shadow-sm")

//Table header
tableShopCart.innerHTML = `
    <tr>
        <td>Nome</td>
        <td>Qtd</td>
        <td>Preço</td>
    </tr>
`
//Table body
products.forEach((item, index) => {
    let row = document.createElement("tr")
    row.setAttribute("id", index)
    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
    `
    tableShopCart.appendChild(row)
})

//Table footer
let row = document.createElement("tr")
row.setAttribute("id", finalPrice)
row.innerHTML = `
    <tr>
        <td>Total</td>
        <td>${quantityTotalItems}</td>
        <td>${finalPrice}</td>
    </tr>
`
tableShopCart.appendChild(row)

//Add table to shopcart div element
shopCart.appendChild(tableShopCart)

//Add shopcart to main div
app.appendChild(shopCart)