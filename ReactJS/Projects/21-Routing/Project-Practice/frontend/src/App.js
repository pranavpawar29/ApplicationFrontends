import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import EventsPage, { loader as eventsLoader } from './Pages/EventsPage';
import EventDetailPage, { loader as eventDetailsLoader} from './Pages/EventDetailPage';
import NewEventPage from './Pages/NewEventPage';
import EditEventPage from './Pages/EditEventPage';
import RootLayout from './Pages/Root';
import EventsRootLayout from './Pages/EventsRoot';
import ErrorPage from './Pages/Error';


const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />, 
    errorElement: <ErrorPage />, 
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events", element: <EventsRootLayout />, children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          { path: ":eventId",
            loader: eventDetailsLoader,
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: "edit", element: <EditEventPage /> }
            ]
          },
          { path: "new", element: <NewEventPage /> },
        ]
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );;
}

export default App;
