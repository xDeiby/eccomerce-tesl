import { Chip, Grid, Link, Typography } from "@mui/material";
import { NextPage } from "next";
import { ShopLayout } from "../../components/layout";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import NextLink from "next/link";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Nombre completo", width: 300 },
  {
    field: "paid",
    headerName: "Pagado",
    width: 200,
    description: "Información acerca del pago de la orden",
    renderCell: ({ value }: GridValueGetterParams) =>
      value ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="No pagada" variant="outlined" />
      ),
  },
  {
    field: "order",
    headerName: "Orden",
    width: 300,
    renderCell: ({ row }) => (
      <NextLink href={`/order/${row.id}`} passHref>
        <Link underline="always">Ver orden</Link>
      </NextLink>
    ),
  },
];

const rows = [
  { id: 1, paid: false, fullname: "deiby cabrera" },
  { id: 2, paid: true, fullname: "carlos rocas" },
  { id: 3, paid: false, fullname: "sara rojas" },
];

const HistoryPage: NextPage = () => {
  return (
    <ShopLayout
      title="Historial de ordenes"
      pageDescription="Historial de ordenes del cliente"
    >
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={rows}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
