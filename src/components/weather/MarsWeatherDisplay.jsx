import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

let WeatherDisplay = (props) => {

    const classes = useStyles();
    return (
        <div>
            <p>{`It is currently ${props.currentSeason} on Mars`}</p>

            <TableContainer component={Paper}>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Sol</TableCell>
                            <TableCell align="right">Average Temp (&deg;C)</TableCell>
                            <TableCell align="right">High Temp (&deg;C)</TableCell>
                            <TableCell align="right">Low Temp (&deg;C)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="right">{props.lastSol}</TableCell>
                            <TableCell align="right">{props.averageTemp}</TableCell>
                            <TableCell align="right">{props.highTemp}</TableCell>
                            <TableCell align="right">{props.lowTemp}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default WeatherDisplay;