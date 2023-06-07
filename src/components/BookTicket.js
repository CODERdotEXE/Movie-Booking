import React from 'react';

function BookTicket({ match }) {
  const handleSubmit = event => {
    event.preventDefault();
    const ticketData = {
      name: event.target.name.value,
      email: event.target.email.value
      // Add any other relevant form fields
    };
    // Store ticketData in local or session storage
    console.log(ticketData);
  };

  return (
    <div>
      <h2>Book Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        {/* Add any other relevant form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookTicket;
