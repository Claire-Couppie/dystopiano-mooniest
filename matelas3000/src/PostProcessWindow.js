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
  min-width: 50%
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

export default ({closeWindow, launchDreams}) => {
  const code1 = `void readLargerTextFile(String aFileName) throws IOException {
    Path path = Paths.get(aFileName);
    try (Scanner scanner =  new Scanner(path, ENCODING.name())){
        while (scanner.hasNextLine()){
            //process each line in some way
            log(scanner.nextLine());
        }
    }
}

private static void log(Object aMsg){
    System.out.println(String.valueOf(aMsg));
}`;
  const code2 = `	public static void main(String [] args) throws IOException
	{
		modeleInit = Dreamer.computeHappiness(dream);
		//TODO
		int i=0;
		Modele modeleBoucle = (Modele) modeleInit.clone();
		do {
			modeleBoucle = Algo1.algoModele(modeleBoucle);
			
			Resultat newResultat = Algo1.algoResultat(modeleBoucle);
			int newScore = CalculScore.score(newResultat);
			ShowResult.print(newResultat);
			if (newScore>scoreMax){
				modeleMax = modeleBoucle;
				resultatMax = newResultat;
			}
			i++;
		} while (false);
		
		FileWriter.writeLargerTextFile("out.txt", resultatMax);
	}
`;
  const code3 = `	public static List<Resultat> selection(List<Resultat> populationInitiale) {
		List<Resultat> nouvelleGeneration = new ArrayList<Resultat>();
		Map<Resultat,Integer> scores = new HashMap<Resultat,Integer>();
		Map<Resultat,Integer> bestScores = new HashMap<Resultat,Integer>();
		
		int actualMinScore = Integer.MAX_VALUE;
		Resultat actualMinResultat = null;
		
		for (Resultat resultat : populationInitiale) {
			int score = CalculScore.score(resultat);
			scores.put(resultat, score);
		}
		
		for (Entry<Resultat,Integer> entry : scores.entrySet()) {
			if(bestScores.size()<(populationInitiale.size()/2)) {
				bestScores.put(entry.getKey(),entry.getValue());
				if(actualMinScore>entry.getValue()){
					actualMinScore = entry.getValue();
					actualMinResultat = entry.getKey();
				}
`;

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
      <p>Décodage du rêve</p>
          <div style={{ display: 'flex' }}>
            <TextField
              multiline
              rows={4}
              defaultValue={code1}
              fullWidth
              spellCheck='false'
            />
            <Button onClick={() => {}} style={{ marginLeft: 4 }}>
              Lancer
            </Button>
          </div>
          <p>Calculer l'effet sur le rêveur</p>
          <div style={{ display: 'flex' }}>
            <TextField
              multiline
              rows={4}
              defaultValue={code2}
              fullWidth
              spellCheck='false'
            />
            <Button onClick={launchDreams} style={{ marginLeft: 4 }}>
              Lancer
            </Button>
          </div>
          <p>Archivage du rêve</p>
          <div style={{ display: 'flex' }}>
            <TextField
              multiline
              rows={4}
              defaultValue={code3}
              fullWidth
              spellCheck='false'
            />
            <Button onClick={() => {}} style={{ marginLeft: 4 }}>
              Lancer
            </Button>
          </div>
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