import NextLink from "next/link";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../../components/layout";

const LoginPage = () => {
  return (
    <AuthLayout title="Ingresar">
      <Box width={350} padding="10px 20px">
        <Grid spacing={2} container>
          <Grid xs={12} item>
            <Typography variant="h1" component="h1">
              Iniciar Sesión
            </Typography>
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
              Ingresar
            </Button>
          </Grid>

          <Grid item display="flex" justifyContent="center" xs={12}>
            <NextLink href={"/auth/register"} passHref>
              <Link underline="always">¿No tienes cuenta?</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;
