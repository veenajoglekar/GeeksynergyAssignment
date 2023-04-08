import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    setLoading(true);
    getMovieData();
  }, []);

  const getCustDate = (dt) => {
    return new Date(dt).getDate() + " " + months[new Date(dt).getMonth()];
  };

  const getMovieData = () => {
    axios
      .post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        sort: "voting",
        genre: "all",
      })
      .then((res) => {
        console.log(res);
        setMovieData(res.data.result);
        setLoading(false)
      });
  };

  return (
    <>
      <div className="container-fluid mt-4">
        {loading ? (
          <>
            <div className="container">
              <h1>Loading...</h1>
            </div>
          </>
        ) : (
          <>
            {movieData.map((movie) => {
              return (
                <div class="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="container">
                    <div class="row g-0 mt-2">
                      <div class="col-md-3">
                        <img
                          src={movie.poster}
                          class="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body" style={{ textAlign: "left" }}>
                          <h5 class="card-title">{movie.title}</h5>
                          <p class="card-text">
                            <small class="text-body-secondary">
                              {"Genre : " + movie.genre}
                            </small>
                          </p>
                          <p class="card-text">
                            <small class="text-body-secondary">
                              {"Director : " + movie.director.join(",")}
                            </small>
                          </p>
                          <p class="card-text">
                            <small class="text-body-secondary">
                              {"Starring : " + movie.stars.join(",")}
                            </small>
                          </p>
                          <p class="card-text">
                            <small class="text-body-secondary">
                              {"Mins | English | " +
                                getCustDate(movie.releasedDate)}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary mt-2 mb-2 w-100">
                      Watch trailer
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
