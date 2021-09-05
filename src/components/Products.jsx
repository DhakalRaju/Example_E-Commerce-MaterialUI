import React from 'react'
import Grid from'@material-ui/core';
import Product from './Products/Product/Product';

const products = [
    { id: 1, name: 'Shoes', description:'Running Shoes.'},
    { id: 2, name: 'MacBook', description:'Apple MacBook.'},
]

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;