import React from 'react';
import { Typography, TextField, Button, Container } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import useAuthentication from '../hooks/authentication';

const Login = () => {
  const { login } = useAuthentication();
  const handleSubmit = () => {
    login();
  };

  return (
    <Container>
      <Typography variant="h1">Login</Typography>
      <Formik initialValues={{ username: '', password: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field name="username">
            {({ field }) => (
              <TextField label="Username" fullWidth margin="normal" {...field} />
            )}
          </Field>
          <Field name="password">
            {({ field }) => (
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          </Field>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;

