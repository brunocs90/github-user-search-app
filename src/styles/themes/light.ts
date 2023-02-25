import { DefaultTheme } from 'styled-components';
import { LIGTH } from '../../constants';

export const lightTheme: DefaultTheme = {
    title: LIGTH,

    colors: {
        background: '#F6F8FF',
        header: '#222731',
        'section-background': '#FEFEFE',
        'text-primary': '#2B3442',
        'text-secondary': '#4B6A9B',
        'text-terciary': '#697C9A',
        'button-blue': '#0079FF',
        'button-blue-hover': '#60ABFF',
        red: '#F74646',
        'button-text': '#FFFFFF',
        link: '#0079FF',
    },

    fonts: {
        mono: "'Space Mono', monospace",
    },
    Typography: {
        H1: {
            'font-size': '26px',
            'font-weight': 'bold',
            'line-height': '38px',
        },
        H2: {
            'font-size': '22px',
            'font-weight': 'bold',
            'line-height': '33px',
        },
        H3: {
            'font-size': '16px',
            'font-weight': 'normal',
            'line-height': '24px',
        },
        H4: {
            'font-size': '13px',
            'font-weight': 'normal',
            'line-height': '20px',
        },
        Body: {
            'font-size': '15px',
            'font-weight': 'normal',
            'line-height': '25px',
        },
    },
};
