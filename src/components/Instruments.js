import React, { PureComponent } from 'react';
import connect from "react-redux/es/connect/connect";
import { compose } from 'redux'
import { getInstruments } from '../actions'
import { formatTime } from '../utils/helper'
import { Preloader } from '../utils/preloader/preloader'
import RowTable from '../components/TableRow'

import  '../assets/scss/style.scss'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import isEmpty from "ramda/es/isEmpty";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class Instruments extends PureComponent {
    state = {
        invisible: false,
    };

    handleBadgeVisibility = () => {
        this.setState(prevState => ({ invisible: !prevState.invisible }));
    };

    componentDidMount() {
        this.props.getAllInstruments();
    }

    render() {
        const { classes, instruments } = this.props;
        const { invisible } = this.state;

        if (isEmpty(instruments)) return <Preloader/>;

        const row = instruments.map(item => {
            const isAvailable = formatTime(item.tradingHours);

            return (
                <RowTable key={item.instrumentID}
                          id={item.instrumentID}
                          name={item.name}
                          available={isAvailable}
                          visible={invisible}
                />
            )
        });


        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Switch color="primary"
                                                    checked={ invisible }
                                                    onChange={ this.handleBadgeVisibility } />
                                        }
                                        label={ invisible ? "Toggle All" : "Toggle only Open" }
                                    />
                                </FormGroup>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { row }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}


function mapStateToProps (state) {
    const { instruments } = state;
    return {
        instruments: instruments.instruments
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getAllInstruments: () => dispatch(
            getInstruments()
        )
    }
}

Instruments.propTypes = {
    getAllInstruments: PropTypes.func,
    instruments: PropTypes.array,
    classes: PropTypes.object,
};

export default compose(
    withStyles(styles, {
        name: 'Instruments'
    }),
connect(mapStateToProps, mapDispatchToProps))(Instruments)
