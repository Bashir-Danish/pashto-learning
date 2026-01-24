import { Routes, Route } from 'react-router-dom';
import { useUser } from './contexts/UserContext';
import Layout from './components/Layout/Layout';
import PWAUpdatePrompt from './components/PWAUpdatePrompt';
import UserSelectionPage from './pages/UserSelectionPage';
import UserStatsPage from './pages/UserStatsPage';
import DashboardPage from './pages/DashboardPage';
import LessonPage from './pages/LessonPage';
import PracticePage from './pages/PracticePage';
import AlphabetPage from './pages/AlphabetPage';
import VocabularyPage from './pages/VocabularyPage';
import ConversationPage from './pages/ConversationPage';
import ConjugationPage from './pages/ConjugationPage';
import RoadmapPage from './pages/RoadmapPage';

function App() {
  const { currentUser } = useUser();

  // Show user selection if no user is selected
  if (!currentUser) {
    return <UserSelectionPage />;
  }

  return (
    <>
      <PWAUpdatePrompt />
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/users" element={<UserStatsPage />} />
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
    </>
  );
}

export default App;
