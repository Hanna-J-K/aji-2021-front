import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   Button,
   useDisclosure,
   Box,
   Flex,
   Center,
   Image,
   Text,
} from '@chakra-ui/react'
import { Product } from '../../types/ProductType'

interface ProductModalProps {
   product: Product
}

export const ProductModal: React.FC<ProductModalProps> = ({ product }) => {
   const productImage = {
      imageUrl: 'https://via.placeholder.com/570x300',
      imageAlt: 'Kill this love',
   }
   const { name, description, unitPrice, unitWeight, categories } = product
   const { isOpen, onOpen, onClose } = useDisclosure()
   return (
      <>
         <Box
            borderWidth="5px"
            borderColor="pink.800"
            borderRadius="xl"
            bg="pink.300"
         >
            <Button onClick={onOpen} variant="magic">
               See more
            </Button>
         </Box>

         <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            motionPreset="slideInBottom"
         >
            <ModalOverlay />
            <ModalContent
               borderWidth="10px"
               borderColor="#121212"
               boxShadow="inset 0 0 10px 5px black"
               borderRadius="xl"
               bg="rgba(42, 67, 101, 0.98)"
               bgGradient="linear(to-tr, pink.800, orange.900, blue.800)"
            >
               <Flex direction="column">
                  <ModalHeader
                     color="white"
                     borderBottomRadius="2xl"
                     boxShadow="inset 0 0 3px 1px #000000"
                  >
                     {name}
                  </ModalHeader>
                  <ModalCloseButton variant="magic" color="white" />
                  <ModalBody>
                     <Center mb={3}>
                        <Box>
                           <Image
                              src={productImage.imageUrl}
                              alt={productImage.imageAlt}
                           />
                        </Box>
                     </Center>
                     <Box
                        borderRadius="lg"
                        boxShadow="0 1px 3px 0 #ffffff"
                        p={5}
                        color="white"
                     >
                        <Box> Price: {unitPrice} </Box>
                        <Box> Weight: {unitWeight} </Box>
                        <Box fontWeight="semibold">
                           {' '}
                           Categories:{' '}
                           {categories.map((category) => category.name)}{' '}
                        </Box>
                        <Box fontWeight="semibold">
                           <Text> Product description: </Text>
                           <Text>{description} </Text>
                        </Box>
                     </Box>
                  </ModalBody>

                  <ModalFooter>
                     <Box
                        borderWidth="5px"
                        borderColor="pink.800"
                        borderRadius="xl"
                        bg="pink.300"
                        mr={3}
                     >
                        <Button onClick={onClose} variant="magic" bg="pink.400">
                           Close
                        </Button>
                     </Box>
                  </ModalFooter>
               </Flex>
            </ModalContent>
         </Modal>
      </>
   )
}

export default ProductModal
