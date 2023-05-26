import { useSelector } from 'react-redux';
import {
  selectIsRefreshing,
  selectUser,
  selectIsLoggedIn,
} from 'redux/auth/selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
