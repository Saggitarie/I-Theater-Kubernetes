import Head from 'next/head';
import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Home(): React.ReactElement  {
  const [movieName, setMovieName] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    console.log(movieList);
  }, [movieList]);

  function onMovieNameInput(event:React.ChangeEvent<HTMLInputElement>){
    let inputValue = (event.target as HTMLInputElement).value;
    setMovieName(inputValue);
    console.log(movieName);
  }

  async function onClickWatchLater(event: React.MouseEvent<HTMLInputElement>){
    await axios.post("/api/movielist", {
        movieName
    });

    setMovieList(await axios.get("/api/movielist"));
  }

  return (
    <div>
      <Head>
        <title>I Theater</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <input value={movieName} onChange={onMovieNameInput}/>
      </div>
      <div>
        <button onClick={onClickWatchLater}>Watch Later!</button>
      </div>
    </div>
  )
}
