import { TaskCategory, TaskTemporary } from '@/src/types/mockedTypes'

export const getMockedTasks = (taskCategory: TaskCategory) => {
    switch (taskCategory) {
        case TaskCategory.Components:
            return componentsTask
        case TaskCategory.Engine:
            return engineTask
        case TaskCategory.EngineComponents:
            return engineComponentsTask
        case TaskCategory.EngineReportAD:
            return engineReportADTask
        case TaskCategory.ReportAD:
            return reportADTask
        case TaskCategory.Task:
            return task
        case TaskCategory.VirtualStorage:
            return virtualStorageTask
        default:
            return []
    }
}

const componentsTask: TaskTemporary[] = [
    {
        id: '17c09b40-9869-4ff8-85a8-e562d9ee5a57',
        availableHours: '12',
        category: TaskCategory.Components,
        staleTimeDate: '15/09/2023',
        taskName: 'Trocar tinta colorida do fax'
    },
    {
        id: '9f13afb0-d616-4679-9eb3-a322bface170',
        availableHours: '43',
        category: TaskCategory.Components,
        staleTimeDate: '05/10/2015',
        taskName: 'Marreta de desentortar vidro'
    },
    {
        id: '28c1c0b7-90ce-4cea-9e2a-008f8aa30bd0',
        availableHours: '10',
        category: TaskCategory.Components,
        staleTimeDate: '13/12/2004',
        taskName: 'Desentupir fio'
    },
    {
        id: '7d8222be-7693-48cb-be97-712463288c84',
        availableHours: '10',
        category: TaskCategory.Components,
        staleTimeDate: '12/12/2021',
        taskName: 'We have to find a better way'
    },
    {
        id: '6e16cafc-2cf3-4227-adc3-d9d7f8b493f5',
        availableHours: '10',
        category: TaskCategory.Components,
        staleTimeDate: '17/01/2023',
        taskName: 'Out of this tragedy'
    },
    {
        id: '8b8de273-eba6-42d6-9e5b-00303afdadf2',
        availableHours: '10',
        category: TaskCategory.Components,
        staleTimeDate: '21/04/2023',
        taskName: 'As the battle rages on'
    },
    {
        id: '9e9eb654-56a0-4057-bd45-c09fec6acd79',
        availableHours: '10',
        category: TaskCategory.Components,
        staleTimeDate: '24/09/2021',
        taskName: 'Blood stains the ground we are on'
    },
    {
        id: '43fb4997-06eb-465d-920c-5cc8490f9704',
        availableHours: '10',
        category: TaskCategory.Components,
        staleTimeDate: '22/03/2023',
        taskName: 'My ears hear only screams'
    },
    {
        id: '21b2100c-23ca-45eb-8bb7-f910f4688d0c',
        availableHours: '10',
        category: TaskCategory.Components,
        staleTimeDate: '18/05/2022',
        taskName: 'Brave soldiers are dying'
    },
    {
        id: 'b280e0fd-ef2e-47d7-8807-c258940bcbf6',
        availableHours: '10',
        category: TaskCategory.Components,
        staleTimeDate: '02/08/2021',
        taskName: 'One spartan stands alone and shouts'
    },
    // {
    //     id: 'a1b2328c-986e-4bba-a31c-812d51e72f73',
    //     availableHours: '10',
    //     category: TaskCategory.Components,
    //     staleTimeDate: '25/02/2021',
    //     taskName: 'This war is ours.'
    // },
    // {
    //     id: 'fa65d015-a501-4030-a729-7afe3a064053',
    //     availableHours: '10',
    //     category: TaskCategory.Components,
    //     staleTimeDate: '06/11/2022',
    //     taskName: 'Yes, I will see you'
    // },
    // {
    //     id: 'f6531063-28c6-4cd5-9cf1-83ea66699901',
    //     availableHours: '10',
    //     category: TaskCategory.Components,
    //     staleTimeDate: '21/02/2023',
    //     taskName: 'Through the smoke and flames'
    // },
    // {
    //     id: '62cedd39-8cb6-4ab4-9f9f-5e7da4df83bd',
    //     availableHours: '10',
    //     category: TaskCategory.Components,
    //     staleTimeDate: '19/05/2023',
    //     taskName: 'On the front lines of war'
    // },
    // {
    //     id: '86638c80-3227-4687-be3f-bf100c88ae62',
    //     availableHours: '10',
    //     category: TaskCategory.Components,
    //     staleTimeDate: '03/03/2021',
    //     taskName: 'We have to find a better way'
    // },
    // {
    //     id: '7ce58a9f-ea31-4a88-b2c3-8e8b668fc69e',
    //     availableHours: '10',
    //     category: TaskCategory.Components,
    //     staleTimeDate: '17/04/2022',
    //     taskName: 'And I will stand my ground until the end'
    // },
    // {
    //     id: '5c89f5a4-8907-4dcc-9b31-3274c81fbf9e',
    //     availableHours: '10',
    //     category: TaskCategory.Components,
    //     staleTimeDate: '16/08/2022',
    //     taskName: 'Till we conquer them all'
    // },
    // {
    //     id: '5a7b9f0f-cb0a-4fce-8450-66036acc0941',
    //     availableHours: '10',
    //     category: TaskCategory.Components,
    //     staleTimeDate: '10/03/2021',
    //     taskName: 'We have to find a better way'
    // },
    // {
    //     id: 'c50469ea-1b79-4a0c-931e-1521ef07164a',
    //     availableHours: '10',
    //     category: TaskCategory.Components,
    //     staleTimeDate: '31/03/2021',
    //     taskName: 'Through the fire and the flames'
    // },
    // {
    //     id: '77229008-b947-467f-b8c8-5dc13a31b495',
    //     availableHours: '10',
    //     category: TaskCategory.Components,
    //     staleTimeDate: '12/04/2022',
    //     taskName: 'A sea of dead drives men insane'
    // },
]

