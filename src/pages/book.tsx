import { useEffect, useState } from 'react';
import './book.scss';
import { APIResponseBooks } from '../typings/interface';
import { useParams } from 'react-router-dom';

interface Props {
  title?: string;
  releaseDay?: string;
  description?: string;
}

function Book({ title, releaseDay, description }: Props) {
  const [book, setBook] = useState<APIResponseBooks>();
  let params = useParams();
  console.log(params);
  

  useEffect(() => {
    fetch(
      `https://fedeperin-harry-potter-api-en.herokuapp.com/books/${params.book}`
    )
      .then((response) => response.json())
      .then((book) => setBook(book));
  }, [params.book]);

  return (
    <div className='book'>
      <h2>{book?.title}</h2>
      <p>{book?.releaseDay}</p>
      <p>{book?.description}</p>
    </div>
  );
}

export default Book;
