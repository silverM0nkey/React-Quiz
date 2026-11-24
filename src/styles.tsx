import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

const globalStyles = css`
  :root {
    font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #f2f5ff;
    background: #0e1528;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  * { box-sizing: border-box; }
  body { margin: 0; min-width: 320px; }
`;

export function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export const AppShell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: radial-gradient(ellipse 60% 45% at 50% 15%, #20264c 0%, transparent 85%), #0e1528;
`;

export const SiteHeader = styled.header`
  width: min(1100px, calc(100% - 40px));
  margin: 0 auto;
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) { min-height: 75px; }
`;

export const Brand = styled.div`
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.8px;
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const BrandMark = styled.span`
  display: inline-grid;
  place-items: center;
  height: 34px;
  width: 34px;
  background: #8d6af5;
  border-radius: 11px;
  color: #fff;
  font-weight: 800;
`;

export const BrandLight = styled.span`
  font-weight: 400;
  color: #b2bad1;
`;

export const HeaderPill = styled.span`
  border: 1px solid #303a56;
  border-radius: 50px;
  padding: 8px 14px;
  color: #c1c7dd;
  font-size: 12px;
  @media (max-width: 600px) { font-size: 10px; }
`;

export const MainContent = styled.main`
  width: min(750px, calc(100% - 32px));
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0 28px;
`;

export const SiteFooter = styled.footer`
  text-align: center;
  color: #707d9e;
  font-size: 12px;
  padding: 0 20px 12px;
`;

export const Panel = styled.section`
  background: #18213a;
  border: 1px solid #35405d;
  border-radius: 24px;
  box-shadow: 0 30px 70px #0002;
  width: 100%;
  padding: 30px 36px;
  @media (max-width: 600px) { padding: 26px 23px; }
`;

export const Eyebrow = styled.span`
  color: #bda8ff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
`;

export const MutedText = styled.p`
  color: #a9b4cd;
`;

export const PrimaryButton = styled.button`
  border: 0;
  border-radius: 11px;
  padding: 11px 17px;
  cursor: pointer;
  font: inherit;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: #9478fc;
  color: #15102b;
  transition: transform .15s, background .15s;
  &:hover:not(:disabled) { transform: translateY(-2px); background: #af9aff; }
  &:disabled { background: #414b65; color: #8891a8; cursor: not-allowed; }
  &:focus-visible { outline: 3px solid #b69aff; outline-offset: 3px; }
`;

export const WelcomeTitle = styled.h1`
  font-size: clamp(32px, 5vw, 51px);
  line-height: 1.13;
  letter-spacing: -2px;
  max-width: 530px;
  margin: 20px 0;
`;

export const WelcomeDescription = styled(MutedText)`
  font-size: 16px;
  line-height: 1.8;
  max-width: 560px;
`;

export const IntroFacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 37px 0;
  @media (max-width: 600px) { gap: 13px; }
`;

export const IntroFact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-right: 23px;
  border-right: 1px solid #39435e;
  &:last-child { border: 0; }
  @media (max-width: 600px) { padding-right: 13px; }
`;

export const IntroFactValue = styled.strong`
  font-size: 21px;
`;

export const IntroFactLabel = styled.span`
  color: #a9b4cd;
  font-size: 12px;
`;

export const StartButton = styled(PrimaryButton)`
  padding: 17px 26px;
`;

export const QuizTopline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const QuestionCounter = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #d5daed;
`;

export const ProgressTrack = styled.div`
  height: 7px;
  background: #2c3551;
  border-radius: 15px;
  margin: 14px 0 20px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  border-radius: 15px;
  background: #9579fa;
  transition: width .2s;
`;

export const CategoryTag = styled.span`
  display: inline-block;
  background: #2d2b54;
  color: #d4c8ff;
  padding: 6px 11px;
  border-radius: 7px;
  font-size: 11px;
  font-weight: 700;
`;

export const QuestionHeading = styled.h2`
  font-size: clamp(20px, 2.6vw, 26px);
  line-height: 1.25;
  letter-spacing: -.5px;
  margin: 12px 0 16px;
`;

export const Options = styled.div`
  display: grid;
  gap: 8px;
`;

export const OptionButton = styled.button<{ selected: boolean }>`
  background: ${({ selected }) => selected ? '#312b59' : '#202b45'};
  color: #e6eafd;
  border: 1px solid ${({ selected }) => selected ? '#aa92ff' : '#3d4864'};
  border-radius: 13px;
  min-height: 49px;
  text-align: left;
  padding: 9px 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 14px;
  font: inherit;
  transition: background .15s, border-color .15s;
  &:hover { background: #2c3756; border-color: #8e79ed; }
  &:focus-visible { outline: 3px solid #b69aff; outline-offset: 3px; }
`;

export const OptionLetter = styled.span<{ selected: boolean }>`
  width: 28px;
  height: 28px;
  flex: none;
  display: grid;
  place-items: center;
  background: ${({ selected }) => selected ? '#9778ff' : '#35405d'};
  border-radius: 8px;
  font-size: 13px;
  font-weight: 800;
  color: ${({ selected }) => selected ? '#160d37' : '#d4dafa'};
`;

export const OptionCheck = styled.span`
  margin-left: auto;
  font-weight: 800;
  color: #bca8ff;
`;

export const QuizFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 18px;
  @media (max-width: 600px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const HelperText = styled(MutedText)`
  font-size: 12px;
  margin: 0;
`;

export const NextButton = styled(PrimaryButton)`
  @media (max-width: 600px) { width: 100%; }
`;

export const ResultsPanel = styled(Panel)`
  text-align: center;
`;

export const ResultIcon = styled.div`
  display: grid;
  place-items: center;
  width: 73px;
  height: 73px;
  margin: 20px auto 10px;
  border-radius: 22px;
  background: #372c61;
  color: #e3d7ff;
  font-size: 37px;
`;

export const ResultTitle = styled.h1`
  font-size: clamp(32px, 5vw, 51px);
  line-height: 1.13;
  letter-spacing: -2px;
  max-width: 530px;
  margin: 14px auto;
`;

export const ResultScore = styled.div`
  font-size: 88px;
  font-weight: 800;
  letter-spacing: -5px;
  margin-top: 30px;
  @media (max-width: 600px) { font-size: 70px; }
`;

export const ResultTotal = styled.span`
  font-size: 32px;
  color: #9aa7c1;
  letter-spacing: -1px;
`;

export const ResultPercent = styled.p`
  color: #bbabff;
  margin-top: 0;
  margin-bottom: 30px;
  font-weight: 700;
`;
