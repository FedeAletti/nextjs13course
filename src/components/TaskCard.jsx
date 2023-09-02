"use client"
import { useRouter } from "next/navigation"

export const TaskCard = ({ task }) => {
    const router = useRouter()

    return (
        <div className="flex flex-col justify-between bg-slate-900 p-3 rounded hover:bg-slate-800 hover: cursor-pointer"
            onClick={() => router.push(`/task/edit/${task.id}`)}
        >
            <div>
                <h3 className="text-2xl font-bold mb-2">{task.title}</h3>
                <p className="text-lg">{task.description}</p>
            </div>
            <p className="self-end text-sm">{new Date(task.createdAt).toLocaleString()}</p>
        </div>
    )
}
