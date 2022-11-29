import { useState, useEffect } from "react"
import styled from "styled-components"
import color from "../Color"
import GroupNav from "../components/GroupNav"
import { getUltraSrtFcst, getUltraSrtNcst } from "../api/weather"
import Inner from "../components/Inner"
import WeatherFig from "../components/WeatherFig"

const City = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${color.subtext};
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
  background-color: ${color.background2};
  box-sizing: border-box;
  border-radius: 1em;
`
const Temperature = styled.span`
  color: ${color.subtext};
  font-size: 50px;
  font-weight: 700;
  vertical-align: middle;
  margin-left: .5em;
`
const Info = styled.div`
  width: 100%;
  height: 2em;
  display: flex;
  border: 2px solid ${color.border2};
  border-radius: .8em;
  color: ${color.highliight1};
  font-size: 16px;
  font-weight: 700;
  margin: 1em auto;
  padding-top: .25em;
  box-sizing: border-box;
  position: relative;
`
const InfoSub = styled.div`
  color: ${props => props.pos === "left"? color.highliight1 : color.highliight2};
  position: absolute;
  ${props => props.pos === "left"? "left" : "right"}: 1em;
`

export default function Weather() {
  // const [data, setData] = useState({
  //   city: "대한민국, 인천광역시",
  //   region: "송도동",
  //   sky: 0,
  //   temp_cur: 0,
  //   temp_max: 0,
  //   temp_min: 0,
  //   temp_feel: 0
  // })
  const [tempCur, setTempCur] = useState('')
  const [sky, setSky] = useState('')
  useEffect(()=>{
    getUltraSrtNcst()
    .then(res =>{
      const items = res.response.body.items.item;
      setTempCur(items.filter(item => item.category === 'T1H')[0].obsrValue)
    })
    .catch(e => console.log(e))
    getUltraSrtFcst()
    .then(res => {
      const items = res.response.body.items.item
      setSky(items.filter(item => item.category === 'SKY')[0].fcstValue)
    })
    .catch(e => console.log(e))
  },[])

  return (
    <>
      <GroupNav />
      <Inner>
        <h1>Weather</h1>
        <Region>송도동</Region>
        <City>대한민국, 인천광역시</City>
        <InfoBox>
          <WeatherFig sky={sky}/>
          <Temperature>{tempCur}<span style={{color: "#555"}}>˚</span></Temperature>
          <Info><InfoSub pos="left">최고기온/최저기온</InfoSub><InfoSub pos="right">0˚C/0˚C</InfoSub></Info>
          <Info><InfoSub pos="left">체감온도</InfoSub><InfoSub pos="right">0˚C</InfoSub></Info>
        </InfoBox>
      </Inner>
    </>
  )
}