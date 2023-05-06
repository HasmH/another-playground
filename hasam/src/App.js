import { teal, grey } from '@mui/material/colors';
import './App.css';
import Intro from './components/Intro/Intro';
import Navigation from './components/Navigation/Navigation';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette : {
    primary: {
      main: grey[50],
    },
    secondary: teal
  },
  typography: {
    fontFamily: 'Inter Tight',
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightBold: 600
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navigation />
        <br></br>
        <br></br>
        <Intro />
      </div>
    </ThemeProvider>
  );
}

export default App;
