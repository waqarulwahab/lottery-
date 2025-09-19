import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content animate-fade-up">
          <h1 className="hero-title">
            Win Big, Play Daily
            <span className="gradient-text"> Earn Daily!</span>
          </h1>
          <p className="hero-subtitle">
            Join millions of players in the most exciting lottery app. 
            Play daily games, win instant rewards, and become the next millionaire!
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">$2.5M+</span>
              <span className="stat-label">Total Winnings</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Happy Winners</span>
            </div>
            <div className="stat">
              <span className="stat-number">Daily</span>
              <span className="stat-label">New Draws</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="https://drive.google.com/file/d/1S2OTvGExMUEQXpLeFE5CSXM0P6aKb3wX/view?usp=drive_link" className="btn-hero-primary animate-pulse" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-download"></i>
              Download Free App
            </a>
            <button className="btn-hero-secondary">
              <i className="fas fa-play"></i>
              Watch Demo
            </button>
          </div>

          <div className="hero-features">
            <span><i className="fas fa-check"></i> Instant Withdrawals</span>
            <span><i className="fas fa-check"></i> Daily Bonuses</span>
            <span><i className="fas fa-check"></i> Secure & Safe</span>
          </div>
        </div>

        <div className="hero-visual animate-float">
          <div className="lottery-balls">
            <div className="ball ball-1">7</div>
            <div className="ball ball-2">21</div>
            <div className="ball ball-3">35</div>
            <div className="ball ball-4">42</div>
            <div className="ball ball-5">49</div>
          </div>
          
          <div className="jackpot-display animate-glow">
            <div className="jackpot-label">Today's Jackpot</div>
            <div className="jackpot-amount">$1,250,000</div>
            <div className="jackpot-timer">
              <i className="fas fa-clock"></i>
              Next Draw: 02:45:30
            </div>
          </div>

          <div className="floating-coins">
            <div className="coin coin-1">💰</div>
            <div className="coin coin-2">🏆</div>
            <div className="coin coin-3">💎</div>
            <div className="coin coin-4">🎰</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
