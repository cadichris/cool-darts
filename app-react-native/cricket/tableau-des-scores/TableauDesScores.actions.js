import TableauDesScoresReducer from './TableauDesScores.reducer'

export function ajouterJoueur(nomDuJoueur) {
  return {
    type: 'AJOUTER_JOUEUR',
    nomDuJoueur
  }
}