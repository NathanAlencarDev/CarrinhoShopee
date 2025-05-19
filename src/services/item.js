//? Analise e levantamento dos casos de uso:

//! Criar o item com um subtotal ja calculado.
//! função responsavel por toda a logica de calculos de um item.
async function createItem(name, price, quantity){

    //* objeto ITEM
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default createItem;
