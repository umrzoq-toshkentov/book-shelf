import { Grid, Stack, Typography } from "@mui/material";
import { HookForm } from "../../shared/modules/HookForm";
import { FormikForm } from "../../shared/modules/FormikForm";

export function HomePage() {
  return (
    <Stack>
      <Typography variant="h3">Form validation Page</Typography>
      <Grid spacing={4} container>
        <Grid item xs={12} md={6}>
          <HookForm />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormikForm />
        </Grid>
      </Grid>
    </Stack>
  );
}
