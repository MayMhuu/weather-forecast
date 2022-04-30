import React from "react";
import { Input } from "semantic-ui-react";
import styled from "styled-components";
import { variable } from "../../css/variable.js";

const StyleInput = styled(Input)`
  border: 2px solid transparent;
  font-size: ${variable.FONTSIZE_5};
  border-radius: ${variable.RADIUS_5};
  height:${variable.HEIGHT_PRIMARY};
  width:${variable.WIDTH_PRIMARY};
  
`;

const TextBoxCom = ({ placeholder,inputRef,value,onChange }) => {
  return (
    <StyleInput
      ref={inputRef}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextBoxCom;
