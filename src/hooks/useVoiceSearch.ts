import { useRouter } from "next/navigation"
import useGetLanguage from "./useGetLanguage"

const useVoiceSearch = () => {
    const router = useRouter()
    const { currentLanguage } = useGetLanguage()

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.interimResults = true

    recognition.onresult = function (event: any) {
        const results = event.results[event.resultIndex]
        if (results.isFinal) {
            console.log("Вы сказали", results[0].transcript)
            const searchParams = new URLSearchParams({ query: results[0].transcript.toLowerCase() })
            console.log("searchParams", searchParams.toString());
            router.push(`${currentLanguage}?${searchParams}`)
        }
    }

    const handleStartVoice = () => {
        recognition.start()
    }

    return { handleStartVoice }
}

export default useVoiceSearch;