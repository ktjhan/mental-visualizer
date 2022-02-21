import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/rasa";

import database from "./database.json";
import PatientDisplay from "./components/PatientDisplay";
import PatientList from "./components/PatientList";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "rasa",
    h1: {
      fontSize: 24,
    },
  },
});

function App() {
  const [patientList, setPatientList] = useState(database.patients);
  const [visit, setVisit] = useState(database.history);
  const [selectPatient, setSelectPatient] = useState("");

  return (
    <div className="App">
      <div className="header">
        <ThemeProvider theme={theme}>
          <Typography variant="h1" gutterBottom>
            Prairie Health's Mental Health Score Evaluation
          </Typography>
        </ThemeProvider>
      </div>
      <div className="displays">
        <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md:'row'}, marginLeft: 10}}>
          <Paper>
            <Grid direction="row">
              <Grid>
                <PatientList
                  patients={patientList}
                  setSelectPatient={setSelectPatient}
                />
              </Grid>
            </Grid>
          </Paper>
          <br/>
          <br/>
          <Box>
            <Paper>
            <Grid>
              <PatientDisplay patient={selectPatient} visit={visit} />
            </Grid>
            </Paper>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default App;
