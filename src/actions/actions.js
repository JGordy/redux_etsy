export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export const filterProducts = function (filterType) {
  return {
    type: FILTER_PRODUCTS,
    payload: filterType
  }
}

// const makeActionCreator = function (actionType) {
//   return function (filterType) {
//     return {
//       type: actionType,
//       payload: filterType
//     }
//   }
// }
//
// export const filterProducts = makeActionCreator(FILTER_PRODUCTS);
