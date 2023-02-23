import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import usePeristedState from './hooks/usePersistedState';
import { GlobalStyle } from './styles/global';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';

export function App() {
    const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', lightTheme);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? darkTheme : lightTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
}
