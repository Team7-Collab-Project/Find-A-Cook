import Button from './components/Button'
import { Routes, Route, Link} from 'react-router-dom'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [currentPage, setCurrentPage] = useState('landing');
  return (
    <div>
      <h1>Welcome to My App</h1>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default LandingPage;