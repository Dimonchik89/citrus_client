"use client"

import React from "react"

import { useTranslations } from "next-intl"

import ModalLocationItem from "./ModalLocatioItem"
import { modalLocationLinks } from "@/links/modalLocationLinks"
import { closeLocationModal, isLocationModalOpen } from "@/store/modalSlcie"
import { AppDispatch } from "@/store/store"
import { List, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { bindActionCreators } from "@reduxjs/toolkit"
import { ConnectedProps, connect } from "react-redux"
import { createStructuredSelector } from "reselect"

interface ModalLocationProps extends PropsFromRedux {}

const ModalLocation: React.FC<ModalLocationProps> = ({ isLocationModalOpen, closeLocationModal }) => {
	const t = useTranslations("LocationModal")
	const onClose = () => {
		closeLocationModal()
	}

	const content = modalLocationLinks.map(({ isShop, title }) => <ModalLocationItem key={title} title={title} isShop={isShop} />)

	return (
		<Modal isOpen={isLocationModalOpen} onClose={onClose} size={"customSize"}>
			<ModalOverlay className="body__blur" />
			<ModalContent className="bg__modal">
				<ModalHeader className="!text-xl md:!text-2xl lg:!text-3xl !font-normal">{t("title")}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<List className="!grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">{content}</List>
				</ModalBody>

				<ModalFooter className="flex flex-col gap-3 !items-start">
					<Text as="p" className="text-lg md:text-xl">
						Немає вашого міста? Вкажіть своє:
					</Text>
					<input className="focus:outline-orange w-full px-4 py-2 md:py-3 rounded-full" placeholder={t("placeholder")} />
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	closeLocationModal: bindActionCreators(closeLocationModal, dispatch),
})

const mapStateToProps = createStructuredSelector({
	isLocationModalOpen,
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(ModalLocation)
