"use client"

import React, { useEffect, useState } from "react"

import DraggableList from "../DragAndDrop/DraggableList"
import { ITodo } from "@/interfaces/interfaces"
import { DropResult } from "@hello-pangea/dnd"
import jsonServerProvider from "ra-data-json-server"
import { Admin, EditGuesser, List, ListGuesser, Resource, useGetList } from "react-admin"

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com")

const todoList: ITodo[] = [
	{ id: "11", title: "Hello", order: 1 },
	{ id: "12", title: "World", order: 2 },
	{ id: "13", title: "Petya", order: 3 },
	{ id: "14", title: "Lorem", order: 4 },
	{ id: "15", title: "Ipsum", order: 5 },
]

const reorder = (list: ITodo[], startIndex: number, endIndex: number) => {
	const result = Array.from(list)

	const [removed] = result.splice(startIndex, 1)
	result.splice(endIndex, 0, removed)

	console.log("startIndex", startIndex)
	console.log("endIndex", endIndex)
	return result
}

const AdminApp = () => {
	const [list, setList] = useState(todoList)

	const handleDragEnd = ({ destination, source }: DropResult) => {
		if (!destination) return

		setList(reorder(list, source.index, destination.index))
	}

	return (
		// <DraggableList
		// 	list={list}
		// 	onDragEnd={handleDragEnd}
		// 	dragItemStyle={{
		// 		background: "pink",
		// 		borderRadius: "16px",
		// 	}}
		// 	dragListStyle={{
		// 		background: "lightblue",
		// 		borderRadius: "16px",
		// 	}}
		// />
		<Admin dataProvider={dataProvider}>
			<Resource name="todos" list={ListGuesser} edit={EditGuesser} recordRepresentation="todos" />
		</Admin>
	)
}

export default AdminApp
