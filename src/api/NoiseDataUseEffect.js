import {useContext, useEffect} from "react";
import {NoiseDataContext} from "../context/communitiesContext";
import CommunityFinder from "./CommunityFinder";

export const NoiseDataUseEffect = () => {
    const {setCommunities, communities} = useContext(NoiseDataContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CommunityFinder.get("/");
                setCommunities(response.data);
                console.log("Here's the response you want:", response.data);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, [setCommunities]);
}