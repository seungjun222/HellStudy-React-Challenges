// BEFORE
export default function Clock({ time }) {
    let hours = time.getHours();
    if (hours >= 0 && hours <= 6) {
      document.getElementById('time').className = 'night';
    } else {
      document.getElementById('time').className = 'day';
    }
    return (
      <h1 id="time">
        {time.toLocaleTimeString()}
      </h1>
    );
  }

// Runtime Error
// Clock.js: Cannot set properties of null (setting 'className')

// AFTER
export default function Clock({ time }) {
    let hours = time.getHours();
    let className;
    if (hours >= 0 && hours <= 6) {
      className = 'night';
    } else {
      className = 'day';
    }
    return (
      <h1 className={className}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  