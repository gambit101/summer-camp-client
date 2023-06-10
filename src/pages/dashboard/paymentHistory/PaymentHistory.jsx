import { useEffect, useState } from "react";

const PaymentHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/pay')
        .then(res => res.json())
        .then(data => setHistory(data))
    }, [])

    return (
        <div>
            <h2>Total Payments: {history.length}</h2>
            
        </div>
    );
};

export default PaymentHistory;