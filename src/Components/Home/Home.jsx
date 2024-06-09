import React, { useEffect, useRef } from 'react';
import Typing from '../Typing';
import AtharvPic from '../../assets/AtharvPic2.jpg';

function Home() {
    const texts = ["<a_Learner/>", "<a_Tinkerer/>", "<a_Programmer/>"];
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const img = imgRef.current;
            if (window.scrollY > 400) { 
                img.classList.add('logo');
            } else {
                img.classList.remove('logo');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <div className="text-center mt-10">
                <div className="text-5xl font-bold">Hi There! <span role="img" aria-label="waving hand">👋</span></div>
                <div className="text-6xl font-bold mt-4">
                    I'M <span className="text-yellow-400">Atharv Sanjay Jain</span>
                </div>
                <div className="text-4xl text-yellow-400 mt-4">
                    <Typing text={texts} typingSpeed={100} deletingSpeed={50} />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <img src={AtharvPic} alt="Me" className="w-48 h-48 rounded-full border-4 border-white-400 shadow-lg" ref={imgRef} id="profile-pic"/>
            </div>
            <div className="flex space-x-4 mt-8">
                <a href="https://github.com/Atharv-2004" className="text-yellow-300 hover:text-yellow-400">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/atharv-sanjay-jain-33b57727a/" className="text-yellow-300 hover:text-yellow-400">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/just_atharv.things/" className="text-yellow-300 hover:text-yellow-400">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
            </div>
        </div>
    );
}

export default Home;
