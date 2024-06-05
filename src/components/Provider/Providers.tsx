"use client"
import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { ProviderProps } from "./provider"
import theme from "@/theme"

const Providers: React.FC<ProviderProps> = ({ children }) => {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default Providers
