import { Box, Toolbar } from '@mui/material';
import { ReactNode } from 'react';
import Sidebar, { SIDEBAR_WIDTH } from './Sidebar';
import TopBar from './Topbar';

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <TopBar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}