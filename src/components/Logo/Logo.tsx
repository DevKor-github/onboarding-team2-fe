import './logo.css';

interface LogoProps {
  size: 'small' | 'large';
}

function Logo({ size }: LogoProps) {
  return (
    <div className={`logo ${size}`}>
      <img src="src/assets/DevKorLogo.svg"></img>
      <p>DEVKOR</p>
    </div>
  );
}

export default Logo;
