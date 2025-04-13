import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../Contexts/AuthContext';

const ProtectedRoute = ({ children, isAuthPage = false }) => {
  const { isLoggedIn } = useContext(AuthContext);

  // If this is the auth page and user is logged in, redirect to home
  if (isAuthPage && isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // If this is a protected route and user is not logged in, redirect to auth
  if (!isAuthPage && !isLoggedIn) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute; 