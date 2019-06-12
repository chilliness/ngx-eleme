// 备注，switch返回的值要和state初始值对应
export function appReducer(
  state = {
    cartList: []
  },
  action: { type: string, payload?: any }
) {
  switch (action.type) {
    case 'cart:change':
      const list = [...state.cartList];
      const index = list.findIndex(item => item.id === action.payload.id);

      if (index === -1) {
        list.unshift(action.payload);
      } else {
        action.payload.cartNum > 0 ? list.splice(index, 1, action.payload) : list.splice(index, 1);
      }

      return { ...state, cartList: list };

    case 'cart:clean':
      [...state.cartList].map(item => (item.cartNum = 0));
      return { ...state, cartList: [] };

    default:
      return state;
  }
}
