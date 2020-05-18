const cat = [`clothes`, `jewels`, `bags`];
const pathImg = `assets/img/`;

class Cart {
    ///cart pauline !!!
    container = document.getElementById(`containerList`); //inutile de redessiner toute la modal, le tbody suffit
    // cssTable = `table table-borderless text-center m-0`;
    cssDivQte = `input-group-prepend ml-1 ml-auto`;
    cssInput = `form-control`;
    csstdTotalE = `text-bold`;
    products = []; //propriété products : tableau d'objets(articles) ajoutés au 
    //panier accessible dans la class avec this.products dans la class ou myCart.products dans la page une fois le panier créé (il est cré au chargement de la page en l'occurence)
    constructor() {
        this.products = [];
        this.total = 0;
        this.createHTMLCart();
    }
    createHTMLCart = function () {


        if (this.products.length > 0) { //verifie si le panier contient quelque chose
            this.container.innerHTML = ``;
            for (let index = 0; index < this.products.length; index++) { //boucle pour créer une ligne par article dans le panier
                const element = this.products[index];
                //A FAIRE !!!
                //il faudra aussi redessiner quand on l'affiche (onclick sur icone de navbar)
                let bodyTr = this.container.appendChild(document.createElement(`tr`));
                let thRefInside = bodyTr.appendChild(document.createElement(`th`));
                let tdName = bodyTr.appendChild(document.createElement(`td`));
                let tdQte = bodyTr.appendChild(document.createElement(`td`));
                let tdDiv = tdQte.appendChild(document.createElement(`div`));
                let tdInput = tdDiv.appendChild(document.createElement(`input`));
                let tdPrice = bodyTr.appendChild(document.createElement(`td`));
                let tdImg = bodyTr.appendChild(document.createElement(`td`));
                let imgDustbin = tdImg.appendChild(document.createElement(`img`));
                //Add classes CSS
                tdDiv.className = this.cssDivQte;
                tdInput.className = this.cssInput;
                //Define Attributes and contents

                tdInput.setAttribute(`aria-label`, `Sizing example input`);
                tdInput.setAttribute(`aria-describedby`, `inputGroup-sizing-sm`);
                tdInput.setAttribute(`type`, `number`);
                tdInput.setAttribute(`value`, element.qty);
                tdInput.setAttribute(`min`, `0`);
                tdInput.setAttribute(`max`, `10`);
                tdInput.setAttribute(`step`, `1`);
                tdInput.setAttribute(`id`, `inputCartQty${element.ref}`);
                imgDustbin.setAttribute(`src`, `assets/img/dustbin.svg`);
                imgDustbin.setAttribute(`id`, `removeFromCart${element.ref}`);
                tdPrice.setAttribute(`id`, `elTotalPrice${element.ref}`);
                //Text
                thRefInside.innerText = element.ref;
                tdName.innerText = element.name;
                tdPrice.innerText = `${element.price*element.qty} €`; //calcul et affiche le total par article

                //addEventListener
                tdInput.addEventListener(`change`, function () {
                    let qty = document.getElementById(this.id).value;
                    let ref = this.id.slice(12);
                    if (element.qty > 0) {
                        for (let index = 0; index < productsArray.length; index++) {
                            const e = productsArray[index];
                            if (e.ref === ref) {
                                qty = parseInt(qty) - parseInt(element.qty);
                                myCart.addToCart(e, qty);
                                myCart.createHTMLCart();
                                console.log(myCart.products); //pour vérifier le contenu du panier dans la console
                            };
                        }
                    }
                })

                imgDustbin.addEventListener(`click`, function () {
                    let ref = this.id.slice(14);
                    let qty = 0;
                    if (element.qty > 0) {
                        for (let index = 0; index < productsArray.length; index++) {
                            const e = productsArray[index];
                            if (e.ref === ref) {
                                qty = parseInt(qty) - parseInt(element.qty);
                                myCart.addToCart(e, qty);
                                myCart.createHTMLCart();
                                console.log(myCart.products); //pour vérifier le contenu du panier dans la console
                            };
                        }
                    }
                })
            }

            //TTOTAL
            let bodyTrTotal = this.container.appendChild(document.createElement(`tr`));
            let tdEmpty1 = bodyTrTotal.appendChild(document.createElement(`td`));
            let tdEmpty2 = bodyTrTotal.appendChild(document.createElement(`td`));
            let thTotal = bodyTrTotal.appendChild(document.createElement(`th`));
            let tdTotalE = bodyTrTotal.appendChild(document.createElement(`td`));
            let tdEmpty3 = bodyTrTotal.appendChild(document.createElement(`td`));
            thTotal.setAttribute(`scope`, `col`);
            tdTotalE.setAttribute(`id`, `TotalE`);
            thTotal.innerText = `Total`;
            tdTotalE.innerText = `${this.totalPrice()} €`;

            // //Add classes CSS
            tdTotalE.className = this.csstdTotalE;


        } else { //panier vide
            // A faire : Centrer le Texte.
            this.container.innerHTML = `<h1 class="mx-auto h4">Votre panier est vide !</h1>`;
        }
    }
    /// END CART PAULINE => "myCart.createHTMLCart();" or in class "this.createHTMLCart();"
    calcNbArticles = function () {
        let total = 0;
        this.products.forEach(element => {
            total += element.qty
        });
        return total;
    }

