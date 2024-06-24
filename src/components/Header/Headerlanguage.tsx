"use client"

import React from "react"

import { usePathname, useRouter } from "next/navigation"

import useGetLanguage from "@/hooks/useGetLanguage"
import { Box } from "@chakra-ui/react"

const Headerlanguage = () => {
	const { currentLanguage } = useGetLanguage()
	const router = useRouter()
	const pathname = usePathname()

	const changeLanguage = (locale: string) => {
		const pathSegments = pathname.split("/").filter(Boolean)
		pathSegments[0] = locale
		const newPath = `/${pathSegments.join("/")}`

		router.push(newPath)
	}

	return (
		<Box className="flex gap-4">
			{/* <Link
				href={{ pathname: `ua` }}
				className={`uppercase lg:text-xs xl:text-base ${
					currentLanguage !== "ua"
						? "text-link underline decoration-dotted"
						: ""
				}`}
				locale="ua"
			>
				укр
			</Link>
			<Link
				href={{ pathname: `ru` }}
				className={`uppercase lg:text-xs xl:text-base ${
					currentLanguage !== "ru"
						? "text-link underline decoration-dotted"
						: ""
				}`}
				locale="ru"
			>
				рус
			</Link> */}
			<Box
				onClick={() => changeLanguage("ua")}
				className={`uppercase header__link cursor-pointer ${
					currentLanguage !== "ua" ? "text-link underline decoration-dotted" : ""
				}`}
			>
				укр
			</Box>
			<Box
				onClick={() => changeLanguage("ru")}
				className={`uppercase header__link cursor-pointer ${
					currentLanguage !== "ru" ? "text-link underline decoration-dotted" : ""
				}`}
			>
				рус
			</Box>
		</Box>
	)
}

export default Headerlanguage
