"use client"

import { useState } from "react"

import { Box, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { ReactSVG } from "react-svg"

const MainMenu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleOpen = () => {
		setIsOpen(true)
	}

	const handleClose = () => {
		setIsOpen(false)
	}

	return (
		<Menu isOpen={isOpen}>
			<MenuButton onMouseEnter={handleOpen} onMouseLeave={handleClose}>
				<Box className="flex items-center gap-4">
					<ReactSVG className="lg:w-7 lg:h-7 xl:w-9 xl:h-9 stroke-icons" src="/icons/menu.svg" />
					<Text as="p" className="lg:text-base xl:text-xl font-semibold">
						Каталог
					</Text>
				</Box>
			</MenuButton>

			<MenuList>
				<MenuItem>New Window</MenuItem>
				<MenuItem>Open Closed Tab</MenuItem>
				<MenuItem>Open File</MenuItem>
			</MenuList>
		</Menu>
	)
}
export default MainMenu
