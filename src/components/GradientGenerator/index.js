import {Component} from 'react'

import {
  BackGroundMainContainer,
  MainContainer,
  MainHeading,
  DirectionText,
  DirectionButtonList,
  ColorInputsMainContainer,
  ColorInputContainer,
  InputColorCode,
  InputColor,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    inputValue1: '#8ae323',
    inputValue2: '#014f7b',
    backGroundColor1: '#8ae323',
    backGroundColor2: '#014f7b',
    activeDirectionId: gradientDirectionsList[0].directionId,
    activeDirectionValue: gradientDirectionsList[0].value,
  }

  changeTheInputValue1 = event => {
    this.setState({inputValue1: event.target.value})
  }

  changeTheInputValue2 = event => {
    this.setState({inputValue2: event.target.value})
  }

  changeDirection = id => {
    this.setState({activeDirectionId: id})
  }

  changeTheBackground = () => {
    const {inputValue1, inputValue2, activeDirectionId} = this.state
    const activeDirectionObject = gradientDirectionsList.find(
      eachObject => eachObject.directionId === activeDirectionId,
    )
    const activeValue = activeDirectionObject.value
    this.setState({
      backGroundColor1: inputValue1,
      backGroundColor2: inputValue2,
      activeDirectionValue: activeValue,
    })
  }

  render() {
    const {
      inputValue1,
      inputValue2,
      backGroundColor1,
      backGroundColor2,
      activeDirectionId,
      activeDirectionValue,
    } = this.state

    return (
      <BackGroundMainContainer
        color1={backGroundColor1}
        color2={backGroundColor2}
        activeValue={activeDirectionValue}
        data-testid="gradientGenerator"
      >
        <MainContainer>
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <DirectionText>Choose Direction</DirectionText>
          <DirectionButtonList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                eachDirection={eachDirection}
                changeDirection={this.changeDirection}
                isActive={activeDirectionId === eachDirection.directionId}
              />
            ))}
          </DirectionButtonList>
          <DirectionText>Pick the Colors</DirectionText>
          <ColorInputsMainContainer>
            <ColorInputContainer>
              <InputColorCode>{inputValue1}</InputColorCode>
              <InputColor
                type="color"
                onChange={this.changeTheInputValue1}
                value={inputValue1}
              />
            </ColorInputContainer>
            <ColorInputContainer>
              <InputColorCode>{inputValue2}</InputColorCode>
              <InputColor
                type="color"
                onChange={this.changeTheInputValue2}
                value={inputValue2}
              />
            </ColorInputContainer>
          </ColorInputsMainContainer>
          <GenerateButton onClick={this.changeTheBackground}>
            Generate
          </GenerateButton>
        </MainContainer>
      </BackGroundMainContainer>
    )
  }
}

export default GradientGenerator
