import React from "react";
import { Button as SemanticButton } from "semantic-ui-react";
import styled from "styled-components";
import { variable } from "../../css/variable.js";

const StyleButton = styled(SemanticButton)`
  color: ${variable.PRIMARY_WHITE} !important;
  background-color: ${variable.PRIMARY_COLOR} !important;
  border-radius: ${variable.RADIUS_5}
  height:${variable.HEIGHT_PRIMARY};
  width:${variable.WIDTH_SECOND};
`;

const ButtonCom = ({ description, searchWeather, size }) => {
  return (
    <StyleButton size={size} onClick={searchWeather}>
      {description}
    </StyleButton>
  );
};

export default ButtonCom;
