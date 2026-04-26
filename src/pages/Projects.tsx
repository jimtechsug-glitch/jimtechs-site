import './Pages.css'

export default function Projects() {
  const completedProjects = [
    {
      title: 'Educational Computer Labs',
      description: 'Installed fully functional computer labs in over 20 Ugandan schools to enhance digital literacy.',
      image: `${import.meta.env.BASE_URL}images/projects/educational-lab.jpg`,
      category: 'Infrastructure',
      status: 'Completed'
    },
    {
      title: 'Institutional Security (CCTV)',
      description: 'Deployed advanced CCTV camera surveillance systems in over 50 institutions across the country.',
      image: `${import.meta.env.BASE_URL}images/projects/security-cctv.jpg`,
      category: 'Security',
      status: 'Completed'
    },
    {
      title: 'District Network Infrastructure',
      description: 'Set up and managed several network infrastructures in over 31 districts in Uganda, ensuring stable connectivity.',
      image: `${import.meta.env.BASE_URL}images/projects/network-infrastructure.jpg`,
      category: 'Networking',
      status: 'Completed'
    },
    {
      title: 'Nsoma DigLibs',
      description: 'Developed a comprehensive digital learning platform and Library to provide 24/7 access to educational resources.',
      image: `${import.meta.env.BASE_URL}images/projects/nsoma-diglibs.png`,
      category: 'Software Development',
      status: 'Completed'
    },
    {
      title: 'Corporate Web Design',
      description: 'Designed and published a various number of websites for Ugandan companies, establishing their online presence.',
      image: `${import.meta.env.BASE_URL}images/home/hero-consulting.png`, // Using a slide image as fallback
      category: 'Web Design',
      status: 'Completed'
    }
  ]

  const ongoingProjects = [
    {
      title: 'Digital Learning Platform',
      description: 'Developing a comprehensive digital learning platform and Library to provide 24/7 access to educational resources.',
      image: `${import.meta.env.BASE_URL}images/projects/digital-learning.jpg`,
      category: 'Software Development',
      status: 'Ongoing'
    },
    {
      title: 'AI-Driven Threat Detection',
      description: 'Developing advanced security protocols using AI to predict and prevent cyber threats.',
      image: `${import.meta.env.BASE_URL}images/home/hero-security.png`,
      category: 'Cybersecurity',
      status: 'Ongoing'
    }
  ]

  return (
    <div className="page-container">
      <section className="page-header">
        <h1>Our Projects</h1>
        <p>Showcasing our impact across Uganda through technology and innovation.</p>
      </section>

      <section className="projects-section">
        <h2>Completed Projects</h2>
        <div className="projects-grid">
          {completedProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <span className="status-badge completed">{project.status}</span>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2>Ongoing Projects</h2>
        <div className="projects-grid">
          {ongoingProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <span className="status-badge ongoing">{project.status}</span>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Have a Project in Mind?</h2>
        <p>
          Let's collaborate to bring your vision to life with world-class IT and networking solutions.
        </p>
        <a href="/contact" className="cta-button">Start a Project</a>
      </section>
    </div>
  )
}
