import React, { useEffect, useRef, useState } from "react";

const Functional = () => {
  const [state, setState] = useState(0);
  const handleRandom = () => {
    const randomNum = Math.random();
    setState(randomNum);
  };

  const modalRef = useRef();
  const handleCancel = () => {
    modalRef.current.style.display = "none";
  };
  const handleOpen = () => {
    modalRef.current.style.display = "block";
  };

  useEffect(() => {
    const cancelFunc = (e) => {
      if (e.code === "Escape") {
        handleCancel();
      }
    };
    window.addEventListener("keydown", cancelFunc);

    return () => {
      window.removeEventListener("keydown", cancelFunc);
    };
  }, []);
  return (
    <div>
      <button onClick={handleOpen}>Open</button>
      <div
        ref={modalRef}
        className="modal-dialog"
        style={{ backgroundColor: "black" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Заказ 18020642-0063 доставлен</h5>
          </div>
          <div className="modal-body">
            <p>
              Заберите его в пункте выдачи до 15 апреля включительно, потом
              заказ придется отменить.
              <br />
              Вход в пункт выдачи только в маске и перчатках.
            </p>
          </div>
          <div className="modal-footer">
            <button
              onClick={handleCancel}
              type="button"
              className="btn btn-secondary"
            >
              close
            </button>
          </div>
        </div>
      </div>

      <div className="randomNum">
        <button onMouseDown={handleRandom}>Give Random</button>
        <p>{state}</p>
      </div>
    </div>
  );
};

export default Functional;