    removeNullFromCart = function () {
        this.products.forEach(element => {
            if (element.qty == 0) {
                let i = this.products.indexOf(element);
                let iPlus = parseInt(i) + 1;
                this.products.splice(i, iPlus);
            }
        });
    }

    // Verifie si la référence du produit passé en paramètre existe (objet)
    //  => renvoit un array [boolean, index]
    isIncart = function (e) {
        let result = [false, undefined]; //initialise le resultat
        this.products.forEach(element => { // test les les elements du panier
            if (element.ref == e.ref) {
                let index = this.products.indexOf(element);
                result = [true, index]; //renvoie true et l'index de l'element si déjà dans le panier
            };
        });
        return result; //renvoie la valeur par défaut
    }
    // Ajoute l'article et les quantité choisi dans le panier
    addToCart = function (e, qty) {
        if (this.products.length > 0) { //vérifie que le panier n'est pas vide
            this.removeNullFromCart();
            let boolIncart = this.isIncart(e)[0]; //vérifie si le produit est déjà dans le panier
            let index = this.isIncart(e)[1]; //récupère l'index si déjà dans le panier
            if (boolIncart) {
                this.products[index].qty += parseInt(qty); //si déjà dans panier, ajoute les quantités
                e.qty -= parseInt(qty); //met à jour les stocks 
            } else {
                let copie = Object.assign({}, e); //sinon, copie l'objet
                copie.qty = parseInt(qty); //modifie les quantités
                this.products.push(copie); //ajoute au panier
                e.qty -= parseInt(qty); //met à jour les stocks
            }

        } else {
            this.products[0] = Object.assign({}, e); //si le panier est vide, ajoute l'article
            this.products[0].qty = parseInt(qty); //et modifie les quantités
            e.qty -= parseInt(qty); //met à jour les stocks
        }
        this.removeNullFromCart();
        let nbArticleHTML = document.getElementById(`nbArticle`);
        nbArticleHTML.innerText = this.calcNbArticles();   
    }
    //calcul du total dans le panier
    totalPrice = function () {
        let result = 0;
        this.products.forEach(e => {
            result += (parseInt(e.qty) * e.price);
        });

        return result;
    }
}

const myCart = new Cart(); //cré le panier
class Product {
    qty = 100;
    constructor(name, descr, cat, price, ref, imgSrc) {
        this.name = name;
        this.descr = descr;
        this.cat = cat;
        this.ref = ref;
        this.price = price;
        this.imgSrc = `${pathImg}${cat}/${imgSrc}.jpg`;
    }
}

