"use client"

import React from "react"

import { closeModalSignIn, isModalSignInOpen } from "../../../store/modalSlcie"
import { AppDispatch } from "@/store/store"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { bindActionCreators } from "@reduxjs/toolkit"
import { ConnectedProps, connect } from "react-redux"
import { createStructuredSelector } from "reselect"

interface ModalSignInProps extends PropsFromRedux {}

const ModalSignIn: React.FC<ModalSignInProps> = ({ closeModalSignIn, isModalSignInOpen }) => {
	return (
		<Modal isOpen={isModalSignInOpen} onClose={closeModalSignIn}>
			<ModalOverlay className="body__blur" />
			<ModalContent className="bg__modal">
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<h2>lalala</h2>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={() => closeModalSignIn()}>
						Close
					</Button>
					<Button variant="ghost">Secondary Action</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

const mapStateToProps = createStructuredSelector({
	isModalSignInOpen,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	closeModalSignIn: bindActionCreators(closeModalSignIn, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(ModalSignIn)
