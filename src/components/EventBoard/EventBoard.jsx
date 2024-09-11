import { PropTypes } from 'prop-types';
import { Event } from 'components/Event/Event';
import { Board } from './EventBoard.styled';

export const EventBoard = ({ text, events }) => {
  // console.log('EventBoard  events >>', events);
  return (
    <Board>
      {text}
      {events.map(({ name, location, speaker, type, time }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </Board>
  );
};

EventBoard.protoType = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name    : PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker : PropTypes.string.isRequired,
      type    : PropTypes.string.isRequired,
      time    : PropTypes.exact({
        start: PropTypes.string.isRequired,
        end  : PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};
