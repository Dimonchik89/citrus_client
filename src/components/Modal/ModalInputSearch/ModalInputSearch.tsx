import React from "react"

import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react"

interface ModalInputSearchProps {
	isOpen: boolean
	onClose: () => void
	modalStyle: Object
}

const ModalInputSearch: React.FC<ModalInputSearchProps> = ({ isOpen, onClose, modalStyle }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay backgroundColor="transparent" />
			<ModalContent {...modalStyle}>
				<ModalBody>This is a modal content</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default ModalInputSearch
