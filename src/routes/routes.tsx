import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "../pages/timeline/timeline";
import { Status } from "../pages/status/status";
import { Default } from "../layout/default";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
    
      {
        path: '/status',
        element: <Status />
      },
    ],
  }
])