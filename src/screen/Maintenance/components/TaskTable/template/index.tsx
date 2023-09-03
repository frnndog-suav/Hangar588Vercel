import { TaskTemporary } from '@/src/types/mockedTypes'
import { css } from '@stitches/react'
import { TaskTableRow } from './TaskTableRow'

const taskMapTableContainer = css({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 36,
    gap: 16,
    marginTop: 20,
    overflowY: 'scroll',
    height: '50vh'
})

type TemplateTaskTableProps = {
    tasks: TaskTemporary[]
}

export const TemplateTaskTable = ({ tasks }: TemplateTaskTableProps) => {
    return (
        <div className={taskMapTableContainer()}>
            {tasks.map((task) => (
                <TaskTableRow key={task.id} task={task} />
            ))}
        </div>
    )
}
