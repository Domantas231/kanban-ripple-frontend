import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from '../theme/theme';

export const Route = createRootRoute({
    component: () => {
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" />
        </ThemeProvider>
    }
})