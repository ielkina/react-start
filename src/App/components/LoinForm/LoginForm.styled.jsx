import styled from 'styled-components'; //NOTE - пакет для стилей
// import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';

//NOTE - привязываем к Field Input
// const Input = styled(Field)`
//   border-color: red;
// `;
// const Span = styled(ErrorMessage)`
//   color: red;
// `;

export const Span = styled(ErrorMessage)`
  color: red;
`;

export const Input = styled(Field)`
  border-color: red;
`;
