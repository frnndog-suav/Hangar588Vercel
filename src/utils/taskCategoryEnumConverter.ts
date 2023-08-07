import { TaskCategory } from '../types/mockedTypes'

export const taskCategoryEnumConverter = (taskCategoryText: string) => {
    switch (taskCategoryText) {
        case 'Componentes':
            return TaskCategory['Components']
        case 'Tarefas':
            return TaskCategory['Task']
        case 'Boletim AD':
            return TaskCategory['ReportAD']
        case 'Boletim AD do motor':
            return TaskCategory['EngineReportAD']
        case 'Componente do motor':
            return TaskCategory['EngineComponents']
        case 'Estoque virtual':
            return TaskCategory['VirtualStorage']
        case 'Motor':
            return TaskCategory['Engine']
        default:
            return TaskCategory['Unknown']
    }
}
