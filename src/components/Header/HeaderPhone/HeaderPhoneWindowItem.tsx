import IconPhone from "@/components/Icons/IconPhone"
import { Box, Text } from "@chakra-ui/react"
import React from "react"

interface HeaderPhoneWindowItemProps {
	phone: string
	text: string
}

const HeaderPhoneWindowItem: React.FC<HeaderPhoneWindowItemProps> = ({
	phone,
	text,
}) => {
	return (
		<Box className="flex flex-col mb-4">
			<Box className=" flex items-start">
				<Box className="pr-5 mt-1">
					<IconPhone sizes="size-5" />
				</Box>
				<Box className="ml-[0px]">
					<Text
						as="h3"
						className="lg:text-sm xl:text-lg font-bold mr-1"
					>
						{phone}
					</Text>
					<Text className="lg:text-sm xl:text-sm text-header max-w-40">
						{text}
					</Text>
				</Box>
			</Box>
		</Box>
	)
}

export default HeaderPhoneWindowItem
