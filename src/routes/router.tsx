import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ArtistDetailPage from "../pages/artistDetail/artistDetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path:'artists', 
        children:[
            {path:'id/:artistId', element: <ArtistDetailPage />},
            {path:'search', element: <div>Search Artist By Tag</div>},   
        ]
    },
]);