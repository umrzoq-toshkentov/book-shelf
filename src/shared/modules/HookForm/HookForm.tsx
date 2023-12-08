import { Button, Stack, TextField, Typography } from "@mui/material";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
}

export const HookForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={2}>
      <Typography variant="h5">Hook Form</Typography>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <TextField {...field} label="Name" />}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => <TextField {...field} label="Last Name" />}
      />

      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </Stack>
  );
};
