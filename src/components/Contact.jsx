import './Contact.css'
import { useState } from 'react';

function Contact() {

    const [showEmailModal, setShowEmailModal] = useState(false)

    const openEmailModal = () => setShowEmailModal(true)
    const closeEmailModal = () => setShowEmailModal(false)

    const handleSendEmail = () => {
        const email = 'marcopaiva2004@gmail.com'
        const subject = 'Contato via Portfólio'
        const body = 'Olá, ...'

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = mailtoLink
        closeEmailModal()
    }


    return (
        <>
            <div className="contact-container">
                <div className="contact-text">
                    <h2>Contato</h2>
                    <p>Vamos trabalhar juntos? <br /> Entre em contato!</p>
                </div>
                <div className="contact-links">
                    <button
                        type="button"
                        onClick={openEmailModal}
                        className='contact-link contact-email-btn'
                    >
                        <img src="icon-email.svg" alt="" />
                        <p>Email</p>
                    </button>
                    <a href="https://github.com/Marco-D-Sousa" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <img src="icon-github.svg" alt="" />
                        <p>Github</p>
                    </a>
                    <a href="https://www.linkedin.com/in/marko-de-sousa/" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <img src="icon-linkedin.svg" alt="" />
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>

            {showEmailModal && (
                 <div className="email-modal-overlay" onClick={closeEmailModal}>
                    <div className="email-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="email-modal-header">
                            <h3>Enviar Email</h3>
                            <button onClick={closeEmailModal} className="close-modal">×</button>
                        </div>
                        <div className="email-modal-body">
                            <p><strong>Para:</strong> marcopaiva2004@gmail.com</p>
                            <p><strong>Assunto:</strong> Contato via Portfólio</p>
                            <p>Um template de email será criado para facilitar o contato.</p>
                        </div>
                        <div className="email-modal-footer">
                            <button onClick={handleSendEmail} className="send-email-btn">
                                Abrir Cliente de Email
                            </button>
                            <button onClick={closeEmailModal} className="cancel-btn">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>)
}

export default Contact;
