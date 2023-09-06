import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);

    // eslint-disable-next-line
    const [message, setMessage] = useState('');
    return (
      <>
        {isSent && <h1>Thank you!</h1>}
        {!isSent &&
        <form onSubmit={e => {
            e.preventDefault();
            alert(`Sending: "${message}"`);
            setIsSent(true);
        }}>
            <textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            />
            <br />
            <button type="submit">Send</button>
        </form>
        }
        </>
    );
  }
