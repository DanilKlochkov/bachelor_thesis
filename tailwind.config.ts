import type {Config} from 'tailwindcss';
import {fontFamily} from 'tailwindcss/defaultTheme';

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
                DEFAULT: 'hsl(var(--primary))',
                foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
                DEFAULT: 'var(--lms-color-accent)',
                foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
                DEFAULT: 'hsl(var(--popover))',
                foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))',
            },
            fg: {
                DEFAULT: 'var(--lms-color-fg-primary)',
                secondary: 'var(--lms-color-fg-secondary)',
                tertiary: 'var(--lms-color-fg-tertiary)',
            },
            scene: {
                DEFAULT: 'var(--lms-color-bg-primary)',
                secondary: 'var(--lms-color-bg-secondary)',
                tertiary: 'var(--lms-color-bg-tertiary)',
                page: 'var(--lms-color-bg-page)',
                'brand-selected': 'var(--lms-color-bg-brand-selected)',
                brand: 'var(--lms-color-bg-brand)',
                danger: 'var(--lms-color-bg-danger)',
                warning: 'var(--lms-color-bg-warning)',
                success: 'var(--lms-color-bg-success)',
                backdrop: 'rgba(0, 0, 0, 0.3)',
            },
            borderline: {
                dark: 'var(--lms-color-border-dark)',
                DEFAULT: 'var(--lms-color-border)',
                light: 'var(--lms-color-border-light)',
            },
            skeleton: {
                dark: 'var(--lms-color-skeleton-dark)',
                DEFAULT: 'var(--lms-color-skeleton)',
            },

            brand: 'var(--lms-color-brand)',
            'brand-dark': 'var(--lms-color-brand-dark)',
            'brand-darker': 'var(--lms-color-brand-darker)',

            danger: 'var(--lms-color-danger)',
            'danger-dark': 'var(--lms-color-danger-dark)',
            'danger-darker': 'var(--lms-color-danger-darker)',

            success: 'var(--lms-color-success)',
            'success-dark': 'var(--lms-color-success-dark)',
            'success-darker': 'var(--lms-color-success-darker)',

            warning: 'var(--lms-color-warning)',
            'warning-dark': 'var(--lms-color-warning-dark)',
            'warning-darker': 'var(--lms-color-warning-darker)',

            info: 'var(--lms-color-info)',
            'info-dark': 'var(--lms-color-info-dark)',
            'info-darker': 'var(--lms-color-info-darker)',

            transparent: 'transparent',
            current: 'currentColor',
            white: '#FFFFFF',
            black: '#121212',
            disabled: 'var(--lms-color-disabled)',
            'disabled-dark': 'var(--lms-color-disabled-dark)',
            'hover-button-bg': 'var(--lms-color-bg-hover-button)',
            'accent-light': 'var(--lms-color-accent-light)',

            red: {
                50: '#FFF1F1',
                100: '#FFDFDF',
                200: '#FFC5C5',
                300: '#FF9D9D',
                400: '#FF6464',
                500: '#FF3D3D',
                600: '#ED1515',
                700: '#C80D0D',
                800: '#A50F0F',
                900: '#8814',
                950: '#4B0404',
            },
            orange: {
                50: '#FFF8ED',
                100: '#FFF0D4',
                200: '#FFDDA8',
                300: '#FFC371',
                400: '#FFA84C',
                500: '#FE8111',
                600: '#EF6607',
                700: '#C64B08',
                800: '#9D3C0F',
                900: '#7E3310',
                950: '#441706',
            },
            green: {
                50: '#F0FDF0',
                100: '#DCFCDD',
                200: '#BBF7BE',
                300: '#85F08C',
                400: '#3EDD48',
                500: '#21C62C',
                600: '#15A41F',
                700: '#14811C',
                800: '#15661C',
                900: '#14531A',
                950: '#052E0A',
            },
            blue: {
                50: '#EEF4FF',
                100: '#E3EEFF',
                200: '#BCD2FF',
                300: '#8EB6FF',
                400: '#598EFF',
                500: '#3366FF',
                600: '#1B43F5',
                700: '#142FE1',
                800: '#1727B6',
                900: '#19288F',
                950: '#11132b',
            },
            pink: {
                50: '#FDF2F7',
                100: '#FCE7F1',
                200: '#FBCFE5',
                300: '#F9A8D0',
                400: '#F472B2',
                500: '#EC4899',
                600: '#DB2780',
                700: '#BE186A',
                800: '#9D1759',
                900: '#83184D',
                950: '#50072B',
            },
            yellow: {
                50: '#FEFCE8',
                100: '#FEF9C3',
                200: '#FEF08A',
                300: '#FDE047',
                400: '#FACC15',
                500: '#EAB308',
                600: '#CA8A04',
                700: '#A16207',
                800: '#854D0E',
                900: '#713F12',
                950: '#422006',
            },
            cyan: {
                50: '#ECFEFF',
                100: '#CFFAFE',
                200: '#A5F3FC',
                300: '#67E8F9',
                400: '#22D3EE',
                500: '#06B6D4',
                600: '#0891B2',
                700: '#0E7490',
                800: '#155E75',
                900: '#164E63',
                950: '#031b25',
            },
            gray: {
                50: '#F8FAFC',
                100: '#F1F5F9',
                200: '#E2E8F0',
                300: '#CBD5E1',
                400: '#94A3B8',
                500: '#64748B',
                600: '#475569',
                700: '#334155',
                800: '#1E293B',
                900: '#0F172A',
                950: '#090E1A',
            },
            neutral: {
                50: '#FAFAFA',
                100: '#F5F5F5',
                200: '#E5E5E5',
                300: '#D4D4D4',
                400: '#A3A3A3',
                500: '#737373',
                600: '#525252',
                700: '#404040',
                800: '#262626',
                900: '#171717',
                950: '#0D0D0D',
            },
        },
        extend: {
            aspectRatio: {
                '4/3': '4 / 3',
            },
            gridTemplateColumns: {
                'module-block': 'repeat(auto-fit, minmax(12.5rem, 1fr))',
            },
            spacing: {
                header: 'var(--lms-height-header)',
            },
            height: {
                'page-with-header': 'calc(100vh - var(--lms-height-header))',
            },
            width: {
                70: '17.5rem',
                448: '28rem',
                512: '32rem',
                608: '38rem',
                704: '44rem',
            },
            minWidth: {
                368: '23rem',
                928: '58rem',
            },
            maxWidth: {
                dialog: 'calc(100% - 180px)',
                screen: '100vw',
            },
            maxHeight: {
                dialog: 'calc(100vh - 180px)',
                '2/3': '66.666667%',
            },
            minHeight: {
                'page-with-header': 'calc(100vh - var(--lms-height-header))',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
            borderRadius: {
                none: '0px',
                sm: '2px',
                DEFAULT: '6px',
                // @todo: delete
                md: '6px',
                lg: '10px',
                full: '9999px',
            },

            fontSize: {
                xs: ['.75rem', '.875rem'], // sub
                sm: ['.8125rem', '1rem'], // bodySmall
                base: ['.875rem', '1.25rem'], // body
                lg: ['1rem', '1.5rem'], // h5
                xl: ['1.125rem', '1.75rem'], // h4
                '2xl': ['1.25rem', '2rem'], // h3
                '3xl': ['1.625rem', '2.25rem'], // h2
                '4xl': ['1.875rem', '2.5rem'], // h1
                '6xl': ['3.125rem', '1'],
            },
            fontWeight: {
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
            },
            lineHeight: {
                none: '1',
                tight: '1.25',
                snug: '1.375',
                normal: '1.5',
                relaxed: '1.625',
                loose: '2',
                3: '.875rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                7: '1.75rem',
                8: '2rem',
                9: '2.25rem',
                10: '2.5rem',
            },
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
            },
            keyframes: {
                'accordion-down': {
                    from: {height: '0'},
                    to: {height: 'var(--radix-accordion-content-height)'},
                },
                'accordion-up': {
                    from: {height: 'var(--radix-accordion-content-height)'},
                    to: {height: '0'},
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;