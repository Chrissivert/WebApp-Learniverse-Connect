import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='container'>
        <div className='contact-us'>
          <h3>Contact Us</h3>
          <ul>
            <li>Address: Larsgårdsvegen 2, Ålesund</li>
            <li><a href='group01webapp@outlook.com'>Email: info@learniverse-connect.com</a></li>
            <li>Phone: (+47) 735 95 000</li>
          </ul>
        </div>
        <div className='disclaimer'>
          <p>This website is a result of a university group project, performed in the course <a target="_blank" href='https://www.ntnu.edu/studies/courses/IDATA2301#tab=omEmnet'>IDATA2301 Web technologies</a>, at <a target="_blank" href='https://www.ntnu.edu/'>NTNU</a>. All the information provided here is a result of imagination. Any resemblance with real companies or products is a coincidence.</p>
        </div>
        <p className='copyright'>Learniverse Connect © 2024</p>
      </div>
    </footer>
  );
}