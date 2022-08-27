import React from 'react';
import {ICoin} from "../../types/Coin";

function CurrencyItem(coin: ICoin) {
    return (
        <tr key={coin.id}>
            <td className='d-flex align-items-center'>
                <img style={{width: '50px', marginRight: '25px'}} src={coin.image} alt={coin.name}/>
                <p className='mb-0'>{coin.name}</p>
            </td>
            <td>
                <p>{coin.symbol.toUpperCase()}</p>
            </td>
            <td>{coin.current_price} $</td>
            <td>
                {coin.price_change_percentage_24h < 0 ? (
                    <p className='text-danger'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                ) : (
                    <p  className='text-success'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                )}
            </td>
            <td>{coin.market_cap.toLocaleString()} $</td>
        </tr>
    );
}

export default CurrencyItem;