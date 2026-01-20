import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DashboardPage from './pages/DashboardPage';
import LessonPage from './pages/LessonPage';
import PracticePage from './pages/PracticePage';
import AlphabetPage from './pages/AlphabetPage';
import VocabularyPage from './pages/VocabularyPage';
import ConversationPage from './pages/ConversationPage';
import ConjugationPage from './pages/ConjugationPage';
import RoadmapPage from './pages/RoadmapPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/practice/:practiceId" element={<PracticePage />} />
        <Route path="/alphabet" element={<AlphabetPage />} />
        <Route path="/vocabulary" element={<VocabularyPage />} />
        <Route path="/vocabulary/:categoryId" element={<VocabularyPage />} />
        <Route path="/conversation" element={<ConversationPage />} />
        <Route path="/conversation/:conversationId" element={<ConversationPage />} />
        <Route path="/conjugation" element={<ConjugationPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
