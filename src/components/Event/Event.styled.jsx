import styled from '@emotion/styled';
// import {}

export const Card = styled.div`
  position: relative;
  border: ${props => `2px dashed ${props.theme.colors.black}`};
  padding: ${props => props.theme.spacing(4)};
  border-radius: ${props => props.theme.spacing(1)};
`;
export const EventName = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${props => `${props.theme.colors.primaryText}`};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
  svg {
    display: block;
    margin-right: 8px;
    color: var(--color-secondary-text);
    &:hover {
      color: ${props => `${props.theme.colors.red}`};
      /* color: ${({ eventType, theme }) => {
        switch (eventType) {
          case 'free':
            return theme.colors.green;
          case 'paid':
            return theme.colors.blue;
          case 'vip':
            return theme.colors.red;
          default:
            return '#000';
        }
      }}; */
    }
  }
  &:hover {
    background-color: #e96c6c57;
    /* background-color: ${({ eventType, theme }) => {
      switch (eventType) {
        case 'free':
          return theme.colors.green;
        case 'paid':
          return theme.colors.blue;
        case 'vip':
          return theme.colors.red;
        default:
          return '#000';
      }
    }}; */
    svg {
      color: ${props => `${props.theme.colors.blue}`};
    }
  }
`;

// const setBgColor = (props) => {

// };

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
  background-image: ${props => `url(${props.img})`};
  ${props => {
    console.log(props.type);
    console.log(props.a);
    console.log(props.b);
    console.log(props.c);
  }};
  background-color: ${({ eventType, theme }) => {
    switch (eventType) {
      case 'free':
        return theme.colors.green;
      case 'paid':
        return theme.colors.blue;
      case 'vip':
        return theme.colors.red;
      default:
        return '#000';
    }
  }};
`;
