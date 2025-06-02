import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { Formik, Form } from 'formik';
import useAuthentication from "../hooks/authentication";

const Logout = () => {
  const { logout } = useAuthentication;
  const handleSubmit = () => {
    logout();
  }
  const initialValues = {};

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Button type="submit" variant="contained" color="primary">
            <Typography>Log Out</Typography>
          </Button>
        </Form>
      </Formik>
    </Container>
  )
};

export default Logout;