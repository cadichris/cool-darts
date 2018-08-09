import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";
import { Textes } from "../../styles";
import TexteApparaissant from "../../Technique/TexteApparaissant";

export const UnContrat = ({ delta }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center"
    }}
  >
    {delta > 0 && (
      <TexteApparaissant
        style={[
          Textes.light,
          { fontSize: 19, color: "#8df69a", textAlign: "center" }
        ]}
      >
        +{delta}
      </TexteApparaissant>
    )}
    {delta < 0 && (
      <TexteApparaissant
        style={[
          Textes.light,
          { fontSize: 19, color: "#f6655d", textAlign: "center" }
        ]}
      >
        / 2
      </TexteApparaissant>
    )}
  </View>
);

UnContrat.propTypes = {
  delta: PropTypes.number
};