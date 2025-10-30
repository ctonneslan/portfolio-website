import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ChatFlow',
      description: 'Real-time chat application with modern UI, featuring instant messaging, user authentication, and seamless communication.',
      technologies: ['JavaScript', 'WebSockets', 'Node.js'],
      github: 'https://github.com/ctonneslan/ChatFlow',
      demo: '#',
    },
    {
      id: 2,
      title: 'DevPulse',
      description: 'Developer productivity tracker and analytics dashboard for monitoring coding habits and project insights.',
      technologies: ['JavaScript', 'React', 'Analytics'],
      github: 'https://github.com/ctonneslan/DevPulse',
      demo: '#',
    },
    {
      id: 3,
      title: 'Fullstack Todo App',
      description: 'Full-stack task management application with CRUD operations, user authentication, and responsive design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Backend'],
      github: 'https://github.com/ctonneslan/Fullstack-Todo-App',
      demo: '#',
    },
    {
      id: 4,
      title: 'Letterboxd Clone',
      description: 'Movie tracking and review platform inspired by Letterboxd, featuring film discovery and social features.',
      technologies: ['JavaScript', 'React', 'API Integration'],
      github: 'https://github.com/ctonneslan/letterboxd-clone',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Selected Work</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
