import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'fas fa-mobile-alt',
      title: 'Easy Mobile Play',
      description: 'Play anytime, anywhere with our user-friendly mobile app. Quick and simple lottery games at your fingertips.',
      color: '#667eea'
    },
    {
      icon: 'fas fa-coins',
      title: 'Daily Rewards',
      description: 'Earn daily bonuses, free tickets, and special rewards. The more you play, the more you earn!',
      color: '#ffd700'
    },
    {
      icon: 'fas fa-shield-alt',
      title: '100% Secure',
      description: 'Bank-level security with encrypted transactions. Your money and personal data are always protected.',
      color: '#4ade80'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Instant Payouts',
      description: 'Win and get paid instantly! No waiting periods, no hidden fees. Your winnings, your way.',
      color: '#ff6b6b'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Multiple Games',
      description: 'Choose from various lottery games, scratch cards, and instant win games. Something for everyone!',
      color: '#9333ea'
    },
    {
      icon: 'fas fa-users',
      title: 'Community',
      description: 'Join a community of millions of players. Share strategies, celebrate wins together!',
      color: '#06b6d4'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2 className="section-title">Why Choose LuckyWin?</h2>
          <p className="section-subtitle">
            Experience the best lottery app with features designed for winners
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <div className="cta-content">
            <h3>Ready to Start Winning?</h3>
            <p>Join thousands of daily winners and start your lottery journey today!</p>
            <button className="btn-cta">
              <i className="fas fa-rocket"></i>
              Get Started Now
            </button>
          </div>
          <div className="cta-visual">
            <div className="winning-animation">
              <div className="confetti"></div>
              <div className="prize-badge">
                <i className="fas fa-gift"></i>
                <span>Free $10 Bonus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
