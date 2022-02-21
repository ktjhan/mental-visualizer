import React, { useState } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "roboto",
    h5: {
      fontSize: 18,
    },
  },
});

const PatientList = ({ patients, setSelectPatient }) => {
  const [select, setSelect] = useState(-1);

  const selected = (event, index, patient) => {
    setSelect(index);
    setSelectPatient(patient);
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Typography variant="h5">Patient(s)</Typography>
      </ThemeProvider>
      <List>
        {patients.map((patient, index) => {
          return (
            <Box sx={{ width: 300, height: 50 }}>
              <ListItem
                selected={select === index}
                button
                onClick={(event) => selected(event, index, patient)}
              >
                <ListItemText primary={patient} />
              </ListItem>
            </Box>
          );
        })}
      </List>
    </Box>
  );
};

export default PatientList;
