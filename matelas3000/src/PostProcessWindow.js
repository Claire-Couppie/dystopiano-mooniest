import { useState } from 'react';
import { Window, WindowContent, WindowHeader, Button, TextField } from 'react95'; 
import styled from 'styled-components';

const Wrapper = styled.div`
padding: 5rem;
background: teal;
display: flex;
min-height: calc(100vh - 160px);
flex-direction: column;
justify-content: center;
align-items: center;.window-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.close-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: -1px;
  transform: rotateZ(45deg);
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: ___CSS_0___;
  }
  &:before {
    height: 100%;
    width: 3px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:after {
    height: 3px;
    width: 100%;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.window {
  width: 400px;
  min-height: 200px;
}
.window:nth-child(2) {
  margin: 2rem;
}
.footer {
    display: flex;
    justify-content: flex-end;
    margin: 30px;
}
.error {
    color: red;
}
.success {
    color: green;
}
`;

export default ({closeWindow}) => {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin, ante vel porttitor posuere, tellus nisi interdum ipsum, non bibendum ante risus ut purus. Curabitur vel posuere odio. Vivamus rutrum, nunc et ullamcorper sagittis, tellus ligula maximus quam, id dapibus sapien metus lobortis diam. Proin luctus, dolor in finibus feugiat, lacus enim gravida sem, quis aliquet tellus leo nec enim. Morbi varius bibendum augue quis venenatis. Curabitur ut elit augue. Pellentesque posuere enim a mattis interdum. Donec sodales convallis turpis, a vulputate elit. Suspendisse potenti.`;
    return (
        <Wrapper>
        <Window className='window'>
        <WindowHeader className='window-header'>
          <span>Post-traitement des rêves</span>
          <Button>
            <span className='close-icon' />
          </Button>
        </WindowHeader>
      <WindowContent>
      <TextField multiline rows={10} defaultValue={loremIpsum} fullWidth />
      </WindowContent>
      <div className='footer'>
      <Button onClick={() => {
            closeWindow();
      }}>OK</Button>
      </div>
    </Window>   
    </Wrapper>
     );
}