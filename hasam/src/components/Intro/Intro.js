import './Intro.style.css';
import { Typewriter } from 'react-simple-typewriter';
import headshot from './reactHeadshot.jpg';
import { Grid, Paper } from '@mui/material';

function Intro() {
    return(
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Typewriter 
                        words={['Hasam.']}
                        loop
                        cursor
                        cursorStyle=' '
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={30000}
                    />
                
                    <Typewriter 
                        words={['Hello!', 'नमस्ते', 'Bonjour!', 'Hola!', 'Ciao!', 'مرحبا', 'Slaw!', 'こんにちは', 'Привет' ]}
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                    />
            </Grid>
            <Grid item xs={12} md={6}>
                <div className='head-shot-paper-div'>
                    <Paper elevation={3} className='head-shot'>
                        <img
                        src={headshot}
                        alt="me"
                        />
                    </Paper>
                </div>
            </Grid>
        </Grid>
    );
}

export default Intro; 