import React, { useState, createContext} from 'react';

export const noiseDataContext = createContext();

export const communitiesDataContextProvider = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(null);

  const addData = () => {}
}

const communitiesContext = () => {
  return (
    <div>communitiesContext</div>
  )
}

export default communitiesContext