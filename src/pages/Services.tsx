import './Pages.css'

export default function Services() {
  const services = [
    {
      title: 'Network Design & Implementation',
      image: '/images/services/network-design.png',
      description: 'Design and deploy robust network infrastructure tailored to your business requirements.',
      features: ['Network Planning', 'Infrastructure Setup', 'Security Configuration']
    },
    {
      title: 'IT Infrastructure Management',
      image: '/images/services/infrastructure.png',
      description: 'Comprehensive management of your IT infrastructure to ensure optimal performance.',
      features: ['Server Management', 'Cloud Solutions', 'Monitoring & Maintenance']
    },
    {
      title: 'Cybersecurity Solutions',
      image: '/images/services/cybersecurity.png',
      description: 'Protect your business with advanced security measures and threat prevention.',
      features: ['Security Audits', 'Firewall Management', 'Data Protection']
    },
    {
      title: 'IT Consulting',
      image: '/images/services/consulting.png',
      description: 'Expert advice on IT strategy and digital transformation initiatives.',
      features: ['Strategic Planning', 'Technology Assessment', 'Best Practices']
    },
    {
      title: 'System Administration',
      image: '/images/services/sysadmin.png',
      description: 'Professional system administration to keep your operations running smoothly.',
      features: ['User Management', 'System Maintenance', 'Backup Solutions']
    },
    {
      title: 'Technical Support',
      image: '/images/services/support.png',
      description: '24/7 technical support to resolve issues and minimize downtime.',
      features: ['Help Desk Support', 'Incident Management', 'Ticketing System']
    }
  ]

  return (
    <div className="page-container">
      <section className="page-header">
        <h1>Our Services & Solutions</h1>
        <p>Comprehensive IT and Networking Solutions for Your Business</p>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image-container">
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="content-section">
        <h2>Ready to Transform Your IT Infrastructure?</h2>
        <p>
          Contact us today to discuss your specific IT and networking needs. Our team of experts is ready to 
          provide customized solutions that drive your business forward.
        </p>
        <a href="/contact" className="cta-button">Contact Us Today</a>
      </section>
    </div>
  )
}
