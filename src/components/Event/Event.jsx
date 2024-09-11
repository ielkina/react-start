/* eslint-disable no-unused-vars */
import { PropTypes } from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
// import { formatEventStart } from '../../utils/formatEventStart';
// import { formatEventDuration } from '../../utils/formatEventDuration';
//реэкспорт
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constant';
import { Card, EventName, Info, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedEventStartTime = formatEventStart(start);
  const formattedEventDuration = formatEventDuration(start, end);
  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formattedEventStartTime}
      </Info>
      <Info>
        <FaClock size={iconSize.sm} />
        {formattedEventDuration}
      </Info>
      <Chip eventType={type} a={5} b={10} c={20} img="hahaha">
        {type}
      </Chip>
    </Card>
  );
};


Event.protoType = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
