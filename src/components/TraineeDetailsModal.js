import React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useContext } from "react";
import { TraineeResultsContext } from "../pages/SupervisorDashboard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TraineeDetailsModal = (props) => {
  const [open, setOpen] = useState();
  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    props.getTraineeResults(props.traineeId);
    setOpen(true);
  };

  console.log(
    "🚀 ~ file: TraineeDetailsModal.js:27 ~ TraineeDetailsModal ~ traineeId:",
    props.traineeId
  );

  const traineeNameAndResults = useContext(TraineeResultsContext);
  console.log(
    "🚀 ~ file: TraineeDetailsModal.js:38 ~ TraineeDetailsModal ~ traineeResult:",
    traineeNameAndResults
  );

  return (
    <div>
      <Button variant="primary" size="sm" onClick={handleOpen}>
        ClickMe
      </Button>
      <Modal
        show={open}
        onHide={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Modal.Header closeButton>
          <Modal.Title>{traineeNameAndResults.fullName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.keys(traineeNameAndResults).length !== 0 ? traineeNameAndResults.resultOfAllModules.map((module, index) => (
            <div key={index}>
              <span>{`${module[0]} ==> ${module[1]}`}</span>
            </div>
          )) : ""}
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TraineeDetailsModal;
