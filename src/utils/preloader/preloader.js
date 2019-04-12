import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

export const Preloader = () => {
    return (
        <div className="preload"
             key={ 0 }>
            <CircularProgress size={ 80 } />
        </div>
    )
};