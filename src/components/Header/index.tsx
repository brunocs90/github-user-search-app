import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

interface Props {
    toggleTheme(): void;
}

export default function Header({ toggleTheme }: Props) {
    const { colors, title } = useContext(ThemeContext);
    return (
        <Container>
            <div>Hello World</div>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={colors.secundary}
            />
        </Container>
    );
}
