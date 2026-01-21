import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Tracker } from './components/kit/Tracker';
import { Checklist } from './components/kit/Checklist';
import { AudioGuide } from './components/kit/AudioGuide';
import { BlogIndex } from './pages/BlogIndex';
import { BlogPost } from './pages/BlogPost';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/kit/tracker" element={<Tracker />} />
      <Route path="/kit/checklist" element={<Checklist />} />
      <Route path="/kit/audio" element={<AudioGuide />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default App;