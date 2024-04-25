import TextSizeController from '../../components/textSizeSelector/TextSizeSelector';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <TextSizeController />

      This is a footer
      <br/>This is a br in a footer
      <div>
        <br/>This is a br in a div in a footer
      </div>
    </footer>
  );
}