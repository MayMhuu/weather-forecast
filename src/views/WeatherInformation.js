import React from "react";
import { Grid, Segment, Icon, Divider } from "semantic-ui-react";
import styled from "styled-components";
import LabelCom from "../components/Label/LabelCom";
import ImageCom from "../components/Image/Image";
import { variable } from "../css/variable";

const StyledHeader = styled(LabelCom)`
  color: ${variable.PRIMARY_COLOR};
  font-weight: bold;
  font-size: ${variable.FONTSIZE_30};
`;

const Div = styled.div`
  margin-top: 20px;
`;

const Image = styled(ImageCom)`
  display: inline-block !important;
`;

const WeatherInformation = ({ data }) => {
  console.log("dataXXX", data);
  let { currentWeather, fiveDaysWeather } = data;
  return (
    <div>
      <Image name={currentWeather.data.weather[0].icon + "@2x"} />
      <br />
      <Div></Div>
      <StyledHeader>{currentWeather.data.wind.deg} °C</StyledHeader>
      <br />
      <Div></Div>
      <LabelCom>
        <Icon name="map marker alternate" />
        {currentWeather.data.name}
      </LabelCom>
      <br />
      <Div></Div>
      <LabelCom>Current Location</LabelCom>
      <Grid verticalAlign="middle">
        {currentWeather.data.weather.map((data, index) => {
          return (
            <Grid.Row key={index}>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={4}>{data.main}</Grid.Column>
              <Grid.Column width={4}>  <Image name={data.icon} /></Grid.Column>
              <Grid.Column width={4}>{currentWeather.data.wind.deg} ° C
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
          );
        })}
        {/* {fiveDaysWeather.data.list.map((data, index) => {
          return (
            <Grid.Row height={"40px"} index={index}>
              <Grid.Column width={4}>MON</Grid.Column>
              <Grid.Column width={12}>
                <Image name={data.weather[0].icon} />
                {data.wind.deg} ° C
              </Grid.Column>
            </Grid.Row>
          );
        })} */}
       
      </Grid>
      <br />
      <Div></Div>
      <LabelCom>Addition Information</LabelCom>
    </div>
  );
};

export default WeatherInformation;
