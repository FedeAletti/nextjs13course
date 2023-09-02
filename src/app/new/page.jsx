"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const NewPage = ({ params }) => {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`).then(res => {
        res.json().then(data => {
          setTitle(data.title)
          setDescription(data.description)
        })
      })
    }
  }, [params.id])


  const handleSubmit = async (e) => {
    e.preventDefault()

    const newTask = {
      title,
      description
    }

    if (params.id) {
      await fetch(`/api/tasks/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify(newTask),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } else {
      await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    router.refresh()
    router.push("/")
  }


  const deleteTask = async () => {
    await fetch(`/api/tasks/${params.id}`, { method: 'DELETE' })
    router.refresh()
    router.push("/")
  }

  return (
    <div className='h-screen flex items-center justify-center '>
      <form className="bg-slate-800 p-10 lg:w-1/1 md:w-1/2 " onSubmit={handleSubmit} >
        <label htmlFor="title" className='font-bold text-sm'>Título de la tarea</label>
        <input
          type="text"
          id='title'
          className='border border-r-gray-400 p-2 mb-4 w-full text-black'
          placeholder='Titulo'
          onChange={e => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="description" className='font-bold text-sm'>Descripción de la tarea</label>
        <textarea
          id='description'
          className='border border-r-gray-400 p-2 mb-4 w-full text-black'
          rows="3"
          placeholder='Describe tu tarea'
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
        <div className="flex justify-between">
          <button className='bg-blue-500 hover:bg-blue700 text-white font-bold py-2 px-4 rounded' type="submit">Crear</button>

          {params.id && (
            <button className='bg-red-500 hover:bg-red700 text-white font-bold py-2 px-4 rounded' type="button" onClick={deleteTask}>Eliminar</button>
          )}
        </div>
      </form>
    </div>
  )
}

export default NewPage