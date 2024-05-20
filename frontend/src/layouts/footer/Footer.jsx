import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer-container' aria-labelledby='footer-heading'>
      <div className='container'>
        <div className='company-title'>
          <img src="/logo/white_icon.png" alt="Learniverse-Connect's Logo" className="learniverse-connect-logo" />
          <h1 id='footer-heading'>Learniverse Connect</h1>
        </div>
        <hr />
        <div className='footer-info'>
          <section className='contact-us' aria-labelledby='contact-heading'>
            <h2 id='contact-heading'>Contact Us</h2>
            <ul>
              <li>Address: Larsgårdsvegen 2, Ålesund</li>
              <li><a href='mailto:info@learniverse-connect.com'>E-mail: info@learniverse-connect.com</a></li>
              <li>Phone: (+47) 735 95 000</li>
            </ul>
          </section>
        </div>
        <div className='disclaimer'>
          <p>This website is a result of a university group project, performed in the course <a target="_blank" rel="noopener noreferrer" href='https://www.ntnu.edu/studies/courses/IDATA2301#tab=omEmnet'>IDATA2301 Web technologies</a>, at <a target="_blank" rel="noopener noreferrer" href='https://www.ntnu.edu/'>NTNU</a>. All the information provided here is a result of imagination. Any resemblance with real companies or products is a coincidence.</p>
        </div>
        <hr />
        <p className='copyright'>Learniverse Connect © 2024</p>
      </div>
    </footer>
  );
}
