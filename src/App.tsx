import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import { AppShell, Brand, BrandLight, BrandMark, HeaderPill, MainContent, SiteFooter, SiteHeader } from './styles';

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <SiteHeader>
          <Brand>
            <BrandMark>R</BrandMark>
            <span>react<BrandLight>quiz</BrandLight></span>
          </Brand>
          <HeaderPill>Prueba práctica</HeaderPill>
        </SiteHeader>

        <MainContent>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainContent>

        <SiteFooter>React Quiz</SiteFooter>
      </AppShell>
    </BrowserRouter>
  );
}
