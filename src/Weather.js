import styled from "styled-components"

export default function Weather() {
  const City = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #ddd;
    margin: 1em 0;
  `
  const Region  = styled.div`
    font-size: 40px;
    font-weight: 900;
  `
  const InfoBox = styled.div`
    width: 100%;
    height: 300px;
    padding: 2em;
    background-color: #f8f8f8;
    box-sizing: border-box;
    border-radius: 1em;
  `
  const Figure = styled.span`
    font-size: 120px;
    color: orange;
    vertical-align: middle;
    font-family: "Material Icons";
  `
  const Temperature = styled.span`
    color: #ddd;
    font-size: 50px;
    font-weight: 700;
    vertical-align: middle;
    margin-left: .5em;
  `
  const Info = styled.div`
    width: 100%;
    height: 2em;
    display: flex;
    border: 2px solid #eee;
    border-radius: .8em;
    color: #642;
    font-size: 16px;
    font-weight: 700;
    margin: 1em auto;
    padding-top: .25em;
    box-sizing: border-box;
    position: relative;
  `
  const InfoSub = styled.div`
    color: ${props => props.pos === "left"? "#642" : "#874"};
    position: absolute;
    ${props => props.pos === "left"? "left" : "right"}: 1em;
  `

  const data = {
    city: "대한민국, 인천광역시",
    region: "송도동",
    weather: "sunny",
    temp_cur: 10,
    temp_max: 13,
    temp_min: 10,
    temp_feel: 7
  }

  return (
    <div>
      <h1>Weather</h1>
      <Region>{data.region}</Region>
      <City>{data.city}</City>
      <InfoBox>
        <Figure>{data.weather}</Figure>
        <Temperature>{data.temp_cur}<span style={{color: "#555"}}>˚</span></Temperature>
        <Info><InfoSub pos="left">최고기온/최저기온</InfoSub><InfoSub pos="right">{data.temp_max}˚C/{data.temp_min}˚C</InfoSub></Info>
        <Info><InfoSub pos="left">체감온도</InfoSub><InfoSub pos="right">{data.temp_feel}˚C</InfoSub></Info>
      </InfoBox>
    </div>
  )
}