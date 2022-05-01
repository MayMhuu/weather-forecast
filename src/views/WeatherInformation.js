import React from "react";
import { Grid, Icon,Divider } from "semantic-ui-react";
import styled from "styled-components";
import LabelCom from "../components/Label/LabelCom";
import ImageCom from "../components/Image/Image";
import { variable } from "../css/variable";

const StyledHeader = styled(LabelCom)`
  color: ${variable.PRIMARY_COLOR};
  font-weight: bold;
  font-size: ${variable.FONTSIZE_30};
`;

const StyledLabel = styled(LabelCom)`
  color: ${variable.PRIMARY_COLOR};
  font-weight: bold;
`;

const Div = styled.div`
  margin-top: 20px;
`;

const Image = styled(ImageCom)`
  display: inline-block !important;
`;

const StyledDiv = styled.div`
  background-color: rgba(255, 255, 255, 0) !important;
`;

const WeatherInformation = ({ data }) => {
  let { currentWeather, fiveDaysWeather } = data;
  return (
    <StyledDiv>
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
      <Divider horizontal> <LabelCom>Current Condation</LabelCom> </Divider>
      <Grid verticalAlign="middle">
        {currentWeather.data.weather.map((data, index) => {
          return (
            <Grid.Row key={index} style={{ paddingBottom: "0rem" }}>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={4}>
                <StyledLabel>{data.main}</StyledLabel>
              </Grid.Column>
              <Grid.Column width={4} textAlign="right">
                <Image name={data.icon} />
              </Grid.Column>
              <Grid.Column width={4}>
                <StyledLabel> {currentWeather.data.wind.deg} ° C</StyledLabel>
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
          );
        })}
      </Grid>
      <br />
      <Div></Div>
      <Divider horizontal> <LabelCom>Additional Information</LabelCom> </Divider>
      <br />
      <Div></Div>

      <Grid stackable>
        <Grid.Row style={{ padding: "0rem" }} columns={2}>
          <Grid.Column>
            <StyledLabel>
            Humidity : {currentWeather.data.main.humidity} %
            </StyledLabel>
          </Grid.Column>
          <Grid.Column>
            <StyledLabel>
              Visibility : {currentWeather.data.visibility} mb
            </StyledLabel>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: "0rem" }} columns={2}>
          <Grid.Column>
            <StyledLabel>
              Feels like : {currentWeather.data.main.feels_like}
            </StyledLabel>
          </Grid.Column>
          <Grid.Column>
            <StyledLabel>
              {" "}
              <StyledLabel>
                Temperature : {currentWeather.data.main.temp}
              </StyledLabel>
            </StyledLabel>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br />
      <Div></Div>
      
      <Divider horizontal> <LabelCom>5 day Weather Forecast</LabelCom> </Divider>
      <br />
      <Div></Div>
      <Grid verticalAlign="middle">
        <Grid.Row style={{ padding: "0rem" }}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={4}>
            <StyledLabel>MON</StyledLabel>
          </Grid.Column>
          <Grid.Column width={4} textAlign="right">
            <Image name={fiveDaysWeather.data.list[0].weather[0].icon} />
          </Grid.Column>
          <Grid.Column width={4}>
            <StyledLabel>{fiveDaysWeather.data.list[0].wind.deg} °</StyledLabel>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: "0rem" }}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={4}>
            <StyledLabel>TUE</StyledLabel>
          </Grid.Column>
          <Grid.Column width={4} textAlign="right">
            <Image name={fiveDaysWeather.data.list[1].weather[0].icon} />
          </Grid.Column>
          <Grid.Column width={4}>
            <StyledLabel>{fiveDaysWeather.data.list[1].wind.deg} °</StyledLabel>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: "0rem" }}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={4}>
            <StyledLabel>WED</StyledLabel>
          </Grid.Column>
          <Grid.Column width={4} textAlign="right">
            <Image name={fiveDaysWeather.data.list[2].weather[0].icon} />
          </Grid.Column>
          <Grid.Column width={4}>
            <StyledLabel>{fiveDaysWeather.data.list[2].wind.deg} °</StyledLabel>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: "0rem" }}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={4}>
            <StyledLabel>THURS</StyledLabel>
          </Grid.Column>
          <Grid.Column width={4} textAlign="right">
            <Image name={fiveDaysWeather.data.list[3].weather[0].icon} />
          </Grid.Column>
          <Grid.Column width={4}>
            <StyledLabel>{fiveDaysWeather.data.list[3].wind.deg} °</StyledLabel>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: "0rem" }}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={4}>
            <StyledLabel>FRI</StyledLabel>
          </Grid.Column>
          <Grid.Column width={4} textAlign="right">
            <Image name={fiveDaysWeather.data.list[4].weather[0].icon} />
          </Grid.Column>
          <Grid.Column width={4}>
            <StyledLabel>{fiveDaysWeather.data.list[4].wind.deg} °</StyledLabel>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </StyledDiv>
  );
};

export default WeatherInformation;
