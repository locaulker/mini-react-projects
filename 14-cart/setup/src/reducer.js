const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }

  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter(cartItem => cartItem.id !== action.payload)
    }
  }

  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, qty: cartItem.qty + 1 }
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
  }

  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map(cartItem => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, qty: cartItem.qty - 1 }
        }
        return cartItem
      })
      .filter(cartItem => cartItem.qty !== 0)
    return { ...state, cart: tempCart }
  }

  if (action.type === 'GET_TOTALS') {
    let { total, qty } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, qty } = cartItem
        const itemTotal = price * qty

        cartTotal.total += itemTotal
        cartTotal.qty += qty
        return cartTotal
      },
      {
        total: 0,
        qty: 0
      }
    )
    total = parseFloat(total.toFixed(2))

    return { ...state, total, qty }
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false }
  }

  return state
}

export default reducer
