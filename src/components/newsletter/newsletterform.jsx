import { useState } from 'react';
import { decode } from 'html-entities';
import './newsletter.css'

const NewsletterForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }


   /* Handle Input Key Event */

  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  const getMessage = (message) => {
    if ( !message ) {
     return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
     return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode( formattedMessage ) : null;
  }

  return (
    <section>
            <h5>Newsletter</h5>
             <h2>Zapisz się</h2>

      <div className="container newsletter__container">
        <div>
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Email"
            className="input"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleFormSubmit}>
            Zapisz Się
          </button>
        </div>
      </div>
      <div className="newsletter-form-info">
        {status === "sending" && <div>Wysyłam...</div>}
        {status === "error" || error ? (
          <div className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {status === "success" && status !== "error" && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </section>
  );
}

export default NewsletterForm