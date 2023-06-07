import React, { useEffect, useState } from 'react';

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
    <div>
      <h2>TV Shows</h2>
      {shows.map(show => (
        <div key={show.show.id}>
            <h3>{show.show.name}</h3>
            <table>
                <tr>
                <td><p>{show.show.language}</p></td>
                <td><p>{show.show.genres}</p></td>
                <td><p>{show.show.status}</p></td>
                <td><p>{show.show.url}</p></td>
                </tr>
            </table>
            
          
          <button onClick={() => window.location.href=`/summary/${show.show.id}`}>Show Summary</button>
        </div>
      ))}
    </div>
  );
}

export default ShowList;
