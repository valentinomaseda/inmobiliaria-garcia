import React from 'react';
import NoAccess from '../pages/NoAccess';
import { authService } from '../../services/authService';

export default function ProtectedRoute({ children }) {
  if (authService.isAuthenticated()) {
    return children;
  }
  return <NoAccess />;
}
