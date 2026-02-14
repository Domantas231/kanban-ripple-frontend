import { AppBar, Toolbar, Typography, IconButton, Badge, Avatar, Box } from '@mui/material';
import { Notifications as NotifIcon, Search as SearchIcon } from '@mui/icons-material';
import { SIDEBAR_WIDTH } from './Sidebar';

export default function TopBar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        ml: `${SIDEBAR_WIDTH}px`,
        bgcolor: 'background.default',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" color="text.primary">
          Dashboard
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="primary">
              <NotifIcon />
            </Badge>
          </IconButton>
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: 14 }}>
            U
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}