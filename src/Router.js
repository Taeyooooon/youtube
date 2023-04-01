import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Notfound from './pages/Notfound';
import VideoDetail from './pages/VideoDetail';
import Videos from './pages/Videos';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Notfound />,
    children: [
      { index: true, element: <Videos /> },
      { path: '/videos', element: <Videos /> },
      { path: '/videos/:keyword', element: <Videos /> },
      { path: '/videos/watch/:videoId', element: <VideoDetail /> },
    ],
  },
]);
