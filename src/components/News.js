import React, { useState, useEffect } from 'react';
import NewsEntry from './NewsEntry.js';
import { getAllNews, getNewsWithParams } from '../api/index.js';
import Form from 'react-bootstrap/Form';

function News() {
    // function to get local time in iso format
    const convertToISOFormat = (date) => {
        return date.toLocaleString('sv').replace(' ', 'T').split('T')[0];
    };
    // function to get date x days ago
    const getDateXDaysAgo = (daysAgo, date = new Date()) => {
        const oldDate = new Date(date.getTime());
        oldDate.setDate(date.getDate() - daysAgo);
        return oldDate;
    };
      
    // options for timePeriod are Today, Past 3 Days, Past Week, Past Month, Past Year
    const [timePeriod, setTimePeriod] = useState(convertToISOFormat(new Date()));
    // options for sortBy are Date, Title, Publication, Positivity Score
    const [sortBy, setSortBy] = useState('date');
    // options for sortOrder are Ascending, Descending
    const [sortOrder, setSortOrder] = useState('asc');
    // keyword search
    const [keyword, setKeyword] = useState('');
    // array of news articles
    const [data, setData] = useState();

    useEffect(() => {
        // get news articles from the server
        getNewsWithParams({ startDate: timePeriod, sortBy, sortOrder, keyword })
                        .then(res => setData(res.data.data))
                        .catch(err => console.log(err));
    }, [timePeriod, sortBy, sortOrder, keyword]);

  return (
    <>
        <div className="news-filter-buttons">
            <span>
                <label htmlFor="timePeriod">Time Period: </label>
                <Form.Select id="timePeriod" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)}>
                    <option value={convertToISOFormat(new Date())}>Today</option>
                    <option value={convertToISOFormat(getDateXDaysAgo(3))}>Past 3 Days</option>
                    <option value={convertToISOFormat(getDateXDaysAgo(7))}>Past Week</option>
                    <option value={convertToISOFormat(getDateXDaysAgo(30))}>Past Month</option>
                    <option value={convertToISOFormat(getDateXDaysAgo(365))}>Past Year</option>
                </Form.Select>

                <input type="text" placeholder="Keyword Search" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                
                <label htmlFor="sortBy">Sort By: </label>
                <Form.Select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                    <option value="publication">Publication</option>
                    <option value="positivity_score">Positivity Score</option>
                </Form.Select>
                
                <label htmlFor="sortOrder">Sort Order: </label>
                <Form.Select style={{width: "100px"}} id="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="asc">Ascending</option>
                    <option value="des">Descending</option>
                </Form.Select>
            </span>
        </div>
        
        <div className="news">
            <h2>Results:</h2>
            {data ? (Object.values(data).map(entry => <NewsEntry key={entry.url} {...entry} />)) : <p>Nothing found</p>}
            {(data && data.length === 0) ? <p>Nothing found</p> : null}
        </div>
    </>
  );
}

export default News;
