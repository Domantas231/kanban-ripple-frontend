import {
  Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  Typography, Box, IconButton, Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  ViewKanban as BoardIcon,
  Add as AddIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from '@tanstack/react-router';

export const SIDEBAR_WIDTH = 260;

const mockProjects = [
  { id: '1', name: 'My First Project' },
  { id: '2', name: 'Side Project' },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <BoardIcon color="primary" />
        <Typography variant="h6" fontWeight={700}>
          Kanban
        </Typography>
      </Box>

      <Divider />

      <List sx={{ px: 1, py: 1 }}>
        <ListItemButton
          selected={location.pathname === '/'}
          onClick={() => navigate({ to: '/' })}
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </List>

      <Divider />

      <Box sx={{ px: 2, pt: 2, pb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="caption" color="text.secondary" fontWeight={600} textTransform="uppercase">
          Projects
        </Typography>
        <IconButton size="small">
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>

      <List sx={{ px: 1 }}>
        {mockProjects.map((project) => (
          <ListItemButton key={project.id} sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <BoardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={project.name} />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Divider />

      <List sx={{ px: 1, py: 1 }}>
        <ListItemButton sx={{ borderRadius: 1 }}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}