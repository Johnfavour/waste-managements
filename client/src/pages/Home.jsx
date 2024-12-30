import React, { useState } from 'react';
import './home.css';
import Inputs from '../components/Inputs';
import { inputsA, inputsB, options } from '../data';
import axios from 'axios';

export default function Home() {
    const [selected, setSelected] = useState(options[0].value);
    const [disable, setDisable] = useState(false);
    const [values, setValues] = useState({
        name: "",
        legajo: "",
        quantity: "",
        sector: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postWaste = {
            name: values.name,
            legajo: values.legajo,
            type: selected,
            quantity: values.quantity,
            sector: values.sector
        };

        try {
            await axios.post('http://localhost:4000/api/waste', postWaste);
            window.location.reload();
        } catch (error) {
            console.log(error.response.data);
            
        }
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSelect = (e) => {
        setSelected(e.target.value)
    };

    return (
        <div>
            <div className='container'>
                <form action="" onSubmit={handleSubmit}>
                    <h2>Waste Generation</h2>
                    {inputsA.map((item) => (
                        <Inputs
                            key={item.id}
                            {...item}
                            value={values[item.name]}
                            onChange={handleChange}
                        />
                    ))}
                    {/*Fin Input 1*/}
                    <label>Select waste type:</label>
                    <select
                        id="waste"
                        value={selected}
                        onChange={handleSelect}
                    >
                        <optgroup label='Select the type of waste'>
                            {options.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </optgroup>
                    </select>
                    {inputsB.map((item) => (
                        <Inputs
                            key={item.id}
                            {...item}
                            value={values[item.name]}
                            onChange={handleChange}
                        />
                    ))}
                    <button
                        className='mainBtn'
                        type='submit'
                        // disabled={disable}
                        onClick={() => setDisable(true)}
                    >
                        Save data
                    </button>
                </form>
            </div>
        </div>
    )
}

