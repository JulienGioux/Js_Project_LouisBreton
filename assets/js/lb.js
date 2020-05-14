
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

class showCardProduct {
    constructor(product) {
        

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