// Core App Imports
import React, {useState, useEffect} from 'react';

import HeaderLinks from "./../components/Header/HeaderLinks.js";
import Header_1 from "./../components/Header/Header.js"; 

// Utility
import {generateRandomUniqueUnorderedList} from './helperFunctions.ts'; // still works!
import More_Sorting from './More_Sorting'

// Controls the program, grabs the algorithm and data size that are selected, runs/stops the algorithm, sends data points to child component, renders relevant data 
const App = () => {
    
    return (
        <div >

          <More_Sorting />
        </div>
    )
}

export default App;