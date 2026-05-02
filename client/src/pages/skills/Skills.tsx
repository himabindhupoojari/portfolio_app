// import './Skills.scss';

// function Skills() {
//   return (
//     <section id="skills" className="skills">
//       <h2 className="skills__title">Technical Skills</h2>

//       <div className="skills__grid">

//         <div className="skills__category">
//           <h3>Frontend Development</h3>
//           <p>React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS</p>
//         </div>

//         <div className="skills__category">
//           <h3>UI / Component Libraries</h3>
//           <p>Material UI, Tailwind CSS, Styled Components, Storybook</p>
//         </div>

//         <div className="skills__category">
//           <h3>State Management</h3>
//           <p>Redux Toolkit, Context API</p>
//         </div>

//         <div className="skills__category">
//           <h3>API & Integrations</h3>
//           <p>REST APIs, Axios, JWT Authentication</p>
//         </div>

//         <div className="skills__category">
//           <h3>Testing & Quality</h3>
//           <p>Jest, React Testing Library</p>
//         </div>

//         <div className="skills__category">
//           <h3>Tools & Workflow</h3>
//           <p>GitLab, Postman, Agile/Scrum, WordPress CMS</p>
//         </div>

//         <div className="skills__category">
//           <h3>Performance & Accessibility</h3>
//           <p>Performance Optimization, Lighthouse Audits, WCAG Accessibility</p>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Skills;


import './Skills.scss';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">Technical Skills</h2>

      <div className="skills__wrapper">

        <div className="skills__category">
          <h3>Frontend Development</h3>
          <p>React.js | Next.js | JavaScript (ES6+) | TypeScript | HTML5 | CSS3 | SCSS</p>
        </div>

        <div className="skills__category">
          <h3>UI / Component Libraries</h3>
          <p>Material UI | Tailwind CSS | Styled Components | Storybook</p>
        </div>

        <div className="skills__category">
          <h3>State Management</h3>
          <p>Redux Toolkit | Context API</p>
        </div>

        <div className="skills__category">
          <h3>API & Integrations</h3>
          <p>REST APIs | Axios | JWT Authentication</p>
        </div>

        <div className="skills__category">
          <h3>Testing & Quality</h3>
          <p>Jest | React Testing Library</p>
        </div>

        <div className="skills__category">
          <h3>Tools & Workflow</h3>
          <p>GitLab | Postman | Agile/Scrum | WordPress CMS</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
