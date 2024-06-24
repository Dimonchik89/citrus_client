import { useTranslations } from "next-intl"

import ModalLocation from "@/components/Modal/ModalLocation/ModalLocation"
import ModalSignIn from "@/components/Modal/ModalSignIn/ModalSignIn"
import WrapperWithHeader from "@/components/Wrapper/WrapperWithHeader"
import { Text, useColorMode } from "@chakra-ui/react"

export default function Home() {
	// const { colorMode, toggleColorMode } = useColorMode()
	// const t = useTranslations("Index")

	return (
		<main className="">
			<WrapperWithHeader>{/* <Text className="">{t("title")}</Text> */}</WrapperWithHeader>
			<ModalLocation />
			<ModalSignIn />
		</main>
	)
}
