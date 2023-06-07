import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      setShows(data);
    };

    fetchShows();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">TV Shows</h2>
      <div className="row">
        {shows.map(show => (
          <div className="col-md-4 mb-4" key={show.show.id}>
            <div className="card show-card">
              <img
                src={show.show.image?.medium || '/placeholder-image.jpg'}
                alt={show.show.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <p className="card-text">Language : {show.show.language}</p>
                <p className="card-text">Gener : {show.show.genres}</p>
                <p className="card-text">Status : {show.show.status}</p>
                <p className="card-text">Rating: {show.show.rating.average}</p>
                <Link to={`/summary/${show.show.id}`} className="btn btn-primary">
                  Show Summary
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
