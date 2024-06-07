import { Box, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import HeaderPhoneWindowItem from "./HeaderPhoneWindowItem"
import HeaderPhoneWindowForm from "./HeaderPhoneWindowForm"
import { usePostPhoneMutation } from "@/store/api/phoneApi"

interface HeaderPhoneWindowProps {
	showPhoneWindow: "visible" | "invisible"
	handleChangeShowPhoneWindow: (str: "visible" | "invisible") => void
}

const HeaderPhoneWindow: React.FC<HeaderPhoneWindowProps> = ({
	showPhoneWindow,
	handleChangeShowPhoneWindow,
}) => {
	const [postPhone, { isSuccess }] = usePostPhoneMutation()
	const [showPhoneSended, setShowPhoneSended] = useState<boolean>(isSuccess)

	const resetShowPhoneSended = () => {
		setTimeout(() => {
			setShowPhoneSended(false)
		}, 300)
	}

	useEffect(() => {
		setShowPhoneSended(isSuccess)
	}, [isSuccess])

	return (
		<Box
			className={`w-[270px] absolute -top-5 -left-[60px] py-5 px-5 rounded-lg bg-white ${showPhoneWindow} ${
				showPhoneWindow === "visible" ? "opacity-100" : "opacity-0"
			} duration-300`}
			onMouseLeave={() => {
				resetShowPhoneSended()
				handleChangeShowPhoneWindow("invisible")
			}}
		>
			<HeaderPhoneWindowItem
				phone="044 502 70 20"
				text="Оформити замовлення 9:00 - 21:00"
			/>
			<HeaderPhoneWindowItem
				phone="044 503 70 30"
				text="Служба підтримки 9:00 - 19:00"
			/>
			<Box className="relative flex items-center justify-between">
				<Box className="w-5/12 border-2 bg-gray"></Box>
				<Text className="text-sm text-header text-center">або</Text>
				<Box className="w-5/12	 border-2 bg-gray"></Box>
			</Box>
			<HeaderPhoneWindowForm
				postPhone={postPhone}
				showPhoneSended={showPhoneSended}
			/>
		</Box>
	)
}

export default HeaderPhoneWindow
