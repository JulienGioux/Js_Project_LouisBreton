
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

let produit1 = new Product(`Bracelets Or Flèches`, `Set de 4 bracelets en or`, cat[1], 149, `02323`);
let produit2 = new Product(`Bracelet pierres naturelles`, `PIERRE NATURELLE, LA PIERRE DE LAVE OFFRE DES TEINTES DIVERSES À CE BRACELET DONT LA DISCRÉTION PERMETTRA À TOUS DE L’ADOPTER.`, cat[1], 49, `02328`);
let produit3 = new Product(`Bague Argent`, `Bague peinte à la main en argent`, cat[1], 78, `02332`);
let produit4 = new Product(`Pochette Cuir`, `Tout petit, tout mignon. N'emportez que le minimum ! Petit sac économique, tout en cuir. Dimensions extérieures : 20 (l) x15 (h) x4 (p) cm. Capacité intérieure : 14 (l) x11 (h) x 2 (p) cm`, cat[2], 125, `12895`);
let produit5 = new Product(`Sac Bandoulière Cuir`, `Cuir végétal cousu main. Avec 1 compartiment intérieur zippé, portes stylos, 2 poches intérieures non zippées. Lanière amovible et réglable. Dimensions :  Hauteur 40 cm Largeur  27 cm Profondeur 11 cm`, cat[2], 140, `12892`);
let produit6 = new Product(`Sac à main Cuir`, `Elégant et contemporain, l'accessoire idéal de la citadine ... Intérieur doublé, comportant une poche zippée, 5 poches plaquées couvrant toutes les utilisations (portable, stylos, pochette mouchoirs ...), 1 mousqueton sur lanière de 30 cms, intégrée au sac en guise de porte-clés. Poche extérieure de la largeur du sac sur 27 cms de hauteur. Largeur du sac : 33 cms Hauteur du sac : 32 cm`, cat[2], 90, `12887`);
produit1.name;
let testQty = produit1.addProduct(2);
 console.log(produit1.addProduct(2), produit1.name);
 console.log(produit2.addProduct(3), produit2.name);
 console.log(produit3.addProduct(4), produit3.name);
 console.log(produit1.my_value);
 console.log(produit1);