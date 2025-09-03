import Cart from "../models/cart.js"
import Products from "../models/Products.js"
import { fetchData } from "../utils/httpReq.js"

const productsNode=document.getElementById("products")
const cartListNode=document.getElementById("cart-list")
const totalPriceNode=document.getElementById("total-price").querySelector("span")




async function render(){
     const productData=await fetchData()
     console.log(productData)

     const cartInstance=new Cart(cartListNode,totalPriceNode)
     console.log(cartInstance)
     const productsInstance=new Products(productsNode,productData,cartInstance)
     productsInstance.showProducts()
}
document.addEventListener("DOMContentLoaded",render)
