import { createContext, useContext, useReducer } from "react"
import modalReducer from "../reducer/modal-reducer"


const initialState = {
    isNavModalOpen:false,
    
}


const ModalContext = createContext(initialState)


const ModalProvier = ({children}) =>{

    const [{isNavModalOpen},modalDispatch] = useReducer(modalReducer,initialState)

    return(
        <ModalContext.Provider value={{isNavModalOpen,modalDispatch}}>
            {children}
        </ModalContext.Provider>
    )
}


const useModal = () => useContext(ModalContext)

export {useModal,ModalProvier}