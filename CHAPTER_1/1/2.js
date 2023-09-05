// BEFORE

export default function Profile() {
    return
      <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
  }

// Something isn’t right about this return statement. Can you fix it?

// AFTER

export default function Profile() {
    return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
  }