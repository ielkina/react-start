import { PropTypes } from 'prop-types';
// import css from './PageTitle.module.css';
import { Title } from './PageTitle.styled';

export const PageTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

PageTitle.protoType = {
  text: PropTypes.string.isRequired,
};
