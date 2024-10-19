const modalReducer = (state,{type,payload}) =>{
    switch(type){
        case "TOGGLE_NAVMODAL":
            return{
                ...state,
                isNavModalOpen : !state.isNavModalOpen
            }

        default:
            return state


        
    }
}
export default modalReducer