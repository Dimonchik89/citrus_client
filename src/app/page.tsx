"use client"
import Header from "@/components/Header/Header"
import WrapperWithHeader from "@/components/Wrapper/WrapperWithHeader"
import { Text, useColorMode } from "@chakra-ui/react"

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<main className="">
			<WrapperWithHeader>
				<Text className="">Hello!!!!!!!</Text>
			</WrapperWithHeader>
		</main>
	)
}
