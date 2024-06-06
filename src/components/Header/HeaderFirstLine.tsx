"use client"
import { Box } from "@chakra-ui/react"
import Image from "next/image"
import HeaderPhone from "./HeaderPhone/HeaderPhone"
import Link from "next/link"

const HeaderFirstLine = () => {
	return (
		<Box className="Header-firstline hidden lg:block bg-white">
			<Box className="container mx-auto">
				<Box className="flex px-4 py-5 pr-6 pl-3">
					<Link href={"/"}>
						<Image
							src={"/images/logo.svg"}
							alt="logo"
							width="96"
							height="26"
						/>
					</Link>
					<Box className="flex-1">
						<ul></ul>
					</Box>

					<HeaderPhone />
				</Box>
			</Box>
		</Box>
	)
}
export default HeaderFirstLine
