//Redux

var defaultdata = [];
    

    
  

const myReducer = (state = defaultdata, action) => {
    //write the logic to update store data based on the action object

    if (action.type === "USER") {
      state = {
        ...state,
        USER: action.payload,
      };
    }
  
    return state;
  };
  
  export default myReducer;


