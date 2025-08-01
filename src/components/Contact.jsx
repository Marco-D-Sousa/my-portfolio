import './Contact.css'

function Contact() {
    return (
        <>
            <div className="contact-container">
                <div className="contact-text">
                    <h2>Contato</h2>
                    <p>Vamos trabalhar juntos? <br /> Entre em contato!</p>
                </div>
                <div className="contact-links">
                    <a href="mailto:seu.email@exemplo.com" className="contact-link">
                        <img src="src\assets\icon-email.svg" alt="" />
                        <p>Email</p>
                    </a>
                   <a href="" className="contact-link">
                        <img src="src\assets\icon-github.svg" alt="" />
                        <p>Github</p>
                    </a>
                    <a href="" className="contact-link">
                        <img src="src\assets\icon-linkedin.svg" alt="" />
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>
        </>)
}

export default Contact;
