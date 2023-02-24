import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props {
    toggleTheme(): void;
}

export default function Header({ toggleTheme }: Props) {
    const { colors, title } = useContext(ThemeContext);
    return (
        <div>
            <div>devfinder</div>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={colors['blue-hover']}
            />
        </div>
    );
}
