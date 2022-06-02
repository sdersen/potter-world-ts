import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard/bookCard';
import Card from '../components/Card/card';
import { BsChevronDown } from 'react-icons/bs';
import './home.scss';
import { APIResponseBooks, APIResponseCharacters } from '../typings/interface';
import { useNavigate } from 'react-router-dom';

interface Props {
  path?: string;
}

function Home({ path }: Props) {
  const [books, setBooks] = useState<APIResponseBooks[]>();
  const [characters, setCharacters] = useState<APIResponseCharacters[]>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/books')
      .then((response) => response.json())
      .then((books) => setBooks(books));
  }, []);
  // console.log(books);

  useEffect(() => {
    fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/characters')
      .then((response) => response.json())
      .then((characters) => setCharacters(characters));
  }, []);
  // console.log(characters);

  let navigate = useNavigate();
  const nav = (page: string) => {
    navigate(page);
  };

  return (
    <div className='home'>
      <h1>The Potter World</h1>
      <div className='book-container'>
        {books &&
          books.map((book) => {
            return (
              <BookCard
                key={book.id}
                handleClick={() => nav(`/books/${book.id}`)}
                name={book.title}
              />
            );
          })}
      </div>
      <div className='button-arrow-container'>
        <button className='characters-btn' onClick={() => setShow(true)}>Show all characters</button>
        <BsChevronDown
          className={`arrow ${!show ? 'hidden' : ''}`}
          size='40px'
        />
      </div>
      <div className={`character-container ${!show ? 'hidden' : ''}`}>
        <section className='character-container'>
          {characters &&
            characters.map((character) => {
              return (
                <Card
                  key={character.id}
                  //   href={`/characters/${character.id}`}
                  handleClick={() => nav(`/characters/${character.id}`)}
                  name={character.character}
                  src={character.image}
                />
              );
            })}
        </section>
      </div>
    </div>
  );
}

export default Home;
