import style from "./NewsEntry.module.css";

function NewsEntry({
  title,
  author,
  description,
  date,
  url,
  image_url,
  publication,
}) {
  return (
    <div className={style.newsEntry} onClick={() => window.open(url, "_blank")}>
      <img
        src={image_url || "client/public/placeholder-image.jpg"}
        alt={title}
        className={style.newsImage}
      />
      <h2 className={style.newsTitle}>{title}</h2>
      <div className={style.newsInfo}>
        {author && <p className={style.newsAuthor}>{author}</p>}
        <p className={style.newsDate}>{date.slice(5)}</p>
        {publication && (
          <p className={style.newsPublication}>{publication.toUpperCase()}</p>
        )}
      </div>
      <p className={style.newsDescription}>{description.slice(0, 200)}</p>
    </div>
  );
}

export default NewsEntry;
