import './Navbar.css';
import { useEffect, useRef } from 'react';
import { animate, createScope, createSpring } from 'animejs';


function Navbar() {
    const navbarRef = useRef(null)
    const scopeRef = useRef(null);

    useEffect(() => {
        // Aguarda o DOM estar pronto
        const timer = setTimeout(() => {
            if (navbarRef.current) {
                // Cria o scope corretamente
                scopeRef.current = createScope({
                    root: navbarRef.current
                });

                // Adiciona a animação ao scope
                scopeRef.current.add(() => {
                    animate('.nav-link', {
                        scale: [
                            { to: 1.01, ease: 'inOut(3)', duration: 200 },
                            { to: 1, ease: createSpring({ stiffness: 300 }) }
                        ],
                        loop: true,
                        loopDelay: 100 // Aumentei o delay para ver melhor
                    });
                });
            }
        }, 100);

        return () => {
            clearTimeout(timer);
            if (scopeRef.current) {
                scopeRef.current.revert();
            }
        };
    }, [])


    return (
        <nav ref={navbarRef} className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="#home">#Marco_de_Sousa</a>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">_home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">_about</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">_projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">_contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;