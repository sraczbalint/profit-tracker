import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import NextLink from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useAuth } from "context/AuthContext";

import styles from "./RegistrationContainer.module.scss";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  firstName: Yup.string().max(255).required("First name is required"),
  lastName: Yup.string().max(255).required("Last name is required"),
  password: Yup.string().max(255).required("Password is required"),
  policy: Yup.boolean().oneOf([true], "This field must be checked"),
});

const RegistrationContainer = () => {
  const router = useRouter();
  const { signUp } = useAuth();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        policy: false,
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const displayName = `${values.lastName} ${values.firstName}`;

        await signUp(values.email, values.password, displayName)
          .then(() => router.push("/"))
          .catch((err) => {
            // TODO: Display error in client side and remove console.error
            console.error(err);
          });

        setSubmitting(false);
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        isValid,
        isSubmitting,
        errors,
        touched,
        handleBlur,
      }) => (
        <Box component="main" className={styles.registrationContainer}>
          <Container maxWidth="sm">
            <NextLink href="/login" passHref>
              <Button
                component="a"
                startIcon={<ArrowBackIcon fontSize="small" />}
              >
                Login
              </Button>
            </NextLink>
            <form onSubmit={handleSubmit}>
              <Box className={styles.title}>
                <Typography color="textPrimary" variant="h4">
                  Create a new account
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Use your email to create a new account
                </Typography>
              </Box>
              <TextField
                name="firstName"
                helperText={touched.firstName && errors.firstName}
                label="First Name"
                className={styles.textField}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                variant="outlined"
                error={Boolean(touched.firstName && errors.firstName)}
              />
              <TextField
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                label="Last Name"
                name="lastName"
                className={styles.textField}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                label="Email Address"
                name="email"
                className={styles.textField}
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                label="Password"
                name="password"
                className={styles.textField}
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />
              <Box className={styles.checkboxContainer}>
                <Checkbox
                  checked={values.policy}
                  name="policy"
                  onChange={handleChange}
                />
                <Typography color="textSecondary" variant="body2">
                  I have read the{" "}
                  <NextLink href="#" passHref>
                    <Link
                      color="primary"
                      underline="always"
                      variant="subtitle2"
                    >
                      Terms and Conditions
                    </Link>
                  </NextLink>
                </Typography>
              </Box>
              {Boolean(touched.policy && errors.policy) && (
                <FormHelperText error>{errors.policy}</FormHelperText>
              )}
              <Box className={styles.actionButtonsContainer}>
                <Button
                  color="primary"
                  disabled={isSubmitting || !isValid}
                  fullWidth
                  size="large"
                  variant="contained"
                  onClick={() => handleSubmit()}
                  type="submit"
                >
                  Sign Up Now
                </Button>
              </Box>
              <Typography color="textSecondary" variant="body2">
                Have an account?{" "}
                <NextLink href="/login" passHref>
                  <Link variant="subtitle2" underline="hover">
                    Sign In
                  </Link>
                </NextLink>
              </Typography>
            </form>
          </Container>
        </Box>
      )}
    </Formik>
  );
};

export default RegistrationContainer;
