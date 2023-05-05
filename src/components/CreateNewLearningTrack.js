import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLearningTracksThunk } from "../store/features/getAllLearningTracksThunk";
import { Box, Paper, Typography } from "@mui/material";

const CreateNewLearningTrack = ({setNewLtName, setDisableSubmitBtn, disableSubmitBtn}) => {

  const inputLtRef = useRef("");

  const dispatch = useDispatch();

  const learningTrackList = useSelector(
    (state) => state.supervisorDashboard.listOfLearningTracks
  );

  if (learningTrackList.length === 0) {
    // load LT list from DB is list is empty
    dispatch(getAllLearningTracksThunk());
  }

  const onSubmitLtHandler = (event) => {
    event.preventDefault();

    const enteredLtName = inputLtRef.current.value;

    // check if LT exists
    const ltNameExist = learningTrackList.find(
      (lt) => lt.name === enteredLtName
    );

    if (ltNameExist) {
      // reset Lt input file to blank and return focus to input field
      inputLtRef.current.value = "";
      inputLtRef.current.focus();
      alert("Learning Track Name Exist. Please re-enter new LT Name");
    } else {
      console.log(enteredLtName);
      setNewLtName(enteredLtName);
      setDisableSubmitBtn(true);
    }
  };

  return (
    <Paper elevation={3} sx={{ width: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightblue",
        }}
      >
        <Typography
          variant="h4"
          component="h3"
          sx={{ textAlign: "center", padding: "25px 40px 25px 25px" }}
        >
          Create New Learning Track
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={onSubmitLtHandler}>
          <div className="mb-3">
            {/* <label htmlFor="LtName" className="form-label" /> */}
            <input
              type="text"
              ref={inputLtRef}
              className="form-control"
              id="LtName"
              style={{ marginTop: "10px" }}
              disabled={disableSubmitBtn}
              autoFocus={!disableSubmitBtn}
            />
          </div>
          <div style={{ textAlign: "center", marginBottom: "25px" }}>
            <button
              type="submit"
              className="btn btn-primary"
              hidden={disableSubmitBtn}
            >
              Submit
            </button>
          </div>
        </form>
      </Box>
    </Paper>
  );
};

export default CreateNewLearningTrack;
