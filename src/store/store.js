import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import supervisorDashboardReducer from './supervisorDashboardSlice';

export const store = configureStore({
    reducer: {
        supervisorDashboard: supervisorDashboardReducer,
    },
})