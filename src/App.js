import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Art } from './Art';
import { Calculator, Counter } from './Calculator';
import { Menu } from './Menu';

export const App = () => {

    return (<div>
        <Routes>
            {/* <Route path='/' element={<Calculator />} /> */}
            {/* <Route path='/' element={<Navigate to='/calculator' replace={true} />} /> */}
            <Route path='/' element={<Menu />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/art' element={<Art />} />
        </Routes>
    </div>)
}