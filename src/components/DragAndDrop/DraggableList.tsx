"use client"

import React from "react"

// Вызывала конйликт, не давала устанавливать redux
import DraggableField from "./DraggableField"
import { ITodo } from "@/interfaces/interfaces"
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd"

interface IDraggableListProps {
	list: ITodo[]
	onDragEnd: ({ destination, source }: DropResult) => void
	dragListStyle: {
		background: string
		borderRadius: string
	}
	dragItemStyle: {
		background: string
		borderRadius: string
	}
}

const DraggableList = ({ list, onDragEnd, dragListStyle, ...props }: IDraggableListProps) => {
	console.log("props", props)

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="droppable">
				{(provided, snapshot) => (
					<ul
						ref={provided.innerRef}
						{...provided.droppableProps}
						style={{
							...(snapshot.isDraggingOver ? dragListStyle : {}),
						}}
					>
						{list?.map((item, index) => <DraggableField key={item.id} index={index} item={item} {...props} />)}
						{provided.placeholder}
					</ul>
				)}
			</Droppable>
		</DragDropContext>
	)
}

export default DraggableList
