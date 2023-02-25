// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            background: string;
            header: string;
            'section-background': string;
            'text-primary': string;
            'text-secondary': string;
            'text-terciary': string;
            'button-blue': string;
            'button-blue-hover': string;
            red: string;
            'button-text': string;
            link: string;
        };

        fonts: {
            mono: string;
        };
        Typography: {
            H1: {
                'font-size': string;
                'font-weight': string;
                'line-height': string;
            };
            H2: {
                'font-size': string;
                'font-weight': string;
                'line-height': string;
            };
            H3: {
                'font-size': string;
                'font-weight': string;
                'line-height': string;
            };
            H4: {
                'font-size': string;
                'font-weight': string;
                'line-height': string;
            };
            Body: {
                'font-size': string;
                'font-weight': string;
                'line-height': string;
            };
        };
    }
}
