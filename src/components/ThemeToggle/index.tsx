import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { LIGTH } from '../../constants';
import { ButtonContainer } from './styles';

interface Props {
    toggleTheme(): void;
}

export default function ThemeToggle({ toggleTheme }: Props) {
    const { title } = useContext(ThemeContext);
    console.log('meu tema agora é ', title);
    return (
        <ButtonContainer onClick={toggleTheme}>
            {title === LIGTH ? (
                <>
                    <p>DARK</p>
                    <MoonIcon className="iconMoon" />
                </>
            ) : (
                <>
                    <p>LIGHT</p>
                    <SunIcon className="iconSun" />
                </>
            )}
        </ButtonContainer>
    );
}
