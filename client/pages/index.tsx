import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieListType } from '../interface/movie';

export default function Home(): React.ReactElement {
  const [movieName, setMovieName] = useState<string>('');
  const [movieList, setMovieList] = useState<Array<MovieListType>>([]);

  useEffect(() => {
    console.log(movieList);
  }, [movieList]);

  useEffect(() => {
    let tmp: any = '';

    const fetchMovieList = async (): Promise<void> => {
      const { data } = await axios.get('/api/movielist');
      tmp = data;

      setMovieList(tmp);
    };

    fetchMovieList();
  }, []);

  function onMovieNameInput(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = (event.target as HTMLInputElement).value;
    setMovieName(inputValue);
  }

  async function onClickWatchLater() {
    await axios.post('/api/movielist', {
      movieName,
    });

    const { data } = await axios.get('/api/movielist');

    setMovieList(data);
  }

  return (
    <div>
      <Head>
        <title>I Theater</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unlock&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="wrapper">
        <div className="search">
          <div>
            <h1 className="title">ITheater</h1>
          </div>
          <div>
            <input
              className="input u-margin-bottom-medium"
              value={movieName}
              onChange={onMovieNameInput}
            />
          </div>
          <div>
            <button className="btn" onClick={onClickWatchLater}>
              Watch Later!
            </button>
          </div>
        </div>
        <div>
          {movieList.map((el: MovieListType, index: number) => {
            if (movieList.length === 0) {
              return <div></div>;
            } else {
              return (
                <div key={index} className="result result__element">
                  <div className="result__row--number">{el.id}</div>
                  <div className="result__row--border"></div>
                  <div className="result__row--title">{el.movieName}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
