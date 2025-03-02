import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Settings from './Settings';
import SettingsTitleBar from './SettingsTitleBar';
import '../renderer/App.css';

const Application = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
    }}
  >
    <SettingsTitleBar />
    <Settings />
  </Box>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Application />} />
      </Routes>
    </Router>
  );
}
