import { ThemeProvider } from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

//_app.js -> definicoes globais do nextJS
// ThemeProvider
function MyApp({Component, pageProps}) {
    console.log("Ola");
    const themeActive = {
        backgroundLevel1: "red",
    };
    return(
        <ThemeProvider theme={themeActive}>
            <CSSReset />
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}

export default MyApp;