import React from "react";
import {Image} from "semantic-ui-react"

const ImageCom = ({ className,name }) => {
  return <Image className={className} src={"http://openweathermap.org/img/wn/" + name + ".png"}/>;
};

export default ImageCom;
