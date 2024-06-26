import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const productSlice = createApi({
    reducerPath: 'productSlice',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'
}),
endpoints: (builder )=> ({
    getAllProducts: builder.query({
        query: () => 'products',
    }),
    getSingleProduct: builder.query({
        query: (product) => `products/search?q=${product}`,
    }),

}),

});

export const {useGetAllProductsQuery, useGetSingleProductQuery} = productSlice;