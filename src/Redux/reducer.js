

const reducer = (state = [] , action) => {
  switch (action.type) {
      case "CATEGORY_ADDED":
          return[
              ...state,
              {
                  categories: action.payload.category,
                  subcategories: action.payload.subCategory
              }
          ]
          break;
          case "CARD_ID":
              return[
                  ...state,
                  {
                      cardIds : action.payload.cardId
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