//! ✅ Ações que o meu carrinho deve executar:
    //? Planejamento das assinaturas(Funções que este arquivo deve possuir).


//! ✅ 1 - Adicionar item.
async function addItem(userCart, item){
    userCart.push(item);
}

//! ✅ 2 - Calcular o total.
    //* Para esta função devemos calcular todos os itens que estão presente no carrinho e assim apresentar ao usuario o total de sua compra.
async function calculateTotal(userCart){
    console.log("\nShopee Cart TOTAL IS:");

    //* REDUCE = Função do JS que permite iteragir com todos os itens como um "FOR" assim permitindo executar uma ação com cada item que esta dentro.
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`🛒 Total:  R$${result}`);
}

//! ✅ 3 - Excluir um item do carrinho.
    //* Normalmente a logica por tras desta função é feita utilizando o "id" do produto, porem como estou utilzando apenas um exemplo simples estou utilziando o "name"
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        //! SPLICE -> serve para cortar uma zona. no caso será feito no index e deletará um item.
        userCart.splice(index, 1);
    }
}

//! ✅ 4 - Remover um item. By Index.
// async function removeItem(userCart, index){
//     //* Transformando o indice visual do usuario, para o indice do backend.
//     const deleteIndex = index - 1;

//     //* Verificação se o index e maior do que 0, e se é menor que o tamanho do carrinho.
//     if (index >= 0 && index < userCart.length) {
//         userCart.splice(deleteIndex, 1);
//     }
// }

//! ✅ 4 -  Remover item
async function removeItem(userCart, item) {

    //1 - Enctonrar o indice do item.
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //2 - Caso nao encontre o item
    if (indexFound == -1){
        console.log("item não encontrado");
        //* Caso nao encontre entao saia da função.
        return;
    }


    //3 - item > 1 subtrair um item, item = 1 deleter o item.
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    //4 - Caso item = 1 deletar o item
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

//! Função para receber um item no carrinho e exibir o que esta dentro do carrinho.
async function displayCart(userCart){
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) =>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}


