// Style your elements here

import styled from 'styled-components'

export const ListDirectionItem = styled.li`
  list-style-type: none;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 40%;
  max-width: 200px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const ButtonDirectionItem = styled.button`
  width: 100%;
  max-width: 200px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
