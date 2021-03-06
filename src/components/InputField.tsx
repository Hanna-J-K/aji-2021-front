import {
   FormControl,
   FormLabel,
   FormErrorMessage,
} from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/react'
import { useField } from 'formik'
import React, { InputHTMLAttributes } from 'react'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
   label: string
   name: string
}

export const InputField: React.FC<InputFieldProps> = ({
   label,
   size: _,
   ...props
}) => {
   const [field, { error }] = useField(props)
   return (
      <FormControl isInvalid={!!error}>
         {' '}
         {/* casting empty string to boolean false */}
         <FormLabel htmlFor={field.name}>{label}</FormLabel>
         <Input {...field} {...props} id={field.name} />
         {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
   )
}
