import { Divider } from "@mui/material";
import style from "./NewsEntry.module.css";

const placeholderImage = "placeholderimage.png";

function NewsEntry({
  title,
  author,
  description,
  date,
  url,
  image_url,
  publication,
}) {
  const formatedTitle = formatTitle(title);
  const formatedPublication = formatPublication(publication, title);
  const formatedDate = formatDate(date);
  const formatedAuthor = formatAuthor(author);

  return (
    <div className={style.newsEntry} onClick={() => window.open(url, "_blank")}>
      <div>
        <img
          src={image_url || placeholderImage}
          alt={formatedTitle}
          className={style.newsImage}
        />
        <h2 className={style.newsTitle}>{formatedTitle}</h2>
      </div>
      <div className={style.newsFooterContainer}>
        <Divider />
        <div className={style.newsFooter}>
          <p>
            <strong>{formatedPublication}</strong>
            {author ? " • " + formatedAuthor : ""}
          </p>
          <p>{formatedDate}</p>
        </div>
      </div>
    </div>
  );
}

function formatTitle(title) {
  return title.split(" - ").slice(0, -1).join(" - ");
}
function formatPublication(publication, title) {
  return publication
    ? publication.toUpperCase()
    : title.split(" - ").slice(-1).toUpperCase();
}

function formatAuthor(author) {
  if (!author) {
    return "";
  }
  const authorList = author
    .split(",")
    .map((name) => capitalizeName(name.trim()));
  if (authorList.length > 1) {
    return `${authorList[0]} and others`;
  }
  return authorList[0];
}
function capitalizeName(name) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInS = (now - date) / 1000;

  const diffInMinutes = Math.floor(diffInS / 60);
  const diffInHours = Math.floor(diffInS / (60 * 60));
  const diffInDays = Math.floor(diffInS / (60 * 60 * 24));
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInMinutes < 1) {
    return "Now";
  } else if (diffInHours < 1) {
    return `${diffInMinutes}m ago`;
  } else if (diffInDays < 1) {
    return `${diffInHours}h ago`;
  } else if (diffInWeeks < 1) {
    return `${diffInDays}d ago`;
  } else if (diffInMonths < 1) {
    return `${diffInWeeks}w ago`;
  } else if (diffInYears < 1) {
    return `${diffInMonths}mo ago`;
  } else {
    return `${diffInYears}y ago`;
  }
}

export default NewsEntry;
