import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  cursor: pointer;
`;

export const Content = styled.div`
  margin: ${(props) => props.setMargin || '15% auto'};
  background-color: ${(props) => props.setBgColor || 'white'};
  border-radius: ${(props) => props.setBorderRadius || '0.25rem'};
  padding: ${(props) => props.setPadding || '2rem'};
  position: ${(props) => props.setPosition || 'relative'};
  height: ${(props) => props.setHeight || '50vh'};
  width: ${(props) => props.setWidth || '50vw'};
`;

//Optional
export const ButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  bottom: auto;
  left: auto;
`;
