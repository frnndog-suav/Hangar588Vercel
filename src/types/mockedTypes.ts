export type Info = {
    name: string
    certification: string
    avatarImage: string
    avatarFallBackText: string
    jobFunction: string
    company: string
    aircraftsAmount: number
}

export enum TaskCategory {
    Unknown = 0,
    Components = 1,
    Task = 2,
    ReportAD = 3,
    EngineReportAD = 4,
    EngineComponents = 5,
    VirtualStorage = 6,
    Engine = 7
}

export type TaskTemporary = {
    category: TaskCategory
    id: string
    taskName: string
    staleTimeDate: string
    availableHours: string
}

export enum ServiceOrderStatus {
    All = 0,
    Open = 1,
    Closed = 2
}

export type ServiceOrderTemporary = {
    id: string
    name: string
    status: ServiceOrderStatus
}
