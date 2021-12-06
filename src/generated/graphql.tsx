import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  name: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrder: OrderResponse;
  createProduct: ProductResponse;
  updateOrder: OrderResponse;
  updateProduct: ProductResponse;
};


export type MutationCreateOrderArgs = {
  input: OrderInput;
};


export type MutationCreateProductArgs = {
  input: ProductInput;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['String'];
  status: Scalars['String'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['Int'];
  input: ProductInput;
};

export type Order = {
  __typename?: 'Order';
  email: Scalars['String'];
  id: Scalars['String'];
  orderConfirmedDate?: Maybe<Scalars['String']>;
  orderedProducts: Array<OrderedProduct>;
  orderPlaceDate: Scalars['String'];
  phone: Scalars['String'];
  status: OrderStatus;
  username: Scalars['String'];
};

export type OrderedProduct = {
  __typename?: 'OrderedProduct';
  product_id: Scalars['Float'];
  quantity: Scalars['Float'];
};

export type OrderedProductInput = {
  product_id: Scalars['Float'];
  quantity: Scalars['Float'];
};

export type OrderInput = {
  email: Scalars['String'];
  orderedProducts?: InputMaybe<Array<OrderedProductInput>>;
  phone: Scalars['String'];
  username: Scalars['String'];
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  errors?: Maybe<Array<FieldError>>;
  order?: Maybe<Order>;
};

export type OrderStatus = {
  __typename?: 'OrderStatus';
  orderStatus: Scalars['String'];
};

export type PaginatedProducts = {
  __typename?: 'PaginatedProducts';
  hasMore: Scalars['Boolean'];
  products: Array<Product>;
};

export type Product = {
  __typename?: 'Product';
  categories: Array<Category>;
  description: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  unitPrice: Scalars['Float'];
  unitWeight: Scalars['Float'];
};

export type ProductInput = {
  categories?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  unitPrice?: InputMaybe<Scalars['Float']>;
  unitWeight?: InputMaybe<Scalars['Float']>;
};

export type ProductResponse = {
  __typename?: 'ProductResponse';
  errors?: Maybe<Array<FieldError>>;
  product?: Maybe<Product>;
};

export type Query = {
  __typename?: 'Query';
  category: Array<Category>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  ordersByStatus?: Maybe<Array<Order>>;
  orderStatuses: Array<OrderStatus>;
  product?: Maybe<Product>;
  products: PaginatedProducts;
  userOrders?: Maybe<Array<Order>>;
};


export type QueryOrderArgs = {
  id: Scalars['String'];
};


export type QueryOrdersByStatusArgs = {
  status: Scalars['String'];
};


export type QueryProductArgs = {
  id: Scalars['Int'];
};


export type QueryProductsArgs = {
  cursor: Scalars['Int'];
  limit: Scalars['Int'];
  phrase?: InputMaybe<Scalars['String']>;
};


export type QueryUserOrdersArgs = {
  username: Scalars['String'];
};

export type DefaultErrorFragment = { __typename?: 'FieldError', field: string, message: Array<string> };

export type DefaultOrderFragment = { __typename?: 'Order', id: string, orderPlaceDate: string, orderConfirmedDate?: string | null | undefined, username: string, email: string, phone: string, status: { __typename?: 'OrderStatus', orderStatus: string } };

export type DefaultProductFragment = { __typename?: 'Product', id: number, name: string, description: string, unitPrice: number, unitWeight: number, categories: Array<{ __typename?: 'Category', name: string }> };

export type CreateOrderMutationVariables = Exact<{
  input: OrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'OrderResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: Array<string> }> | null | undefined, order?: { __typename?: 'Order', id: string, orderPlaceDate: string, orderConfirmedDate?: string | null | undefined, username: string, email: string, phone: string, orderedProducts: Array<{ __typename?: 'OrderedProduct', quantity: number, product_id: number }>, status: { __typename?: 'OrderStatus', orderStatus: string } } | null | undefined } };

export type CreateProductMutationVariables = Exact<{
  input: ProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'ProductResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: Array<string> }> | null | undefined, product?: { __typename?: 'Product', id: number, name: string, description: string, unitPrice: number, unitWeight: number } | null | undefined } };

export type UpdateOrderMutationVariables = Exact<{
  status: Scalars['String'];
  updateOrderId: Scalars['String'];
}>;


export type UpdateOrderMutation = { __typename?: 'Mutation', updateOrder: { __typename?: 'OrderResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: Array<string> }> | null | undefined, order?: { __typename?: 'Order', id: string, orderPlaceDate: string, orderConfirmedDate?: string | null | undefined, username: string, email: string, phone: string, status: { __typename?: 'OrderStatus', orderStatus: string } } | null | undefined } };

export type CategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryQuery = { __typename?: 'Query', category: Array<{ __typename?: 'Category', name: string }> };

export type OrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type OrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: string, orderPlaceDate: string, orderConfirmedDate?: string | null | undefined, username: string, email: string, phone: string, orderedProducts: Array<{ __typename?: 'OrderedProduct', quantity: number, product_id: number }>, status: { __typename?: 'OrderStatus', orderStatus: string } }> };

export type ProductsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor: Scalars['Int'];
  phrase?: InputMaybe<Scalars['String']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'PaginatedProducts', hasMore: boolean, products: Array<{ __typename?: 'Product', id: number, name: string, description: string, unitPrice: number, unitWeight: number, categories: Array<{ __typename?: 'Category', name: string }> }> } };

export const DefaultErrorFragmentDoc = gql`
    fragment DefaultError on FieldError {
  field
  message
}
    `;
export const DefaultOrderFragmentDoc = gql`
    fragment DefaultOrder on Order {
  id
  orderPlaceDate
  orderConfirmedDate
  username
  email
  phone
  status {
    orderStatus
  }
}
    `;
export const DefaultProductFragmentDoc = gql`
    fragment DefaultProduct on Product {
  id
  name
  description
  unitPrice
  unitWeight
  categories {
    name
  }
}
    `;
export const CreateOrderDocument = gql`
    mutation CreateOrder($input: OrderInput!) {
  createOrder(input: $input) {
    errors {
      ...DefaultError
    }
    order {
      ...DefaultOrder
      orderedProducts {
        quantity
        product_id
      }
    }
  }
}
    ${DefaultErrorFragmentDoc}
${DefaultOrderFragmentDoc}`;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($input: ProductInput!) {
  createProduct(input: $input) {
    errors {
      ...DefaultError
    }
    product {
      id
      name
      description
      unitPrice
      unitWeight
    }
  }
}
    ${DefaultErrorFragmentDoc}`;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($status: String!, $updateOrderId: String!) {
  updateOrder(status: $status, id: $updateOrderId) {
    errors {
      ...DefaultError
    }
    order {
      ...DefaultOrder
    }
  }
}
    ${DefaultErrorFragmentDoc}
${DefaultOrderFragmentDoc}`;
export type UpdateOrderMutationFn = Apollo.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      status: // value for 'status'
 *      updateOrderId: // value for 'updateOrderId'
 *   },
 * });
 */
export function useUpdateOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, options);
      }
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const CategoryDocument = gql`
    query Category {
  category {
    name
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryQuery(baseOptions?: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const OrdersDocument = gql`
    query Orders {
  orders {
    ...DefaultOrder
    orderedProducts {
      quantity
      product_id
    }
  }
}
    ${DefaultOrderFragmentDoc}`;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrdersQuery(baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
      }
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const ProductsDocument = gql`
    query Products($limit: Int!, $cursor: Int!, $phrase: String) {
  products(limit: $limit, cursor: $cursor, phrase: $phrase) {
    products {
      ...DefaultProduct
    }
    hasMore
  }
}
    ${DefaultProductFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      phrase: // value for 'phrase'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;