

const reducer = (state = [] , action) => {
  switch (action.type) {
      case "CATEGORY_ADDED":
          return[
              ...state,
              {
                  categories: action.payload.category,
                  subcategories: action.payload.subcategory
              }
          ]
          break;
      default:
          return(
              state
          )
          break;
  }
}

export default reducer;