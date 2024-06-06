import React, { PropsWithChildren } from "react"
import Header from "../Header/Header"

interface WrapperWithHeaderProps extends PropsWithChildren {}

const WrapperWithHeader: React.FC<WrapperWithHeaderProps> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default WrapperWithHeader
