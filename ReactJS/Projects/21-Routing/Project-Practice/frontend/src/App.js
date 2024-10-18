import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import EventsPage, { loader as eventsLoader } from './Pages/EventsPage';
import EventDetailPage, { loader as eventDetailsLoader , action as eventDetailsAction} from './Pages/EventDetailPage';
import NewEventPage from './Pages/NewEventPage';
import EditEventPage from './Pages/EditEventPage';
import RootLayout from './Pages/Root';
import EventsRootLayout from './Pages/EventsRoot';
import ErrorPage from './Pages/Error';
import { action as eventActionPostOrUpdate } from './components/EventForm';
import NewsletterPage, {action as newsletterAction} from './Pages/Newsletter';


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
            id: "event-detail",
            loader: eventDetailsLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: eventDetailsAction},
              { path: "edit", element: <EditEventPage />, action: eventActionPostOrUpdate }
            ]
          },
          { path: "new", element: <NewEventPage />, action: eventActionPostOrUpdate }
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );;
}

export default App;
