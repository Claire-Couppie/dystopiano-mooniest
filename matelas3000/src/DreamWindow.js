import { useState } from 'react';
import { Cutout, Window, WindowContent, WindowHeader, Button, TextField } from 'react95'; 
import styled from 'styled-components';

import hairspray from './hairspray.jpg';
import moulinrouge from './moulinrouge.jpg';
import greatestshowman from './greatestshowman.jpeg';
import lalaland from './lalaland.jpg';
import kinkyboot from './kinkyboot.jpg';
import interstella from './interstella.jpg';

const Wrapper = styled.div`
position: absolute;
.window-header {
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
    z-index: 9999;
  width: 400px;
  min-height: 200px;
}
.window:nth-child(2) {
  margin: 2rem;
}
.footer {
    display: flex;
    justify-content: flex-end;
    margin: 5px;
}
`;

const musicalSrc = [
    hairspray,
    moulinrouge,
    greatestshowman,
    lalaland,
    kinkyboot,
    interstella,
]
export default ({closeWindow, number}) => {
    return (
        <Wrapper style={{
            top: `${number}0%`,
            left: `${number}0%`
        }}>
        <Window className='window'>
        <WindowHeader className='window-header'>
          <span>{`Reve 10340039${number}`}</span>
          <Button>
            <span className='close-icon' />
          </Button>
        </WindowHeader>
      <WindowContent>
      <Cutout>
          <img
            style={{ width: '100%', height: '1uto', display: 'block' }}
            src={musicalSrc[number]}
            alt='kiwi'
          />
    </Cutout>
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