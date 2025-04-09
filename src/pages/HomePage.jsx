import { Link } from 'react-router-dom';
import portrait from '../assets/portrait.jpg';

export default function HomePage() {
  return (
    <div className="container pt-4 text-center">
      <h1>Tanner Chamberlain</h1>
      <div className="d-flex flex-column align-items-center">
        <img
          src={portrait}
          alt="Tanner Chamberlain"
          className="img"
          style={{ maxWidth: '400px', height: 'auto', marginBottom: '20px' }}
        />
        <p>Aspiring certified full-stack developer</p>
        <Link to="/about" className="btn btn-primary mt-3">
          Learn More About Me
        </Link>
      </div>
    </div>
  );
}
