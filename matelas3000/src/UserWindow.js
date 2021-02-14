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
    const [error, setError] = useState(false);
    const [nbError, setnbError] = useState(1);

    const displayError = () => {
        if (nbError === 4) {
            return ' Identification réussie. Désactivation de l\'alarme.';
        }
        else if (nbError === 3){
            return 'Mot de passe erroné. Déclenchement de l\'alarme';
        }
        else{
            return `Mot de passe erroné. Veuillez réessayer (${nbError}/3)`;
        }
    };

    return (
        <Wrapper>
        <Window className='window'>
        <WindowHeader className='window-header'>
          <span>Se connecter en tant qu'administrateur</span>
          <Button>
            <span className='close-icon' />
          </Button>
        </WindowHeader>
      <WindowContent>
        {error ? (
            <p className={nbError < 4 ? 'error' : 'success'}>
            {displayError()}
          </p>
        )
        : (
            <>
            <p>
              Entrer le mot de passe
            </p>
            <TextField
              placeholder='Mot de passe'
              fullWidth
            />
            </>)}
      </WindowContent>
      <div className='footer'>
      <Button onClick={() => {
          if (nbError < 4 && error) {
              setnbError(nbError + 1);
              setError(false);
          } else if (error) {
              closeWindow();
          } else {
              setError(true);
          }
      }}>OK</Button>
      </div>
    </Window>   
    </Wrapper>
     );
}