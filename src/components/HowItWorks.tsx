import React from 'react';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Download & Register',
      description: 'Download the LuckyWin app and create your account in seconds. Get a welcome bonus to start playing!',
      icon: 'fas fa-download',
      color: '#667eea'
    },
    {
      step: '02',
      title: 'Choose Your Game',
      description: 'Select from daily lotteries, instant scratch cards, or jackpot games. Pick your lucky numbers!',
      icon: 'fas fa-dice',
      color: '#ffd700'
    },
    {
      step: '03',
      title: 'Play & Win',
      description: 'Purchase tickets, watch live draws, and check results instantly. Win prizes every day!',
      icon: 'fas fa-trophy',
      color: '#ff6b6b'
    },
    {
      step: '04',
      title: 'Get Paid',
      description: 'Withdraw your winnings instantly to your bank account or digital wallet. No delays, no hassle!',
      icon: 'fas fa-money-bill-wave',
      color: '#4ade80'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Start winning in 4 simple steps. It's that easy!
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
              <h3>See It In Action</h3>
              <p>
                Our intuitive interface makes playing lottery games fun and easy. 
                With just a few taps, you can select numbers, buy tickets, and check results.
              </p>
              <div className="demo-features">
                <div className="demo-feature">
                  <i className="fas fa-lightning-bolt"></i>
                  <span>Instant ticket purchase</span>
                </div>
                <div className="demo-feature">
                  <i className="fas fa-bell"></i>
                  <span>Live draw notifications</span>
                </div>
                <div className="demo-feature">
                  <i className="fas fa-chart-line"></i>
                  <span>Real-time results</span>
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
