import * as React from "react";
import { FormControl, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import * as Yup from "yup";

import styles from "./ConnectWebshopModal.module.scss";

interface Props {
  buttonColor: string;
}

const validationSchema = Yup.object({
  username: Yup.string()
    .email("Must be a string")
    .max(255)
    .required("Username is required"),
  password: Yup.string().max(40).required("Password is required"),
  url: Yup.string().required("Webshop URL is required"),
});

const ConnectWebshopModal = ({ buttonColor }: Props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        username: "",
        password: "",
        url: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);

        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleSubmit, isValid, isSubmitting }) => (
        <div>
          <Button
            sx={{ color: buttonColor }}
            variant={buttonColor === "white" ? "text" : "outlined"}
            onClick={() => setOpen(true)}
          >
            Set API credentials
          </Button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{ bgcolor: "background.paper" }}
              className={styles.formContainer}
            >
              <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                  <Typography
                    className={styles.title}
                    align="center"
                    color="textSecondary"
                    variant="h6"
                  >
                    Please, fill in to access your webshop
                  </Typography>

                  <TextField
                    fullWidth
                    label="API Username"
                    margin="normal"
                    name="username"
                    onChange={handleChange}
                    type="text"
                    value={values.username}
                    variant="outlined"
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    margin="normal"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />

                  <TextField
                    fullWidth
                    label="Api Url"
                    margin="normal"
                    name="url"
                    onChange={handleChange}
                    type="url"
                    value={values.url}
                    variant="outlined"
                  />
                  <Box sx={{ py: 2 }}>
                    <Button
                      color="primary"
                      fullWidth
                      size="large"
                      variant="contained"
                      disabled={!isValid || isSubmitting}
                      type="submit"
                      onClick={() => handleSubmit()}
                    >
                      Set API credentials
                    </Button>
                  </Box>
                </FormControl>
              </form>
            </Box>
          </Modal>
        </div>
      )}
    </Formik>
  );
};

export default ConnectWebshopModal;
