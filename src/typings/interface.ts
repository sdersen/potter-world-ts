export interface APIResponseBooks {
  id: number;
  title: string;
  releaseDay: string;
  author: string;
  description: string;
}

export interface APIResponseCharacters {
  id: number;
  character: string;
  nickname: string;
  hogwartsStudent: boolean;
  description: string;
  hogwartsHouse: string;
  interpretedBy: string;
  child: string[] ;
  image: string;
}