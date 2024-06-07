"use client"
import WrapperWithHeader from "@/components/Wrapper/WrapperWithHeader"
import { Text, useColorMode } from "@chakra-ui/react"
import { useTranslations } from "next-intl"

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode()
	const t = useTranslations("Index")
	return (
		<main className="">
			<WrapperWithHeader>
				<Text className="">{t("title")}</Text>
			</WrapperWithHeader>
		</main>
	)
}
