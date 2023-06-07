import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookTicket() {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ticketCount: 1,
  });

  useEffect(() => {
    const fetchShow = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
      const data = await response.json();
      setShow(data);
    };

    fetchShow();
  }, [showId]);

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    console.log(formData);
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="mb-4">Book Tickets</h2>
      <div className="card show-card">
        <div className="card-body">
          <h5 className="card-title">Show : {show.name}</h5>
          <p className="card-text">Language : {show.language}</p>
          <p className="card-text">Premiered : {show.premiered}</p>

    
          <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="name" className="form-label">Name</label>
    <input
      type="text"
      className="form-control"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="email" className="form-label">Email</label>
    <input
      type="email"
      className="form-control"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="ticketCount" className="form-label">Number of Tickets</label>
    <input
      type="number"
      className="form-control"
      id="ticketCount"
      name="ticketCount"
      min="1"
      value={formData.ticketCount}
      onChange={handleInputChange}
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Book Now
  </button>
</form>
        </div>
      </div>
    </div>
  );
}

export default BookTicket;
