import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const CreateNewCohortDetails = ({
  disableCohortNumberSubmitBtn,
  onSubmitCohortDetailsHandler,
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  setCoachName,
  coachName,
  setMentorName,
  mentorName,
  setCountry,
  country,
  countries,
  disableCohortDetailSubmitBtn,
}) => {
  const listOfCoaches = useSelector(
    (state) => state.supervisorDashboard.listOfCoaches
  );

  const listOfMentors = useSelector(
    (state) => state.supervisorDashboard.listOfMentors
  );

  const startDateHandler = (event) => {
    event.preventDefault();

    setStartDate(event.target.value);
  };

  const endDateHandler = (event) => {
    event.preventDefault();

    setEndDate(event.target.value);
  };

  const handleCoachChange = (event) => {
    event.preventDefault();

    setCoachName(event.target.value);
    console.log(coachName);
  };

  const handleMentorChange = (event) => {
    event.preventDefault();

    setMentorName(event.target.value);
  };

  const handleCountryChange = (event) => {
    event.preventDefault();

    setCountry(event.target.value);
  };

  return (
    <>
      {disableCohortNumberSubmitBtn && (
        <Paper elevation={3} sx={{ width: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 5,
            }}
          >
            <form onSubmit={onSubmitCohortDetailsHandler}>
              <div className="mb-3">
                <label htmlFor="cohort" className="form-label">
                  <Typography
                    variant="h6"
                    component="p"
                    fontWeight="medium"
                    sx={{
                      textAlign: "right",
                      marginLeft: "15px",
                    }}
                  >
                    Cohort Details:
                  </Typography>
                </label>
              </div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <div style={{ margin: "0px 15px" }}>
                  <label htmlFor="cohortStartDate">Start Date:</label>
                  <input
                    type="date"
                    value={startDate}
                    className="form-control"
                    id="cohortStartDate"
                    onChange={startDateHandler}
                  />
                </div>
                <div style={{ margin: "0px 15px" }}>
                  <label htmlFor="cohortEndDate">End Date:</label>
                  <input
                    type="date"
                    value={endDate}
                    className="form-control"
                    id="cohortEndDate"
                    onChange={endDateHandler}
                  />
                </div>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <div style={{ margin: "0px 15px", width: "160px" }}>
                  <FormControl fullWidth>
                    <InputLabel id="Coach Name">Coach Name</InputLabel>
                    <Select
                      labelId="Coach Name"
                      id="Coach Name"
                      value={coachName}
                      label="Coach Name"
                      onChange={handleCoachChange}
                    >
                      {listOfCoaches.map((coach, index) => (
                        <MenuItem key={index} value={coach}>
                          {coach}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div style={{ margin: "0px 15px", width: "160px" }}>
                  <FormControl fullWidth>
                    <InputLabel id="Mentor Name">Mentor Name</InputLabel>
                    <Select
                      labelId="Mentor Name"
                      id="Mentor Name"
                      value={mentorName}
                      label="Mentor Name"
                      onChange={handleMentorChange}
                    >
                      {listOfMentors.map((mentor, index) => (
                        <MenuItem key={index} value={mentor}>
                          {mentor}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <div style={{ margin: "0px 15px", width: "160px" }}>
                  <FormControl fullWidth>
                    <InputLabel id="country">Country</InputLabel>
                    <Select
                      labelId="country"
                      id="country"
                      value={country}
                      label="Country"
                      onChange={handleCountryChange}
                    >
                      {countries.map((country, index) => (
                        <MenuItem key={index} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>

                <div style={{ margin: "0px 15px", width: "160px" }}>
                  <FormControl fullWidth>
                    <InputLabel id="country">Country</InputLabel>
                    <Select
                      labelId="country"
                      id="country"
                      value={country}
                      label="Country"
                      onChange={handleCountryChange}
                    >
                      {countries.map((country, index) => (
                        <MenuItem key={index} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={disableCohortDetailSubmitBtn}
                >
                  Save
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default CreateNewCohortDetails;
