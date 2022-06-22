import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { MOCK_DATA } from "../utils/mocks/tableData";

const MuiTable = React.memo(() => {
  const years = React.useMemo(getYears, []);

  function getOnlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  function getYears() {
    const values = Object.values(MOCK_DATA).map((el) => Object.values(el));
    let years = [];

    values.forEach((el) => {
      const elYears = el.map((key) => Object.keys(key));

      elYears.forEach((year) => {
        years = [...years, ...year];
      });
    });
    return years.filter(getOnlyUnique);
  }

  const renderBodyRow = (region) => {
    const regionDataByYears = Object.values(MOCK_DATA[region]) [0];

    return (
      <TableRow key={region}>
        <TableCell>{region}</TableCell>

        {years.map((year) => {
          const regionDataByYear = regionDataByYears[year];

          if (!regionDataByYear) {
            return <TableCell></TableCell>;
          }
          return <TableCell></TableCell>;
        })}
      </TableRow>
    );
  };
  const renderYears = React.useCallback(() => {
    return years.map((year) => {
      return (
        <React.Fragment key={year}>
          <TableCell align="left" />
          <TableCell align="left">{year}</TableCell>
          <TableCell align="left" />
        </React.Fragment>
      );
    });
  }, [years]);

  const renderTableBody = React.useCallback(() => {
    const content = Object.keys(MOCK_DATA);

    return content.map(renderBodyRow);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Regions</TableCell>
            {renderYears()}
          </TableRow>
        </TableHead>

        <TableBody>{renderTableBody()}</TableBody>
      </Table>
    </TableContainer>
  );

});

export default MuiTable;