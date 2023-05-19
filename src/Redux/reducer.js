

const reducer = (state = [] , action) => {
  switch (action.type) {
      case "CATEGORY_ADDED":
          return[
              ...state,
              {
                  categories: action.payload.category,
                  subcategories: action.payload.subcategory,
                  thirdcategory: action.payload.thirdcategory,
                  iid: action.payload.iid
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