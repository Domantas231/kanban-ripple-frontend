import { createFileRoute } from "@tanstack/react-router";
import { Typography, Box } from "@mui/material";

export const Route = createFileRoute('/login')({
    component: LoginPage,
});

function LoginPage(){
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
            <Typography variant="h4">Login</Typography>
        </Box>
    )
}