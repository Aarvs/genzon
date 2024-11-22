import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import { Button, AppBar, Toolbar, Typography, Container, Box, CircularProgress } from '@mui/material';

function App() {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">
      <CircularProgress/>
    </div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return null; // Prevent rendering until redirect is complete
  }

  return (
    <Router>
      <AppBar position="static">
        <Toolbar className="bg-blue-800">
          <Typography variant="h6" className="flex-grow">
            GenZon
          </Typography>
          {isAuthenticated && (
            <Button color="inherit" onClick={() => logout()}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={4} p={2}>
          {isAuthenticated && (
            <Typography variant="h4" className="flex justify-center !mb-10">
                Welcome to GenZon, {user?.name}
            </Typography>
          )}
          <Routes>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/" element={<Navigate to="/profile" />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;


