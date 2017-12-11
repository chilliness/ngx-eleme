// store
export interface AppState {
  flag: boolean;
  food: any;
  goods: any[];
}
export const INIT_APP_STATE: AppState = {
  flag: false,
  food: {},
  goods: []
};

// action
export const FLAG = 'flag';
export const FOOD = 'food';
export const GOODS = 'goods';

// reducer
export function appReducer(state: AppState = INIT_APP_STATE, action: { type: string, payload?: any }) {

  switch (action.type) {
    case FLAG:
      return { ...state, flag: !state.flag };

    case FOOD:
      return { ...state, food: action.payload };

    case GOODS:
      if (!action.payload) {
        // 清除goods列表
        state.goods.forEach((item) => item.cartNum = 0);
        return { ...state, goods: INIT_APP_STATE.goods };
      } else {
        // 点击的这个对象是否已存在
        const temp = state.goods.findIndex((item) => {
          return item.name == action.payload.name && item.info == action.payload.info;
        });
        const arr = [...state.goods];
        if (temp == -1) {
          arr.push(action.payload);
        } else {
          if (action.payload.cartNum < 1) {
            arr.splice(temp, 1);
          } else {
            arr.splice(temp, 1, action.payload);
          }
        }
        return { ...state, goods: arr };
      }

    default:
      return state;
  }

}