class CardProduct {
    container = document.getElementById(`cards`);
    cssCardCol = `col-sm-4 mt-2`;
    cssCard = `card shadow p-3 mb-5 bg-white rounded`;
    cssImg = `card-img-top`;
    cssCardBody = `card-body`;
    cssCat = `badge badge-info`;
    cssH1 = `card-title h4`;
    cssP = `card-text`;
    cssPriceTxt = `h5 text-right`;
    cssPriceBadge = `badge badge-primary p-2 my-auto`;
    cssDivContQty = `input-group input-group-sm my-3`;
    cssDivChildQty = `input-group-prepend ml-1 ml-auto`;
    cssInputTxt = `input-group-text`;
    cssInputQty = `form-control`;
    cssBtn = `btn btn-dark m-1 w-100`;

    createHTMLCard = function () {
        //create and append Html elements
        let divCol = this.container.appendChild(document.createElement(`div`));
        let divCard = divCol.appendChild(document.createElement(`div`));
        let imgProduct = divCard.appendChild(document.createElement(`img`));
        let divCarddBody = divCard.appendChild(document.createElement(`div`));
        let pCat = divCarddBody.appendChild(document.createElement(`p`));
        let h1Product = divCarddBody.appendChild(document.createElement(`h1`));
        let pDescr = divCarddBody.appendChild(document.createElement(`p`));
        let priceTxt = divCarddBody.appendChild(document.createElement(`h2`));
        let priceBadge = priceTxt.appendChild(document.createElement(`span`));
        let divContQty = divCarddBody.appendChild(document.createElement(`div`));
        let divChildQty = divContQty.appendChild(document.createElement(`div`));
        let inputTxt = divChildQty.appendChild(document.createElement(`span`));
        let inputQty = divChildQty.appendChild(document.createElement(`input`));
        let btnAddToCard = divCarddBody.appendChild(document.createElement(`button`));

        //Define Attributes and contents
        divCard.setAttribute(`data-aos`,`zoom-in`);
        imgProduct.setAttribute(`src`, this.product.imgSrc);
        imgProduct.setAttribute(`alt`, `Photo du produit : ${this.product.name}.jpg`);
        pCat.innerText = this.product.cat;
        h1Product.innerText = this.product.name;
        pDescr.innerText = this.product.descr;
        priceBadge.innerText = `${this.product.price} €`;
        inputTxt.innerText = `Qté`;
        inputQty.setAttribute(`aria-label`, `Sizing example input`);
        inputQty.setAttribute(`aria-describedby`, `inputGroup-sizing-sm`);
        inputQty.setAttribute(`type`, `number`);
        inputQty.setAttribute(`value`, `0`);
        inputQty.setAttribute(`min`, `0`);
        inputQty.setAttribute(`max`, `10`);
        inputQty.setAttribute(`step`, `1`);
        inputQty.setAttribute(`id`, `inputCardsQty${this.product.ref}`);
        btnAddToCard.setAttribute(`id`, `btnAddToCart${this.product.ref}`);
        btnAddToCard.innerText = `Ajouter au panier`;
        btnAddToCard.addEventListener(`click`, function () {
            let ref = this.id.slice(12);
            let inputQtyValue = document.getElementById(`inputCardsQty${ref}`).value;
            if (inputQtyValue > 0) {
                for (let index = 0; index < productsArray.length; index++) {
                    const element = productsArray[index];
                    if (element.ref === ref) {
                        let incart = myCart.isIncart(element);
                        
                        
                        if (incart[0] && parseInt(myCart.products[incart[1]].qty) + parseInt(inputQtyValue) > 10) {
                            window.alert(`Vous ne pouvez commander que 10 articles par référence`);
                        } else {
                            myCart.addToCart(element, inputQtyValue);
                            document.getElementById(`inputCardsQty${ref}`).value = 0;
                            console.log(inputQtyValue);
                        }

                    };
                }
            }
            if (inputQtyValue == 0) {
                let inputQtyValue = 1;
                for (let index = 0; index < productsArray.length; index++) {
                    const element = productsArray[index];
                    if (element.ref === ref) {
                        let incart = myCart.isIncart(element);
                        
                        
                        if (incart[0] && parseInt(myCart.products[incart[1]].qty) + parseInt(inputQtyValue) > 10) {
                            window.alert(`Vous ne pouvez commander que 10 articles par référence`);
                        } else {
                            myCart.addToCart(element, inputQtyValue);
                            document.getElementById(`inputCardsQty${ref}`).value = 0;
                            console.log(inputQtyValue);
                        }

                    };
                }
            }
            alert(`Votre article a bien été ajouté au panier`)
        });

            if(this.product.cat == `jewels`) {
                pCat.innerText = `Bijoux`;
                console.log(this.product.cat);
            } else if (this.product.cat == `clothes`) {
                pCat.innerText = `Vêtements`;
                console.log(this.product.cat);
            } else if (this.product.cat == `bags`) {
                pCat.innerText = `Sacs`;
            }


        //Add classes CSS
        divCol.className = this.cssCardCol;
        divCard.className = this.cssCard;
        imgProduct.className = this.cssImg;
        divCarddBody.className = this.cssCardBody;
        pCat.className = this.cssCat;
        h1Product.className = this.cssH1;
        pDescr.className = this.cssP;
        priceTxt.className = this.cssPriceTxt;
        priceBadge.className = this.cssPriceBadge;
        divContQty.className = this.cssDivContQty;
        divChildQty.className = this.cssDivChildQty;
        inputTxt.className = this.cssInputTxt;
        inputQty.className = this.cssInputQty;
        btnAddToCard.className = this.cssBtn;
    }
    constructor(product) {
        this.product = product;
        this.createHTMLCard();
    }
}

