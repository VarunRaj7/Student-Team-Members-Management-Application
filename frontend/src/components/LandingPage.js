import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>Team Ozark</h1>
      </header>
      <main className="main-content">
        <h2>Welcome to ProfilePlus Management</h2>
        <p>Manage your team efficiently!</p>
        <div className="button-container">
          <Link to="/add-member">
            <button className="nav-button">Add Member</button>
          </Link>
          <Link to="/view-members">
            <button className="nav-button">View Members</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;