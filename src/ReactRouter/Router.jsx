import {
  createBrowserRouter,
} from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AllGroups from "../Pages/AllGroups/AllGroups";
import CreateGroup from "../Pages/CreateGroup/CreateGroup";
import MyGroups from "../Pages/MyGroups/MyGroups";
import Spinner from "../Pages/Spinner/Spinner";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import GroupDetails from "../Components/GroupDetails/GroupDetails";
import Update from "../Components/Update/Update";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    hydrateFallbackElement: <Spinner></Spinner>,
    children: [
        {
            index:true,
            loader: ()=> fetch('https://b11a10-server-side-kousar-21.vercel.app/groups'),
            element: <Home></Home>
        },
        {
            path: '/groups',
            loader: ()=> fetch('https://b11a10-server-side-kousar-21.vercel.app/groups'),
            element: <AllGroups></AllGroups>
        },
        {
            path: '/createGroup',
            element: <PrivateRoute><CreateGroup></CreateGroup></PrivateRoute>
        },
        {
            path: '/myGroups',
            loader: ()=> fetch('https://b11a10-server-side-kousar-21.vercel.app/groups'),
            element: <PrivateRoute><MyGroups></MyGroups></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/group/:_id',
          loader: ({params})=> fetch(`https://b11a10-server-side-kousar-21.vercel.app/groups/${params._id}`),
          element: <PrivateRoute><GroupDetails></GroupDetails></PrivateRoute>
        },
        {
          path: '/updateGroup/:_id',
          loader: ({params})=> fetch(`https://b11a10-server-side-kousar-21.vercel.app/groups/${params._id}`),
          element: <PrivateRoute><Update></Update></PrivateRoute>
        }
    ]
  },
  {
    path: '/*',
    element: <Error></Error>
  }
]);