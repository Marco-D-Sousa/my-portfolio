import './App.css'
import pcGif from './assets/pc.gif'
import Navbar from './components/Navbar'
import HomeBtn from './components/HomeBtb';
import Contact from './components/Contact';
import AnimatedBlob from './components/AnimatedBlob'
import SkillCardModal from './components/SkillCardModal';

function App() {
  //TODO animar o meu nome

  const skills = [
    {
      name: "JavaScript",
      icon: "https://skillicons.dev/icons?i=javascript", // Adicione os ícones
      level: 90,
      description: "Linguagem de programação versátil para desenvolvimento web front-end e back-end.",
      experience: "3+ anos de experiência desenvolvendo aplicações web modernas e APIs RESTful.",
      projects: [
        "Sistema de gerenciamento de tarefas",
        "E-commerce completo",
        "Dashboard administrativo"
      ],
      certifications: ["ES6+", "Node.js", "React"]
    },
    {
      name: "React",
      icon: "https://skillicons.dev/icons?i=react",
      level: 85,
      description: "Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e reativas.",
      experience: "2+ anos criando SPAs e aplicações React com hooks e context API.",
      projects: [
        "Portfólio pessoal",
        "App de controle financeiro",
        "Sistema de chat em tempo real"
      ],
      certifications: ["React Hooks", "Redux", "Next.js"]
    },
    {
      name: "Java",
      icon: "https://skillicons.dev/icons?i=java",
      level: 75,
      description: "Linguagem robusta e orientada a objetos para desenvolvimento enterprise.",
      experience: "2 anos desenvolvendo APIs REST e microserviços com Spring Boot.",
      projects: [
        "API de gerenciamento de usuários",
        "Sistema bancário simulado",
        "Microserviços com Docker"
      ],
      certifications: ["Spring Boot", "JPA/Hibernate", "Maven"]
    },
    {
      name: "PostgreSQL",
      icon: "https://skillicons.dev/icons?i=postgresql",
      level: 70,
      description: "Banco de dados relacional avançado com suporte a JSON e extensibilidade.",
      experience: "1.5 anos modelando e otimizando bancos de dados relacionais.",
      projects: [
        "Schema para e-commerce",
        "Banco de dados financeiro",
        "Sistema de logs e analytics"
      ],
      certifications: ["SQL Avançado", "Performance Tuning"]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="hero">
          <div className="hero-container">
            <div className="text-head">
              <div className="hero-content">
                <h1>Olá, eu sou <span className="highlight">Marco de Sousa</span></h1>
                <p className="hero-subtitle">Desenvolvedor Frontend/Backend</p>
                <p className="hero-description">
                  Criando experiências digitais incríveis com React, JavaScript, Java e muito mais.
                </p>
                <div className="hero-buttons">
                  <button className="btn-primary">Ver Projetos</button>
                  <button className="btn-secondary">Contato</button>
                </div>
              </div>
            </div>
            <div className="image-head">
              <AnimatedBlob />
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <h2>Sobre Mim</h2>
          <div className="about-container">
            <div className="container-left">
              <img src={pcGif} alt="" />
            </div>

            <div className="container-right">
              <div className='profile'>
                <p>
                  Sou um ex-professor de Matemática que se apaixonou pelo desenvolvimento de Software. <br />
                  Hoje desenvolvo aplicações web utilizando React, JavaScript, Java e outras tecnologias
                  buscando sempre a clareza necessária em uma sala de aula, pois saber não é o bastante, deve-se entender o que se faz.
                  Com pensamento lógico e a capacidade de resolver problemas complexos, estou sempre em busca de aprender e evoluir como desenvolvedor.
                </p>
                <p>
                  Hoje busco uma oportunidade de trabalho onde possa aplicar minhas habilidades e continuar aprendendo.
                  E me desenvolver como profissional, para me tornar o melhor desenvolvedor que posso ser.
                </p>
              </div>
              <div className="profile-skills">
                <h2>Habilidades</h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <SkillCardModal key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2>Projetos</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>Projeto 1</h3>
                <p>Descrição do seu primeiro projeto incrível.</p>
                <div className="project-links">
                  <a href="#" className="btn-link">Ver Código</a>
                  <a href="#" className="btn-link">Ver Demo</a>
                </div>
              </div>
              <div className="project-card">
                <h3>Projeto 2</h3>
                <p>Descrição do seu segundo projeto incrível.</p>
                <div className="project-links">
                  <a href="#" className="btn-link">Ver Código</a>
                  <a href="#" className="btn-link">Ver Demo</a>
                </div>
              </div>
              <div className="project-card">
                <h3>Projeto 3</h3>
                <p>Descrição do seu terceiro projeto incrível.</p>
                <div className="project-links">
                  <a href="#" className="btn-link">Ver Código</a>
                  <a href="#" className="btn-link">Ver Demo</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <HomeBtn />
    </>
  )
}

export default App
