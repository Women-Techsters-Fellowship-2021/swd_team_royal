import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/main.css'

const Spinner = () => {
  return (
    <div id="preloader">
      <FontAwesomeIcon icon={['fas','spinner']}id="preloader" className="icon spin-it" aria-hidden="true" />
    </div>
  );
};

export default Spinner;
