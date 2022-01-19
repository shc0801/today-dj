import styled from 'styled-components';
import PropsType from '../PropsType';

const Btn = styled.span<PropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "#fff"};

  color: ${(props) => props.color ? props.color : "#fff"};
  
  border: ${(props) => props.border ? props.border : "none"};

  padding: 1rem;

  cursor: pointer;
`;

export default Btn;
