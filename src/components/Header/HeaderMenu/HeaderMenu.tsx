import HeaderLocationButton from "../HeaderLocation/HeaderLocationButton"
import HeaderMenuItem from "./HeaderMenuItem"
import { headerMenuLinks } from "@/links/headerMenuLinks"
import { Box } from "@chakra-ui/react"

const HeaderMenu = () => {
	const content = headerMenuLinks.map(({ href, subMenu = [] }) => <HeaderMenuItem key={href} href={href} subMenu={subMenu} />)

	return (
		<Box as="ul" className="flex items-center justify-around ">
			<HeaderLocationButton />
			{content}
		</Box>
	)
}

export default HeaderMenu
