import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Portrait from "../Technique/Portrait";
import ViewQuiDecale from "../Technique/ViewQuiDecale";
import ListeDesInscrits from "./ListeDesInscrits";
import DemarrerLaPartie from "./DemarrerLaPartie";
import FormulaireInscription from "./FormulaireInscription";

class InscriptionDesJoueurs extends Component {
  state = {
    inscrits: [],
    partieEnCours: false
  };

  inscrire(joueur) {
    const { inscrits } = this.state;
    this.setState({
      inscrits: [...inscrits, joueur]
    });
  }

  desinscrire(partant) {
    const { inscrits } = this.state;
    this.setState({
      inscrits: inscrits.filter(joueur => joueur !== partant)
    });
  }

  laPartiePeutDemarrer() {
    return this.state.inscrits.length > 1;
  }

  demarrerPartie() {
    this.setState({ partieEnCours: true });
  }

  retourAuxInscriptions() {
    this.setState({ partieEnCours: false });
  }

  render() {
    const { inscrits, partieEnCours } = this.state;
    const { children } = this.props;

    if (partieEnCours)
      return children(inscrits, () => this.retourAuxInscriptions());

    return (
      <Portrait>
        <View style={[{ flex: 1, alignItems: "center" }]}>
          <ViewQuiDecale
            dureeDuDecalage={900}
            coteDeDepart="right"
            style={[{ flex: 1, width: "80%" }]}
          >
            <FormulaireInscription
              inscriptionAcceptee={joueur =>
                joueur !== "" && !inscrits.includes(joueur)
              }
              onSubmit={joueur => this.inscrire(joueur)}
            />

            <ListeDesInscrits
              inscrits={inscrits}
              onDesinscription={partant => this.desinscrire(partant)}
            />
          </ViewQuiDecale>

          <ViewQuiDecale dureeDuDecalage={1000} coteDeDepart="left">
            <DemarrerLaPartie
              onPress={() => this.demarrerPartie()}
              isDisabled={!this.laPartiePeutDemarrer()}
            />
          </ViewQuiDecale>
        </View>
      </Portrait>
    );
  }
}

InscriptionDesJoueurs.propTypes = {
  children: PropTypes.func.isRequired
};

export default InscriptionDesJoueurs;