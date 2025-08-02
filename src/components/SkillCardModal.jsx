import './SkillCardModal.css';
import { useState } from 'react';

//TODO ajustar o tamanho

function SkillCardModal({ skill }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // Previne scroll do body quando modal está aberto
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restaura scroll do body
    document.body.style.overflow = 'unset';
  };

  // Fecha modal ao clicar no backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Fecha modal com ESC
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const getSkillLevel = (percentage) => {
    if (percentage <= 25) return { text: 'Iniciante', level: 1 };
    if (percentage <= 50) return { text: 'Intermediário', level: 2 };
    if (percentage <= 75) return { text: 'Experiente', level: 3 };
    return { text: 'Mestre', level: 4 };
  };

  const skillLevel = getSkillLevel(skill.level);

  return (
    <>
      <div className="skill-card" onClick={openModal}>
        <div className="skill-card-header">
          <img
            src={skill.icon}
            alt={`${skill.name} icon`}
            className="skill-icon"
          />
          <div className="skill-info">
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-level">
              <div className="level-segments">
                {[1, 2, 3, 4].map((segment) => (
                  <div
                    key={segment}
                    className={`level-segment ${skillLevel.level >= segment ? 'filled' : ''}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <button className="view-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon-plus">
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="modal-icon"
                />
                <h2>{skill.name}</h2>
              </div>
              <button className="close-btn" onClick={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="X18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <div className="skill-level-modal">
                <h4>Nível de Conhecimento</h4>
                <div className="level-container-modal">
                  {/* Nova barra de 4 níveis no modal */}
                  <div className="level-segments-modal">
                    {[
                      { level: 1, label: 'Iniciante' },
                      { level: 2, label: 'Intermediário' },
                      { level: 3, label: 'Experiente' },
                      { level: 4, label: 'Mestre' }
                    ].map((item) => (
                      <div key={item.level} className="level-segment-container">
                        <div
                          className={`level-segment-modal ${skillLevel.level >= item.level ? 'filled' : ''}`}
                        ></div>
                        <span className="level-label">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="current-level-text">
                    <span className="current-level-highlight">{skillLevel.text}</span>
                  </div>
                </div>
              </div>

              <div className="skill-experience-modal">
                <h4>Experiência</h4>
                <p>{skill.experience}</p>
              </div>

              <div className="skill-projects-modal">
                <h4>Projetos Realizados</h4>
                <ul>
                  {skill.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>

              <div className="skill-certifications-modal">
                <h4>Certificações & Conhecimentos</h4>
                <div className="cert-badges-modal">
                  {skill.certifications.map((cert, index) => (
                    <span key={index} className="cert-badge-modal">{cert}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="close-modal-btn" onClick={closeModal}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SkillCardModal;