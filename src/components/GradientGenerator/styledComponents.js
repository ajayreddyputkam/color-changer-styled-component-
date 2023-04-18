// Style your elements here

import styled from 'styled-components'

export const BackGroundMainContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.activeValue},
    ${props => props.color1},
    ${props => props.color2}
  );
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 700;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const DirectionText = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const DirectionButtonList = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

export const ColorInputsMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
  margin-left: 15px;
`

export const InputColorCode = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const InputColor = styled.input`
  border: 2px solid #334155;
  outline: none;
  padding: 0px;
  width: 100px;
  height: 45px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 50px;
  }
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border: none;
  border-radius: 7px;
  width: 150px;
  height: 40px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  margin-top: 30px;
`
