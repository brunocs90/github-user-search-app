import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { LIGTH } from './constants';
import usePeristedState from './hooks/usePersistedState';
import { MainContainer, PageContainer } from './styles';
import { GlobalStyle } from './styles/global';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';

export function App() {
    const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', lightTheme);

    const toggleTheme = () => {
        setTheme(theme.title === LIGTH ? darkTheme : lightTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <PageContainer>
                <MainContainer>
                    <Header toggleTheme={toggleTheme} />
                </MainContainer>
            </PageContainer>
        </ThemeProvider>
    );
}
