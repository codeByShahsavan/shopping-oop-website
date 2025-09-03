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
        const img=document.createElement("img")
        img.src=data.image
        img.alt=data.src

        cardEle.appendChild(img)

        const info=document.createElement("div")
        const productName=document.createElement("h3")
        const control=document.createElement("div")
        const price=document.createElement("span")
        const button=document.createElement("button")

        productName.innerText=data.name;
        price.innerText=data.price
        button.innerText="+"

        control.append(price,button)
        info.append(productName,control)

        cardEle.appendChild(info)
        
        this.parent.appendChild(cardEle)
    }
}
export default Products