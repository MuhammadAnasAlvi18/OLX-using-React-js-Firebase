const reducer = (state = [], action) => {  
    switch (action.type) {
      case "CATEGORY_ADDED":
        return [
          ...state,
          {
            categories: action.payload.category,
            subcategories: action.payload.subcategory,
            thirdcategory: action.payload.thirdcategory,
            iid: action.payload.iid
          }
        ];
  
      case "CARD_ID":
        return [
          ...state,
          {
            cardIds: action.payload.cardId
          }
        ];
  
      default:
        return state;
    }
  };
  
  export default reducer;
  