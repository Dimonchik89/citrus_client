export const formatPhone = (event: React.ChangeEvent<HTMLInputElement>): string => {
	const inputNumber = event.target.value.replace(/\D/g, "") // Удаляем все нечисловые символы
	let formattedNumber = ""

	if (inputNumber.length <= 2) {
		formattedNumber = inputNumber
	} else if (inputNumber.length <= 5) {
		formattedNumber = `${inputNumber.slice(0, 2)} ${inputNumber.slice(2)}`
	} else if (inputNumber.length <= 8) {
		formattedNumber = `${inputNumber.slice(0, 2)} ${inputNumber.slice(2, 5)} ${inputNumber.slice(5)}`
	} else {
		formattedNumber = `${inputNumber.slice(0, 2)} ${inputNumber.slice(2, 5)} ${inputNumber.slice(5, 7)} ${inputNumber.slice(7, 9)}`
	}

	return formattedNumber
}
