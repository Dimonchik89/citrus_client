import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import HeaderPhoneWindow from "./HeaderPhoneWindow"

const HeaderPhone = () => {
	const [showPhoneWindow, setShowPhoneWindow] = useState<
		"visible" | "invisible"
	>("invisible")

	const handleChangeShowPhoneWindow = (str: "visible" | "invisible") => {
		setShowPhoneWindow(str)
	}

	return (
		<Box className="relative">
			<Box
				className="flex items-center"
				onMouseEnter={() => handleChangeShowPhoneWindow("visible")}
			>
				<Text as="h3" className="text-xl font-bold mr-1">
					044 502 70 20
				</Text>
				<ChevronDownIcon />
			</Box>

			<HeaderPhoneWindow
				showPhoneWindow={showPhoneWindow}
				handleChangeShowPhoneWindow={handleChangeShowPhoneWindow}
			/>
		</Box>
	)
}

export default HeaderPhone
