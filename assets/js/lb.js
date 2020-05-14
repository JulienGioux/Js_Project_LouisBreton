

class Product {
    constructor(name) {
        this.name = name;
    }
    my_value = 21;
    addProduct(qty) {
        return this.my_value += qty;
    };
}

class showCardProduct {
    constructor() {
        
    }
}

let produit1 = new Product(`Sac à Main moule et crustacés`);
let produit2 = new Product(`Montre Azur`);
let produit3 = new Product(`Colier perles d'atlantique`);
produit1.name;
let testQty = produit1.test(2);
 console.log(produit1.test(2), produit1.name);
 console.log(produit2.test(3), produit2.name);
 console.log(produit3.test(4), produit3.name);
 console.log(produit1.my_value);