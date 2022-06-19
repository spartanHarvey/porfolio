import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack, Paper } from "@mui/material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import emailjs from "@emailjs/browser";
import { Container, Button, Form } from "react-bootstrap";

const ContactForm = () => {
  const initialState = {
    error: false,
    text: "",
  };
  const [open, setOpen] = useState(false);
  const [firstNameError, setFirstNameError] = useState(initialState);
  const [lastNameError, setLastNameError] = useState(initialState);
  const [messageError, setMessageError] = useState(initialState);
  const [emailError, setEmailError] = useState(initialState);

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
    e.preventDefault();
    if (handleError()) {
      console.log("send");
      emailjs
        .send(
          "service_v3y3wkh",
          "template_t84i3in",
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
    if (toSend.message === "") {
      setMessageError({ error: true, text: "This field is required!" });
      readyToSubmit = false;
    }

    return readyToSubmit;
  };

  return (
    <section className="">
      <Container id="contact" className="col-lg-6 col-12  mx-auto ">
        <form onSubmit={onSubmit}>
          <Box className="sec pt-md-5">
            <h1 className="d-flex  justify-content-center align-items-center">
              {" "}
              CONTACT ME
            </h1>
            <Paper sx={{ padding: 10, marginBottom: 10 }} elevation={0}>
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
                <Button
                  className="mx-auto btn-lg col-lg-5 col-sm-8 col-12 rounded-pill"
                  type="submit"
                >
                  Submit
                </Button>
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
