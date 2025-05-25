import React, {useState, createContext} from 'react';

export const NoiseDataContext = createContext();

export const CommunitiesDataContextProvider = (props) => {
    const [communities, setCommunities] = useState([]);
    const [selectedCommunity, setSelectedCommunity] = useState(null);

    return (
        <NoiseDataContext.Provider value={{setCommunities, communities, selectedCommunity, setSelectedCommunity}}>
            {props.children}
        </NoiseDataContext.Provider>
    );
};

export default CommunitiesDataContextProvider;