import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import AcitivityDashboard from "../../features/activities/dashboard/AcitivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActitivityDetails from "../../features/activities/details/ActivityDetails";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [            
            {path: 'activities', element: <AcitivityDashboard />},
            {path: 'activities/:id', element: <ActitivityDetails />},
            {path: 'createActivity', element: <ActivityForm key='create' />},
            {path: 'manage/:id', element: <ActivityForm key='manage'/>},
        ]
    }
]

export const router = createBrowserRouter(routes)