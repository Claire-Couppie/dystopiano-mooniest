import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, List, ListItem, Divider } from 'react95';
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

import AppBar from './AppBar';
import UserWindow from './UserWindow';
import DreamWindow from './DreamWindow';
import PostProcessWindow from './PostProcessWindow';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: teal;
  }
  ${styleReset}
`;

const App = () => {
  const [userWindowOpen, setUserWindowOpen] = useState(false);
  const [postProcessWindowOpen, setPostProcessWindowOpen] = useState(false);
  const [dreamWindowOpen, setDreamWindowOpen] = useState(-1);
  return (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
    <AppBar openUserWindow={() => setUserWindowOpen(true)} openPostProcessWindow={() => setPostProcessWindowOpen(true)}/>
    {userWindowOpen && <UserWindow closeWindow={() => setUserWindowOpen(false)} />}
    {postProcessWindowOpen && (
    <PostProcessWindow
        closeWindow={() => setPostProcessWindowOpen(false)}
        launchDreams={() => {
          for(let i=0;i<6;i++) {
            setTimeout(()=>setDreamWindowOpen(i), i*500);
          }
        }}
    />)}
    {dreamWindowOpen >= 0 && <DreamWindow number={0} closeWindow={() => setDreamWindowOpen(false)} />}
    {dreamWindowOpen >= 1 && <DreamWindow number={1} closeWindow={() => setDreamWindowOpen(false)} />}
    {dreamWindowOpen >= 2 && <DreamWindow number={2} closeWindow={() => setDreamWindowOpen(false)} />}
    {dreamWindowOpen >= 3 && <DreamWindow number={3} closeWindow={() => setDreamWindowOpen(false)} />}
    {dreamWindowOpen >= 4 && <DreamWindow number={4} closeWindow={() => setDreamWindowOpen(false)} />}
    {dreamWindowOpen >= 5 && <DreamWindow number={5} closeWindow={() => setDreamWindowOpen(false)} />}
  </ThemeProvider>
  </div>
)};

export default App;