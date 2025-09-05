import Display from "./Display.js"

class Products extends Display{
    constructor(parent,products,cart){
      super(parent,products)
      this.cart=cart

    }


    showProducts(){
        this.products.forEach(product=> {
           this.createCard(product)
        });
    }

    // createCard(data){
    //     const cardEle=document.createElement("div")
  
    //      const imgEle=this.productImg(data)
 

    //      const infoEle=this.productInfo(data)

           
    //     cardEle.innerHTML=imgEle
    //      cardEle.innerHTML+=infoEle

    //     // const info=document.createElement("div")
    //     // const productName=document.createElement("h3")
    //     // const control=document.createElement("div")
    //     // const price=document.createElement("span")
    //     // const button=document.createElement("button")

    //     // productName.innerText=data.name;
    //     // price.innerText=data.price
    //     // button.innerText="+"

    //     // control.append(price,button)
    //     // info.append(productName,control)

    //     // cardEle.appendChild(info)

    //     this.parent.appendChild(cardEle)

  
    // }
 

        productInfo(data){
            const {id,name,price}=data
            const infoJsx=`
            <div id="product-info">
            <h3>${name}</h3>
             <div>
             <span>$ ${price}</span>
             <button data-id=${id}>+</button>
             </div>
            </div>
            `
            return infoJsx
        }
        handleEvent(){
            const element=event.target
            if(element.tagName==="BUTTON"){
                this.addToCart(element.dataset.id)
            }
        }

        addToCart(id){
            const product=this.products.find((i)=>i.id===+id)
           this.cart.products.push(product)
           console.log(this.cart)
           this.cart.showProducts()
        }
}
export default Products