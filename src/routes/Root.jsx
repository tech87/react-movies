import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
import CustomMovieProvider from '../components/MovieContextProvider';
export default function Root() {
  return (
    <CustomMovieProvider>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </CustomMovieProvider>
  );
}
