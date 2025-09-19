import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      avatar: '👩‍💼',
      rating: 5,
      text: 'I won $25,000 on my third day using LuckyWin! The app is so easy to use and payments are instant. Best lottery app ever!',
      amount: '$25,000',
      game: 'Daily Jackpot'
    },
    {
      id: 2,
      name: 'Muhammad Ali',
      location: 'London, UK',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Been using LuckyWin for 6 months now. Won multiple small prizes and one big win of $50K. Highly recommend!',
      amount: '$50,000',
      game: 'Mega Lottery'
    },
    {
      id: 3,
      name: 'Maria Garcia',
      location: 'Madrid, Spain',
      avatar: '👩‍🎓',
      rating: 5,
      text: 'The daily bonuses are amazing! Even when I don\'t win big, I still earn rewards every day. Love this app!',
      amount: '$8,500',
      game: 'Scratch Cards'
    },
    {
      id: 4,
      name: 'David Chen',
      location: 'Singapore',
      avatar: '👨‍🏫',
      rating: 5,
      text: 'Customer support is excellent and withdrawals are super fast. Won $15K last month, received payment in minutes!',
      amount: '$15,000',
      game: 'Lucky Numbers'
    }
  ];

  const recentWinners = [
    { name: 'Alex M.', amount: '$12,500', time: '2 mins ago' },
    { name: 'Jenny K.', amount: '$5,200', time: '5 mins ago' },
    { name: 'Robert T.', amount: '$8,900', time: '12 mins ago' },
    { name: 'Lisa P.', amount: '$3,400', time: '18 mins ago' },
    { name: 'Carlos R.', amount: '$22,100', time: '25 mins ago' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2 className="section-title">Happy Winners</h2>
          <p className="section-subtitle">
            Join thousands of daily winners who trust LuckyWin
          </p>
        </div>

        <div className="testimonials-content">
          <div className="testimonials-slider">
            <div className="testimonial-card active">
              <div className="testimonial-header">
                <div className="avatar">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div className="user-info">
                  <h4>{testimonials[activeTestimonial].name}</h4>
                  <span className="location">{testimonials[activeTestimonial].location}</span>
                  <div className="rating">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <div className="win-badge">
                  <span className="win-amount">{testimonials[activeTestimonial].amount}</span>
                  <span className="win-game">{testimonials[activeTestimonial].game}</span>
                </div>
              </div>
              <p className="testimonial-text">
                "{testimonials[activeTestimonial].text}"
              </p>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                ></button>
              ))}
            </div>
          </div>

          <div className="recent-winners">
            <div className="winners-header">
              <h3>🎉 Recent Winners</h3>
              <div className="live-indicator">
                <span className="pulse-dot"></span>
                Live
              </div>
            </div>
            
            <div className="winners-list">
              {recentWinners.map((winner, index) => (
                <div 
                  key={index} 
                  className="winner-item animate-slide-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="winner-avatar">🏆</div>
                  <div className="winner-details">
                    <span className="winner-name">{winner.name}</span>
                    <span className="winner-time">{winner.time}</span>
                  </div>
                  <div className="winner-amount">{winner.amount}</div>
                </div>
              ))}
            </div>

            <div className="total-stats">
              <div className="stat-item">
                <span className="stat-number">$2.5M+</span>
                <span className="stat-label">Paid Out Today</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1,247</span>
                <span className="stat-label">Winners Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
