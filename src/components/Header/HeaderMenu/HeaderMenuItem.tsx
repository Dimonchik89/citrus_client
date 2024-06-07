import React from "react"
import { Box } from "@chakra-ui/react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import useGetLanguage from "@/hooks/useGetLanguage"
import HeaderMenuSubMenu from "./HeaderMenuSubMenu"
import { SubMenuItem } from "@/interfaces/interfaces"

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
