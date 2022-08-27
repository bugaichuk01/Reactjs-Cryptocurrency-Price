export interface ICoin {
    id?: number;
    name: string;
    current_price: number;
    symbol: string;
    total_volume: number;
    market_cap: number;
    image: string;
    price_change_percentage_24h: number;
}