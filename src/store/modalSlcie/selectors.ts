import { RootState } from "../store"
import { createSelector } from "@reduxjs/toolkit"

const baseState = (state: RootState) => state.modalReducer

const isLocationModalOpen = createSelector(baseState, (state) => state.isLocationModalOpen)
const locationCurrentCity = createSelector(baseState, (state) => state.locationCurrentCity)
const isModalSignInOpen = createSelector(baseState, (state) => state.isModalSignInOpen)

export { isLocationModalOpen, locationCurrentCity, isModalSignInOpen }
