import styled from 'styled-components';
import PropsType from '../PropsType';

const Span = styled.span<PropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  
  position: ${(props) => props.position && props.position};
  z-index: ${(props) => props.zIndex && props.zIndex};

  object-fit: 'cover';
`;

export default Span;
