function NewsEntry(props) {
    const showMetaInfo = () => {
        const author = props.author ? props.author : 'Unknown';
        const date = props.date ? props.date.split('T')[0] : 'Unknown';
        const publication = props.publication ? props.publication.toUpperCase() : 'Unknown';
        const positivity_score = props.positivity_score ? props.positivity_score.toFixed(3) : 'Unknown';
        return (
            <p>Author: <b>{author}</b> | Date Published: <b>{date}</b> | Source: <b>{publication}</b> | Positivity Score: <b>{positivity_score}</b></p>
        )
    }

  return (
    <div className="news-entry">
      <a href={props.url}><h3>{props.title}</h3></a>
      {showMetaInfo()}
      <small>{props.description}</small>
    </div>
  );
}   

export default NewsEntry;