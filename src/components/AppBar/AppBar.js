import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css['Header']}>
      <Navigation />
      {/* <AuthNav /> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
