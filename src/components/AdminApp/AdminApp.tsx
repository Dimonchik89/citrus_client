"use client"
import { ITodo } from "@/interfaces/interfaces"
import React, { useEffect, useState } from "react"
import { DropResult } from "@hello-pangea/dnd"

import {
	Admin,
	Resource,
	ListGuesser,
	EditGuesser,
	List,
	useGetList,
} from "react-admin"
import jsonServerProvider from "ra-data-json-server"
import DraggableList from "../DragAndDrop/DraggableList"

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

// const AdminList = () => {
// 	const { data } = useGetList("todos")

// 	const [list, setList] = useState(
// 		data?.map((item) => ({ ...item, id: `${item.id}` })) || []
// 	)

// 	useEffect(() => {
// 		console.log("list", list)
// 	}, [list])

// 	const handleDragEnd = ({ destination, source }: DropResult) => {
// 		if (!destination) return

// 		setList(reorder(list, source.index, destination.index))
// 	}

// 	return (
// 		<List>
// 			<DraggableList
// 				list={list}
// 				onDragEnd={handleDragEnd}
// 				dragItemStyle={{
// 					background: "pink",
// 					borderRadius: "16px",
// 				}}
// 				dragListStyle={{
// 					background: "lightblue",
// 					borderRadius: "16px",
// 				}}
// 			/>
// 		</List>
// 	)
// }

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
			<Resource
				name="todos"
				list={ListGuesser}
				edit={EditGuesser}
				recordRepresentation="todos"
			/>
		</Admin>
	)
}

export default AdminApp
