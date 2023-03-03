import { useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GitHubAPI } from './api/GitHubAPI';
import imagem from './assets/imageTest.png';
import CardUser from './components/CardUser';
import Header from './components/Header';
import Search from './components/Search';
import { LIGTH } from './constants';
import usePeristedState from './hooks/usePersistedState';
import { MainContainer, PageContainer } from './styles';
import { GlobalStyle } from './styles/global';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';

export interface User {
    avatar_url: string;
    bio: string;
    blog: string;
    company: string;
    created_at: string;
    followers: number;
    following: number;
    location: string;
    login: string;
    name: string;
    public_repos: number;
    twitter_username: string;
}

export function App() {
    const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', lightTheme);
    const [userName, setUserName] = useState('octocat');
    const [notFound, setNotFound] = useState(false);
    const [dataUser, setDataUser] = useState<User>({
        avatar_url: imagem,
        bio: '',
        blog: '',
        company: '',
        created_at: '',
        followers: 0,
        following: 0,
        location: '',
        login: '',
        name: '',
        public_repos: 0,
        twitter_username: '',
    });

    const toggleTheme = () => {
        setTheme(theme.title === LIGTH ? darkTheme : lightTheme);
    };

    async function fetchUserGitHub(userSearch: string) {
        console.log('fazendo consulta do usuario', userSearch);
        try {
            const request = await GitHubAPI.fetchUsers(userSearch);
            if (request !== undefined) {
                setDataUser(request);
                setUserName(userSearch);
                setNotFound(false);
            }
        } catch (error) {
            setNotFound(true);
            setTimeout(() => {
                setNotFound(false);
            }, 2000);
        }
    }

    useEffect(() => {
        fetchUserGitHub(userName);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <PageContainer>
                <MainContainer>
                    <Header toggleTheme={toggleTheme} />
                    <Search onSubmit={fetchUserGitHub} notFound={notFound} />
                    <CardUser data={dataUser} />
                </MainContainer>
            </PageContainer>
        </ThemeProvider>
    );
}
