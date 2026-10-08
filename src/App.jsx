import './App.css'

const technologies = [
  { id: 1, name: "React", category: "Frontend", hours: 30, image: "react.webp" },
  { id: 2, name: "Node.js", category: "Backend", hours: 40, image: "nodejs.webp" },
  { id: 3, name: "MySQL", category: "Baza danych", hours: 20, image: "mysql.webp" },
  { id: 4, name: "Express", category: "Backend", hours: 25, image: "express.webp" },
  { id: 5, name: "MongoDB", category: "Baza danych", hours: 30, image: "mongodb.webp" },
  { id: 6, name: "Bootstrap", category: "Frontend", hours: 15, image: "bootstrap.webp" },
  { id: 7, name: "CSS", category: "Frontend", hours: 20, image: "css.webp" },
  { id: 8, name: "HTML", category: "Frontend", hours: 10, image: "html.webp" },
  { id: 9, name: "PHP", category: "Backend", hours: 35, image: "php.webp" }
];

function App() {
  return (
    <main className="tech-container">
      {technologies.map((tech) => (
        <article key={tech.id} className="tech-card">
          <img 
            src={`/${tech.image}`} 
            alt={tech.name} 
            className="tech-image" 
          />
          <span className={`badge badge-${tech.category.toLowerCase().replace(/\s+/g, '-')}`}>
            {tech.category}
          </span>
          <h3>{tech.name}</h3>
          <p className="hours-info">
            Godziny nauki: <strong>{tech.hours}h</strong>
          </p>
        </article>
      ))}
    </main>
  );
}

export default App;