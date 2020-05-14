
let cat = [`Vétements`,`Bijoux`,`sacs et bagages`];
let pathImg = `assets/img/`
class Product {
    constructor(name, description, cat, ref, price, imgSrc) {
        this.name = name;
        this.description = description;
        this.cat = cat;
        this.ref = ref;
        this.price = price;
        this.imgSrc = `${pathImg}${imgSrc}.jpg`;
    }
    my_value = 21;
    addProduct(qty) {
        return this.my_value += qty;
    };
}

class CardProduct {
    cssCard = `card`;
    cssImg = `card-img-top`;
    cssCardBody = `card-body`;
    cssH5 = `card-title`;
    cssP = `card-text`;
    cssBtn = `btn btn-dark mx-1`;

    constructor(product,parent) {
        this.product = product;
        this.parent = parent;
    }
    createDivCard = function () {
        let divCard = this.parent.appendChild(document.createElement(`div`));
        let imgProduct = divCard.appendChild(document.createElement(`img`));
        let divCarddBody = divCard.appendChild(document.createElement(`div`));
        let h5Product = divCarddBody.appendChild(document.createElement(`h5`));
        let pDescr = divCarddBody.appendChild(document.createElement(`p`));
        let pCat = divCarddBody.appendChild(document.createElement(`p`));
        let pPrice = divCarddBody.appendChild(document.createElement(`p`));
        divCard.className = this.cssCard;
        imgProduct.className = this.cssImg;
        divCarddBody.className = this.cssCardBody;
        h5Product.className = this.cssH5;
        pDescr.className = this.cssP;
        pCat.className = this.cssP;
        pPrice = this.cssP;

        h5Product.innerText = this.product.name;
    }
}

let produit1 = new Product(`Sac à Main moule et crustacés`, `Un sac parfait pour aller à la pèche aux moules`, cat[2], 2500, `sacRef02323`);
let produit2 = new Product(`Montre Azur`);
let produit3 = new Product(`Colier perles d'atlantique`);
produit1.name;
let testQty = produit1.addProduct(2);
 console.log(produit1.addProduct(2), produit1.name);
 console.log(produit2.addProduct(3), produit2.name);
 console.log(produit3.addProduct(4), produit3.name);
 console.log(produit1.my_value);
 console.log(produit1);

 let cardProduct1 = new CardProduct(produit1,document.getElementById(`card1`));
 cardProduct1.createDivCard();
 console.log(cardProduct1);

 let cardProduct2 = new CardProduct(produit2,document.getElementById(`card2`));
 cardProduct2.createDivCard();