/* eslint-disable no-unused-vars */
import { PropTypes } from 'prop-types';
// import { IconName } from 'react-icons/fc';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import css from './Event.module.css';
// import { formatEventDuration, formatEventStart } from 'utils';
// import { iconSize } from '../../constants';
// import { Card, EventName, Info, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} />
        {start}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} />
        {/* Duration */}
      </p>
      <span className={css.chip}>{type}</span>
    </div>
  );
};

Event.protoType = {
  name: PropTypes.string.isRequired,
  // location,
  // speaker,
  // type,
  // start,
  // end,
};
