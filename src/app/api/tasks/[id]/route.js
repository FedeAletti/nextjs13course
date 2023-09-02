import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
	const task = await prisma.task.findUnique({
		where: {
			id: parseInt(params.id),
		},
	})
	return NextResponse.json(task)
}

export async function PUT(request, { params }) {
	try {
		const data = await request.json()

		const updatedTask = await prisma.task.update({
			where: {
				id: parseInt(params.id),
			},
			data:data
		})

		return NextResponse.json(updatedTask)
	} catch (error) {
		return NextResponse.json(error)
	}
}

export async function DELETE(request, { params }) {
	try {
		const { title } = await prisma.task.delete({
			where: {
				id: parseInt(params.id),
			},
		})

		return NextResponse.json("Borrando Tarea:" + title)
	} catch (error) {
		return NextResponse.json(error)
	}
}
