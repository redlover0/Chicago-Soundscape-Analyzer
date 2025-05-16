import React, {useContext, useEffect, useState} from 'react'
import TopNavBar from "../componets/TopNavBar";
import Alert from "../componets/alert";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import Card from "react-bootstrap/Card";
import {NoiseDataContext} from "../context/communitiesContext";
import CommunityFinder from "../api/CommunityFinder";

const Home = () => {
    const navigate = useNavigate();
    const {setCommunities, communities} = useContext(NoiseDataContext);
    const [results, setResults] = useState([])
    const [query, setQuery] = useState('')
    const [sortField, setSortField] = useState('name')
    const [sortBy, setSortBy] = useState('ascending')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');

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
            } catch (e) {
                console.error(e);
                setError('Failed to fetch communities');
            }
        };

        fetchData();
    }, [setCommunities]);

    useEffect(() => {
        const fetchSearchData = async () => {
            if (!query) return;

            try {
                const response = await CommunityFinder.get("/search", {
                    params: {
                        name: query
                    }
                });
                setResults(response.data.results || []);
                setError('');
            } catch (e) {
                console.error(e);
                setError('Search failed');
                setResults([]);
            }
        }

        const timeoutId = setTimeout(() => {
            fetchSearchData();
        }, 200);

        return () => clearTimeout(timeoutId);
    }, [query])

    const handleCommunitySelect = (no) => {
        try {
            navigate(`/community/${no}`);
        } catch (e) {
            console.error("Community number is undefined:", e);
        }
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const sortData = (data, sortBy, sortField) => {
        return [...data].sort((a, b) => {
            const aVal = a[sortField];
            const bVal = b[sortField];

            if (sortBy === 'ascending') {
                return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
            }
            return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
        });
    }

    const handleSortFieldChange = (field) => {
        setSortField(field);
        const sortedData = sortData(communities, sortBy, field);
        setCommunities(sortedData);
    }

    const handleSortDirectionChange = (direction) => {
        setSortBy(direction);
        const sortedData = sortData(communities, direction, sortField);
        setCommunities(sortedData);
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
            <div className="d-flex justify-content-center mb-4">
                <div className="col-md-6">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search communities..."
                        onChange={handleChange}
                        value={query}
                    />
                </div>
            </div>
            {error && (
                <div className="alert alert-danger text-center">
                    {error}
                </div>
            )}
            <div className="p-4 container-fluid">
                <div className="row col-md-12">
                    {(query ? results : communities).map((community, index) => (
                        <div key={community.no || index} className="col-md-3 mb-3">
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