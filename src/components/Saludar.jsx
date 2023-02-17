import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { firsName, lastName } = props;
  return (
    <View>
      <Text>
        Saludar {firsName} {lastName}
      </Text>
    </View>
  );
}

// Saludar.defaultProps = {
//   firsName: "Nombre",
//   lastName: "Apellido",
// };

Saludar.propTypes = {
  firsName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
};
