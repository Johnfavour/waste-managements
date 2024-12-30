import React, { useState } from 'react';

export default function FilterDate({ onDateFilter }) {
    const [filter, setFilter] = useState({
        from: "",
        to: ""
    });

    const handleInput = (field) => (e) => {
        const { value } = e.target;

        setFilter({
            ...filter,
            [field]: value
        });

        switch (field) {
            case "from":
                onDateFilter(value, "from");
                break;
            case "to":
                onDateFilter(value, "to");
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="startDate">From</label>
                <input type="date" className='inputDate' onChange={handleInput("from")} />
            </div>
            <div>
                <label htmlFor="endDate">To</label>
                <input type="date" className='inputDate' onChange={handleInput("to")} />
            </div>
        </div>
    )
}
