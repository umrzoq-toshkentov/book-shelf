import { Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as zod from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const validationSchema = zod.object({
  firstName: zod.string().min(3).max(10).optional(),
  lastName: zod.string().min(3).max(10).optional(),
});

export const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: toFormikValidationSchema(validationSchema),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Stack component="form" onSubmit={formik.handleSubmit} spacing={2}>
      <Typography variant="h5">Formik Form</Typography>

      <TextField
        value={formik.values.firstName}
        onChange={formik.handleChange}
        name="firstName"
        label="First Name"
      />
      <TextField
        value={formik.values.lastName}
        onChange={formik.handleChange}
        name="lastName"
        label="Last Name"
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </Stack>
  );
};
