export const inputsA = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Enter your username",
        label: "Username",
        errorMsg: "Enter your username",
        required: true
    },
    {
        id: 2,
        name: "legajo",
        type: "text",
        placeholder: "Enter your bin number",
        label: "Bin No.",
        errorMsg: "Enter your bin number",
        required: true
    }
];

export const inputsB = [
    {
        id: 1,
        name: "quantity",
        type: "text",
        placeholder: "Weight in Kg",
        label: "Weight",
        errorMsg: "Enter the weight of the waste",
        required: true
    },
    {
        id: 2,
        name: "sector",
        type: "text",
        placeholder: "Enter Location",
        label: "Location",
    }
];
export const options = [
    {
        label: "Plastic",
        value: "Recyclable"
    },
    {
        label: "Glass",
        value: "Reusable"
    },
    {
        label: "Paper",
        value: "Recyclables"
    },
    {
        label: "Electronic Waste",
        value: "Hazardous"
    },
    {
        label: "Metal",
        value: "Recyclying"
    },
    {
        label: "Textiles",
        value: "Reusables"
    },
    {
        label: "Steel",
        value: "Scrap"
    },
    {
        label: "Organic Waste",
        value: "Compostable"
    },
];


export const info = [
    {
        name: "juan",
        legajo: 1,
        type: "recyclable",
        quantity: 1,
        sector: "pgm",
        createdAt: new Date("2022-08-25T23:09:19.308+00:00")
    },
    {
        name: "pedro",
        legajo: 2,
        type: "special",
        quantity: 2,
        sector: "prod",
        createdAt: new Date("2022-09-1T23:09:19.308+00:00")
    },
    {
        name: "seba",
        legajo: 3,
        type: "recoverable",
        quantity: 3,
        sector: "qc",
        createdAt: new Date("2022-08-15T23:09:19.308+00:00")
    },
    {
        name: "pepe",
        legajo: 4,
        type: "industrial",
        quantity: 4,
        sector: "admin",
        createdAt: new Date("2022-08-05T23:09:19.308+00:00")
    }
]