import { withStyles } from "@material-ui/core";

import React from "react";
import { compose } from "redux";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const styles = {
    statusClosed: {
        color: 'red',
        fontSize: '18px'
    },
    statusOpen: {
        color: 'green',
        fontSize: '18px',
    },
    none: {
        display: 'none'
    }
};

const RowTable = props => {
    const { classes, name, id, available, visible } = props;

    if (visible && !available) {
        return (
                <TableRow key={ id }
                          className={ classes.none } />
            )
    }

    return (
        <TableRow key={ id }>
            <TableCell component="th" scope="row">
                { id }
            </TableCell>
            <TableCell component="th" scope="row">
                { name }
            </TableCell>
            <TableCell align="left">
                { available
                    ? <span className={ classes.statusOpen }>Open</span>
                    : <span className={ classes.statusClosed }>Closed</span>
                }
            </TableCell>
        </TableRow>
    )
};

RowTable.propTypes = {
    classes: PropTypes.object,
    name: PropTypes.string,
    id: PropTypes.number,
    available: PropTypes.bool,
    visible: PropTypes.bool,
};

export default compose(
    withStyles(styles, {
        name: 'RowTable'
    }),
)(RowTable)