//export state and dispatch to global
export default (state = null, action) => {
    //check action type
    switch (action.type) {
        case "select_library":
            return action.payload;
            break;
    
        default:
            return state;
    }
}