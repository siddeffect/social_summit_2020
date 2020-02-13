import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name, college, points) {
  return { name, college, points };
}

const rows = [
  createData("Arpil Sharma", "NCU", 3900),
  createData("Karan Gosain", "SRM", 3740),
  createData("Akashjyoti", "Graphic Era", 1570)
];

export default function SocialAttacheLeague() {
  return (
    <div>
      <Paper className="container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">College</TableCell>
              <TableCell align="left">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(rows => (
              <TableRow key={rows.name}>
                <TableCell align="left">{rows.name}</TableCell>
                <TableCell align="left">{rows.college}</TableCell>
                <TableCell align="left">{rows.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
