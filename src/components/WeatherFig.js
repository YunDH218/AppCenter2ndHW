import styled from "styled-components";

const Figure = styled.span`
  font-size: 120px;
  color: ${props => props.fig_color};
  vertical-align: middle;
  font-family: "Material Icons";
`

export default function WeatherFig(props) {
  if (props.sky < 5)
    return <Figure fig_color="orange">sunny</Figure>
  else if (props.sky < 8)
    return <Figure fig_color="skyblue">partly_cloudy_day</Figure>
  else
    return <Figure fig_color="skyblue">cloudy</Figure>
}