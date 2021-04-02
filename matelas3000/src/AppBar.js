import React, { useState } from 'react';
import { Bar, AppBar, Toolbar, Button, List, ListItem } from 'react95';

export default ({ openUserWindow, openPostProcessWindow }) => {
    const [open, setOpen] = useState(false);
    const [isAdmin, setAdmin] = useState(true);

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

              {isAdmin && <ListItem onClick={() => openPostProcessWindow()}  size='sm'>Post-traitement</ListItem>}
              {!isAdmin && <ListItem>Pilote Test</ListItem>}
              {<ListItem>Outils de débogage</ListItem>}
              {<ListItem>Informations sur la page</ListItem>}
              {<ListItem>Rechercher</ListItem>}
              {isAdmin && <ListItem>Synchronisation</ListItem>}
              {isAdmin && <ListItem>Sécurité</ListItem>}
              {isAdmin && <ListItem>Autorisations</ListItem>}
              {!isAdmin && <ListItem
               onClick={() => {
                openUserWindow();
                setAdmin(true);
              }}
              size='sm'
              >Se connecter en administrateur</ListItem>}
            </List>
          )}
        </div>
      <Button variant='menu'>Aide</Button>
    </Toolbar>
  </AppBar>
)};
