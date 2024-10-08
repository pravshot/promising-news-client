import React, { useState, useEffect } from "react";
import News from "./components/News";
import SearchBar from "./components/SearchBar";
import DateSelection from "./components/DateSelection";
import { getNewsWithParams } from "./api";
import formatTimePeriodToDate from "./utilities/helperFunctions";
import { CircularProgress } from "@mui/material";
import style from "./App.module.css";

function App() {
  const [isLoading, setIsLoading] = useState(true); // for loading animation
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [timePeriod, setTimePeriod] = useState(1); // days ago from today

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      // get news articles from the server
      try {
        const results = await getNewsWithParams({
          startDate: formatTimePeriodToDate(timePeriod),
        });
        // console.log(results.data.articles);
        setArticles(results.data.articles);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchArticles();
  }, [timePeriod]);

  return (
    <div className={style.app}>
      <header className={style.appHeader}>
        <div className={style.logo}>
          <img
            src="newsicon.png"
            alt="News Icon Logo"
            className={style.newsIcon}
          />
          <h2>PROMISING NEWS</h2>
        </div>
        <SearchBar query={searchQuery} setQuery={setSearchQuery} />
        <DateSelection date={timePeriod} setDate={setTimePeriod} />
      </header>
      <main className={style.appMain}>
        {isLoading ? (
          <>
            <br />
            <CircularProgress color="success" />
          </>
        ) : (
          <News
            articles={articles.filter(
              (article) =>
                article.title.toLowerCase().includes(searchQuery) ||
                (article.author &&
                  article.author.toLowerCase().includes(searchQuery)) ||
                (article.publication &&
                  article.publication.toLowerCase().includes(searchQuery)) ||
                (article.description &&
                  article.description.toLowerCase().includes(searchQuery))
            )}
          />
        )}
      </main>
    </div>
  );
}

export default App;
