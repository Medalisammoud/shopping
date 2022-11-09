import React from 'react'

import ListProduct from '../Products/ListProduct/ListProduct'
import Slide from './Slide'


const Home = ({inputSearch}) => {
    return (
        <div>
            <Slide />
            <ListProduct inputSearch={inputSearch} />
        </div>
    )
}

export default Home
