import React, { useEffect, useState } from 'react';

function ShowSummary({ match }) {
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const fetchSummary = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${match.params.showId}`);
      const data = await response.json();
      setSummary(data.summary);
    };

    fetchSummary();
  }, [match.params.showId]);

  return (
    <div>
      <h2>Show Summary</h2>
      <p>{summary}</p>
      <button onClick={() => window.location.href=`/book/${match.params.showId}`}>Book Ticket</button>
    </div>
  );
}

export default ShowSummary;
