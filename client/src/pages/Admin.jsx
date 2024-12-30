import React, { useState, useEffect } from 'react';
import './admin.css';
import axios from 'axios';
import FilterDate from '../components/FilterDate';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(customParseFormat);

export default function Admin() {
    const [waste, setWaste] = useState([]);
    const [paginate, setPaginate] = useState(9);
    const [query, setQuery] = useState("");
   
    const [allWaste, setAllWaste] = useState([]);

    useEffect(() => {
        const fetchWaste = async () => {
            try {
                const res = await axios.get('http://localhost:4000/api/waste');
                setWaste(res.data);
                setAllWaste(res.data);
            } catch (err) { }
        };
        fetchWaste();
    }, [])

    const pagination = (e) => {
        setPaginate((prevValue) => prevValue + 9)
    };

    // Objects:
    const data = Object.values(waste);

    const objectKeys = Object.keys(Object.assign({}, ...data));

    const Search = (waste) => {
        return waste.filter(item =>
            objectKeys.some(key => item[key].toString().toLowerCase().includes(query))
        );
    };

    const filterDate = (createdAt, field) => {
        const filteredData = allWaste.filter((item) => {
            if (field === "from" && dayjs(item.createdAt).isSameOrAfter(dayjs(createdAt))) {
              
                return item;
            }
        });
        setWaste(filteredData);
    };

    return (
        <>
            <div className='adminContainer'>
                <div className='filterContainer'>
                    <label htmlFor="search-form">
                        <input
                            type="search"
                            name="search-form"
                            className="searchInput"
                            placeholder="Find by..."
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </label>
                </div>
                <FilterDate
                    onDateFilter={filterDate}
                />
                <div className='infoContainer'>
                    {Search(waste).slice(0, paginate).map((item) => (
                        <div className='userContainer' key={item._id}>
                            <h4 className='name'>{item.name}</h4>
                            <p className='legajo'>N°{item.legajo}</p>
                            <p className='wasteType'>{item.type}</p>
                            <p className='quantity'>{item.quantity} kg</p>
                            <p className='time'>{dayjs(item.createdAt).format("DD-MM-YYYY, HH:MM")}</p>
                            <p className='sector'>{item.sector}</p>
                        </div>
                    ))}
                </div>
                <button
                    className='moreBtn'
                    onClick={pagination}
                >
                    See more
                </button>
            </div>
        </>
    )
}
