import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import { useSelector } from "react-redux";

const TraineeDetailsModal = (props) => {
  const [open, setOpen] = useState();
  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const results = useSelector(
    (state) => state.supervisorDashboard.supervisorDashboardObj
  );

  const allTraineesResults =
    results.traineeListForSelectedLtIdAndCohortId.filter(
      (trainee) => trainee.id === props.traineeId
    );

  const traineeNameAndResults = allTraineesResults[0];
 
  let moduleResultsArray = [];

  if (Object.keys(traineeNameAndResults).length > 0) {
    moduleResultsArray = Object.entries(traineeNameAndResults.modules);
  }

  return (
    <div>
      <Button variant="primary" size="sm" onClick={handleOpen}>
        ClickMe
      </Button>
      <Modal
        className="classes.modal"
        show={open}
        onHide={handleClose}
        size="sm"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "orange" }}>
          <Modal.Title>
            {traineeNameAndResults.firstName +
              " " +
              traineeNameAndResults.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            {moduleResultsArray.length !== 0
              ? moduleResultsArray.map((module, index) => (
                  <tr key={index}>
                    <td
                      colSpan={2}
                      style={{ color: "blue", fontWeight: "bold" }}
                    >
                      {module[0]}
                    </td>
                    <td
                      colSpan={2}
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      {module[1]}
                    </td>
                  </tr>
                ))
              : ""}
          </Table>
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
