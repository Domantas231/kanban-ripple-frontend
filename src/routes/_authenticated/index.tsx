import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "@mui/material";

export const Route = createFileRoute('/_authenticated/')({
    component: DashboardPage,
});

function DashboardPage(){
    return <Typography variant="h4">Dashboard</Typography>
}