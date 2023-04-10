import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import supervisorDashboardReducer from './supervisorDbSlice';

export const store = configureStore({
    reducer: {
        supervisorDashboard: supervisorDashboardReducer,
    },
})