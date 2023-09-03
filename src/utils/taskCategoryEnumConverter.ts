import { TaskCategory } from '../types/mockedTypes'

export const taskCategoryEnumConverter = (taskCategoryText: string) => {
    switch (taskCategoryText) {
        case 'Hard Time':
            return TaskCategory['HT']
        case 'Last Done Next Do':
            return TaskCategory['LDND']
        case 'Life Limited Part':
            return TaskCategory['LLP']
        case 'On Condition Monitoring Component':
            return TaskCategory['OCMC']
        case 'Line Replaceable Unit':
            return TaskCategory['LRU']
        case 'Service Bulletin':
            return TaskCategory['SB']
        case 'Airworthiness Directive':
            return TaskCategory['AD']
        default:
            return TaskCategory['Unknown']
    }
}
