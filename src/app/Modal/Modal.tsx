import ImageContainer from "../Category/ImageContainer/ImageContainer";
import classes from "./Modal.module.css";
import { Dispatch, useEffect, useRef } from "react";
const Modal = ({
  description,
  imageUrl,
  show,
  handleClose,
}: {
  description: string;
  imageUrl: string;
  show: boolean;
  handleClose: Dispatch<void>;
}) => {
  const newRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (newRef.current && !newRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [newRef]);

  return show ? (
    <div className={classes.modal}>
      <div
        ref={newRef}
        className={classes.container}
      >
        <img
          src={imageUrl}
          alt=""
          className={classes.img}
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
