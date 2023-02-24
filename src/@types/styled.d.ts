// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            background: string;
            'section-background': string;
            'text-primary': string;
            'text-secondary': string;
            'text-terciary': string;
            blue: string;
            'blue-hover': string;
            red: string;
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
