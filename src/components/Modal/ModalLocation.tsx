"use client"
import {
	Box,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react"
import React, { useState } from "react"

const ModalLocation = () => {
	const [isOpen, setIsOpen] = useState(true)

	const onClose = () => {
		setIsOpen(false)
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Box as="p">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Praesentium provident atque sequi sapiente quas adipisci
						dicta dolorem laboriosam maiores soluta officia
						voluptatum possimus velit, labore nam hic nesciunt,
						porro ipsam.
					</Box>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
					<Button variant="ghost">Secondary Action</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default ModalLocation
