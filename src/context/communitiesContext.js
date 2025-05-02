import React, {useState, createContext} from 'react';

export const NoiseDataContext = createContext();

export const CommunitiesDataContextProvider = (props) => {
    const [communities, setCommunities] = useState([]);

    return (
        <NoiseDataContext.Provider value={{communities, setCommunities}}>
            {props.children}
        </NoiseDataContext.Provider>
    );
};

export default CommunitiesDataContextProvider;