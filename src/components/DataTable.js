import React from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const DataTable = ({ data }) => {
  return (
    <Paper elevation={4}>
      <Table
        sx={{ minWidth: 500, justifyContent: "center", alignItems: "center" }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Time & Date Visited</TableCell>
            <TableCell align="center">GAD-7 Score</TableCell>
            <TableCell align="center">PHQ-9 Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((individualRow) => (
            <TableRow>
              <TableCell>{individualRow["Timestamp"]}</TableCell>
              <TableCell align="right">
                {individualRow["GAD-7 Score"]}
              </TableCell>
              <TableCell align="right">
                {individualRow["PHQ-9 Score"]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default DataTable;
