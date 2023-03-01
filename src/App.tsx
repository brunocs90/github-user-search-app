import { useState } from 'react';
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
    const [userName, setUserName] = useState('brunocs90');
    const [notFound, setNotFound] = useState(false);
    const [dataUser, setDataUser] = useState<User>({
        avatar_url: imagem,
        bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
        blog: 'https://github.blog',
        company: '@github',
        created_at: '2011-01-25T09:34:17Z',
        followers: 3938,
        following: 9,
        location: 'San Francisco',
        login: '@octocat',
        name: 'The Octocat',
        public_repos: 8,
        twitter_username: '',
    });

    const toggleTheme = () => {
        setTheme(theme.title === LIGTH ? darkTheme : lightTheme);
    };

    async function fetchUserGitHub(userSearch: string) {
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
