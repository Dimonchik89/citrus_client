import React from "react"

import { useTranslations } from "next-intl"
import Link from "next/link"

import HeaderMenuSubMenu from "./HeaderMenuSubMenu"
import useGetLanguage from "@/hooks/useGetLanguage"
import { SubMenuItem } from "@/interfaces/interfaces"
import { Box } from "@chakra-ui/react"

interface HeaderMenuItemProps {
	href: string
	subMenu: SubMenuItem[]
}

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({ href, subMenu }) => {
	const t = useTranslations("Navigation")
	const { currentLanguage } = useGetLanguage()

	const content = subMenu.length ? (
		<HeaderMenuSubMenu subMenu={subMenu} href={href} />
	) : (
		<Link className="header__link" href={`/${currentLanguage}/${href}`}>
			{t(href)}
		</Link>
	)

	return (
		<Box as="li" className="">
			{content}
		</Box>
	)
}

export default HeaderMenuItem
