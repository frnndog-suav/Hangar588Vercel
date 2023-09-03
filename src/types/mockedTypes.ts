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
    HT = 1,
    LDND = 2,
    LLP = 3,
    OCMC = 4,
    LRU = 5,
    SB = 6,
    AD = 7
}

export type TaskTemporary = {
    category?: TaskCategory
    id?: string
    taskName?: string
    staleTimeDate?: string
    availableHours?: string



    aircraftType?: string
    revision?: string
    revisionDate?: string
    issueDate?: string
    ataChapter?: string
    chapterSectionSubject?: string
    ataTitle?: string
    language?: string
    taskTitle?: string
    mod?: string
    climaticCondition?: string
    description?: string
    mpn?: string
    pn?: string
    maintenanceMode?: string
    frequency?: string
    eventType?: string
    fhHums?: string
    fhSamplingThreshold?: string
    fhLimit?: string
    fhUnit?: string
    fhProvisionnal?: string
    fhFs?: string
    fhMargin?: string
    fhMarginUnit?: string
    calendarHums?: string
    calendarSamplingThreshold?: string
    calendarLimit?: string
    calendarUnit?: string
    calendarProvisionnal?: string
    calendarFs?: string
    calendarMargin?: string
    calendarMarginUnit?: string
    cycleHums?: string
    cycleSamplingThreshold?: string
    cycleLimit?: string
    cycleUnit?: string
    cycleProvisionnal?: string
    cycleFs?: string
    cycleMargin?: string
    cycleMarginUnit?: string
    refManual?: string
    documentation?: string
    sourceDocument?: string
    zones?: string
    kFactor?: string
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
