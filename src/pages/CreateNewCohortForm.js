import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLearningTracksThunk } from '../store/features/getAllLearningTracksThunk';
import CreateNewCohort from '../components/CreateNewCohort';
import { updateLtWithNewCohortThunk } from '../store/features/updateLtWithNewCohortThunk';
import { useNavigate } from 'react-router-dom';


const CreateNewCohortForm = () => {

  return (
    <>
      <CreateNewCohort existingLt={true}/>
    </>
  )
}

export default CreateNewCohortForm