import { Link } from 'react-router-dom';
import Logo from './Images/Logo.png';

const Logoc = () => {
  return (
    <>
      <div className="flex flex-col items-center px-2 py-2">
        <div className="flex flex-col items-center">
          <Link to="/home"> {/* Replace '/home' with your desired route */}
            <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Logoc;
