
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

let produit1 = new Product(`Bracelets Or Flèches`, `Set de 4 bracelets en or`, cat[1], 149, `02323`, `bracelet3`);
let produit2 = new Product(`Bracelet Pierres Naturelles`, `PIERRE NATURELLE, LA PIERRE DE LAVE OFFRE DES TEINTES DIVERSES À CE BRACELET DONT LA DISCRÉTION PERMETTRA À TOUS DE L’ADOPTER.`, cat[1], 49, `02328`, `bracelet1`);
let produit3 = new Product(`Bague Argent`, `Bague peinte à la main en argent`, cat[1], 78, `02332`, `bracelet2`);
let produit4 = new Product(`Boucles d'oreilles Or`, `Boucles d'oreilles pendantes en pierres minérales turquoises. L'élégance au naturel.`, cat[1], 68, `02329`, `earings`);
let produit5 = new Product(`Collier double rang`, `Un modèle hyper tendance de notre collection fantaisie, ce collier plaqué or double rang qui s'adaptera parfaitement à votre tour de cou pour sublimer toutes vos soirées !`, cat[1], 68, `02326`, `necklace1`);
let produit6 = new Product(`Collier multirangs`, `Succombez face à ce magnifique collier trois rangs en plaqué Or 750 3mic, optant pour des formes graphiques super tendances et utilisant des longueurs différentes, ce collier se posera magnifiquement bien sur votre décolleté. Il se portera en journée comme en soirée avec toutes vos tenues favorites. `, cat[1], 89, `02335`, `necklace2`);
let produit7 = new Product(`Collier Anneau`, `Egaillez vos journées en optant pour ce magnifique collier en plaqué or et son joli anneau comme pendentif. Il se posera délicatement sur votre décolleté pour un porté raffiné et élégant. On adore ! `, cat[1], 59, `02323`, `necklace3`);
let produit8 = new Product(`Pochette Cuir`, `Tout petit, tout mignon. N'emportez que le minimum ! Petit sac économique, tout en cuir. Dimensions extérieures : 20 (l) x15 (h) x4 (p) cm. Capacité intérieure : 14 (l) x11 (h) x 2 (p) cm`, cat[2], 125, `12895`, `pochetteCuir`);
let produit9 = new Product(`Sac Bandoulière Cuir`, `Cuir végétal cousu main. Avec 1 compartiment intérieur zippé, portes stylos, 2 poches intérieures non zippées. Lanière amovible et réglable. Dimensions :  Hauteur 40 cm Largeur  27 cm Profondeur 11 cm`, cat[2], 140, `12892`, `sacBandouliere`);
let produit10 = new Product(`Sac à main Cuir`, `Elégant et contemporain, l'accessoire idéal de la citadine ... Intérieur doublé, comportant une poche zippée, 5 poches plaquées couvrant toutes les utilisations (portable, stylos, pochette mouchoirs ...), 1 mousqueton sur lanière de 30 cms, intégrée au sac en guise de porte-clés. Poche extérieure de la largeur du sac sur 27 cms de hauteur. Largeur du sac : 33 cms Hauteur du sac : 32 cm`, cat[2], 90, `12887`, `sacMain`);
let produit11 = new Product(`Sac de voyage Cuir`, `Ce sac en cuir haut de gamme de taille plus grande est le compagnon idéal en toutes occasions. Que vous partiez en escapade le temps d'un week-end, que vous alliez au sport ou vous rendiez à vos activités de loisirs, ce sac de voyage dipose de toute la place nécessaire. Sa taille et son look élégant en font le partenaire idéal pour toutes vos sorties. 100% fait à la main: Grâce à des coutures soignées et d'excellente fabrication cette sac est un fidèle compagnon.`, cat[2], 139, `12889`, `sacVoyage`);

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