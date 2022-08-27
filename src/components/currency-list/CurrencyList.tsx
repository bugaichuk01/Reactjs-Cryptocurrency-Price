import React, {useEffect, useState} from 'react';
import {ICoin} from "../../types/Coin";
import CurrencyItem from "../currency-item/CurrencyItem";
import axios from "axios";

type ListType = {
    search: string
}

const CurrencyList:React.FC<ListType> = ({search}) => {
    const [coins, setCoins] = useState<ICoin[]>([]);

    const filteredCoins = coins.filter((coin: ICoin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        axios.get<ICoin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
            .then((res) => {
                setCoins(res.data);
            })
            .catch((error: Error) => console.error(error));
    }, []);

    return (
        <div className="container mb-2 text-center">
            <table className='table table-bordered table-dark'>
                <thead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Code</th>
                    <th scope='col'>Current Price</th>
                    <th scope='col'>Volume (24h)</th>
                    <th scope='col'>MarketCap</th>
                </tr>
                </thead>
                <tbody>
                {filteredCoins.map((coin: ICoin) => {
                    return (
                        <CurrencyItem {...coin} />
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default CurrencyList;