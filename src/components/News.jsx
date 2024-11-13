import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const News = () => {
    const [news, setNews] = useState([]);
    const apiUrl = process.env.REACT_APP_API;
    console.log(apiUrl);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiUrl}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setNews(response.data.articles);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchData();
    }, [apiUrl]);

    return (
        <NewsContainer>
            {news.map((item, index) => (
                <NewsItem key={index}>
                    {item.urlToImage && <img src={item.urlToImage} alt={item.title} />}
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </NewsItem>
            ))}
        </NewsContainer>
    );
};

export default News;

const NewsContainer = styled.div`
    background: black;
    color: white;
    padding: 10px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const NewsItem = styled.div`
    background: #333;
    padding: 15px;
    border-radius: 5px;
    overflow: hidden; /* Prevent overflow within the item */

    img {
        max-width: 100%;
        height: auto;
        display: block;
        margin-bottom: 10px;
    }
`;