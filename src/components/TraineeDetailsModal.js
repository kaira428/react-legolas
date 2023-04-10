import React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { useSelector } from "react-redux";

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
    setOpen(true);
  };

  const results = useSelector(
    (state) => state.supervisorDashboard.supervisorDashboardObj
  );
  console.log(
    "🚀 ~ file: SupervisorDashboard.js:33 ~ SupervisorDashboard ~ results:",
    results.traineeListForSelectedLtIdAndCohortId
  );

  console.log(
    "🚀 ~ file: TraineeDetailsModal.js:27 ~ TraineeDetailsModal ~ traineeId:",
    props.traineeId
  );

  const allTraineesResults =
    results.traineeListForSelectedLtIdAndCohortId.filter(
      (trainee) => trainee.id === props.traineeId
    );

  const traineeNameAndResults = allTraineesResults[0];
  console.log(
    "🚀 ~ file: TraineeDetailsModal.js:51 ~ TraineeDetailsModal ~ traineeNameAndResults:",
    traineeNameAndResults
  );

  let moduleResultsArray = [];

  if (Object.keys(traineeNameAndResults).length > 0) {
    moduleResultsArray = Object.entries(traineeNameAndResults.modules);
    console.log(
      "🚀 ~ file: TraineeDetailsModal.js:53 ~ TraineeDetailsModal ~ moduleResultsArray:",
      moduleResultsArray
    );
  }

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
          <Modal.Title>
            {traineeNameAndResults.firstName +
              " " +
              traineeNameAndResults.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {moduleResultsArray.length !== 0
            ? moduleResultsArray.map((module, index) => (
                <div key={index}>
                  <span>{`${module[0]} ==> ${module[1]}`}</span>
                </div>
              ))
            : ""}
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
