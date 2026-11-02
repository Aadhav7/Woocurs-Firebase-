import React, { useState } from 'react';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert('Please enter your name and email.');
      return;
    }

    // The Day 6 PDF uses an alert for this mini task; no database write is required yet.
    alert(`Registered: ${name.trim()}, ${email.trim()}`);
    setName('');
    setEmail('');
  };

  return (
    <section className="content-card">
      <p className="eyebrow mb-2">Get started</p>
      <h1 className="h2 fw-bold mb-2">Register</h1>
      <p className="text-secondary mb-4">
        Enter your details below to test the registration form.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-control form-control-lg"
            placeholder="Enter your name"
            autoComplete="name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-control form-control-lg"
            placeholder="name@example.com"
            autoComplete="email"
            required
          />
        </div>

        <button type="submit" className="btn btn-success btn-lg">Submit</button>
      </form>
    </section>
  );
}

export default Registration;
