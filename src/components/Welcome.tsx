import { useNavigate } from 'react-router-dom';
import questions from '../data/questions.json';
import {
  Eyebrow, IntroFact, IntroFactLabel, IntroFacts, IntroFactValue,
  Panel, StartButton, WelcomeDescription, WelcomeTitle
} from '../styles';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <Panel>
      <Eyebrow>REACT · QUIZ</Eyebrow>
      <WelcomeTitle>Pon a prueba lo que sabes de React.</WelcomeTitle>
      <WelcomeDescription>
        Un cuestionario rápido con preguntas de opción múltiple.
        Elige una respuesta por pregunta y descubre tu puntuación al final.
      </WelcomeDescription>
      <IntroFacts>
        <IntroFact><IntroFactValue>{questions.length}</IntroFactValue><IntroFactLabel>preguntas</IntroFactLabel></IntroFact>
        <IntroFact><IntroFactValue>1</IntroFactValue><IntroFactLabel>respuesta por pregunta</IntroFactLabel></IntroFact>
        <IntroFact><IntroFactValue>100%</IntroFactValue><IntroFactLabel>concentración</IntroFactLabel></IntroFact>
      </IntroFacts>
      <StartButton onClick={() => navigate('/quiz')}>
        Empezar test <span aria-hidden="true">→</span>
      </StartButton>
    </Panel>
  );
}
