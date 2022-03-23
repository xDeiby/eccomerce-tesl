import { Box, Grid, Typography, TextField, Button, Link } from "@mui/material";
import { NextPage } from "next";
import NextLink from "next/link";
import { AuthLayout } from "../../components/layout";

const RegisterPage: NextPage = () => {
  return (
    <AuthLayout title="Registro">
      <Box width={350} padding="10px 20px">
        <Grid spacing={2} container>
          <Grid xs={12} item>
            <Typography variant="h1" component="h1">
              Registrate
            </Typography>
          </Grid>

          <Grid xs={12} item>
            <TextField label="Nombre completo" variant="filled" fullWidth />
          </Grid>

          <Grid xs={12} item>
            <TextField label="Correo" variant="filled" fullWidth />
          </Grid>

          <Grid xs={12} item>
            <TextField
              label="Contraseña"
              type="password"
              variant="filled"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
            >
              Registrar
            </Button>
          </Grid>

          <Grid item display="flex" justifyContent="center" xs={12}>
            <NextLink href={"/auth/login"} passHref>
              <Link underline="always">¿Ya tienes cuenta?</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default RegisterPage;
