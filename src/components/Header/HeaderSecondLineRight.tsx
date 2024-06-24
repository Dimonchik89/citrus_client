"use client"

import { useTranslations } from "next-intl"

import { openModalSignIn } from "@/store/modalSlcie"
import { AppDispatch } from "@/store/store"
import { Box, Button } from "@chakra-ui/react"
import { bindActionCreators } from "@reduxjs/toolkit"
import { ConnectedProps, connect } from "react-redux"
import { ReactSVG } from "react-svg"

interface HeaderSecondLineRightProps extends PropsFromRedux {}

const HeaderSecondLineRight: React.FC<HeaderSecondLineRightProps> = ({ openModalSignIn }) => {
	const t = useTranslations("login")

	const handleOpen = () => {
		openModalSignIn()
	}

	return (
		<Box className="hidden lg:flex items-center gap-5">
			<Box className="flex gap-2 items-center">
				<Box className="button__header__wrapper">
					<ReactSVG className="icon" src="/icons/user.svg" />
				</Box>
				<Box>
					<Button
						onClick={handleOpen}
						variant="link"
						className="!text-sm capitalize !text-blackText underline decoration-dotted !font-light"
					>
						{t("comeIn")}
					</Button>
				</Box>
				<Box className="button__header__wrapper">
					<ReactSVG className="icon" src="/icons/scales.svg" />
				</Box>
				<Box className="button__header__wrapper">
					<ReactSVG className="icon" src="/icons/heart.svg" />
				</Box>
				<Box className="button__header__wrapper">
					<ReactSVG className="icon" src="/icons/cart.svg" />
				</Box>
			</Box>
		</Box>
	)
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	openModalSignIn: bindActionCreators(openModalSignIn, dispatch),
})

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HeaderSecondLineRight)
