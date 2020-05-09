import React from "react";
import { Overlay, Content } from "./modal-styles";

//Example way to handle toggling the modal
// import React, {useState} from "react";
// const [isOpen, setIsOpen] = useState(false);

// const handleClose = () => {
//   setIsOpen(false);
// };

// const Example = () => {
//   return (
//     <div>
//       {isOpen && (
//         <Modal>
//           <YourComponent close={handleClose} />
//         </Modal>
//       )}
//       <button onClick{() => setIsOpen(true)}>Open Modal</button>
//     </div>
//   );
// };

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
