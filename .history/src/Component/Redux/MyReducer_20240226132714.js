
//Redux

var defaultdata = [];
    
    
    //pasing default value to redux-store
    // id: 9,
    // firstName: "DOg",
    // lastName: "DOg",
    // phone: "DOg",
    // dob: "DOg",
    // gender: "DOg",
    // email: "DOg",
    // password: "DOg",
    
  

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


