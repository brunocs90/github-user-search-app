import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ThemeToggle from '../ThemeToggle';
import { HeaderContainer } from './styles';

interface Props {
    toggleTheme(): void;
}

export default function Header({ toggleTheme }: Props) {
    const { colors, title } = useContext(ThemeContext);
    return (
        <HeaderContainer>
            <h1>devfinder</h1>
            <ThemeToggle toggleTheme={toggleTheme} />
        </HeaderContainer>
    );
}
