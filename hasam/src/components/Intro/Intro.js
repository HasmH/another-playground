import './Intro.style.css';
import TypeWriter from '../TypeWriter/TypeWriter';

/**
 * Component that takes in a name and tag line, and animates in typing way
 */

function Intro() {
    return(
        <div>
            <div>
                <TypeWriter></TypeWriter>
            </div>
            <div>
                <h2 className="intro-subheading">I am a software engineer</h2>
            </div>
        </div>
    );
}

export default Intro; 