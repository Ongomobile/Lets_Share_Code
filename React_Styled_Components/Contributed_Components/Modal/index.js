import React from 'react';
import { Overlay, Content } from './modal-styles';

// To add a close button pass down a button and method
// otherwise just use a button with method in your content
// See modal-styles Content for customizations

const Modal = (props) => {
  return (
    <Overlay>
      <Content
        setMargin={props.setMargin}
        setBgColor={props.setBgColor}
        setBorderRadius={props.setBorderRadius}
        setPadding={props.setPadding}
        setPosition={props.setPosition}
        setHeight={props.setHeight}
        setWidth={props.setWidth}
      >
        {props.children}
      </Content>
    </Overlay>
  );
};

export default Modal;
