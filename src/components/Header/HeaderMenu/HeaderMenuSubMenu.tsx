"use client"

import React, { useState } from "react"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { useRouter } from "next/navigation"

import useGetLanguage from "@/hooks/useGetLanguage"
import { SubMenuItem } from "@/interfaces/interfaces"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

interface HeaderMenuSubMenuProps {
	subMenu: SubMenuItem[]
	href: string
}

const HeaderMenuSubMenu: React.FC<HeaderMenuSubMenuProps> = ({ subMenu, href }) => {
	const [isOpen, setIsOpen] = useState(false)
	const { currentLanguage } = useGetLanguage()
	const t = useTranslations(href === "about" ? "SubTitleAbout" : "SubTitlePoslugi")
	const router = useRouter()

	const content = subMenu?.map(({ href, name }) => (
		<MenuItem key={name}>
			<Link className="header__link" href={`/${currentLanguage}/${href}`}>
				{t(name)}
			</Link>
		</MenuItem>
	))

	return (
		<Menu isOpen={isOpen}>
			<MenuButton
				as={"a"}
				href={"/"}
				onMouseEnter={() => setIsOpen(true)}
				onMouseLeave={() => setIsOpen(false)}
				className={`bg-inherit focus:outline-none header__link`}
				onClick={(e) => {
					e.preventDefault()
					router.push(`/${currentLanguage}/${href}`)
				}}
			>
				{t(href)}
				<ChevronDownIcon />
			</MenuButton>
			<MenuList onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="border-none py-4 !rounded-2xl">
				{content}
			</MenuList>
		</Menu>
	)
}

export default HeaderMenuSubMenu
