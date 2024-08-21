import './header.css';

interface headerProps {
  start?: React.ReactNode; // Allow anything that can be rendered by React
  end?: React.ReactNode;
}

function Header({ start, end }: headerProps) {
  return (
    <div className="header justify-between items-center self-stretch flex shadow-bottom">
      {start}
      {end}
    </div>
  );
}

export default Header;
