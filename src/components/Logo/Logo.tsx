import './logo.css';
import logo from '../../assets/DevKorLogo.svg';

interface LogoProps {
  size: 'small' | 'large';
}

function Logo({ size }: LogoProps) {
  return (
    <div className={`logo ${size}`}>
      <img src={logo}></img>
      <p>DEVKOR</p>
    </div>
  );
}

export default Logo;
