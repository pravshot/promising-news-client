import style from "./NewsEntry.module.css";

const placeholderImage =
  "https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-1024.png";

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
        src={image_url || placeholderImage}
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
      {description && (
        <p className={style.newsDescription}>{description.slice(0, 200)}</p>
      )}
    </div>
  );
}

export default NewsEntry;
