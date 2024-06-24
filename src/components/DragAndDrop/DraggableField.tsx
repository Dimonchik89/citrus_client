"use client"

import React, { PropsWithChildren } from "react"

import { ITodo } from "@/interfaces/interfaces"
import { Draggable } from "@hello-pangea/dnd"

// Вызывала конйликт, не давала устанавливать redux

interface IDraggableFieldProps extends PropsWithChildren {
	item: ITodo
	index: number
	dragItemStyle: {
		background: string
		borderRadius: string
	}
}

const DraggableField = ({ item, index, dragItemStyle }: IDraggableFieldProps) => {
	return (
		<Draggable index={index} draggableId={item.id}>
			{(provided, snapshot) => (
				<div
					className="card"
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					style={{
						padding: "8px 16px",
						...provided.draggableProps.style,
						...(snapshot.isDragging ? dragItemStyle : {}),
					}}
				>
					{item.title}
				</div>
			)}
		</Draggable>
	)
}

export default DraggableField
