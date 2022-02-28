import { createContext, useReducer } from "react";

const DataContext = createContext();

const initialState = {
    data: [],
    error: {},
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: action.payload,
            }
        case 'DATA_CHART':
            return {
                data: action.payload,
                error: {},
            }
        default:
            return state;
    }
}

const DataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const data = {state, dispatch}

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
export {DataContextProvider};