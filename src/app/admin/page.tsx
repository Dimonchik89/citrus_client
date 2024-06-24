import React from "react"

import { NextPage } from "next"
import dynamic from "next/dynamic"

const AdminApp = dynamic(() => import("../../components/AdminApp/AdminApp"), {
	ssr: false,
})

const page: NextPage = () => {
	return <AdminApp />
}

export default page
