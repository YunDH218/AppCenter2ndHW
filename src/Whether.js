import styled from "styled-components"

export default function Whether() {
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

  return (
    <div>
      <h1>Whether</h1>
      <div style={{fontSize: "40px", fontWeight: "900"}}>송도동</div>
      <h3 style={{color: "#ddd", marginBottom: "2em"}}>대한민국, 인천광역시</h3>
      <div style={{width: "100%", height: "300px", padding: "2em", backgroundColor: "#f8f8f8", boxSizing: "border-box", borderRadius: "1em"}}>
        <span style={{fontSize: "120px", fontFamily: "Material Icons", color: "orange", verticalAlign: "middle"}}>sunny</span>
        <span style={{color: "#ddd", fontSize: "50px", fontWeight: "700", verticalAlign: "middle", marginLeft: ".5em"}}>10<span style={{color: "#555"}}>˚</span></span>
        <Info><InfoSub pos="left">최고기온/최저기온</InfoSub><InfoSub pos="right">13˚C/10˚C</InfoSub></Info>
        <Info><InfoSub pos="left">체감온도</InfoSub><InfoSub pos="right">7˚C</InfoSub></Info>
      </div>
    </div>
  )
}