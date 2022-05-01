import React, { useState, useRef, useEffect } from "react";
import { Grid, Segment, Dimmer, Loader } from "semantic-ui-react";
import TextBoxCom from "../components/TextBox/TextBoxCom";
import ButtonCom from "../components/Button/ButtonCom";
import styled from "styled-components";
import LabelCom from "../components/Label/LabelCom";
import { variable } from "../css/variable";
import WeatherInformation from "./WeatherInformation";
import { getForecastData } from "../actions/forecast";
import { useDispatch, useSelector } from "react-redux";
import bgImage from "../assets/images/Artboard1.png"

const StyledSegment = styled(Segment)`
  background-color: rgba(255, 255, 255, 0.15) !important;
  margin-top:20px !important;
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
const StyledContainer = styled.div`
  background: url(${bgImage}) !important; 
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
`;

const StyledDiv = styled.div`
`;

const StyledError = styled(LabelCom)`
  color: ${variable.ERROR_COLOR};
  font-weight: bold;
  font-size: ${variable.FONTSIZE_5};
`;

const WeatherForecast = () => {
  const [name, setName] = useState("Thailand");
  const focusCity = useRef(null);
  const dispatch = useDispatch();
  const forecastData = useSelector((state) => state.forecast);

  useEffect(() => {
    dispatch(getForecastData(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchWeather = () => {
    dispatch(getForecastData(name));
  };

  return (
    <StyledContainer>
      <Grid stackable verticalAlign="middle"  textAlign="center">
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6} centered>
            <StyledDiv>
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
              <StyledError>{forecastData.error}</StyledError>
              <br />
              <Div></Div>
              <ButtonCom
                description={"Search"}
                searchWeather={onSearchWeather}
                size={"small"}
              />
            </StyledDiv>
          </Grid.Column>
          <Grid.Column width={7} textAlign="center" style={{ minHeight: 450,textAlign:'center' }}>
            {forecastData.dataList ? (
              <StyledSegment>
                <WeatherInformation data={forecastData.dataList} />
              </StyledSegment>
            ) : (
             < ></> 
            )}
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
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
    </StyledContainer>
  );
};

export default WeatherForecast;
