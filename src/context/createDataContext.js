import React,{useReducer} from 'react';

export default (reducer, actions,defaultValue) => {
    const Context = React.createContext()
    const Provider = ({children}) => {
        const [state,dispatch] = useReducer(reducer,defaultValue)

        const boundActions={}
        for (let key in actions){
            boundActions[key] = actions[key](dispatch)
        }
        return(
            <Context.Provider value = {{state,...boundActions}}>
                {children}
                </Context.Provider>
        )
    }
    return{Context,Provider}
} 

/*import React,{useReducer} from 'react';

export default (reducer, actions,initialState) => {
    const Context = React.createContext();
    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer,initialState);
        return <Context.Provider value={{state}}>
            {children}
        </Context.Provider>
    }

    return{Context,Provider};
}*/
