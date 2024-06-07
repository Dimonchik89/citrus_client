import { Box, Button } from "@chakra-ui/react"
import HeaderMenuItem from "./HeaderMenuItem"
import Image from "next/image"
import { ChevronDownIcon } from "@chakra-ui/icons"
import HeaderLocationButton from "../HeaderLocation/HeaderLocationButton"

const links = [
	{
		href: "plushki",
	},
	{
		href: "obmen",
	},
	{
		href: "about",
		subMenu: [
			{
				href: "b2b",
				name: "b2b",
			},
			{
				href: "https://www.youtube.com/",
				name: "youtube",
			},
			{
				href: "gift-certificates",
				name: "gift-certificates",
			},
			{
				href: "citrus-novapay",
				name: "citrus-novapay",
			},
			{
				href: "stores",
				name: "stores",
			},
			{
				href: "dostavka",
				name: "dostavka",
			},
			{
				href: "garantiya_i_servis",
				name: "garantiya_i_servis",
			},
			{
				href: "oplata",
				name: "oplata",
			},
			{
				href: "poluchenie-posylki",
				name: "poluchenie-posylki",
			},
			{
				href: "instructions",
				name: "instructions",
			},
			{
				href: "deklaraciya-sootvetstviy",
				name: "deklaraciya-sootvetstviy",
			},
		],
	},
	{
		href: "poslugi",
		subMenu: [
			{
				href: "citrus-master-service",
				name: "citrus-master-service",
			},
			{
				href: "citrus-defence",
				name: "citrus-defence",
			},
			{
				href: "kupit-v-kredit",
				name: "kupit-v-kredit",
			},
		],
	},
	{
		href: "shares",
	},
	{
		href: "news",
	},
	{
		href: "support",
	},
]

const HeaderMenu = () => {
	const content = links.map(({ href, subMenu = [] }) => (
		<HeaderMenuItem key={href} href={href} subMenu={subMenu} />
	))

	return (
		<Box as="ul" className="flex items-center justify-around ">
			<HeaderLocationButton />
			{content}
		</Box>
	)
}

export default HeaderMenu
