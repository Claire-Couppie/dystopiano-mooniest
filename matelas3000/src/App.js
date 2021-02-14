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
  const [UserWindowOpen, setUserWindowOpen] = useState(false);
  const [PostProcessWindowOpen, setPostProcessWindowOpen] = useState(false);
  return (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
    <AppBar openUserWindow={() => setUserWindowOpen(true)} openPostProcessWindow={() => setPostProcessWindowOpen(true)}/>
    {UserWindowOpen && <UserWindow closeWindow={() => setUserWindowOpen(false)} />}
    {PostProcessWindowOpen && <PostProcessWindow closeWindow={() => setPostProcessWindowOpen(false)} />}
  </ThemeProvider>
  </div>
)};

export default App;