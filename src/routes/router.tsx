import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ArtistDetailPage from "../pages/artistDetailPage";
import SongDetailPage from "../pages/songDetailPage";
import SongListPage from "../pages/songListPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path:'artists', 
        children:[
            {path:'id/:artistId', element: <ArtistDetailPage />},
            {path:'search', element: <div>Artist List</div>},   
        ]
    },
    {
        path:'songs', 
        children:[
            { path: '', element: <SongListPage/> }, 
            {path:'id/:songId', element: <SongDetailPage />},
            {path:'search', element: <div>Song List</div>},   
        ]
    },
]);