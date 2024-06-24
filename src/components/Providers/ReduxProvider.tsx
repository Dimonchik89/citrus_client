"use client"

import React, { PropsWithChildren, useRef } from "react"

import store from "../../store/store"
import { Provider } from "react-redux"

interface ReduxProviderProps extends PropsWithChildren {}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
