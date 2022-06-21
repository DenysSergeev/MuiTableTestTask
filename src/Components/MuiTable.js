import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//import { MOCK_DATA } from '../utils/mocks/tableData';


const MuiTable = () => {

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead>
                <TableCell>Regions</TableCell>
                <TableCell align="center">2017
                    <TableCell align="center">XX</TableCell>
                    <TableCell align="center">YY</TableCell>
                    <TableCell align="center">ZZ</TableCell>
                </TableCell>
                <TableCell align="center">2018
                    <TableCell align="center">XX</TableCell>
                    <TableCell align="center">YY</TableCell>
                    <TableCell align="center">ZZ</TableCell>
                </TableCell>
                <TableCell align="center">2019
                    <TableCell align="center">XX</TableCell>
                    <TableCell align="center">YY</TableCell>
                    <TableCell align="center">ZZ</TableCell>
                </TableCell>
            </TableHead>
            <TableBody>
              {MOCK_DATA.map((row) => (
                <TableRow
                  key={row.Kyivska}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell>Kyivska</TableCell>
                    <TableCell align="left">{row.Kyivska.G[2017].XX.value}</TableCell>
                    <TableCell align="left">{row.Kyivska.G[2017].YY.value}</TableCell>
                    <TableCell align="left">{row.Kyivska.G[2017].ZZ.value}</TableCell>
                </TableRow>
              
              ))}
              {MOCK_DATA.map((row) => (
                <TableRow
                  key={row.Kyivska}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell>Odeska</TableCell>
                    <TableCell align="right">{row.Odeska.G[2017].XX.value}</TableCell>
                    <TableCell align="right">{row.Odeska.G[2017].YY.value}</TableCell>
                    <TableCell align="right">{row.Odeska.G[2017].ZZ.value}</TableCell>
                </TableRow>
              
              ))}
              {MOCK_DATA.map((row) => (
                <TableRow
                  key={row.Kyivska}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell>Lvivska</TableCell>
                    <TableCell align="right">{row.Lvivska.G[2017].XX.value}</TableCell>
                    <TableCell align="right">{row.Lvivska.G[2017].YY.value}</TableCell>
                    <TableCell align="right">{row.Lvivska.G[2017].ZZ.value}</TableCell>
                </TableRow>
              
              ))}
            </TableBody>
          </Table>
        </TableContainer> 
    );
}

const MOCK_DATA = [
    {
        Kyivska: {
          G: {
            2017: {
              XX: {
                value: 150000,
                dateRelease: "2017-12-31",
              },
              YY: {
                value: 100000,
                dateRelease: "2017-12-31",
              },
              ZZ: {
                value: 77,
                dateRelease: "2017-12-31",
              },
            },
            2018: {
              XX: {
                value: 160000,
                dateRelease: "2018-12-31",
              },
              YY: {
                value: 110000,
                dateRelease: "2018-12-31",
              },
              ZZ: {
                value: 72,
                dateRelease: "2018-12-31",
              },
            },
            2019: {
              XX: {
                value: 130000,
                dateRelease: "2019-12-31",
              },
              YY: {
                value: 85000,
                dateRelease: "2019-12-31",
              },
              ZZ: {
                value: 72,
                dateRelease: "2019-12-31",
              },
            },
          },
        },
        Odeska: {
          G: {
            2017: {
              XX: {
                value: 10000,
                dateRelease: "2017-12-31",
              },
              YY: {
                value: 5000,
                dateRelease: "2017-12-31",
              },
              ZZ: {
                value: 45,
                dateRelease: "2017-12-31",
              },
            },
            2019: {
              XX: {
                value: 15000,
                dateRelease: "2019-12-01",
              },
              YY: {
                value: 0,
                dateRelease: "2022-02-18",
              },
              ZZ: {
                value: 0,
                dateRelease: "2022-02-18",
              },
            },
          },
        },
        Lvivska: {
          G: {
            2017: {
              XX: {
                value: 640000,
                dateRelease: "2017-12-31",
              },
              YY: {
                value: 510000,
                dateRelease: "2017-08-01",
              },
              ZZ: {
                value: 67,
                dateRelease: "2017-08-01",
              },
            },
            2018: {
              XX: {
                value: 740000,
                dateRelease: "2018-12-31",
              },
              YY: {
                value: 530000,
                dateRelease: "2018-08-01",
              },
              ZZ: {
                value: 61,
                dateRelease: "2018-08-01",
              },
            },
          },
        },
      }
  ]


export default MuiTable;