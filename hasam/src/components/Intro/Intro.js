import './Intro.style.css';
import { Typewriter } from 'react-simple-typewriter';

/**
 * Component that takes in a name and tag line, and animates in typing way
 */

function Intro() {
    return(
        <div>
            <div className='intro-heading'>
                <Typewriter 
                    words={['Hasam.']}
                    loop
                    cursor
                    cursorStyle=' '
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={30000}
                />
            </div>
            <div>
                <div className="intro-subheading">
                    <Typewriter 
                        words={['Hello!', ' नमस्ते', 'Bonjour!', 'Hola!', 'Ciao!', 'مرحبا', 'Slaw!', 'こんにちは', 'Привет' ]}
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                    />
                </div>
            </div>
        </div>
    );
}

export default Intro; 