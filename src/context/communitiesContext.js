import React, {useState, createContext} from 'react';

export const NoiseDataContext = createContext();

export const CommunitiesDataContextProvider = (props) => {
    const [communities] = useState([]);

    return (
        <NoiseDataContext.Provider value={{communities}}>
            {props.children}
        </NoiseDataContext.Provider>
    );
};

export default CommunitiesDataContextProvider;