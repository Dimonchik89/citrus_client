import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ModalState {
	isLocationModalOpen: boolean
	locationCurrentCity: string,
	isModalSignInOpen: boolean
}

const initialState: ModalState = {
	isLocationModalOpen: false,
	locationCurrentCity: "",
	isModalSignInOpen: false
}

const modalSlice = createSlice({
	name: "modalSlice",
	initialState,
	reducers: {
		openLocationModal: (state) => {
			state.isLocationModalOpen = true
		},
		closeLocationModal: (state) => {
			state.isLocationModalOpen = false
		},
		changeLocationCurrentCity: (state, action: PayloadAction<string>) => {
			state.locationCurrentCity = action.payload
		},
		openModalSignIn: (state) => {
			state.isModalSignInOpen = true
		},
		closeModalSignIn: (state) => {
			state.isModalSignInOpen = false;
		}
	},
})

const { actions, reducer } = modalSlice
export const { openLocationModal, closeLocationModal, changeLocationCurrentCity, openModalSignIn, closeModalSignIn } = actions
export default reducer
