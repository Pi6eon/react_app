import React, { useState, useEffect } from 'react';

export const Calculator = (params) => { // no need for the word 'Component' to be attached, it's already understood
    const [num_1, updateNum1] = useState(0);
    const [num_2, updateNum2] = useState(0);
    const [result, updateResult] = useState('0')
    const [operator, updateOperator] = useState('+');

    const calculate = () => {
        let updated_result = '';
        if (operator == '+')
            updated_result = num_1 + num_2;
        else if (operator == '-')
            updated_result = num_1 - num_2;
        else if (operator == '/')
            updated_result = num_1 / num_2;
        else if (operator == '*')
            updated_result = num_1 * num_2;
        else
            updated_result = 'Invalid Operator';

        updateResult(updated_result);
    }

    useEffect(calculate, [num_1, num_2, operator]);

    const handleOnChange = (ev, field) => {
        const new_value = ev.target.value;
        if (!new_value) // if input changed to nothing / null, then don't update anything
            return;
        if (field == 'num_1')
            updateNum1(parseInt(new_value));
        else if (field == 'num_2')
            updateNum2(parseInt(new_value));
        else
            updateOperator(new_value)
    }

    return (<div>
        <input type='number' defaultValue='0' onChange={ev => handleOnChange(ev, 'num_1')} />
        <input type='character' defaultValue='+' onChange={ev => handleOnChange(ev, 'operator')} />
        <input type='number' defaultValue='0' onChange={ev => handleOnChange(ev, 'num_2')} />
        =
        {result}
    </div>)
}

export const Counter = () => {
    const [count, updateCount] = useState(0);// useState creates our variable 'count' and a function 'updateCount' to update our variable;

    const handleCountBtnClick = (ev) => {
        updateCount(count + 1); // a replacement for count = count + 1
    }

    return (<div>
        Clicked {count} times.
        <button onClick={handleCountBtnClick}> Click</button>
    </div>)
}