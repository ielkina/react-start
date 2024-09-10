import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBoard/EventBoard';
// import data from '../upcoming-events.json';
import upcomingEvents from '../upcoming-events.json';

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Words Coalition Conference" />
      <EventBoard text="Event cards" events={upcomingEvents} />
    </>
  );
};
