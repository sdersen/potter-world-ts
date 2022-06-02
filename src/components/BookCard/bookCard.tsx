import "./bookCard.scss";

interface Props {
  name: string;
  href?: any;
  src?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function BookCard({ name, href, handleClick }: Props) {
  return (
    <div className="book-card">
        <h5>{name}</h5>
        {/* <a href={href} >Read more</a> */}
        <button className='book-btn' onClick={handleClick}>Read more</button>
    </div>
  );
}

export default BookCard;
