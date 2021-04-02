import { useState } from 'react';
import { Cutout, Window, WindowContent, WindowHeader, Button, TextField } from 'react95';
import styled from 'styled-components';

import hairspray from './hairspray_like.png';
import moulinrouge from './moulinrouge_like.png';
import greatestshowman from './greatestshowman_like.png';
import lalaland from './lalaland_like.png';
import kinkyboot from './kinkyboots_like.png';
import interstella from './interstella_like.png';
import chicago from './chicago_like.png';
import cats from './cats_like.png';
import vampires from './vampires_like.png';

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
    interstella,
    moulinrouge,
    cats,
    greatestshowman,
    chicago,
    vampires,
    kinkyboot,
    lalaland,
    hairspray,
]
export default ({closeWindow, number}) => {
  console.log(number)
    return (
        <Wrapper style={{
            top: `${(number%5)*10 + 15}%`,
            left: `${(number%5)*10 + 5}%`
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
