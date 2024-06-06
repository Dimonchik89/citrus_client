"use client"
import { Button, Text } from "@chakra-ui/react"
import { Field, Form, Formik } from "formik"
import React from "react"
import HeaderPhoneWindowSuccess from "./HeaderPhoneWindowSuccess"
import { formatPhone } from "@/services/formatPhone"

interface HeaderPhoneWindowFormProps {
	postPhone: ({ phone }: { phone: string }) => void
	showPhoneSended: boolean
}

const HeaderPhoneWindowForm: React.FC<HeaderPhoneWindowFormProps> = ({
	postPhone,
	showPhoneSended,
}) => {
	return (
		<div className="mt-6">
			<Formik
				initialValues={{ phone: "" }}
				validate={(values) => {
					const errors: { phone?: string } = {}
					if (!values.phone) {
						errors.phone = "Required"
					} else if (values.phone.length < 11) {
						errors.phone = "Введіть коректний номер телефону"
					}
					return errors
				}}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					postPhone(values)
					// setTimeout(() => {
					// 	alert(JSON.stringify(values, null, 2))
					// 	setSubmitting(false)
					// }, 400)
					setSubmitting(false)
					resetForm()
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					isValid,
				}) => {
					const handleKeyDown = (
						event: React.KeyboardEvent<HTMLInputElement>
					) => {
						if (event.key === "e" || event.key === "E") {
							event.preventDefault()
						}
					}

					const customHandleChange = (
						event: React.ChangeEvent<HTMLInputElement>
					) => {
						handleChange({
							target: {
								name: "phone",
								value: formatPhone(event),
							},
						})
					}

					return showPhoneSended ? (
						<HeaderPhoneWindowSuccess />
					) : (
						<>
							<h1>Передзвонити мені</h1>
							<form onSubmit={handleSubmit}>
								<div className="border-2 border-gray rounded-3xl h-12 px-4 my-3 outline-none flex items-center">
									<span className="text-xl">+380</span>

									<input
										type="tel"
										name="phone"
										onChange={customHandleChange}
										onBlur={handleBlur}
										value={values.phone}
										onKeyDown={handleKeyDown}
										className="outline-none flex-[0_0_70%] w-10 pl-2 text-xl"
										autoComplete="off"
										maxLength={11}
									/>
								</div>

								<Text className="text-error text-sm my-2">
									{errors.phone &&
										touched.phone &&
										errors.phone}
								</Text>

								<Button
									variant={"lagre_orange"}
									className={`${
										values.phone.length < 11
											? "opacity-30"
											: "opacity-100 "
									}`}
									disabled={isSubmitting}
									type="submit"
								>
									Чекаю дзвінка
								</Button>
								{/* При отправке формы сделать отправку номера на сервер и показывать другое сообщение, ждите вам перезвонят */}
							</form>
						</>
					)
				}}
			</Formik>
		</div>
	)
}

export default HeaderPhoneWindowForm
