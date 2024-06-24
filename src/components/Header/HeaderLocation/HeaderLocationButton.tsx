"use client"

import React, { useEffect } from "react"

import { useTranslations } from "next-intl"
import Image from "next/image"

import { LOCAL_STORAGE_KEYS } from "@/constants"
import { changeLocationCurrentCity, locationCurrentCity, openLocationModal } from "@/store/modalSlcie"
import { AppDispatch } from "@/store/store"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Text } from "@chakra-ui/react"
import { bindActionCreators } from "@reduxjs/toolkit"
import { ConnectedProps, connect } from "react-redux"
import { createStructuredSelector } from "reselect"

interface HeaderLocationButtonProps extends PropsFromRedux {}

const HeaderLocationButton: React.FC<HeaderLocationButtonProps> = ({
	openLocationModal,
	locationCurrentCity,
	changeLocationCurrentCity,
}) => {
	const t = useTranslations("LocationModal")
	const handleModalOpen = () => {
		openLocationModal()
	}

	useEffect(() => {
		try {
			changeLocationCurrentCity(localStorage.getItem(LOCAL_STORAGE_KEYS.CITY) || "kyiv")
		} catch (err) {
			console.log(err)
		}
	}, [])

	return (
		<Button variant="link" onClick={handleModalOpen}>
			<Image
				src="/icons/location.svg"
				alt="location"
				width="25"
				height="25"
				className="mr-1 lg:h-[20px] lg:w-[20px] xl:h-[25px] xl:w-[25px]"
			/>
			<Text as="p" className="header__link">
				{locationCurrentCity ? t(locationCurrentCity) : ""}
			</Text>

			<ChevronDownIcon />
		</Button>
	)
}

const mapStateToProps = createStructuredSelector({
	locationCurrentCity,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	openLocationModal: bindActionCreators(openLocationModal, dispatch),
	changeLocationCurrentCity: bindActionCreators(changeLocationCurrentCity, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HeaderLocationButton)
