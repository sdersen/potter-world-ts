import './card.scss';

interface Props {
  name?: string;
  href?: any;
  src?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}

function Card({ name, href, src, handleClick }: Props) {
  return (
    <div className='card' ref={href}>
      <div className='name-container'>
        <h4>{name}</h4>
      </div>
      <img src={src} alt={name}></img>
      {/* <a href={href}>Read more</a> */}
      <button className='btn' onClick={handleClick}>Read more</button>

    </div>
  );
}

export default Card;
