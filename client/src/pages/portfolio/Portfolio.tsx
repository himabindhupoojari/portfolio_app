// import { useEffect, useRef, useState } from "react";
import './Portfolio.scss';

interface portfolioDataType{
  title:string;
  description: string;
  link?: string;
}

function Portfolio() {
  // const [activeCard, setActiveCard] = useState(0);
  // const cardRefs = useRef<HTMLDivElement[]>([]); // type added

  const portfolioData: portfolioDataType[] = [
    {
      title: "Savart Customer Application (Phase 3)",
      description:
        "Customer-facing FinTech application with responsive UI components, API integrations, and improved UX using React & Next.js."
    },
    {
      title: "Savart Workflow – Admin Panel (Phase 3)",
      description:
        "Admin dashboard with user management, role-based access, reusable shared components, and API integrations."
    },
    {
      title: "Portfolio Management System (PMS)",
      description:
        "Portfolio management features, chart-based financial visualization, and seamless investment data representation."
    },
    {
      title: "Savart Workflow (Phase 4)",
      description:
        "Advanced workflow improvements, reusable custom components, UI performance upgrades, and cross-device usability.",
        link: "https://savart.com"
    }
  ];

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const target = entry.target as HTMLElement; // type added
  //           setActiveCard(Number(target.dataset.index));
  //           console.log(target.dataset.index);
  //         }
  //       });
  //     },
  //     { threshold: 0.6 }
  //   );

  //   cardRefs.current.forEach((el) => el && observer.observe(el));
  //   return () => observer.disconnect();
  // }, []);

  // console.log(activeCard);


  return (
    <section id="portfolio" className="portfolio">

      {/* Sticky / Fixed Display */}
      {/* <div className="portfolio__display">
        <h2>{cards[activeCard].title}</h2>
        <p>{cards[activeCard].description}</p>
      </div> */}

      {/* Scrolling Cards */}
      {/* <div className="portfolio__container">
        {cards.map((card, index) => (
          <div
            className="portfolio__card"
            key={index}
            data-index={index}            
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }} // type added
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div> */}

      <div>
        {portfolioData.map((card: portfolioDataType) => (
          <div className="portfolio__card"            
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.link} target='_blank'>{card.link?? card.link}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
