import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ArtistDetailPage from "../pages/artistDetailPage";
import ArtistListPage from "../pages/artistListPage";
import ArtistMainPage from "../pages/artistMainPage";
import SongDetailsPage from "../pages/SongDetailsPage";
import SongListPage from "../pages/songListPage";
import SongMainPage from "../pages/songMainPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path:'artists', 
        children:[
            {path:'', element: <ArtistMainPage />},
            {path:'id/:artistId', element: <ArtistDetailPage />},
            {path:'search', element: <ArtistListPage/>},   
        ]
    },
    {
        path:'songs', 
        children:[
            {path:'', element: <SongMainPage />},
            {path:'id/:songId', element: <SongDetailPage />},
            {path:'search', element: <SongListPage/>},   
        ]
    },
]);
