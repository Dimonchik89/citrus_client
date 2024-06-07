"use client"
import { Box } from "@chakra-ui/react"
import Link from "next/link"
import React, { useEffect } from "react"
import { usePathname, useParams, useRouter } from "next/navigation"

const Headerlanguage = () => {
	const pathname = usePathname()
	const params = useParams()
	const router = useRouter()

	return (
		<Box className="flex gap-4">
			<Link
				href={{ pathname: `ua` }}
				className="uppercase lg:text-xs xl:text-base"
				locale="ua"
			>
				укр
			</Link>
			<Link
				href={{ pathname: `ru` }}
				className="uppercase lg:text-xs xl:text-base"
				locale="ru"
			>
				рус
			</Link>
		</Box>
	)
}

export default Headerlanguage
