import React, { useContext } from 'react'
import {
   Drawer,
   DrawerBody,
   DrawerFooter,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   IconButton,
   useDisclosure,
   Icon,
   Text,
   Badge,
   Center,
   Flex,
   Heading,
} from '@chakra-ui/react'
import { CartItemType } from '../../types/CartItemType'
import { CartItem } from './CartItem'
import { BiCartAlt } from '@react-icons/all-files/bi/BiCartAlt'
import CartContext from '../../contexts/CartContext'
import { PlaceOrderModal } from './PlaceOrderModal'

interface CartProps {}

export const Cart: React.FC<CartProps> = () => {
   const [cartItems, setCartItems] = useContext(CartContext)
   const { isOpen, onOpen, onClose } = useDisclosure()
   const shopBtnRef = React.useRef()

   const bgImg =
      "url('https://images.unsplash.com/photo-1530362502708-d02c8f093039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"

   const getTotalItems = (items: CartItemType[]) =>
      items.reduce(
         (accumulateTotal: number, item) => accumulateTotal + item.quantity,
         0
      )

   const handleAddToCart = (clickedItem: CartItemType) => {
      setCartItems((cart) => {
         const isItemInCart = cart.find((item) => item.id === clickedItem.id)

         if (isItemInCart) {
            return cart.map((item) =>
               item.id === clickedItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
            )
         }
         return [...cart, { ...clickedItem, amount: 1 }]
      })
   }

   const handleRemoveFromCart = (id: number) => {
      setCartItems((cart) =>
         cart.reduce((ack, item) => {
            if (item.id === id) {
               if (item.quantity === 1) return ack
               return [...ack, { ...item, quantity: item.quantity - 1 }]
            } else {
               return [...ack, item]
            }
         }, [] as CartItemType[])
      )
   }

   const calculateTotal = (items: CartItemType[]) => {
      return items.reduce(
         (accumulateTotal: number, item: CartItemType) =>
            accumulateTotal + item.quantity * item.unitPrice,
         0
      )
   }

   return (
      <>
         <Flex mt={5} mb={7}>
            <Center
               variant="magic-navbar"
               bg="blue.200"
               boxShadow="0 5px 5px 1px #521B41"
               borderRadius="lg"
               borderColor="blue.200"
               borderRightWidth="10px"
               h="42px"
            >
               <IconButton
                  variant="magic-navbar"
                  boxShadow="none"
                  ml={2}
                  w="50px"
                  ref={shopBtnRef.current}
                  aria-label="show cart"
                  onClick={onOpen}
                  icon={<Icon as={BiCartAlt} />}
               ></IconButton>
               <Badge bg="pink.700" color="white">
                  {' '}
                  {getTotalItems(cartItems)}{' '}
               </Badge>
            </Center>
         </Flex>

         <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={shopBtnRef.current}
            size="md"
         >
            <DrawerOverlay />
            <DrawerContent color="white" bg="gray.800" backgroundImage={bgImg}>
               <DrawerCloseButton color="white" />
               <DrawerHeader>Shopping Cart</DrawerHeader>
               <DrawerBody>
                  {cartItems.length === 0 ? (
                     <Text textAlign="center" fontSize="24" fontWeight="bolder">
                        No items in cart
                     </Text>
                  ) : null}
                  {cartItems.map((item) => (
                     <CartItem
                        key={item.id}
                        item={item}
                        addToCart={handleAddToCart}
                        removeFromCart={handleRemoveFromCart}
                     />
                  ))}
                  {cartItems.length === 0 ? null : (
                     <Heading mt="3" as="h2" size="md">
                        Order total: ${calculateTotal(cartItems).toFixed(2)}
                     </Heading>
                  )}
               </DrawerBody>

               <DrawerFooter>
                  {cartItems.length !== 0 ? (
                     <PlaceOrderModal orderedProducts={cartItems} />
                  ) : null}
               </DrawerFooter>
            </DrawerContent>
         </Drawer>
      </>
   )
}
