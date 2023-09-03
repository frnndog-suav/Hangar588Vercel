import useServiceOrderTask from '@/src/store/components/ServiceOrderTask/useServiceOrderTask'
import { genericStyle } from '@/src/styles'
import { ServiceOrderCreationComponent } from '../compound'

const ServiceOrderCreationContent = () => {
    const { selectedTasks, removeTask } = useServiceOrderTask()

    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    borderRadius: 8,
                    marginTop: 40,
                    paddingTop: 30,
                    paddingBottom: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    flexGrow: 1
                }
            })}
        >
            <div
                className={genericStyle({
                    css: {
                        display: 'flex',
                        gap: 32
                    }
                })}
            >
                <ServiceOrderCreationComponent.TextInputField
                    label="Nome da OS"
                    placeholder="Digite o nome da OS"
                />
                <ServiceOrderCreationComponent.TextInputField
                    label="Data de criação"
                    defaultValue={new Date().toLocaleString()}
                    disabled
                />
                <ServiceOrderCreationComponent.TextInputField
                    label="Quantidade de tarefas"
                    defaultValue={'0'}
                    disabled
                />
            </div>
            <hr
                className={genericStyle({
                    css: { width: '100%', marginTop: 20, marginBottom: 20 }
                })}
            />
            <div
                className={genericStyle({
                    css: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 12
                    }
                })}
            >
                <div
                    className={genericStyle({
                        css: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                            height: 500,
                            overflowY: 'auto'
                        }
                    })}
                >
                    {selectedTasks.map((task) => (
                        <div
                            key={task.id}
                            className={genericStyle({
                                css: {
                                    display: 'flex',
                                    backgroundColor: '$whiteSmoke',
                                    borderRadius: 8,
                                    padding: 16,
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }
                            })}
                        >
                            <label>{task.taskTitle}</label>
                            <button
                                onClick={() => removeTask(task?.id)}
                                className={genericStyle({
                                    css: {
                                        backgroundColor: '$engineeringOrange',
                                        borderRadius: 8,
                                        color: '#fff',
                                        fontWeight: 500,
                                        fontSize: 20,
                                        padding: 8,
                                        cursor: 'pointer'
                                    }
                                })}
                            >
                                {'Remover task'}
                            </button>
                        </div>
                    ))}
                </div>
                <div
                className={genericStyle({
                    css: {
                        display: 'flex',
                        justifyContent: 'center'
                    }
                })}
            >
                <button
                    className={genericStyle({
                        css: {
                            backgroundColor: '$shammrockGreen',
                            borderRadius: 8,
                            color: '#fff',
                            fontWeight: 500,
                            fontSize: 20,
                            padding: 8,
                            height: 50,
                            cursor: 'pointer'
                        }
                    })}
                >
                    {'Abrir OS'}
                </button>
            </div>
            </div>
        </div>
    )
}

export default ServiceOrderCreationContent
