import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-dice"></i>
              <span>LuckyWin</span>
            </div>
            <p className="footer-description">
              The most trusted lottery app with over 50,000 daily winners. 
              Play responsibly and win big with LuckyWin!
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Games</h4>
            <ul>
              <li><a href="#">Daily Lottery</a></li>
              <li><a href="#">Mega Jackpot</a></li>
              <li><a href="#">Scratch Cards</a></li>
              <li><a href="#">Instant Win</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Download App</h4>
            <p>Get the app and start winning today!</p>
            <div className="app-buttons">
              <a href="https://drive.google.com/file/d/1S2OTvGExMUEQXpLeFE5CSXM0P6aKb3wX/view?usp=drive_link" className="app-button" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-apple"></i>
                <div>
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </a>
              <a href="https://drive.google.com/file/d/1S2OTvGExMUEQXpLeFE5CSXM0P6aKb3wX/view?usp=drive_link" className="app-button" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google-play"></i>
                <div>
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; 2024 LuckyWin. All rights reserved.</p>
            <div className="footer-badges">
              <span className="badge">
                <i className="fas fa-shield-alt"></i>
                SSL Secured
              </span>
              <span className="badge">
                <i className="fas fa-certificate"></i>
                Licensed
              </span>
              <span className="badge">
                <i className="fas fa-users"></i>
                50K+ Users
              </span>
            </div>
          </div>
          <div className="responsible-gaming">
            <p>
              <i className="fas fa-exclamation-triangle"></i>
              Play Responsibly. Must be 18+ to play.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
