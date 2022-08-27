import React, {useState} from 'react';
import './App.css';
import Header from "./components/header/Header";
import CurrencyList from "./components/currency-list/CurrencyList";

function App() {
    const [search, setSearch] = useState<string>('');

    return (
        <div className='container'>
            <Header setSearch={setSearch} />
            <CurrencyList search={search} />
        </div>
    );
}

export default App;
