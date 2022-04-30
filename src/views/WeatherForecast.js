import React, { useState, useRef, useEffect } from "react";
import { Grid, Segment, Container, Dimmer, Loader } from "semantic-ui-react";
import TextBoxCom from "../components/TextBox/TextBoxCom";
import ButtonCom from "../components/Button/ButtonCom";
import styled from "styled-components";
import LabelCom from "../components/Label/LabelCom";
import { variable } from "../css/variable";
import WeatherInformation from "./WeatherInformation";
import { getForecastData } from "../actions/forecast";
import { useDispatch, useSelector } from "react-redux";

const StyledSegment = styled(Segment)`
background: transparent !important;
border: ${props => props.borderStyle ? "0px !important" : "1px solid #fff"};
box-shadow: ${props => props.borderStyle ? "0px 0px 0px 0px !important" : "0px 1px 2px 0px solid #fff "};
`;
const StyledHeader = styled(LabelCom)`
  color: ${variable.PRIMARY_DARK};
  font-weight: bold;
  font-size: ${variable.FONTSIZE_30};
`;
const Div = styled.div`
  margin-top: 20px;
`;
const StyledDimmer = styled(Dimmer)`
  background-color: transparent !important;
`;

const WeatherForecast = () => {
  const [name, setName] = useState("Thailand");
  const focusCity = useRef(null);
  const dispatch = useDispatch();
  const forecastData = useSelector((state) => state.forecast);
  console.log("foreXXX", forecastData);

  useEffect(() => {
    dispatch(getForecastData(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchWeather = () => {
    dispatch(getForecastData(name));
  };

  return (
    <div>
      <Grid stackable style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Row>
          <Grid.Column wdth={2}></Grid.Column>
          <Grid.Column width={6}>
            <Container>
              <StyledHeader>Weather Forecast</StyledHeader>
              <br />
              <Div></Div>
              <LabelCom>Enter Location : </LabelCom>
              <br />
              <Div></Div>
              <TextBoxCom
                placeholder={"Enter Location"}
                inputRef={focusCity}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <Div></Div>
              <ButtonCom
                description={"Search"}
                searchWeather={onSearchWeather}
                size={"small"}
              />
            </Container>
          </Grid.Column>
          <Grid.Column width={7}>
            <StyledSegment borderStyle={forecastData.loading}>
              {forecastData.dataList ? (
                <WeatherInformation data={forecastData.dataList} />
              ) : (
                <div>{forecastData.error}</div>
              )}
            </StyledSegment>
          </Grid.Column>
          <Grid.Column wdth={1}></Grid.Column>
        </Grid.Row>
      </Grid>
      {forecastData.loading && (
        <div
          className="align-items-center justify-content-center"
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            background: "rgba(0,0,0,0.8)",
            zIndex: "999",
          }}
        >
          <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <div style={{ display: forecastData.loading ? "block" : "none" }}>
                <StyledDimmer active>
                  <Loader content="Loading" />
                </StyledDimmer>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
