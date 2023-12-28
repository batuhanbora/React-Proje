export const cart = (state, action) => {
    switch (state.cart) {
        case true:
            return {
                cart:false
            }
        case false:
            return {
                cart: true
            }    
        default:
            break;
    }
}

