import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLearningTracksThunk } from '../store/features/getAllLearningTracksThunk';
import CreateNewCohort from '../components/CreateNewCohort';

const CreateNewCohortForm = () => {

    const dispatch = useDispatch();
// get list of Learning Tracks
const listOfLearningTracks = useSelector(state => state.supervisorDashboard.listOfLearningTracks);

if (listOfLearningTracks.length === 0) {
    // get list of learning tracks
    const data = dispatch(getAllLearningTracksThunk());
}

  return (
    <>
      <CreateNewCohort />
    </>
  )
}

export default CreateNewCohortForm