//création des ojects produits dans un tableau
const productsArray = [];
productsArray[0] = new Product(`Bracelets Or Flèches`, `Set de 4 bracelets en or`, cat[1], 149, `02323`, `bracelet3`);
productsArray[1] = new Product(`Bracelet Pierres Naturelles`, `PIERRE NATURELLE, LA PIERRE DE LAVE OFFRE DES TEINTES DIVERSES À CE BRACELET DONT LA DISCRÉTION PERMETTRA À TOUS DE L’ADOPTER.`, cat[1], 49, `02328`, `bracelet1`);
productsArray[2] = new Product(`Bague Argent`, `Bague peinte à la main en argent`, cat[1], 78, `02332`, `bracelet2`);
productsArray[3] = new Product(`Boucles d'oreilles Or`, `Boucles d'oreilles pendantes en pierres minérales turquoises. L'élégance au naturel.`, cat[1], 68, `02329`, `earings`);
productsArray[4] = new Product(`Collier double rang`, `Un modèle hyper tendance de notre collection fantaisie, ce collier plaqué or double rang qui s'adaptera parfaitement à votre tour de cou pour sublimer toutes vos soirées !`, cat[1], 68, `02326`, `necklace1`);
productsArray[5] = new Product(`Collier multirangs`, `Succombez face à ce magnifique collier trois rangs en plaqué Or 750 3mic, optant pour des formes graphiques super tendances et utilisant des longueurs différentes, ce collier se posera magnifiquement bien sur votre décolleté. Il se portera en journée comme en soirée avec toutes vos tenues favorites. `, cat[1], 89, `02335`, `necklace2`);
productsArray[6] = new Product(`Collier Anneau`, `Egaillez vos journées en optant pour ce magnifique collier en plaqué or et son joli anneau comme pendentif. Il se posera délicatement sur votre décolleté pour un porté raffiné et élégant. On adore ! `, cat[1], 59, `02323`, `necklace3`);
productsArray[7] = new Product(`Pochette Cuir`, `Tout petit, tout mignon. N'emportez que le minimum ! Petit sac économique, tout en cuir. Dimensions extérieures : 20 (l) x15 (h) x4 (p) cm. Capacité intérieure : 14 (l) x11 (h) x 2 (p) cm`, cat[2], 125, `12895`, `pochetteCuir`);
productsArray[8] = new Product(`Sac Bandoulière Cuir`, `Cuir végétal cousu main. Avec 1 compartiment intérieur zippé, portes stylos, 2 poches intérieures non zippées. Lanière amovible et réglable. Dimensions :  Hauteur 40 cm Largeur  27 cm Profondeur 11 cm`, cat[2], 140, `12892`, `sacBandouliere`);
productsArray[9] = new Product(`Sac à main Cuir`, `Elégant et contemporain, l'accessoire idéal de la citadine ... Intérieur doublé, comportant une poche zippée, 5 poches plaquées couvrant toutes les utilisations (portable, stylos, pochette mouchoirs ...), 1 mousqueton sur lanière de 30 cms, intégrée au sac en guise de porte-clés. Poche extérieure de la largeur du sac sur 27 cms de hauteur. Largeur du sac : 33 cms Hauteur du sac : 32 cm`, cat[2], 90, `12887`, `sacMain`);
productsArray[10] = new Product(`Sac de voyage Cuir`, `Ce sac en cuir haut de gamme de taille plus grande est le compagnon idéal en toutes occasions. Que vous partiez en escapade le temps d'un week-end, que vous alliez au sport ou vous rendiez à vos activités de loisirs, ce sac de voyage dipose de toute la place nécessaire. Sa taille et son look élégant en font le partenaire idéal pour toutes vos sorties. 100% fait à la main: Grâce à des coutures soignées et d'excellente fabrication cette sac est un fidèle compagnon.`, cat[2], 139, `12889`, `sacVoyage`);
productsArray[11] = new Product(`Pull Homme`, `Pull ras du cou bleu 52% polyester , 48% coton.`, cat[0], 170, `17839`, `pullhomme1`);
productsArray[12] = new Product(`Pull Homme 100% cachemire`, `Pull ras du cou en cachemire doux camel.`, cat[0], 229, `17203`, `pullhomme2`);
productsArray[13] = new Product(`Chemise en Soie`, `Délicate chemise en soie aérienne blanche. Pourvu de manches longues et d'un col pointu`, cat[0], 300, `17359`, `chemise1`);
productsArray[14] = new Product(`Veste en laine métallisée`, `Ravissante veste réalisée en laine métallisé.`, cat[0], 359, `17119`, `veste1`);
productsArray[15] = new Product(`Veste en laine`, `Ravissante veste réalisée en laine rose.`, cat[0], 330, `17923`, `veste2`);

