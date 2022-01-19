import styled from 'styled-components';
import PropsType from '../PropsType';

const Span = styled.span<PropsType>`
  margin: ${(props) => props.margin && props.margin};
  font-size: ${(props) => (props.fSize ? props.fSize : '1rem')};
  font-weight: ${(props) => (props.fWeight ? props.fWeight : 'normal')};
  color: ${(props) => (props.color ? props.color : 'intial')};
`;

export default Span;
