import React from 'react';

type HeaderType = {
    setSearch: (value: string) => void
}

const Header:React.FC<HeaderType> = ({setSearch}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className='container text-center mt-2'>
            <h2 className='fw-bold'>Search a currency</h2>
            <form>
                <input
                    className='form-control mb-5 mt-3 p-3'
                    type='text'
                    onChange={handleChange}
                    placeholder='Search'
                />
            </form>
        </div>
    );
}

export default Header;