import { TaskCard } from "@/components/TaskCard"
import { prisma } from "@/libs/prisma"

async function loadTasks() {
  let tasks = await prisma.task.findMany()
  return tasks
}

export default async function Home() {
  const tasks = await loadTasks()

  return (
    <main className="container mx-auto">
      <section className="grid grid-cols-3 gap-5 mt-10">
        {tasks === [] ?
          <h3 className="text-3xl font-bold">No hay tareas</h3>
          :
          tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))
        }
      </section>
    </main>
  )
}
