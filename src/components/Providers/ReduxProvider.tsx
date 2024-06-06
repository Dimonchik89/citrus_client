"use client"
import React, { PropsWithChildren, useRef } from "react"
import { Provider } from "react-redux"
import store from "../../store/store"

interface ReduxProviderProps extends PropsWithChildren {}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
