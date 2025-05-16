import React, {useContext, useEffect, useState} from 'react'
import TopNavBar from "../componets/TopNavBar";
import CityCard from "../componets/CityCard";
import BasicStatsButton from "../componets/BasicStatsButton";
import Alert from "../componets/alert";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import SearchBar from "../componets/SearchBar";
import Card from "react-bootstrap/Card";
import {NoiseDataContext} from "../context/communitiesContext";
import CommunityFinder from "../api/CommunityFinder";
import communityFinder from "../api/CommunityFinder";


const Home = () => {
    const navigate = useNavigate();
    const {setCommunities, communities} = useContext(NoiseDataContext);
    const [results, setResults] = useState(communityFinder)
    const [query, setQuery] = useState('')
    const [sortField, setSortField] = useState('name')
    const [sortBy, setSortBy] = useState('ascending')



    const handleClick = () => {
        try {
            navigate('compareall');
        } catch (error) {
            console.error(error);
        }
    };

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

    const handleCommunitySelect = (no) => {
        try {
            navigate(`/community/${no}`);
        } catch (e) {
            console.error("Community number is undefined:", e);
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const filteredResults = communities.filter((item) => {
            if (value === '') return true;
            return item.name.toLowerCase().includes(value.toLowerCase());
        });
        setResults(filteredResults);
        setQuery(value);
        setCommunities(sortFun(filteredResults, sortBy, sortField));
    }

    const sortFun = (result, sortby, sortfeild) => {
        const sortedResults = [...result];
        if (sortby === 'ascending') {
            sortedResults.sort((a, b) => {
                if (a[sortfeild] < b[sortfeild]) return -1;
                if (a[sortfeild] > b[sortfeild]) return 1;
                return 0;
            });
        } else {
            sortedResults.sort((a, b) => {
                if (a[sortfeild] < b[sortfeild]) return 1;
                if (a[sortfeild] > b[sortfeild]) return -1;
            })
        }
        return sortedResults;
    }

    const changeSortField = (feild) => {
        setSortField(feild);
        setCommunities(results, sortBy, feild);
    }

    const changeSortType = (type) => {
        setSortBy(type);
        setCommunities(results, type, sortField);
    }


  return (
    <div>
        <Alert/>
        <TopNavBar/>
        <div>
            <p className="p-4 d-flex flex-column justify-content-center align-items-center min-vh-20">
                Find your community on our interactive map and discover valuable insights about your local sound
                environment.
                Start monitoring your community's noise levels today!
            </p>
            <div className="p-1">
                <Stack gap={2} className="p-3 col-md-5 mx-auto">
                    <Button onClick={handleClick} variant="danger">
                        Comparison of Total Pop and Noise Level
                    </Button>
                </Stack>
            </div>
        </div>
        {/*<form>*/}
        {/*    <div className="form-row align-items-center">*/}
        {/*        <div className="col-auto align-text-bottom" style={{width: '300px'}}>*/}
        {/*            <label className="sr-only">Name</label>*/}
        {/*            <input type="text" className="form-control mb-2, justify-content-between" placeholder="Jane Doe"/>*/}
        {/*        </div>*/}
        {/*        <div className="col-auto">*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</form>*/}
        {/*<form className="form">*/}
        {/*    <div className="form-div">*/}
        {/*        <span>Search:</span>*/}
        {/*        <input*/}
        {/*            type="search"*/}
        {/*            placeholder="Search"*/}
        {/*            style={{paddingRight: '30px'}}*/}
        {/*            onChange={handleChange}*/}
        {/*            value={query}*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*</form>*/}
        <div className="p-4 container-fluid">
            <div className="row col-md-12">
                {communities && communities.map((community, index) => (
                    <div key={index} className="col-md-3 mb-3">
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title className="capitalize-first">{community.name}</Card.Title>
                                <Card.Text>Total residence: {community.tot_pop}</Card.Text>
                                <Button
                                    style={{width: '16rem'}}
                                    variant="outline-primary"
                                    onClick={() => handleCommunitySelect(community.no)}
                                >
                                    Click to view
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home