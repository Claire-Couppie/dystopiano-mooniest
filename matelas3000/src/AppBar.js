import React, { useState } from 'react';
import { Bar, AppBar, Toolbar, Button, List, ListItem } from 'react95'; 

export default ({ openUserWindow, openPostProcessWindow }) => {
    const [open, setOpen] = useState(false);

    return (
    <AppBar>
    <Toolbar>
      <Button variant='menu'>Fichier</Button>
      <Button variant='menu'>Edition</Button>
      <Button variant='menu'>Affichage</Button>
      <div
          style={{
            position: 'relative',
            display: 'inline-block',
            alignSelf: 'left'
          }}
        >
          <Button
            variant='menu'
            onClick={() => setOpen(!open)}
            size='sm'
            active={open}
          >
            Outils
          </Button>
          {open && (
            <List
              style={{
                position: 'absolute',
                right: '0',
                top: '100%',
                zIndex: '9999'
              }}
              open={open}
              onClick={() => setOpen(false)}
            >
              <ListItem onClick={() => openUserWindow()}  size='sm'>Se connecter en administrateur</ListItem>
              <ListItem onClick={() => openPostProcessWindow()}  size='sm'>Post-traitement</ListItem>
            </List>
          )}
        </div>
      <Button variant='menu'>Aide</Button>
    </Toolbar>
  </AppBar>
)};