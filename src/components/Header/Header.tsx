import HeaderFirstLine from "./HeaderFirstLine"
import HeaderPromo from "./HeaderPromo"
import HeaderSecondLine from "./HeaderSecondLine"
import { Box } from "@chakra-ui/react"

const Header = () => {
	return (
		<Box>
			<HeaderPromo />
			<HeaderFirstLine />
			<HeaderSecondLine />
		</Box>
	)
}

export default Header
