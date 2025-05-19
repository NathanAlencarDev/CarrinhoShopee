//!import geral do modulo "cart.js"
import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

//! meu carrinho deve ser um vetor(um array).
const myCart = [];
//! Lista de favoritos.
const myWishList = [];


console.log("Welcome to the your Shopee Cart!");

//! Devo utilizar a palavra reservada "await". Para que o item seja criado e a função que esta dentro do objeto seja executada.
    //* O JS por padrão ele tenta executar tudo ao mesmo tempo, por isso devemos especificar quando ele deve aguardar uma parte do codigo para prosseguir com sua execução.
const item1 = await createItem("🐉 Action Figure - Sheilong", 145.99, 1);

//! Na minha lista de favoritos o valor do item não é somado ao valor do total do carrinho.
const item2 = await createItem("Action Figure - Goku Black", 199.99, 3);

//! chamada de itens.
// console.log(item2.subtotal());
// console.log(item1.subtotal());

//!Adicionando item ao carrinho.
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);



await cartService.displayCart(myCart);

//! Para que a função funcione precisamos passar o valor esperado que consta dentro do objeto que seria o "name".
// Deletando item.
//await cartService.deleteItem(myCart, item2.name);


await cartService.calculateTotal(myCart);


