import styled from 'styled-components';
import homeImg from '../assets/homeBcg.jpeg';

const Hero = styled.header `
  min-height: 100vh;
  background: url(${props => props.img || homeImg});
`;

export default Hero