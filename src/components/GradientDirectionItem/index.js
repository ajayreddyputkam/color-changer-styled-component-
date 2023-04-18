// Write your code here

import {ListDirectionItem, ButtonDirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirection, changeDirection, isActive} = props
  const {directionId, displayText} = eachDirection

  const changeActiveDirection = () => {
    changeDirection(directionId)
  }

  return (
    <ListDirectionItem>
      <ButtonDirectionItem onClick={changeActiveDirection} isActive={isActive}>
        {displayText}
      </ButtonDirectionItem>
    </ListDirectionItem>
  )
}

export default GradientDirectionItem
