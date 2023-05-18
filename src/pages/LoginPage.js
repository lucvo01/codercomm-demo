import React, { useState } from "react";
import { FCheckBox, FormProvider, FTextField } from "../components/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Stack, Container, Alert, Link, VisibilityIcon, VisibilityOffIcon } from "@mui/material";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required")
});

const defaultValues = {
  email: "",
  password: "",
  remember: true
};

function LoginPage() {
  const auth = useAuth();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues
  });

  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting }
  } = methods;

  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    const from = location.state?.from?.pathname || "/";
    let { email, password } = data;

    try {
      await auth.login({ email, password }, () => {
        navigate(from, { replace: true });
      });
    } catch (error) {
      reset();
      setError("responseError", error);
    }
  };

  return (
    <Container maxWidth="xs">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing ={3}>
          {!!errors.responseError && (
            <Alert severity="error">{errors.responseError.message}</Alert>
          )}
          <Alert severity='info'>Don't have an account?{" "}
          <Link variant='subtitle2' component={RouterLink} to='/register'>
          Get Started
          </Link>
          </Alert>
          <FTextField name='email' label='Email address'/>
          <FTextField name='password' label='Password' type={showPassword ? "text" : "password"} InputProps={{endAdornment: (
            <InputAdornment position='end'>
              <IconButton  onClick={() => setShowPassword(!showPassword)} edge='end'>
                {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
              </IconButton>
            </InputAdornment>
          )}}/>
        </Stack>
      </FormProvider>
    </Container>
  );
}

export default LoginPage;
