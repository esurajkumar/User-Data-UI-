
//Redux
const userActionCreator = (data) => { 
    return { 
        type : "USER", 
        payload : data,
    };

};

export default userActionCreator;