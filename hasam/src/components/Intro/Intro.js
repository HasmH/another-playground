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
                    words={['H', 'Ha', 'Has', 'Hasa', 'Hasam']}
                    loop
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                />
            </div>
            <div>
                <h2 className="intro-subheading">I am a software engineer</h2>
            </div>
        </div>
    );
}

export default Intro; 