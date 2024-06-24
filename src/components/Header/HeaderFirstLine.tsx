"use client"

import Image from "next/image"
import Link from "next/link"

import HeaderMenu from "./HeaderMenu/HeaderMenu"
import HeaderPhone from "./HeaderPhone/HeaderPhone"
import Headerlanguage from "./Headerlanguage"
import { Box } from "@chakra-ui/react"

const HeaderFirstLine = () => {
	return (
		<Box className="Header-firstline hidden lg:block bg-white">
			<Box className="container mx-auto">
				<Box className="flex items-center justify-between px-4 py-5 pr-6 pl-3">
					<Link href={"/"}>
						<Image src={"/images/logo.svg"} alt="logo" width="96" height="26" />
					</Link>
					<Box className="flex-1">
						<HeaderMenu />
					</Box>
					<Box className="flex items-center">
						<HeaderPhone />
						<Box className="lg:ml-4 xl:ml-8">
							<Headerlanguage />
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
export default HeaderFirstLine
