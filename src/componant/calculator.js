import React, { useState } from "react";


function Calculator() {
    const [result, setResult] = useState("");

// Click Action 
    const clickvalue = (e) => {
        setResult(result.concat(e.target.name));
    };
// Click clear
    const clear = () => {
        setResult("");
    };
// Backspace Remove 
    const backspace = () => {
        setResult(result.slice(0, -1));
    };
// Total Value Calculate
    const total = () => {
        setResult(eval(result).toString());
    };

    return (
        <div className="background">
            <h1>CALCULATOR</h1>
            <div className="page">
            <div className="calculator">
                    <div className="disply">
                        <input type="text" value={result} />
                    </div>
                    <div
                        className="buttons">
                        <button name="7" onClick={clickvalue}>7</button>
                        <button name="8" onClick={clickvalue}>8</button>
                        <button name="9" onClick={clickvalue}>9</button>
                        <button name="/" onClick={clickvalue} className="symple">/</button>

                        <button name="6" onClick={clickvalue}>6</button>
                        <button name="5" onClick={clickvalue}>5</button>
                        <button name="4" onClick={clickvalue}>4</button>
                        <button name="*" onClick={clickvalue} className="symple">*</button>

                        <button name="3" onClick={clickvalue}>3</button>
                        <button name="2" onClick={clickvalue}>2</button>
                        <button name="1" onClick={clickvalue}>1</button>
                        <button name="-" onClick={clickvalue} className="symple">-</button>

                        <button name="0" onClick={clickvalue}>0</button>
                        <button name="." onClick={clickvalue}>.</button>
                        <button name="clear" onClick={clear} className="clearbutton">C</button>
                        <button name="+" onClick={clickvalue} className="symple">+</button>

                        <button name="=" onClick={total} className="equal">=</button>
                        <button onClick={backspace} className="clear">clear</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;