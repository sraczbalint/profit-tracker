import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import NextLink from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useAuth } from "context/AuthContext";

import styles from "./LoginContainer.module.scss";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string().max(255).required("Password is required"),
});

const LoginContainer = () => {
  const router = useRouter();
  const { googleAuth, signIn } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await googleAuth();
      router.push("/");
    } catch (err) {
      // TODO: Display error in client side and remove console.error
      console.error(err);
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        await signIn(values.email, values.password)
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
        <Box component="main" className={styles.loginContainer}>
          <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
              <Box sx={{ my: 3 }}>
                <Typography color="textPrimary" variant="h4">
                  Sign in
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Sign in on the internal platform
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <Button
                    fullWidth
                    color="error"
                    startIcon={<GoogleIcon />}
                    size="large"
                    variant="contained"
                    onClick={() => handleGoogleLogin()}
                  >
                    Login with Google
                  </Button>
                </Grid>
              </Grid>
              <Box
                sx={{
                  pb: 1,
                  pt: 3,
                }}
              >
                <Typography
                  align="center"
                  color="textSecondary"
                  variant="body1"
                >
                  or login with email address
                </Typography>
              </Box>

              <FormControl fullWidth>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={!isValid || isSubmitting}
                    fullWidth
                    size="large"
                    variant="contained"
                    onClick={() => handleSubmit()}
                    type="submit"
                  >
                    Sign In Now
                  </Button>
                </Box>
              </FormControl>

              <Typography color="textSecondary" variant="body2">
                Don&apos;t have an account?{" "}
                <NextLink href="/register">
                  <Link
                    href="/register"
                    variant="subtitle2"
                    underline="hover"
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    Sign Up
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

export default LoginContainer;
