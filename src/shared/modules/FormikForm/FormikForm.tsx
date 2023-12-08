import { Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as zod from "zod";

const validationSchema = zod.object({
  email: zod
    .string({ description: "Enter your email" })
    .email("Enter a valid email"),
  password: zod
    .string({ description: "Enter your password" })
    .min(8, "Password should be of minimum 8 characters length"),
});

export const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Stack component="form" onSubmit={formik.handleSubmit} spacing={2}>
      <Typography variant="h5">Formik Form</Typography>

      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </Stack>
  );
};
