import { useParams } from "react-router-dom"

function TaskDetailPage(props){

    const params = useParams()

    const foundTask = props.taskList.find((eachTask) => {
        return eachTask.id === params.taskId
    })

    

    console.log(foundTask)

    return(
        <h1>{foundTask.title}</h1>
    )
}

export default TaskDetailPage