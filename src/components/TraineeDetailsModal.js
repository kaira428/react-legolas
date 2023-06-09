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
    (state) => state.supervisorDashboard
  );

  const allTraineesResults =
    results.listOfTraineesForSelectedCohortNumber.filter(
      (trainee) => (trainee._id).toString() === (props.traineeId).toString()
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
        <Modal.Header
          closeButton
          style={
            traineeNameAndResults.status !== "InActive"
              ? { backgroundColor: "orange" }
              : { backgroundColor: "lightgrey" }
          }
        >
          <Modal.Title>
            {traineeNameAndResults.firstName +
              " " +
              traineeNameAndResults.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table bordered>
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
                      style={{ textAlign: "right", fontWeight: "bold" }}
                    >
                      {module[1] === null ? "-" : parseFloat(module[1]).toFixed(2)}
                    </td>
                  </tr>
                ))
              : ""}
            <br />
            <tr>
              <td colspan={2} style={{ color: "blue", fontWeight: "bold" }}>
                Trainee Status:
              </td>
              <td
                colSpan={2}
                style={{ textAlign: "right", fontWeight: "bold" }}
              >
                {traineeNameAndResults.status}
              </td>
            </tr>
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
