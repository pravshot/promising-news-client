import style from "./NewsEntry.module.css";
import { useState } from "react";

const placeholderImage = "imagenotfound.jpg";

function NewsEntry({
  title,
  author,
  description,
  date,
  url,
  image_url,
  publication,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const formatedTitle = title.split(" - ").slice(0, -1).join(" - ");
  const formatedPublication = publication
    ? publication.toUpperCase()
    : title.split(" - ").slice(-1).toUpperCase();
  return (
    <div
      className={style.newsEntry}
      onClick={() => window.open(url, "_blank")}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img
        src={image_url || placeholderImage}
        alt={title}
        className={style.newsImage}
      />
      {!isHovered ? (
        <h2 className={style.newsTitle}>{formatedTitle}</h2>
      ) : (
        <div className={style.newsInfo}>
          <h2>{formatedTitle}</h2>
          <p className={style.newsDatePublication}>
            {formatedPublication + " " + date.slice(5)}
          </p>
          {description && (
            <p className={style.newsDescription}>{description.slice(0, 300)}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default NewsEntry;
