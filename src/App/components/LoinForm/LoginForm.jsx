import { Formik, Form, Field, ErrorMessage } from 'formik'; //NOTE - пакет конструктора формы
import * as yup from 'yup'; //NOTE - валидатор формы
import { Span, Input } from './LoginForm.styled';
// import './LoginForm.scss';
// import styled from 'styled-components';

//NOTE - Валидация формы
const schema = yup.object().shape({
  login: yup
    .string()
    .min(6, 'Слишком коротко')
    .max(32, 'Слишком длинно')
    .required(''),
  password: yup
    .string()
    .min(6, 'Слишком коротко')
    .max(32, 'Слишком длинно')
    .required('Вы ничего не ввели'),
});

const initialValues = {
  login: '',
  password: '',
};

export const LoginForm = () => {
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const formElements = e.target.elements;
  //   const { login, password } = e.target.elements;
  //   console.log(e.target); //елемент ивента
  //   console.log(e.target.elements); //обьект ивента
  //   console.log(e.target.elements.login); //элемент
  //   console.log(e.target.elements.login.value); //данные введенные в инпут
  //   console.log(e.target.elements.password.value);
  //   console.dir(e.target);
  //   console.log(login.value);
  // };
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    // console.log(actions);
    // (values, { setSubmitting }) => {
    //   setTimeout(() => {
    //     alert(JSON.stringify(values, null, 2));
    //     setSubmitting(false);
    //   }, 400);
    // };
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          {/* <Field type="text" name="login" placeholder="Login" /> */}
          <Input type="text" name="login" placeholder="Login" />
          <ErrorMessage name="login" component={'div'} />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" placeholder="Password" />
          {/* <Input type="password" name="password" placeholder="Password" /> */}
          <Span name="password" component={'span'} />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
