import './Pages.css'

export default function About() {
  return (
    <div className="page-container">
      <section className="page-header">
        <h1>About Jimtechs Ug Ltd</h1>
      </section>

      <section className="content-section">
        <h2>Our Mission</h2>
        <p>
          At Jimtechs Ug Ltd, our mission is to empower businesses with cutting-edge networking and IT solutions 
          that drive growth, efficiency, and digital transformation.
        </p>
      </section>

      <section className="content-section">
        <h2>Our Story</h2>
        <p>
          Founded with a passion for technology and customer success, Jimtechs Ug Ltd has been a leader in providing 
          comprehensive IT and networking solutions to businesses across Uganda. Our team of experienced professionals 
          is committed to delivering innovative solutions tailored to your specific needs.
        </p>
      </section>

      <section className="content-section">
        <h2>Our Values</h2>
        <ul className="values-list">
          <li><strong>Integrity:</strong> We conduct business with honesty and transparency</li>
          <li><strong>Excellence:</strong> We strive for the highest quality in everything we do</li>
          <li><strong>Innovation:</strong> We embrace new technologies and ideas</li>
          <li><strong>Customer Focus:</strong> Your success is our success</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Why Work With Us?</h2>
        <ul className="values-list">
          <li>Experienced team with deep technical expertise</li>
          <li>Proven track record of successful implementations</li>
          <li>Customized solutions for your unique business needs</li>
          <li>Ongoing support and continuous improvement</li>
        </ul>
      </section>
    </div>
  )
}