const task: TaskTemporary[] = [
    {
        id: 'a4b5bba3-9e95-4714-b363-63f2db871beb',
        availableHours: '33',
        category: TaskCategory.Task,
        staleTimeDate: '26/12/1990',
        taskName: 'Comprar 3kg eletricidade-estática'
    },
    {
        id: '27f67237-3921-42f4-9953-939272d42936',
        availableHours: '27',
        category: TaskCategory.Task,
        staleTimeDate: '14/03/1977',
        taskName: 'Comprar caneca de canhoto'
    }
]

const reportADTask: TaskTemporary[] = [
    {
        id: 'd98e87e4-c94c-4bb4-a56c-82f709fe2895',
        availableHours: '41',
        category: TaskCategory.ReportAD,
        staleTimeDate: '17/02/1992',
        taskName: 'Lavar papel-carbono'
    },
    {
        id: 'bc1190db-4195-4b2d-a564-a87ec09280aa',
        availableHours: '41',
        category: TaskCategory.ReportAD,
        staleTimeDate: '21/11/2008',
        taskName: 'Procurar broca-dobradiça de 7mm para furos com ângulo reto'
    }
]

const engineReportADTask: TaskTemporary[] = [
    {
        id: '7851809f-0e48-4f8c-a5b3-8df64f8dd1b5',
        availableHours: '41',
        category: TaskCategory.EngineReportAD,
        staleTimeDate: '11/03/2010',
        taskName: 'Procurar broca-dobradiça de 7mm para furos com ângulo reto'
    },
    {
        id: 'c213c8dc-371f-4b12-8e99-aa6c4172b321',
        availableHours: '41',
        category: TaskCategory.EngineReportAD,
        staleTimeDate: '21/05/2014',
        taskName: 'Afiador de gelo'
    },
    {
        id: '1c8c6c48-058e-4c0e-ab17-82ea79f5df07',
        availableHours: '8',
        category: TaskCategory.EngineReportAD,
        staleTimeDate: '17/12/1984',
        taskName: 'Lubrificar hélices com óleo 512MB'
    },
    {
        id: 'faf57089-4f63-46ac-876a-fc50074710b3',
        availableHours: '14',
        category: TaskCategory.EngineReportAD,
        staleTimeDate: '29/08/2011',
        taskName: 'Buscar um fusível que não esteja em curto e testar'
    }
]

const engineComponentsTask: TaskTemporary[] = [
    {
        id: '112f2bb1-f9d9-4a12-8c5f-4b3e6128de8f',
        availableHours: '4',
        category: TaskCategory.EngineComponents,
        staleTimeDate: '12/08/2022',
        taskName: 'Calibrar o pneu do carro da empresa com 20% de oxigênio e 80% de nitrogênio'
    },
    {
        id: '3470aa27-06f0-4756-b7ab-1e9167756808',
        availableHours: '6',
        category: TaskCategory.EngineComponents,
        staleTimeDate: '26/04/2022',
        taskName: 'Comprar cabo wireless de 15 metros'
    }
]

const virtualStorageTask: TaskTemporary[] = [
    {
        id: '5bc54baa-7ae0-417d-a66d-61bfcca5e014',
        availableHours: '2',
        category: TaskCategory.VirtualStorage,
        staleTimeDate: '12/02/2023',
        taskName: 'Regular parafuso bico de papagaio'
    },
    {
        id: '82b2751d-6517-4d43-b077-c3e418b23c16',
        availableHours: '18',
        category: TaskCategory.VirtualStorage,
        staleTimeDate: '04/11/2020',
        taskName: 'Limpar sinal 5G'
    },
    {
        id: '6f5b768c-f63e-497d-b82e-84e2fb7aebc5',
        availableHours: '19',
        category: TaskCategory.VirtualStorage,
        staleTimeDate: '15/12/2021',
        taskName: 'Comprar batedeira de óleo'
    },
    {
        id: 'e7446f85-777d-4e00-9854-2ff713365b99',
        availableHours: '27',
        category: TaskCategory.VirtualStorage,
        staleTimeDate: '07/10/2020',
        taskName: 'Comprar binóculos triplo'
    }
]

const engineTask: TaskTemporary[] = [
    {
        id: 'c465e7c7-e94b-4b1b-966a-aa38bbe06235',
        availableHours: '21',
        category: TaskCategory.VirtualStorage,
        staleTimeDate: '11/10/2021',
        taskName: 'Alimentar golfinho de estimação da empresa'
    }
]
