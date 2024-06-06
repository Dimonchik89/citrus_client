import { Box } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"

const HeaderPromo = () => {
	return (
		<Box
			bg="promoYellow"
			className="w-full h-[30px] flex justify-center items-center Header-promo bg-promoYellow"
		>
			<Box className="relative w-full h-full max-h-full">
				<picture>
					<source
						srcSet="/images/promo-sm.avif"
						media="(max-width: 768px)"
					/>
					<Image
						src={"/images/promo.avif"}
						alt="promo"
						layout="fill"
						className="w-full h-full object-contain"
					/>
				</picture>
			</Box>
		</Box>
	)
}

export default HeaderPromo
