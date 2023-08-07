export const screenResources = {
    account: {
        title: 'Minha conta',
        components: {
            userInfoForm: {
                firstTitleText: 'Dados Pessoais',
                secondTitleText: 'Dados Profissionais',
                fullNameText: 'Nome completo',
                emailText: 'E-mail',
                anacCertificationText: 'Código ANAC',
                creaCertificationText: 'CREA',
                jobFunctionText: 'Cargo',
                jobFunctionSelectPlaceholderText: 'Escolha seu cargo',
                companyText: 'Empresa',
                descriptionText: 'Descrição',
                invalidAnacCertificationText:
                    'Preencha esse campo ou o campo de CREA',
                invalidCreaCertificationText:
                    'Preencha esse campo ou o campo do código ANAC',
                invalidFullNameText: 'Preencha com um nome válido',
                invalidEmailText: 'Preencha com um email válido'
            }
        }
    },
    login: {
        forgotMyPasswordText: 'Esqueci minha senha',
        createAccountText: 'Criar conta',
        loginButtonText: 'Login',
        input: {
            passwordPlaceholderText: 'Senha',
            missingPasswordText: 'Digite a senha',
            usernamePlaceholderText: 'Usuário',
            missingUsernameText: 'Digite seu usuário'
        }
    },
    home: {
        title: 'Página inicial',
        components: {
            channelViewer: {
                searchBarPlaceholderText: 'Pesquisar Canal'
            }
        }
    },
    maintenance: {
        title: 'Manutenção',
        components: {
            aircraftForm: {
                aircraftInformationText: 'Informações da aeronave',
                aircraftFlightInformationText: 'Informações de voo',
                ownerText: 'Proprietário',
                invalidOwnerText: 'Nome do proprietário é inválido',
                ownerDocumentText: 'CNPJ',
                invalidOwnerDocumentText: 'CNPJ é inválido',
                modelText: 'Modelo',
                invalidModelText: 'Modelo é inválido',
                certificationText: 'Matrícula',
                invalidCertificationText: 'Matrícula é inválida',
                engineText: 'Modelo do motor',
                invalidEngineText: 'Preencha com um modelo de motor válido',
                enginePartNumberText: 'Part number do motor',
                invalidEnginePartNumberText: 'Part number do motor é inválido',
                aircraftSNText: 'Serial number da aeronave',
                invalidAircraftSNText: 'Serial number da aeronave é inválido',
                engineSNText: 'Serial number do motor',
                invalidEngineSNText: 'Serial number do motor é inválido',
                flightHoursText: 'Horas de voo (aeronave)',
                invalidFlightHoursText: 'Preencha com horas de voo válidas',
                cyclesText: 'Ciclos',
                invalidCyclesText: 'Valor de ciclos é inválido',
                engineCyclesText: 'Ciclos do NG (motor)',
                invalidEngineCyclesText: 'Número de ciclos do motor inválido',
                nfCyclesText: 'Ciclos de NF (motor)',
                invalidNfCyclesText: 'Número de ciclos NF inválido',
                lastFlightDateText: 'Data do último voo',
                invalidLastFlightDateText: 'Preencha com uma data válida',
                engineFlightHoursText: 'Horas de voo (motor)',
                invalidEngineFlightHoursText:
                    'Preencha com horas de voo válidas'

            },
            aircraftList: {
                title: 'Aeronaves',
                addAircraftText: 'Adicionar Aeronave',
                totalSpaceText: 'Slots',
                usedSpaceText: 'Ocupado',
                availableSpaceText: 'Disponível',
                searchAircraftPlaceholderText: 'Buscar Aeronave'
            }
        }
    }
}
