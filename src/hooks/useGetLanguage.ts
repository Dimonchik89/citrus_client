import { usePathname } from "next/navigation"

const useGetLanguage = () => {
    const pathname = usePathname()
    const currentLanguage = pathname.split("/")[1]

    return { currentLanguage }
}
export default useGetLanguage;