import './Footer.css';
import ntnuLogo from '/footer/Logo-Ntnu.png';

export default function Footer() {
  return (
    <footer>
      <div className='ntnu-logo'>
        <img src={ntnuLogo} width={100}/>
      </div>
      <div className='disclaimer'>
        This website is a result of a university group project, performed in the course <a target="_blank" href='https://www.ntnu.edu/studies/courses/IDATA2301#tab=omEmnet'>IDATA2301 Web 
        technologies</a>, at <a target="_blank" href='https://www.ntnu.edu/'>NTNU</a>. All the information provided here is a result of imagination. Any 
        resemblance with real companies or products is a coincidence.
      </div>
    </footer>
  );
}