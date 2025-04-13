import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Users from './Pages/users/Users';
import NewPlace from './Pages/places/NewPlace';
import RootPage from './Pages/shared/RootPage';
import UserPlaces from './Pages/places/UserPlaces';
import UpdatePlace from './Pages/places/UpdatePlace';
import Auth from './Pages/users/Auth';
import ProtectedRoute from './Components/shared/Navigation/ProtectedRoute';

const router = createBrowserRouter([
  { path: '/', element: <RootPage />, children: [
    { index: true, element: <Users /> },
    { path: '/places/new', element: <ProtectedRoute><NewPlace /></ProtectedRoute> },
    { path: '/places/:placeId', element: <ProtectedRoute><UpdatePlace /></ProtectedRoute> },
    { path: '/:userId/places', element: <UserPlaces /> },
    { path: '/auth', element: <ProtectedRoute isAuthPage={true}><Auth /></ProtectedRoute> },
  ]}
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
