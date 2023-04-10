import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getLtCohortInfo, getTraineeAndCohortDetailsList} from "../store/supervisorDbSlice";

const ReduxTestModule = (props) => {
    const dashboardData = useSelector(state => state.supervisorDashboard.supervisorDashboard);
    const dispatch = useDispatch();

  return (
    <>
    <h1>ReduxTestModule</h1>

    <p>{dashboardData}</p>
    <div>
        <button onClick={() => dispatch(getLtCohortInfo(1))}>Trigger getLtCohortInfo()</button>
        <button onClick={() => dispatch(getTraineeAndCohortDetailsList({ltId: 1, cohortId:9}))}>Trigger getTraineeAndCohortDetailsList()</button>
    </div>
    </>
  )
}

export default ReduxTestModule