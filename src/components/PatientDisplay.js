import React, { useState } from "react";
import DataTable from "./DataTable";
import LineGraph from "./LineGraph";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6D9147",
    },
  },
  typography: {
    fontFamily: "roboto",
  },
});

const PatientDisplay = ({ patient, visit }) => {
  const [viewGraph, setViewGraph] = useState(false);

  const patientVisit = visit.filter((v) => v["Patient Name"] === patient);

  return (
    <Box>
      {visit.length ? (
        <Box sx={{ width: 800, height: 950 }}>
          <Box sx={{ display: "grid" }}>
            <Typography variant="h7">Patient Name: {patient}</Typography>
            <ThemeProvider theme={theme}>
              <br />
              <Button
                style={{ height: 40 }}
                variant="contained"
                color="primary"
                onClick={() => setViewGraph((i) => !i)}
              >{`Show ${viewGraph ? "Table" : "Graph"}`}</Button>
            </ThemeProvider>
          </Box>
          {viewGraph && <LineGraph data={patientVisit} />}
          {!viewGraph && <DataTable data={patientVisit} />}
        </Box>
      ) : (
        <Box>
          <ThemeProvider theme={theme}>
            <Typography variant="h3">Select a patient name: </Typography>
          </ThemeProvider>
        </Box>
      )}
    </Box>
  );
};

export default PatientDisplay;
