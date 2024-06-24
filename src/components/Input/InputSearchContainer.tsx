"use client"

import { useRef, useState } from "react"

import ModalInputSearch from "../Modal/ModalInputSearch/ModalInputSearch"
import useVoiceSearch from "@/hooks/useVoiceSearch"
import { Box, Text, useDisclosure } from "@chakra-ui/react"
import { ReactSVG } from "react-svg"

const InputSearchContainer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [modalStyle, setModalStyle] = useState({})
	const containerRef = useRef<HTMLDivElement>(null)
	const { handleStartVoice } = useVoiceSearch()

	const handleOpen = () => {
		if (containerRef.current) {
			setModalStyle({
				position: "absolute",
				top: `${containerRef.current.offsetTop - 6}px`,
				left: `${containerRef.current.offsetLeft}px`,
				width: `${containerRef.current.clientWidth}px`,
				maxWidth: `${containerRef.current.clientWidth}px`,
				height: `${containerRef.current.clientHeight + 12}px`,
				zIndex: 10,
				margin: "0px",
				borderRadius: "15px",
			})
			onOpen()
		}
	}

	return (
		<Box
			ref={containerRef}
			className="flex-auto rounded-full px-3 py-1 lg:py-2 bg-[#eceeef] xl:bg-white flex items-center justify-between my-1 lg:my-0"
		>
			<Text className="text-sm xl:text-base" onClick={handleOpen}>
				Пошук
			</Text>
			<input type="text" className="flex-auto outline-none bg-[#eceeef] xl:bg-white pl-3 w-full max-w-full" onClick={handleOpen} />
			<Box className="flex gap-4">
				<ReactSVG src="/icons/micro.svg" className="icon cursor-pointer" onClick={handleStartVoice} />
				<ReactSVG src="/icons/search.svg" className="icon cursor-pointer" />
			</Box>

			<ModalInputSearch isOpen={isOpen} onClose={onClose} modalStyle={modalStyle} />
		</Box>
	)
}

export default InputSearchContainer
