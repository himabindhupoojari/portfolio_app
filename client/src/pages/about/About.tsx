import './About.scss';
import resume from '/documents/HimaBindu_Resume.pdf';

function About() {
  return (
    <section id="about" className="about">

      <h1 className='about__heading'>Hello!</h1>

      <h2 className='about__subheading'>Here's is who I am & what I do</h2>


      <p className='about__content'>
        I am <strong>Poojari Hima Bindu</strong>, a dedicated Frontend Developer with over
        3.5 years of professional experience in building scalable, user-centric web
        applications. I specialize in modern JavaScript frameworks, particularly
        React.js, Next.js, and TypeScript.
      </p>

      <p className='about__content'>
        I have worked extensively in the FinTech and Wealth Management domains,
        collaborating closely with cross-functional teams to deliver secure,
        performant, and visually consistent product experiences. My core strengths
        include component-driven architecture, reusable UI systems, and API-based
        integrations that enhance both functionality and performance.
      </p>

      <p className='about__content'>
        I strongly believe in clean code practices, accessibility, performance
        optimization, and maintainability. I enjoy translating complex business
        requirements into intuitive UI workflows that provide users with seamless,
        meaningful interactions.
      </p>

      <p className='about__content'>
        Beyond development, I value structured planning, Agile/Scrum collaboration,
        and continuous learning to stay aligned with emerging technologies and best
        industry standards.
      </p>
      
      <a className='about__link' href={resume} download="HimaBinduPoojari_FrontendDeveloper_Resume.pdf" target='_blank' rel="noopener noreferrer">
        <button className='about__link-btn'>Download Resume</button>
      </a>
    </section>
  );
}

export default About;
