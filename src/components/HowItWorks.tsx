import React from 'react';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Download & Register',
      description: 'Download the LuckyWin app and create your account with your email. Complete your profile to participate in lucky draws!',
      icon: 'fas fa-download',
      color: '#667eea'
    },
    {
      step: '02',
      title: 'Participate in Lucky Draw',
      description: 'Simply use the app daily and your name automatically enters our lucky draw system. No extra steps needed!',
      icon: 'fas fa-dice',
      color: '#ffd700'
    },
    {
      step: '03',
      title: 'Wait for Results',
      description: 'Our system randomly selects winners daily. If your name comes up in the lucky draw, you win instantly!',
      icon: 'fas fa-trophy',
      color: '#ff6b6b'
    },
    {
      step: '04',
      title: 'Prize Distribution',
      description: 'Winners are contacted via email and receive an in-app message. We handle prize distribution directly to your account!',
      icon: 'fas fa-envelope',
      color: '#4ade80'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2 className="section-title">How Lucky Draw Works</h2>
          <p className="section-subtitle">
            Simple lucky draw system - just use the app and win! We contact winners directly.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-card animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="step-number" style={{ backgroundColor: step.color }}>
                {step.step}
              </div>
              <div className="step-icon" style={{ color: step.color }}>
                <i className={step.icon}></i>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <i className="fas fa-arrow-right"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="demo-section">
          <div className="demo-content">
            <div className="demo-phone">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="app-interface">
                    <div className="app-header">
                      <div className="balance">Balance: $125.50</div>
                      <div className="notifications">🔔</div>
                    </div>
                    <div className="lottery-ticket">
                      <div className="ticket-title">Daily Lottery</div>
                      <div className="ticket-numbers">
                        <span>07</span>
                        <span>14</span>
                        <span>21</span>
                        <span>35</span>
                        <span>42</span>
                      </div>
                      <div className="ticket-prize">Prize: $50,000</div>
                    </div>
                    <div className="quick-pick">
                      <button className="quick-pick-btn">Quick Pick</button>
                      <button className="play-btn">Play Now - $2</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="demo-text">
              <h3>Simple Lucky Draw System</h3>
              <p>
                Just download and use our app daily! Your account automatically enters our lucky draw system. 
                Winners are selected randomly and contacted immediately.
              </p>
              <div className="demo-features">
                <div className="demo-feature">
                  <i className="fas fa-envelope"></i>
                  <span>Email winner notification</span>
                </div>
                <div className="demo-feature">
                  <i className="fas fa-mobile-alt"></i>
                  <span>In-app prize messages</span>
                </div>
                <div className="demo-feature">
                  <i className="fas fa-gift"></i>
                  <span>Direct prize distribution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
