import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Text } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"

const HeaderLocationButton = () => {
	return (
		<Button variant="link">
			<Image
				src="/icons/location.svg"
				alt="location"
				width="25"
				height="25"
				className="mr-1 lg:h-[20px] lg:w-[20px] xl:h-[25px] xl:w-[25px]"
			/>
			<Text as="p" className="header__link">
				Киев
			</Text>

			<ChevronDownIcon />
		</Button>
	)
}

export default HeaderLocationButton
