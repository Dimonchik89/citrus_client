import React from "react"

import Image from "next/image"

import { Box, Text } from "@chakra-ui/react"

const HeaderPhoneWindowSuccess = () => {
	return (
		<Box as="div" className="flex flex-col items-center">
			<Image src="icons/device.svg" alt="device" width="40" height="40" className="mb-5" />
			<Text className="small_text mb-2 font-bold">Чекайте дзвінок</Text>
			<Text className="small_text mb-1">Зараз надійде дзвінок з номера</Text>
			<Text className="small_text mb-1">+380 44 502 7020, це наш оператор</Text>
			<Text className="small_text">Можете сміливо піднімати трубку :)</Text>
		</Box>
	)
}

export default HeaderPhoneWindowSuccess
