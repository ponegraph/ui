import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ArtistDetailPage from "../pages/artistDetailPage";
import ArtistListPage from "../pages/artistListPage";
import ArtistMainPage from "../pages/artistMainPage";
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
            {path:'', element: <ArtistMainPage />},
            {path:'id/:artistId', element: <ArtistDetailPage />},
            {path:'search', element: <ArtistListPage/>},   
        ]
    },
    {
        path:'songs', 
        children:[
            {path:'id/:songId', element: <SongDetailPage />},
            {path:'search', element: <SongListPage/>},   
        ]
    },
]);