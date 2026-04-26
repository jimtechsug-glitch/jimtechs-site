import { useState, useEffect } from 'react'
import './Pages.css'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: encodeURI(`${import.meta.env.BASE_URL}images/home/lab 3.jpg`),
      title: 'State of the Art School Labs',
      subtitle: 'Building Robust School Labs for Digital Learning'
    },
    {
      image: encodeURI(`${import.meta.env.BASE_URL}images/home/network 3.jpg`),
      title: 'Networks and Computer Accessories Solutions',
      subtitle: 'Building Robust networks and IT infrastructure for modernSchools and Enterprises'
    },
    {
      image: encodeURI(`${import.meta.env.BASE_URL}images/home/camera 2.jpg`),
      title: 'Strategic CCTV and Security Solutions',
      subtitle: 'Setting up CCTV and Security Systems for institutions, homes and Enterprises'
    },
    {
      image: `${import.meta.env.BASE_URL}images/home/lab.jpg`,
      title: 'Providing the Digital Environment for All',
      subtitle: 'Creating the Digital environment for your home, business and other learning institutions'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="page-container">
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="cta-button">Our Services</button>
            </div>
          </div>
        ))}
        <div className="slider-nav">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Professional Expertise</h3>
            <p>Years of experience in delivering quality IT solutions to businesses of all sizes.</p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>Dedicated support team available around the clock to assist you.</p>
          </div>
          <div className="feature-card">
            <h3>Cutting-Edge Technology</h3>
            <p>We use the latest technology stack to ensure optimal performance.</p>
          </div>
          <div className="feature-card">
            <h3>Cost-Effective</h3>
            <p>Competitive pricing without compromising on quality.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
