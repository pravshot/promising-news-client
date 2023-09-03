import NewsEntry from "./NewsEntry.js";
import style from "./News.module.css";

function News({ articles }) {
  return articles.length > 0 ? (
    <div className={style.articleContainer}>
      {articles.map((article) => (
        <NewsEntry
          key={article._id}
          title={article.title}
          author={article.author}
          description={article.description}
          date={article.date.split("T")[0]}
          url={article.url}
          image_url={article.image_url}
          publication={article.publication}
        />
      ))}
    </div>
  ) : (
    <h2>No articles found😔</h2>
  );
}

export default News;
