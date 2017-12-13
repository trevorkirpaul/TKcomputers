import React from 'react'
import styled from 'styled-components';
import {API} from '../../config';

const Li = styled.li`

  border-bottom: 2px solid #20A39E;
`;

const Detail = styled.p``
const IMGWrapper = styled.div`
  width: 100%;
`;
const IMG = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
export default (props) => {
  return (
    <Li>

      <Detail>Brand: {props.brand}</Detail>
      <Detail>Chipset: {props.chipset}</Detail>
      <Detail>Series: {props.cpuSeries}</Detail>
      <Detail>L3 Cache: {props.l3Cache}</Detail>
      <Detail>Memory: {props.memory}</Detail>
      <Detail>Socket: {props.socket}</Detail>
      <Detail>Threads: {props.threads}</Detail>
      <Detail>Cores: {props.cores}</Detail>
      <Detail>PCI Lanes: {props.pciLanes}</Detail>
      <IMGWrapper>
        <IMG src={`http://${API.IMAGES_URI}${props.imagePath}`} alt="part"/>
      </IMGWrapper>
      
    </Li>
  )
}
