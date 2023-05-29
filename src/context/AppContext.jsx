import React, {createContext, useReducer} from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload)
            };
        default:
            return state;
    }
};

const initialState = {
    products: [
        { id: 6806211560242120002, name: "A Book", price: 100 },
        { id: 6809211560542128002, name: "A Laptop", price: 200 },
    ]
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider value={{products: state.products, dispatch}}>
            {props.children}
        </AppContext.Provider>
    )
}