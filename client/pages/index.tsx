import Head from 'next/head';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { copyFileSync } from 'fs';

export default function Home(): React.ReactElement  {
  const [movieName, setMovieName] = useState<string>("");
  const [movieList, setMovieList] = useState<Array<any>>([]);

  useEffect(() => {
    console.log(movieList)
  }, [movieList]);

  useEffect(() => {
    let movieList = "";
    const fetchMovieList = async (): Promise<void> => {
      movieList = await axios.get("/api/movielist");
    }

    console.log("Movielist", movieList)
    
    fetchMovieList();
  }, [])

  function onMovieNameInput(event:React.ChangeEvent<HTMLInputElement>){
    let inputValue = (event.target as HTMLInputElement).value;
    setMovieName(inputValue);
  }

  async function onClickWatchLater(event: React.MouseEvent<HTMLInputElement>){
    await axios.post("/api/movielist", {
        movieName
    });

    let {data} = await axios.get("/api/movielist");

    setMovieList(data);
  }

  return (
    <div>
      <Head>
        <title>I Theater</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Unlock&display=swap" rel="stylesheet" />
      </Head>
      <div className="wrapper">
        <div className="search">
          <div>
            <h1 className="title">ITheater</h1>
          </div>
          <div>
            <input className="input u-margin-bottom-medium" value={movieName} onChange={onMovieNameInput}/>
          </div>
          <div>
            <button className="btn" onClick={onClickWatchLater}>Watch Later!</button>
          </div>
        </div>
        <div>
          {movieList.map((el:any) => {
            if(movieList.length === 0){
              return (<div></div>)
            } else {
              return (
                <div className="result result__element">
                  <div className="result__row--number">
                    {el.id}
                  </div>
                  <div className="result__row--border"></div>
                  <div className="result__row--title">
                    {el.movieName}
                  </div>
                </div>
              )
            }
          })}

        </div>
      </div>

    </div>
  )
}
