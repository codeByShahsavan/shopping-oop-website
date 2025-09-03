class Products{
    constructor(parent,Products){
      this.parent=parent
      this.Products=Products
    }


    showProducts(){
        this.Products.forEach(product=> {
           this.createCard(product)
        });
    }

    createCard(data){
        const cardEle=document.createElement("div")
  
         const imgEle=this.productImg(data)
 

         const infoEle=this.productInfo(data)

           
        cardEle.innerHTML=imgEle
         cardEle.innerHTML+=infoEle

        // const info=document.createElement("div")
        // const productName=document.createElement("h3")
        // const control=document.createElement("div")
        // const price=document.createElement("span")
        // const button=document.createElement("button")

        // productName.innerText=data.name;
        // price.innerText=data.price
        // button.innerText="+"

        // control.append(price,button)
        // info.append(productName,control)

        // cardEle.appendChild(info)

        this.parent.appendChild(cardEle)

  
    }
        productImg(data){
            const {image,alt}=data
        const imgJsx=`
        <img src=${image} alt=${alt}/>

        `
        return imgJsx
        }

        productInfo(data){
            const {id,name,price,button}=data
            const infoJsx=`
            <div>
            <h3>${name}</h3>
             <div>
             <span>${price}</span>
             <button data-id=${id}>+</button>
             </div>
            </div>
            `
            return infoJsx
        }
}
export default Products