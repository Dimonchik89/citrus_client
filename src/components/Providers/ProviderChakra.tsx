"use client"

import React from "react"

// import theme from "@/theme"
import theme from "../../theme"
import { ProviderProps } from "./provider"
import { ChakraProvider } from "@chakra-ui/react"

const ProviderChakra: React.FC<ProviderProps> = ({ children }) => {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default ProviderChakra
