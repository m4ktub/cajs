/**
 * Main module.
 *
 * @license
 * The MIT License (MIT) <br/>
 * Copyright (c) 2015-2017 Cláudio Gil
 */

/** Imports */
import Stepper from "stepper";

/**
 * The main CA class.
 */
export class CA {
    public stepper: Stepper;
    constructor() {
        this.stepper = new Stepper();
        console.log("Main Cellular Automaton class created.");
    }
}
