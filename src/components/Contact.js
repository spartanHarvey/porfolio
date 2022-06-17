import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack, Typography, Paper } from "@mui/material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import emailjs from "@emailjs/browser";
import { Container, Button, Form } from "react-bootstrap";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const ContactForm = () => {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#69306d",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f",
      },
    },
  });

  const initialState = {
    error: false,
    text: "",
  };
  const [open, setOpen] = useState(false);
  const [firstNameError, setFirstNameError] = useState(initialState);
  const [lastNameError, setLastNameError] = useState(initialState);
  const [messageError, setMessageError] = useState(initialState);
  const [emailError, setEmailError] = useState(initialState);
  const [phoneNumberError, setPhoneNumberError] = useState(initialState);

  const [alert, setAlert] = useState(initialState);
  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    message: "",
    reply_to: "",
    phone_number: "",
  });

  const onSubmit = (e) => {
    setFirstNameError(initialState);
    setLastNameError(initialState);
    setMessageError(initialState);
    setEmailError(initialState);
    setPhoneNumberError(initialState);
    e.preventDefault();
    if (handleError()) {
      emailjs
        .send(
          "service_v3y3wkh",
          "template_t4h9qsq",
          toSend,
          "TzN5IBN4B7_qLAKeY"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setToSend({
            first_name: "",
            last_name: "",
            message: "",
            reply_to: "",
            phone_number: "",
          });
          setOpen(true);
          setAlert({ type: "success", message: "Email sent successfully!" });
        })
        .catch((err) => {
          setOpen(true);
          setAlert({
            type: "error",
            message: "Somenthing went wrong while sending the email!",
          });
          console.log("FAILED...", err);
        });
    }
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleError = () => {
    let readyToSubmit = true;
    if (toSend.first_name === "") {
      setFirstNameError({ error: true, text: "This field is required!" });
      readyToSubmit = false;
    }
    if (toSend.last_name === "") {
      setLastNameError({ error: true, text: "This field is required!" });
      readyToSubmit = false;
    }
    if (toSend.reply_to === "") {
      setEmailError({ error: true, text: "This field is required!" });
      readyToSubmit = false;
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(toSend.reply_to)
    ) {
      setEmailError({ error: true, text: "Invalid email" });
      readyToSubmit = false;
    }
    if (toSend.phone_number === "") {
      setPhoneNumberError({ error: true, text: "This field is required!" });
      readyToSubmit = false;
    } else if (
      !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
        toSend.phone_number
      )
    ) {
      setPhoneNumberError({ error: true, text: "Invalid Phone Number" });
      readyToSubmit = false;
    }
    if (toSend.message === "") {
      setMessageError({ error: true, text: "This field is required!" });
      readyToSubmit = false;
    }

    return readyToSubmit;
  };

  return (
    <section className="">


    <Container id="contact" className="col-lg-6 col-xs-12 min-w-sm-5 p-5 ">
     {/* <Form className="d-flex flex-column justify-content-center  col-6">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="ex. John"  />
         
        </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="email" placeholder="ex. Doe" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="example@email.com" />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="email" placeholder="ex. (111) 111-1111" />
         
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Message</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group> 


        <Button className="col-3 mx-auto mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>*/}
      <form onSubmit={onSubmit}>
        <Box className="sec ">
          <Paper
         
            sx={{ padding: 10, marginTop: 10, marginBottom: 10 }}
            elevation={0}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "3em",
                marginBottom: 3,
                fontFamily: "Montserrat",
              }}
            >
              Contact Me
            </Typography>
            <Stack spacing={4}>
              <TextField
                error={firstNameError.error}
                id="outlined-error-helper-text"
                helperText={firstNameError.text}
                name="first_name"
                value={toSend.first_name}
                onChange={handleChange}
                label="First Name"
                variant="standard"
              ></TextField>
              <TextField
                error={lastNameError.error}
                id="outlined-error-helper-text"
                helperText={lastNameError.text}
                name="last_name"
                value={toSend.last_name}
                onChange={handleChange}
                label="Last Name"
                variant="standard"
              ></TextField>
              <TextField
                error={emailError.error}
                id="outlined-error-helper-text"
                helperText={emailError.text}
                name="reply_to"
                value={toSend.reply_to}
                onChange={handleChange}
                label="Email"
                variant="standard"
              ></TextField>
              <TextField
                error={phoneNumberError.error}
                id="outlined-error-helper-text"
                helperText={phoneNumberError.text}
                name="phone_number"
                value={toSend.phone_number}
                onChange={handleChange}
                label="Phone"
                variant="standard"
              ></TextField>
              <TextField
                error={messageError.error}
                id="outlined-error-helper-text"
                helperText={messageError.text}
                name="message"
                value={toSend.message}
                onChange={handleChange}
                label="Message"
                variant="standard"
                multiline
              ></TextField>
            </Stack>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: 6,
              }}
            >
              <ThemeProvider theme={theme}>
                <Button className="mx-3 btn btn-lg" type="submit">
                  Submit
                </Button>
              </ThemeProvider>
            </Box>
          </Paper>
        </Box>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={(event, reason) => {
          setOpen(false);
        }}
      >
        <Alert
          onClose={(event, reason) => {
            setOpen(false);
          }}
          severity={alert.type}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
    </section>
  );
};

export default ContactForm;
