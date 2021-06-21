import { Container, Grid } from "@material-ui/core";
import Summary from "./Component/Summary";
import Table from "./Component/Table";
import Chart from "./Component/Chart";
import Form from "./Component/Form";


function App() {
  return (
    <div style={{ width: "100%", textAlign: "center", marginTop: "40px" }}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Summary />
          </Grid>

          <Grid item xs={12}>
            <Chart />
          </Grid>

          <Grid item xs={12}>
            <Table />
          </Grid>

          <Grid item xs={12}>
            <Form />
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default App;
