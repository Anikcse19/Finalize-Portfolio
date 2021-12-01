import React from 'react';
import Product from '../Product/Product';
import "./ProductList.css"
import products from '../../data'
const ProductList = () => {
    return (
        <div>
            <div className="pl">
                <div className="pl-texts">
                    <h1 className='pl-title'> This is My Projects</h1>
                    <p className="pl-desc">
                        This is all of my projects that I had been done in the previous time. I am very Fond of creating website of my own interest.
                    </p>
                </div>
                <div className="pl-list">
                    {products.map(item => (
                        <Product key={item.id} img={item.img} link={item.link} />
                    ))}



                </div>
            </div>
        </div>
    );
};

export default ProductList;