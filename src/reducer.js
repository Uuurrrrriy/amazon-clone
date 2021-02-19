export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Set_User":
      return {
        ...state,
        user: action.user,
      };
    case "Add_To_Busket":
      // Logic for adding to busket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Remove_From_Busket":
      // Logic for removing from busket
      //   let newBusket = [...state.basket].filter(
      //     (busketIndex) => busketIndex.id !== action.id
      //   );

      let newBusket = [...state.basket];

      const index = state.basket.findIndex(
        (busketIndex) => busketIndex.id === action.id
      );

      if (index >= 0) {
        newBusket.splice(index, 1);
      } else {
        console.warn(` Cant remove product `);
      }

      return {
        ...state,
        basket: newBusket,
      };
    default:
      return state;
  }
};
