import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/App.css';

function ShowSummary() {
  const { showId } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const fetchSummary = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
      const data = await response.json();
      setSummary(data.summary);
    };

    fetchSummary();
  }, [showId]);

  return (
    <div className="container summary-container">
      <h2 className="mb-4">Show Summary</h2>
      <p>{summary}</p>
      <a href={`/book/${showId}`} className="btn btn-primary">
        Book Ticket
      </a>
    </div>
  );
}

export default ShowSummary;
