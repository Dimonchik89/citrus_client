"use client"

import Link from "next/link"

import InputSearchContainer from "../Input/InputSearchContainer"
import MainMenu from "../MainMenu/MainMenu"
import HeaderSecondLineRight from "./HeaderSecondLineRight"
import { Box } from "@chakra-ui/react"
import { ReactSVG } from "react-svg"

const HeaderSecondLine = () => {
	return (
		<Box className="Header-secondline bg-white xl:bg-[#f2eff1]">
			<Box className="container mx-auto">
				<Box className="flex justify-between items-center gap-4 lg:gap-2">
					<Box className="mr-8 hidden lg:flex items-center">
						<MainMenu />
					</Box>
					<Box className="mobile__logo block lg:hidden">
						<Link href="/">
							<ReactSVG src="/images/compact-logo.svg" className="w-6 h-6" />
						</Link>
					</Box>
					<InputSearchContainer />
					<HeaderSecondLineRight />
				</Box>
			</Box>
		</Box>
	)
}

export default HeaderSecondLine
