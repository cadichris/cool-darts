import React from 'react'
import { StyleSheet } from 'react-native'

export const Tailles = {
  hauteurEnTete: 30,
  largeurDeLaColonneJoueur: 3
}

export const Couleurs = {
  bordure: 'white'
}

const fonts = {
  basique: 'Lato-Regular',
  epaisse: 'Lato-BlackItalic',
  fine: 'Lato-Italic',
}

export const Textes = StyleSheet.create({
  basique: {
    fontFamily: fonts.basique,
    color: 'white',
  },
  titre: {
    fontFamily: fonts.epaisse,
    fontSize: 34,
    color: 'white'
  },
  light: {
    fontFamily: fonts.fine,
    color: 'white',
  },
  mav: {
    fontSize: 22,
    color: 'white',
  },
  bouton: {
    fontFamily: fonts.fine,
    color: 'white'
  }
})

export const Boutons = StyleSheet.create({
  principal: {
    backgroundColor: '#6C5B7B',
    borderTopWidth: 0,
    borderBottomWidth: 0.4,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  secondaire: {
    backgroundColor: '#C06C84',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  }
})

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#355C7D',
    paddingTop: 25
  },
  contenuAuMilieu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bordureDroite: {
    borderRightColor: Couleurs.bordure,
    borderRightWidth: 1
  },
  bordureBasse: {
    borderBottomColor: Couleurs.bordure,
    borderBottomWidth: 1
  },
  chiffreFerme: {
    backgroundColor: '#F67280'
  }
});