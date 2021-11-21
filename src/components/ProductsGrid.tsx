import { SimpleGrid, Button, Flex, Container } from '@chakra-ui/react'
import Card from './DeckBuilder/Card'
import { useProductsQuery } from '../generated/graphql'
import React from 'react'

const ProductsGrid = () => {
   const { data, error, loading, fetchMore, variables } = useProductsQuery({
      variables: {
         limit: 12,
         cursor: null as number | null,
      },
      notifyOnNetworkStatusChange: true,
   })
   console.log(data)
   if (!loading && !data) {
      return (
         <div>
            <div>TBD (query failed, no data fetched)</div>
            <div>{error?.message}</div>
         </div>
      )
   }

   return (
      <Container maxW="none">
         <SimpleGrid columns={4} spacing={2}>
            {data?.products.products.map((product) =>
               !product ? null : <Card key={product.id} product={product} />
            )}
         </SimpleGrid>
         {data && data?.products.hasMore ? (
            <Flex>
               <Button
                  colorScheme="teal"
                  onClick={() => {
                     fetchMore({
                        variables: {
                           limit: variables!.limit,
                           cursor:
                              data.products.products[
                                 data.products.products.length - 1
                              ].id,
                        },
                     })
                  }}
                  isLoading={loading}
                  m="auto"
                  my={9}
               >
                  i want more products
               </Button>
            </Flex>
         ) : null}
      </Container>
   )
}

export default ProductsGrid
