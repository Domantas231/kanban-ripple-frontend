import { Box, Paper, Typography } from "@mui/material";
import { ViewKanban as BoardIcon } from "@mui/icons-material";
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    title: string;
    subtitle?: string;
}

export default function AuthLayout({ children, title, subtitle}: Props){
    return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        px: 2,
      }}
    >
      <Paper
        sx={{
          width: '100%',
          maxWidth: 420,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
          <BoardIcon color="primary" fontSize="large" />
          <Typography variant="h5" fontWeight={700}>
            Kanban Ripple
          </Typography>
        </Box>

        {/* Title */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={600}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {subtitle}
            </Typography>
          )}
        </Box>

        {children}
      </Paper>
    </Box>
  );
}