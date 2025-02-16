import '../style/Card.css';

interface Card {
  src: string;
  title: string;
  des: string;
}

function Card({src, title, des}: Card) {
  return(
    <div className="card">
      <img 
        src={src}
        alt={title}
        className="card-image"
      />
      <strong className="card-title">
        {title}
      </strong>
      <p className="card-description">
        {des}
      </p>
    </div>
  )
}

export default Card