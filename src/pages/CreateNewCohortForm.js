import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLearningTracksThunk } from '../store/features/getAllLearningTracksThunk';
import CreateNewCohort from '../components/CreateNewCohort';
import { updateLtWithNewCohortThunk } from '../store/features/updateLtWithNewCohortThunk';
import { useNavigate } from 'react-router-dom';


const CreateNewCohortForm = () => {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

// get list of Learning Tracks
// const listOfLearningTracks = useSelector(state => state.supervisorDashboard.listOfLearningTracks);
// console.log("🚀 ~ file: CreateNewCohortForm.js:11 ~ CreateNewCohortForm ~ listOfLearningTracks:", listOfLearningTracks.length)

// if (listOfLearningTracks.length === 0) {
//     // get list of learning tracks
//     const data = dispatch(getAllLearningTracksThunk());
// }

// const onSubmitNewCohortDetails = (data) => {
//   // console.log("🚀 ~ file: CreateNewCohortForm.js:19 ~ onSubmitNewCohortDetails ~ data:", data)

//   const learningTrackName = data.learningTrackName;
//   // console.log("🚀 ~ file: CreateNewCohortForm.js:22 ~ onSubmitNewCohortDetails ~ learningTrackName:", learningTrackName)

//   // get required LT from listOfLearningTracks
//   let resultLt = listOfLearningTracks.find(lt => lt.name.toLowerCase().trim().split(" ").join("") ===
//   learningTrackName.toLowerCase().trim().split(" ").join(""))
//   console.log("🚀 ~ file: CreateNewCohortForm.js:26 ~ onSubmitNewCohortDetails ~ resultLt:", resultLt)

//   let arrayNewCohort = [...resultLt["cohorts"]]
//   // push new cohort object to required LT modules array
//   arrayNewCohort.push(data.newCohort)
//   // console.log("🚀 ~ file: CreateNewCohortForm.js:30 ~ onSubmitNewCohortDetails ~ arrayNewCohort:", arrayNewCohort)

//   const result = {...resultLt, cohorts: arrayNewCohort};

//   console.log("🚀 ~ file: CreateNewCohortForm.js:41 ~ onSubmitNewCohortDetails ~ result:", result)
//   // save updated LT to MongoDB
//   dispatch(updateLtWithNewCohortThunk({ltWithNewCohort: result}));

//   // update redux state for list of cohort numbers for selected LT
  

//   // set up newLearningTrack object for AddTraineeForm
//   const newLearningTrack = {name: learningTrackName, cohorts: [data.newCohort]}

//   // navigate to AddTraineesToCohort page
//   navigate("/pages/addTraineesToCohortForm", {
//     // state: { newLtName, newCohortNum: cohortNum, country, numOfModules },
//     state: { newLearningTrack, numOfModules: data.numOfModules },
//   });
// }

  return (
    <>
      <CreateNewCohort existingLt={true}/>
      {/* <CreateNewCohort onSubmitCohortHandler={onSubmitNewCohortDetails} existingLt={true}/> */}
    </>
  )
}

export default CreateNewCohortForm