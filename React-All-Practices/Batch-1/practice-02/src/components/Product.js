import React from 'react';

const Product = (props) => {
    let {products} = props;
    return (
        <div  id = "products">
            {products.map((item, index) => {
                let {name, id, des, image} = item;
                return(
                    <div id = "product">
                        <img className="product__img" src={image} alt="" />
                        <div>{name}</div>
                        <div>{id}</div>
                        <div>{des}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default Product;