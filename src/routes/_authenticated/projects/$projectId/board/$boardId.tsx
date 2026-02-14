import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "@mui/material";

export const Route = createFileRoute(
    '/_authenticated/projects/$projectId/board/$boardId',
)({
    component: BoardPage,
});

function BoardPage(){
    const { projectId, boardId } = Route.useParams();

    return (
        <Typography variant="h4">
            Board {boardId} (Project {projectId})
        </Typography>
    )
}