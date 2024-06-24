import { useTranslations } from "next-intl"

import { LOCAL_STORAGE_KEYS } from "@/constants"
import { changeLocationCurrentCity, closeLocationModal, locationCurrentCity } from "@/store/modalSlcie"
import { AppDispatch } from "@/store/store"
import { ListItem, Text } from "@chakra-ui/react"
import { bindActionCreators } from "@reduxjs/toolkit"
import { ConnectedProps, connect } from "react-redux"
import { ReactSVG } from "react-svg"
import { createStructuredSelector } from "reselect"

interface ModalLocationItemProps extends PropsFromRedux {
	title: string
	isShop: boolean
}

const ModalLocationItem: React.FC<ModalLocationItemProps> = ({
	title,
	isShop,
	changeLocationCurrentCity,
	locationCurrentCity,
	closeLocationModal,
}) => {
	const t = useTranslations("LocationModal")

	const handleChangeCity = () => {
		localStorage.setItem(LOCAL_STORAGE_KEYS.CITY, title)
		changeLocationCurrentCity(title)
		closeLocationModal()
	}

	const currentIcon =
		locationCurrentCity === title ? (
			<ReactSVG className="fill-orange w-6 h-6 md:w-7 md:h-7" src="/icons/checked.svg" title="car" />
		) : (
			<ReactSVG
				className="fill-icons w-6 h-6 md:w-7 md:h-7"
				src={isShop ? "/icons/compact-logo.svg" : "/icons/car.svg"}
				title="car"
			/>
		)

	return (
		<ListItem className="flex gap-2 md:gap-3 item-center">
			{currentIcon}
			<Text
				as="p"
				className={`text-sm md:text-base ${locationCurrentCity === title ? "text-orange " : "text-blackText"} cursor-pointer hover:text-orange capitalize leading-8`}
				onClick={handleChangeCity}
			>
				{t(title)}
			</Text>
		</ListItem>
	)
}

const mapStateToProps = createStructuredSelector({
	locationCurrentCity,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	changeLocationCurrentCity: bindActionCreators(changeLocationCurrentCity, dispatch),
	closeLocationModal: bindActionCreators(closeLocationModal, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(ModalLocationItem)
