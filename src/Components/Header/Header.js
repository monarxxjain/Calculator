import logo from '../../logo.svg';
import './Header.css';

function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">React Calculator </p>
        <p className="App-developer"> ~ Monark Jain</p>
      </header>
  );
}

export default Header;
