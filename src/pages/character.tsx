import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { APIResponseCharacters } from '../typings/interface';
import "./characters.scss";

interface Props {
  character?: string;
  hogwartsHouse?: string;
  interpretedBy?: string;
  image?: string;

}

function Character({ character, hogwartsHouse, interpretedBy, image }: Props) {
  const [singleCharacter, setSingleCharacter] = useState<APIResponseCharacters>();
  let params = useParams();

  console.log(params);

  useEffect(() => {
    fetch(
      `https://fedeperin-harry-potter-api-en.herokuapp.com/characters/${params.character}`
    )
      .then((response) => response.json())
      .then((singleCharacter) => setSingleCharacter(singleCharacter));
  }, [params.character]);

  //setChild(singleCharacter.child);
  //console.log(singleCharacter.child);

  return (
    <div className="App">
      <h2>{singleCharacter?.character}</h2>
      <p>House: {singleCharacter?.hogwartsHouse}</p>
      <p>Interpreted by: {singleCharacter?.interpretedBy}</p>
      <img alt={singleCharacter?.character} src={singleCharacter?.image}></img>
   
      {singleCharacter?.child &&
        singleCharacter.child.map((child, key) => {
          return (
            <div key={key}>
              <p>{child}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Character;
