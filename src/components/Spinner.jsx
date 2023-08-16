import React, { useState } from 'react'
import classes from "./Spinner.module.css"

const Spinner = () => {


    return (
        <div>
            <div className={classes["lds-spinner"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div >
    )
}

export default Spinner