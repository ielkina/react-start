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
// import { Card, EventName, Info, Chip } from './Event.styled';
import css from './Event.module.css';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedEventStartTime = formatEventStart(start);
  const formattedEventDuration = formatEventDuration(start, end);
  console.log(css);
  console.log(css[type]);

  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} />
        {formattedEventStartTime}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} />
        {formattedEventDuration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
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