//création des cards dans un tableau
let cardsArray = [];

//cré dynamiquement les cards en html par cetégorie cliquée dans navBar
let nBtn = document.getElementsByClassName('nav-item nav-link text-white');
let cards = document.getElementById(`cards`);
for (let i = 0; i < nBtn.length; i++) {
    nBtn[i].addEventListener('click', function showProducts() {
        let idCatData = document.getElementById(this.id);
        let catData = idCatData.dataset.cat;
        cards.innerHTML = '';
        cardsArray = [];
        productsArray.forEach(element => {
            if (element.cat === catData) {
                cardsArray.push(new CardProduct(element));
            }
        })
    })
}

//affichage aléatoire des produits au chargement de la page
var i, j, k;
for (i = productsArray.length - 1; i > 0; i--) { //boucle random method fisher yates. Mélange l'ordre des articles dans le array
    j = Math.floor(Math.random() * i)
    k = productsArray[i]
    productsArray[i] = productsArray[j]
    productsArray[j] = k
}

for (let index = 0; index < 9; index++) { //boucle pour créer nos cards avec les 9 premiers articles
    const element = productsArray[index];
    cardsArray.push(new CardProduct(element));
}



document.querySelectorAll('.btnAddToCard').forEach(button => {
    button.addEventListener('click', e => {
        button.classList.toggle('added');
    });
});
