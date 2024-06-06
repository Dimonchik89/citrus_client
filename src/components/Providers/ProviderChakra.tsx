"use client"
import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { ProviderProps } from "./provider"
// import theme from "@/theme"
import theme from "../../theme"

const ProviderChakra: React.FC<ProviderProps> = ({ children }) => {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default ProviderChakra
