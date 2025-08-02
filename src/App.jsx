import './App.css'
import pcGif from './assets/pc.gif'
import Navbar from './components/Navbar'
import HomeBtn from './components/HomeBtb';
import Contact from './components/Contact';
import AnimatedBlob from './components/AnimatedBlob'
import SkillCardModal from './components/SkillCardModal';
import ProjectCard from './components/ProjectCard';

import { skillsData } from './assets/data/skills';
import { projectsData } from './assets/data/projects';

function App() {
  //TODO animar o meu nome

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
                  {skillsData.map((skill, index) => (
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
            <div className='projects-grid'>
              {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
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
