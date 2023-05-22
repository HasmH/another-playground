import './Intro.style.css';
import Navigation from '../Navigation/Navigation';
import { Typewriter } from 'react-simple-typewriter';
import headshot from './reactHeadshot.jpg';
import { Grid, Paper } from '@mui/material';

function Intro() { //lol
    return(
        <Grid container spacing={4} direction={'row'}>
            <Grid item spacing={2}>
                <Grid item xs={12} className='intro-heading'>
                    <Typewriter 
                                words={['Hasam.']}
                                cursor
                                cursorStyle=' '
                                typeSpeed={70}
                            />
                </Grid>
                <Grid item xs={12} className='intro-subheading'>
                    <Typewriter 
                            words={['Hello!', 'नमस्ते', 'Bonjour!', 'Hola!', 'Ciao!', 'مرحبا', 'Slaw!', 'こんにちは', 'Привет' ]}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                        />
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <img src={headshot} alt="me"/>
            </Grid>
        </Grid>
    );
}

export default Intro; 