import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#7c3aed',
            light: '#a78bfa',
            dark: '#5b21b6',
        },
        secondary: {
            main: '#06b6d4',
        },
        background: {
            default: '#09090b',
            paper: '#18181b',
        },
        divider: 'rgba(255,255,255,0.08)',
        text: {
        primary: '#fafafa',
        secondary: '#a1a1aa',
        },
    },
    typography: {
        fontFamily: '"Inter", sans-serif',
        h4: { fontWeight: 600 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600 },
        body2: { color: '#a1a1aa' },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: {
                root: {
                textTransform: 'none',
                fontWeight: 500,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: { backgroundImage: 'none' },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    borderRight: '1px solid rgba(255,255,255,0.08)',
                },
            },
        },
    },
});