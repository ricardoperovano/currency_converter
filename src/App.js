import React from "react";
import "semantic-ui-css/semantic.min.css";
import Conversor from "./components/Conversor";
import { Grid } from "semantic-ui-react";

function App() {
  const gridStyle = {
    padding: "30px 30px",
  };

  return (
    <Grid style={gridStyle}>
      <Grid.Row>
        <Grid.Column>
          <Conversor from="USD" to="BRL"></Conversor>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
