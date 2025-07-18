document.addEventListener('DOMContentLoaded', () => {
    // ESTE É O NOVO BANCO DE QUESTÕES PARA "QUESTÕES GERADAS POR IA"
    const allQuestionsIA = [
        // Lei nº 8.112/1990
        { id: '01', question: 'Qual o regime jurídico estabelecido pela Lei nº 8.112/1990?', options: ['a) Emprego público federal.', 'b) Regime estatutário dos servidores públicos da União.', 'c) Regime celetista dos servidores públicos federais.', 'd) Regime misto para servidores federais.'], correct: 'b', explanation: 'A Lei nº 8.112/1990 institui o regime estatutário, que estabelece os direitos, deveres e responsabilidades dos servidores públicos civis da União, autarquias e fundações públicas federais.' },
        { id: '02', question: 'São requisitos básicos para investidura em cargo público federal, EXCETO:', options: ['a) Nacionalidade brasileira.', 'b) Nível de escolaridade compatível com o cargo.', 'c) Idade mínima de 16 anos.', 'd) Quitação com as obrigações militares e eleitorais.'], correct: 'c', explanation: 'A idade mínima para investidura em cargo público federal é de 18 anos, conforme o artigo 5º, inciso III, da Lei nº 8.112/1990.' },
        { id: '03', question: 'Qual das alternativas abaixo NÃO constitui forma de provimento de cargo público?', options: ['a) Nomeação.', 'b) Reintegração.', 'c) Remoção.', 'd) Aproveitamento.'], correct: 'c', explanation: 'A remoção é uma forma de movimentação do servidor, não de provimento (preenchimento inicial) do cargo.' },
        { id: '04', question: 'A exoneração de um servidor público pode ocorrer:', options: ['a) Apenas a pedido do servidor.', 'b) Apenas de ofício pela administração.', 'c) A pedido do servidor ou de ofício.', 'd) Somente por decisão judicial.'], correct: 'c', explanation: 'A exoneração pode ocorrer a pedido do servidor (interesse particular) ou de ofício pela administração (ex: insatisfatório no estágio probatório).' },
        { id: '05', question: 'O deslocamento do servidor, a pedido ou de ofício, no âmbito do mesmo quadro, com ou sem mudança de sede, denomina-se:', options: ['a) Redistribuição.', 'b) Remoção.', 'c) Recondução.', 'd) Aproveitamento.'], correct: 'b', explanation: 'A definição de remoção corresponde ao deslocamento do servidor dentro do mesmo quadro.' },
        { id: '06', question: 'Qual das seguintes situações NÃO caracteriza vacância de cargo público?', options: ['a) Demissão.', 'b) Licença para tratamento de saúde.', 'c) Aposentadoria.', 'd) Posse em outro cargo inacumulável.'], correct: 'b', explanation: 'A licença para tratamento de saúde é um afastamento temporário, não uma causa de vacância do cargo.' },
        { id: '07', question: 'O adicional noturno, conforme a Lei nº 8.112/1990, é devido pelo trabalho prestado no período compreendido entre:', options: ['a) 20h e 5h do dia seguinte.', 'b) 22h e 6h do dia seguinte.', 'c) 21h e 4h do dia seguinte.', 'd) 23h e 7h do dia seguinte.'], correct: 'a', explanation: 'O artigo 75 da Lei nº 8.112/1990 define o adicional noturno para o trabalho prestado entre 22h e 5h. Correção: A alternativa correta é a) 22h e 5h do dia seguinte.' },
        { id: '08', question: 'Quantos dias de férias anuais o servidor público federal tem direito, conforme a Lei nº 8.112/1990?', options: ['a) 25 dias úteis.', 'b) 30 dias corridos.', 'c) 20 dias úteis.', 'd) 35 dias corridos.'], correct: 'b', explanation: 'O servidor tem direito a 30 dias de férias por ano, conforme o artigo 77 da Lei nº 8.112/1990.' },
        { id: '09', question: 'Qual das licenças abaixo NÃO depende de avaliação por junta médica oficial?', options: ['a) Licença por motivo de doença em pessoa da família.', 'b) Licença para tratamento da própria saúde por período superior a 15 dias.', 'c) Licença para atividade política.', 'd) Licença à gestante.'], correct: 'c', explanation: 'A licença para atividade política não depende de avaliação por junta médica oficial.' },
        { id: '10', question: 'O servidor que retorna ao serviço público após ter sido considerado inválido em junta médica oficial e recuperado a capacidade laboral é:', options: ['a) Reintegrado.', 'b) Reconduzido.', 'c) Readaptado.', 'd) Aproveitado.'], correct: 'd', explanation: 'O aproveitamento é o retorno ao serviço ativo do servidor em disponibilidade.' },
        { id: '11', question: 'A responsabilidade administrativa do servidor público será apurada mediante:', options: ['a) Inquérito policial.', 'b) Ação judicial.', 'c) Processo administrativo disciplinar.', 'd) Sindicância sumária.'], correct: 'c', explanation: 'A responsabilidade administrativa é apurada por meio de Processo Administrativo Disciplinar (PAD) ou sindicância.' },
        { id: '12', question: 'São penalidades disciplinares previstas na Lei nº 8.112/1990, EXCETO:', options: ['a) Advertência.', 'b) Suspensão.', 'c) Multa.', 'd) Demissão.'], correct: 'c', explanation: 'A multa não é uma penalidade disciplinar prevista na Lei nº 8.112/1990. As penalidades são advertência, suspensão, demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão.' },
        { id: '13', question: 'O prazo máximo para a conclusão do processo administrativo disciplinar é de:', options: ['a) 30 dias, prorrogável por igual período.', 'b) 60 dias, prorrogável por igual período.', 'c) 90 dias, prorrogável por igual período.', 'd) 120 dias, prorrogável por igual período.'], correct: 'b', explanation: 'O artigo 152 da Lei nº 8.112/1990 estabelece o prazo de 60 dias, prorrogável por igual período, para a conclusão do PAD.' },
        { id: '14', question: 'A demissão será aplicada em caso de:', options: ['a) Inassiduidade habitual.', 'b) Improbidade administrativa.', 'c) Negligência no desempenho das funções.', 'd) Descumprimento de dever funcional.'], correct: 'b', explanation: 'A improbidade administrativa é uma das causas para aplicação da pena de demissão (artigo 132, inciso IV).' },
        { id: '15', question: 'Qual o prazo de prescrição para a ação disciplinar por abandono de cargo?', options: ['a) 2 anos.', 'b) 5 anos.', 'c) 1 ano.', 'd) Não prescreve.'], correct: 'a', explanation: 'O artigo 142, inciso I, da Lei nº 8.112/1990 estabelece o prazo de prescrição de 2 anos para abandono de cargo.' },
        { id: '16', question: 'O direito de peticionar aos poderes públicos, em defesa de direitos ou contra ilegalidade ou abuso de poder, é assegurado ao servidor como:', options: ['a) Um dever funcional.', 'b) Uma proibição.', 'c) Um direito.', 'd) Uma vantagem pecuniária.'], correct: 'c', explanation: 'O direito de petição é um direito fundamental do servidor, previsto no artigo 5º, inciso XXXIV, da Constituição Federal e reforçado na Lei nº 8.112/1990.' },
        { id: '17', question: 'A acumulação de cargos públicos é vedada, EXCETO quando houver compatibilidade de horários e se tratar de:', options: ['a) Dois cargos de professor.', 'b) Um cargo de professor com outro técnico ou científico.', 'c) Dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.', 'd) Todas as alternativas anteriores.'], correct: 'd', explanation: 'A acumulação é permitida nas hipóteses constitucionais de dois cargos de professor, um de professor com outro técnico ou científico, e dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas, havendo compatibilidade de horários.' },
        { id: '18', question: 'O estágio probatório é o período de:', options: ['a) 12 meses de efetivo exercício.', 'b) 24 meses de efetivo exercício.', 'c) 36 meses de efetivo exercício.', 'd) Não há período definido.'], correct: 'c', explanation: 'O artigo 20 da Lei nº 8.112/1990 define o estágio probatório como o período de 36 meses de efetivo exercício.' },
        { id: '19', question: 'A avaliação especial de desempenho durante o estágio probatório visa apurar, entre outros aspectos:', options: ['a) Apenas a assiduidade e a disciplina.', 'b) Aptidão e capacidade para o desempenho eficiente das atribuições do cargo.', 'c) O nível de produtividade e a qualidade do trabalho desenvolvido pelo servidorcontinuidade nos estudos.', 'd) Apenas a pontualidade e a produtividade.'], correct: 'b', explanation: 'A avaliação no estágio probatório visa verificar a aptidão e capacidade do servidor para o desempenho eficiente das atribuições do cargo (artigo 20, § 1º).' },
        { id: '20', question: 'A recondução é o retorno do servidor estável ao cargo anteriormente ocupado, em decorrência de:', options: ['a) Inabilitação em estágio probatório relativo a outro cargo.', 'b) Reintegração de outro servidor.', 'c) Aproveitamento do servidor em disponibilidade.', 'd) Todas as alternativas anteriores.'], correct: 'd', explanation: 'A recondução ocorre nas três situações mencionadas (artigo 29).' },

        // Lei nº 12.772/2012
        { id: '21', question: 'A Lei nº 12.772/2012 dispõe sobre a estruturação de qual plano de carreiras?', options: ['a) Plano de Carreiras e Cargos da Administração Pública Federal.', 'b) Plano de Carreiras e Cargos do Magistério Federal.', 'c) Plano Único de Carreiras e Cargos dos Servidores Federais.', 'd) Plano Nacional de Educação.'], correct: 'b', explanation: 'A Lei nº 12.772/2012 estrutura o Plano de Carreiras e Cargos de Magistério Federal.' },
        { id: '22', question: 'Quais são as carreiras abrangidas pelo Plano de Carreiras e Cargos de Magistério Federal?', options: ['a) Magistério Superior e Magistério do Ensino Fundamental e Médio.', 'b) Magistério Superior e Magistério do Ensino Básico, Técnico e Tecnológico (EBTT).', 'c) Magistério Superior, Magistério do Ensino Fundamental e Magistério do Ensino Médio e Tecnológico.', 'd) Carreira Docente Federal e Carreira Técnico-Administrativa em Educação.'], correct: 'b', explanation: 'As carreiras abrangidas são a de Magistério Superior e a de Magistério do Ensino Básico, Técnico e Tecnológico (EBTT).' },
        { id: '23', question: 'O ingresso nas Carreiras do Magistério Federal ocorre por meio de:', options: ['a) Indicação política.', 'b) Concurso público de provas e títulos.', 'c) Processo seletivo simplificado.', 'd) Remoção e redistribuição.'], correct: 'b', explanation: 'O ingresso nas Carreiras do Magistério Federal se dá por concurso público de provas e títulos (artigo 7º).' },
        { id: '24', question: 'A Retribuição por Titulação (RT) é um componente da remuneração dos docentes federais, calculado com base em:', options: ['a) Tempo de serviço.', 'b) Desempenho individual.', 'c) Nível de escolaridade.', 'd) Participação em projetos de pesquisa e extensão.'], correct: 'c', explanation: 'A Retribuição por Titulação (RT) é calculada com base no nível de escolaridade do docente (artigo 16).' },
        { id: '25', question: 'Quais são os regimes de trabalho previstos para os docentes da Carreira de Magistério Superior?', options: ['a) Tempo integral e tempo parcial.', 'b) Tempo integral com dedicação exclusiva, tempo parcial de 20 horas e tempo parcial de 40 horas.', 'c) Apenas tempo integral com dedicação exclusiva.', 'd) Tempo integral e regime de plantão.'], correct: 'b', explanation: 'Os regimes de trabalho para a Carreira de Magistério Superior são Tempo Integral com Dedicação Exclusiva (DE), Tempo Parcial de 20 horas e Tempo Parcial de 40 horas (artigo 20).' },
        { id: '26', question: 'O regime de Tempo Integral com Dedicação Exclusiva (DE) implica que o docente deverá dedicar-se integralmente às atividades de ensino, pesquisa, extensão e gestão institucional, sendo:', options: ['a) Permitido o exercício de outra atividade remunerada, pública ou privada.', 'b) Vedado o exercício de qualquer outra atividade remunerada, pública ou privada, exceto em casos específicos previstos em lei.', 'c) Permitido o exercício de outra atividade remunerada, desde que haja compatibilidade de horários.', 'd) Depende da aprovação da chefia imediata o exercício de outra atividade remunerada.'], correct: 'b', explanation: 'O regime de DE implica a vedação do exercício de outra atividade remunerada, salvo as exceções legais (artigo 20, § 1º).' },
        { id: '27', question: 'A progressão funcional nas Carreiras do Magistério Federal ocorre:', options: ['a) Automaticamente a cada dois anos.', 'b) Por mudança de nível dentro da mesma classe, com base em critérios estabelecidos.', 'c) Por mudança de classe, independentemente de avaliação de desempenho.', 'd) Apenas por tempo de serviço.'], correct: 'b', explanation: 'A progressão funcional ocorre por mudança de nível dentro da mesma classe, mediante avaliação de desempenho (artigo 18).' },
        { id: '28', question: 'A promoção nas Carreiras do Magistério Federal ocorre:', options: ['a) Automaticamente ao final de cada nível.', 'b) Por elevação do servidor à classe mais elevada, com base em critérios estabelecidos, incluindo titulação e avaliação de desempenho.', 'c) Por decisão discricionária da administração superior.', 'd) Apenas por concurso interno.'], correct: 'b', explanation: 'A promoção ocorre por elevação à classe mais elevada, com base em critérios como titulação e avaliação de desempenho (artigo 19).' },
        { id: '29', question: 'Para o ingresso na Classe de Professor Titular da Carreira de Magistério Superior, é exigida, entre outros requisitos:', options: ['a) Apenas o título de doutor.', 'b) Título de doutor e aprovação em processo de avaliação específico.', 'c) Tempo mínimo de serviço na classe anterior.', 'd) Publicação de um livro.'], correct: 'b', explanation: 'Para a Classe de Professor Titular, exige-se título de doutor e aprovação em processo de avaliação específico (artigo 19, § 2º).' },
        { id: '30', question: 'O estágio probatório para os servidores das Carreiras do Magistério Federal tem duração de:', options: ['a) 12 meses.', 'b) 24 meses.', 'c) 36 meses.', 'd) Não há estágio probatório para docentes.'], correct: 'c', explanation: 'O estágio probatório para os servidores das Carreiras do Magistério Federal tem duração de 36 meses (artigo 10).' },
        { id: '31', question: 'A avaliação de desempenho durante o estágio probatório dos docentes federais considera, entre outros aspectos:', options: ['a) Apenas a produção científica.', 'b) Aptidão para o exercício das atividades, assiduidade e disciplina.', 'c) Participação em eventos acadêmicos.', 'd) Número de orientações de alunos.'], correct: 'b', explanation: 'A avaliação no estágio probatório considera a aptidão, assiduidade e disciplina, entre outros fatores (artigo 10, § 1º).' },
        { id: '32', question: 'A Retribuição por Titulação (RT) para o portador de título de doutor, em relação ao vencimento básico, é de:', options: ['a) Um percentual fixo para todas as classes.', 'b) Percentuais diferenciados por classe e nível.', 'c) Um valor fixo em reais.', 'd) Não há RT para doutores.'], correct: 'b', explanation: 'Os percentuais da RT variam por classe e nível, sendo maiores para titulações mais elevadas (Tabela do Anexo IV).' },
        { id: '33', question: 'A alteração do regime de trabalho do docente federal pode ocorrer:', options: ['a) A qualquer momento, a pedido do servidor.', 'b) Mediante processo regular, atendendo aos requisitos e critérios estabelecidos.', 'c) Por decisão unilateral da administração.', 'd) Apenas após o estágio probatório.'], correct: 'b', explanation: 'A alteração do regime de trabalho deve seguir processo regular e atender aos requisitos estabelecidos (artigo 21).' },
        { id: '34', question: 'As instituições federais de ensino (IFEs) têm autonomia para:', options: ['a) Definir os critérios de progressão e promoção nas carreiras do magistério, sem observar a legislação federal.', 'b) Organizar seus planos de carreira, cargos e remuneração de forma independente.', 'c) Implementar o Plano de Carreiras e Cargos de Magistério Federal, observando a legislação específica.', 'd) Não estão sujeitas à Lei nº 12.772/2012.'], correct: 'c', explanation: 'As IFEs devem implementar o plano de carreiras observando a legislação federal (artigo 1º).' },
        { id: '35', question: 'A Lei nº 12.772/2012 prevê a possibilidade de afastamento para realização de programas de pós-graduação stricto sensu:', options: ['a) Apenas no país.', 'b) Apenas no exterior.', 'c) No país ou no exterior, conforme regulamentação.', 'd) Não há previsão de afastamento para pós-graduação.'], correct: 'c', explanation: 'A Lei nº 12.772/2012 prevê o afastamento para pós-graduação stricto sensu no país ou no exterior, conforme regulamentação (artigo 30).' },

        // Lei nº 8.027/1990
        { id: '36', question: 'A Lei nº 8.027/1990 dispõe sobre:', options: ['a) O regime disciplinar dos servidores públicos federais.', 'b) Normas de conduta dos servidores públicos civis da União, das Autarquias e das Fundações Públicas.', 'c) O processo administrativo disciplinar.', 'd) A ética no serviço público federal.'], correct: 'b', explanation: 'A Lei nº 8.027/1990 dispõe sobre normas de conduta dos servidores públicos civis da União, autarquias e fundações públicas.' },
        { id: '37', question: 'São princípios gerais que devem nortear a conduta dos servidores públicos, conforme a Lei nº 8.027/1990, EXCETO:', options: ['a) Moralidade administrativa.', 'b) Legalidade.', 'c) Eficiência.', 'd) Discricionariedade.'], correct: 'd', explanation: 'A discricionariedade é um poder da administração, mas a conduta do servidor deve ser pautada pelos princípios da legalidade, moralidade, eficiência, etc.' },
        { id: '38', question: 'Constitui um dever fundamental do servidor público, segundo a Lei nº 8.027/1990:', options: ['a) Exercer com negligência as atribuições do cargo.', 'b) Preservar o patrimônio público.', 'c) Atender ao público com má vontade.', 'd) Utilizar informações sigilosas em benefício próprio.'], correct: 'b', explanation: 'Preservar o patrimônio público é um dever fundamental do servidor (artigo 3º, inciso III).' },
        { id: '39', question: 'É vedado ao servidor público, de acordo com a Lei nº 8.027/1990:', options: ['a) Receber presentes de pequeno valor.', 'b) Utilizar o cargo para obter qualquer tipo de favorecimento para si.', 'c) Participar de greves.', 'd) Criticar a administração pública.'], correct: 'b', explanation: 'Utilizar o cargo para obter favorecimento pessoal é uma vedação (artigo 4º, inciso II).' },
        { id: '40', question: 'A Comissão de Ética Pública, instituída pela Lei nº 8.027/1990, tem como uma de suas competências:', options: ['a) Aplicar penalidades disciplinares como demissão.', 'b) Julgar crimes de improbidade administrativa.', 'c) Orientar e aconselhar sobre ética profissional do servidor.', 'd) Fiscalizar a vida privada dos servidores.'], correct: 'c', explanation: 'A Comissão de Ética Pública tem a competência de orientar e aconselhar sobre ética profissional (artigo 6º, inciso I).' },
        { id: '41', question: 'O processo de apuração ética conduzido pela Comissão de Ética Pública pode resultar na aplicação de qual sanção?', options: ['a) Advertência.', 'b) Suspensão.', 'c) Censura.', 'd) Demissão.'], correct: 'c', explanation: 'A sanção aplicável pela Comissão de Ética Pública é a censura (artigo 6º, § 3º).' },
        { id: '42', question: 'A Lei nº 8.027/1990 estabelece que as normas de conduta nela previstas complementam:', options: ['a) A Constituição Federal.', 'b) A Lei de Improbidade Administrativa.', 'c) O Regime Jurídico dos Servidores Públicos Federais (Lei nº 8.112/1990).', 'd) O Código Penal.'], correct: 'c', explanation: 'As normas de conduta da Lei nº 8.027/1990 complementam o Regime Jurídico dos Servidores Públicos Federais (artigo 1º, parágrafo único).' },
        { id: '43', question: 'A busca pela excelência nos serviços prestados é um:', options: ['a) Direito do servidor.', 'b) Dever fundamental do servidor.', 'c) Uma vedação ao servidor.', 'd) Uma faculdade do servidor.'], correct: 'b', explanation: 'A busca pela excelência é um dever fundamental (artigo 3º, inciso VI).' },
        { id: '44', question: 'O atendimento com presteza e cortesia ao público é um:', options: ['a) Direito do usuário do serviço público.', 'b) Dever fundamental do servidor.', 'c) Uma proibição ao servidor.', 'd) Uma recomendação ao servidor.'], correct: 'b', explanation: 'O atendimento com presteza e cortesia é um dever fundamental (artigo 3º, inciso VII).' },
        { id: '45', question: 'Utilizar o cargo ou função, facilidades, poderes ou prerrogativas a ele inerentes, para obter qualquer tipo de favorecimento, para si ou para outrem, constitui:', options: ['a) Um dever do servidor.', 'b) Uma conduta ética recomendada.', 'c) Uma vedação ao servidor.', 'd) Um direito do servidor.'], correct: 'c', explanation: 'Utilizar o cargo para obter favorecimento é uma vedação (artigo 4º, inciso II).' },
        { id: '46', question: 'Divulgar ou utilizar informações sigilosas a que tenha acesso em razão do cargo ou função para obter qualquer tipo de proveito, para si ou para outrem, é:', options: ['a) Permitido, desde que não cause prejuízo à administração.', 'b) Um dever de transparência.', 'c) Uma vedação ao servidor.', 'd) Uma conduta ética desejável.'], correct: 'c', explanation: 'Divulgar informações sigilosas para proveito próprio é uma vedação (artigo 4º, inciso VI).' },
        { id: '47', question: 'A Comissão de Ética Pública é formada por:', options: ['a) Servidores públicos indicados pelos sindicatos.', 'b) Cidadãos de reputação ilibada, designados pelo Presidente da República.', 'c) Membros do Poder Judiciário.', 'd) Representantes da sociedade civil organizada.'], correct: 'b', explanation: 'A Comissão de Ética Pública é formada por cidadãos de reputação ilibada, designados pelo Presidente da República (artigo 6º).' },
        { id: '48', question: 'A atuação da Comissão de Ética Pública ocorre:', options: ['a) Apenas mediante denúncia formal.', 'b) De ofício ou mediante denúncia.', 'c) Apenas por solicitação da chefia imediata do servidor.', 'd) Apenas por decisão judicial.'], correct: 'b', explanation: 'A atuação da Comissão ocorre de ofício ou mediante denúncia (artigo 6º, § 2º).' },
        { id: '49', question: 'A sanção de censura aplicada pela Comissão de Ética Pública consiste em:', options: ['a) Advertência formal registrada nos assentamentos do servidor.', 'b) Reprovação pública da conduta do servidor.', 'c) Suspensão do exercício do cargo.', 'd) Demissão do serviço público.'], correct: 'b', explanation: 'A censura é uma reprovação pública da conduta do servidor (artigo 6º, § 3º).' },
        { id: '50', question: 'A Lei nº 8.027/1990 busca promover:', options: ['a) A politização do serviço público.', 'b) A eficiência administrativa acima da moralidade.', 'c) A conduta ética e a integridade no serviço público.', 'd) A flexibilização das normas de conduta.'], correct: 'c', explanation: 'A Lei nº 8.027/1990 visa promover a conduta ética e a integridade no serviço público.' },

        // Decreto nº 1.171/1994
        { id: '51', question: 'O Decreto nº 1.171/1994 aprova o:', options: ['a) Regulamento Disciplinar do Servidor Público Federal.', 'b) Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal.', 'c) Estatuto da Função Pública Federal.', 'd) Manual de Conduta Ética da Administração Pública.'], correct: 'b', explanation: 'O Decreto nº 1.171/1994 aprova o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal.' },
        { id: '52', question: 'Segundo o Código de Ética, a dignidade, o decoro, o zelo, a eficácia e a consciência dos princípios morais são:', options: ['a) Direitos do servidor.', 'b) Deveres fundamentais do servidor.', 'c) Vedações ao servidor.', 'd) Faculdades do servidor.'], correct: 'b', explanation: 'Dignidade, decoro, zelo, eficácia e consciência dos princípios morais são deveres fundamentais (Seção I, inciso I).' },
        { id: '53', question: 'A cortesia, a boa vontade, a discrição, o asseio e a presteza são valores que o servidor deve observar no seu:', options: ['a) Âmbito familiar.', 'b) Relacionamento profissional e com o público.', 'c) Tempo de lazer.', 'd) Exercício de atividades sindicais.'], correct: 'b', explanation: 'A cortesia, boa vontade, discrição, asseio e presteza devem ser observados no relacionamento profissional e com o público (Seção I, inciso IV).' },
        { id: '54', question: 'Retardar ou dificultar o exercício regular de direito por qualquer pessoa, atuando com descaso ou omissão, constitui:', options: ['a) Um dever funcional.', 'b) Uma conduta ética recomendada.', 'c) Uma vedação ética.', 'd) Um direito do servidor.'], correct: 'c', explanation: 'Retardar ou dificultar o exercício regular de direito é uma vedação ética (Seção III, inciso I, alínea “d”).' },
        { id: '55', question: 'Pleitear, influenciar ou solicitar qualquer tipo de favor para si ou para outrem, para o bom desempenho de suas tarefas, é:', options: ['a) Permitido, desde que em benefício da administração.', 'b) Um ato de proatividade.', 'c) Vedado pela ética profissional.', 'd) Um direito do servidor.'], correct: 'c', explanation: 'Pleitear ou solicitar favores é vedado pela ética profissional (Seção III, inciso I, alínea “g”).' },
        { id: '56', question: 'Receber presentes, vantagens de qualquer espécie, em razão de sua função, de qualquer pessoa física ou jurídica que tenha interesses em decisão tomada pelo servidor ou colegiado do qual participe:', options: ['a) É permitido, desde que de pequeno valor.', 'b) É permitido, com autorização da chefia imediata.', 'c) É vedado, exceto em casos protocolares.', 'd) Depende da legislação específica do orgão'], correct: 'c', explanation: 'Receber presentes que possam influenciar decisões é vedado (Seção III, inciso I, alínea “h”).' },
        { id: '57', question: 'A sanção ética de censura, prevista no Decreto nº 1.171/1994, consiste em:', options: ['a) Advertência verbal.', 'b) Reprovação formal da conduta do servidor.', 'c) Suspensão temporária do cargo.', 'd) Demissão do serviço público.'], correct: 'b', explanation: 'A censura é uma reprovação formal da conduta do servidor (Seção V, artigo 9º).' },
        { id: '58', question: 'As Comissões de Ética nos órgãos e entidades do Poder Executivo Federal têm como uma de suas atribuições:', options: ['a) Julgar crimes de corrupção.', 'b) Aplicar penalidades disciplinares previstas na Lei nº 8.112/1990.', 'c) Orientar e aconselhar sobre ética profissional do servidor.', 'd) Fiscalizar o patrimônio dos servidores.'], correct: 'c', explanation: 'As Comissões de Ética orientam e aconselham sobre ética profissional (Seção IV, artigo 7º, inciso I).' },
        { id: '59', question: 'O Código de Ética estabelece que a remuneração do servidor público é custeada por:', options: ['a) Taxas e emolumentos.', 'b) Impostos pagos direta ou indiretamente pela sociedade.', 'c) Receitas de empresas públicas.', 'd) Doações de entidades privadas.'], correct: 'b', explanation: 'A remuneração do servidor é custeada pelos impostos pagos pela sociedade (Seção I, inciso XVII).' },
        { id: '60', question: 'O servidor público não poderá jamais desprezar o elemento ético de sua conduta. Assim, a moralidade administrativa se constitui em:', options: ['a) Um requisito meramente formal da atuação administrativa.', 'b) Um dos pilares da administração pública, influenciando na legalidade dos atos.', 'c) Uma questão de foro íntimo do servidor.', 'd) Um aspecto secundário da função pública.'], correct: 'b', explanation: 'A moralidade administrativa é um pilar da administração, influenciando a legalidade dos atos (Seção I, inciso III).' },
        { id: '61', question: 'Segundo o Código de Ética, a humildade, a tolerância e o respeito são importantes para:', options: ['a) A manutenção da hierarquia funcional.', 'b) O bom relacionamento com os colegas e com o público.', 'c) A obtenção de promoções na carreira.', 'd) A participação em atividades sindicais.'], correct: 'b', explanation: 'Humildade, tolerância e respeito são importantes para o bom relacionamento (Seção I, inciso IV).' },
        { id: '62', question: 'O servidor público deve zelar pela economia do material público e a conservação dos bens patrimoniais, evitando:', options: ['a) A utilização de recursos tecnológicos.', 'b) Qualquer tipo de inovação administrativa.', 'c) O desperdício e o dano aos bens públicos.', 'd) A participação em programas de reciclagem.'], correct: 'c', explanation: 'O servidor deve evitar o desperdício e o dano aos bens públicos (Seção I, inciso VI).' },
        { id: '63', question: 'A transparência na administração pública, segundo o Código de Ética, visa a:', options: ['a) Garantir o sigilo dos atos administrativos.', 'b) Facilitar a fiscalização da sociedade sobre a atuação dos servidores.', 'c) Dificultar o acesso da imprensa às informações.', 'd) Proteger a imagem dos gestores públicos.'], correct: 'b', explanation: 'A transparência visa facilitar a fiscalização da sociedade (Seção I, inciso XII).' },
        { id: '64', question: 'A responsabilidade social do servidor público implica considerar, em suas decisões e atos:', options: ['a) Apenas os interesses do órgão ou entidade em que trabalha.', 'b) O impacto de suas ações no bem-estar da coletividade.', 'c) As opiniões de seus superiores hierárquicos.', 'd) As vantagens pessoais que podem advir de suas decisões.'], correct: 'b', explanation: 'A responsabilidade social implica considerar o impacto no bem-estar coletivo (Seção I, inciso XIII).' },
        { id: '65', question: 'O Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal se aplica a:', options: ['a) Apenas aos servidores efetivos.', 'b) A todos os servidores e empregados públicos do Poder Executivo Federal, incluindo ocupantes de cargos em comissão e funções de confiança.', 'c) Apenas aos servidores da administração direta.', 'd) Apenas aos servidores com mais de cinco anos de serviço público.'], correct: 'b', explanation: 'O Código se aplica a todos os servidores e empregados do Poder Executivo Federal (Artigo 1º).' },

        // Questões Gerais
        { id: '66', question: 'Qual lei estabelece o regime jurídico dos servidores públicos civis da União?', options: ['a) Lei nº 12.772/2012.', 'b) Lei nº 8.027/1990.', 'c) Lei nº 8.112/1990.', 'd) Decreto nº 1.171/1994.'], correct: 'c', explanation: 'A Lei nº 8.112/1990 estabelece o regime jurídico dos servidores públicos civis da União.' },
        { id: '67', question: 'Qual norma dispõe sobre a estruturação do Plano de Carreiras e Cargos de Magistério Federal?', options: ['a) Lei nº 8.112/1990.', 'b) Lei nº 8.027/1990.', 'c) Lei nº 12.772/2012.', 'd) Decreto nº 1.171/1994.'], correct: 'c', explanation: 'A Lei nº 12.772/2012 dispõe sobre a estruturação do Plano de Carreiras e Cargos de Magistério Federal.' },
        { id: '68', question: 'As normas de conduta dos servidores públicos civis da União são tratadas em qual legislação?', options: ['a) Lei nº 8.112/1990.', 'b) Lei nº 12.772/2012.', 'c) Lei nº 8.027/1990.', 'd) Decreto nº 1.171/1994.'], correct: 'c', explanation: 'As normas de conduta dos servidores públicos civis da União são tratadas na Lei nº 8.027/1990.' },
        { id: '69', question: 'O Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal foi aprovado por meio de qual ato normativo?', options: ['a) Lei nº 8.112/1990.', 'b) Lei nº 12.772/2012.', 'c) Lei nº 8.027/1990.', 'd) Decreto nº 1.171/1994.'], correct: 'd', explanation: 'O Código de Ética foi aprovado pelo Decreto nº 1.171/1994.' },
        { id: '70', question: 'A readaptação é uma forma de:', options: ['a) Vacância do cargo público.', 'b) Provimento de cargo público.', 'c) Remoção do servidor.', 'd) Redistribuição do servidor.'], correct: 'b', explanation: 'A readaptação é uma forma de provimento derivado, onde o servidor é investido em outro cargo compatível com sua capacidade física ou mental.' },
        { id: '71', question: 'O adicional de férias corresponde a:', options: ['a) 50% da remuneração do período de férias.', 'b) 1/3 da remuneração do período de férias.', 'c) O dobro da remuneração do período de férias.', 'd) Um salário mínimo.'], correct: 'b', explanation: 'O adicional de férias corresponde a 1/3 da remuneração do período de férias (artigo 7º, inciso XVII, da Constituição Federal e artigo 79 da Lei nº 8.112/1990).' },
        { id: '72', question: 'A demissão de um servidor público estável pode ocorrer em qual das seguintes situações?', options: ['a) Baixo rendimento no estágio probatório.', 'b) Inassiduidade habitual.', 'c) Atrasos frequentes.', 'd) Faltas justificadas.'], correct: 'b', explanation: 'A demissão pode ocorrer em caso de inassiduidade habitual (artigo 132, inciso III, da Lei nº 8.112/1990).' },
        { id: '73', question: 'A progressão funcional na Carreira de Magistério EBTT ocorre por mudança de:', options: ['a) Regime de trabalho.', 'b) Nível dentro da mesma classe.', 'c) Instituição de ensino.', 'd) Função administrativa para docente.'], correct: 'b', explanation: 'A progressão na Carreira de Magistério EBTT ocorre por mudança de nível dentro da mesma classe (artigo 18 da Lei nº 12.772/2012).' },
        { id: '74', question: 'A Retribuição por Titulação (RT) é paga aos docentes federais em função de:', options: ['a) Tempo de serviço na instituição.', 'b) Avaliação de desempenho individual.', 'c) Titulação acadêmica comprovada.', 'd) Participação em bancas examinadoras.'], correct: 'c', explanation: 'A Retribuição por Titulação (RT) é paga em função da titulação acadêmica do docente (artigo 16 da Lei nº 12.772/2012).' },
        { id: '75', question: 'A moralidade administrativa, segundo a Lei nº 8.027/1990, é um princípio:', options: ['a) Facultativo para o servidor público.', 'b) Que se aplica apenas aos cargos de chefia.', 'c) Que deve nortear a conduta de todos os servidores.', 'd) Sem relevância para a atuação administrativa.'], correct: 'c', explanation: 'A moralidade administrativa é um princípio que deve nortear a conduta de todos os servidores (artigo 37 da Constituição Federal e artigo 3º da Lei nº 8.027/1990).' },
        { id: '76', question: 'O servidor público, de acordo com o Código de Ética, deve dispensar tratamento:', options: ['a) Diferenciado aos superiores hierárquicos.', 'b) Desrespeitoso aos usuários dos serviços públicos.', 'c) Urbano, probo e leal a qualquer pessoa.', 'd) Indiferente às necessidades da comunidade.'], correct: 'c', explanation: 'O servidor deve dispensar tratamento urbano, probo e leal a qualquer pessoa (Seção I, inciso IV, do Decreto nº 1.171/1994).' },
        { id: '77', question: 'Qual das alternativas abaixo NÃO constitui uma vedação ética ao servidor público federal?', options: ['a) Receber presentes de valor significativo.', 'b) Usar o cargo para obter vantagens indevidas.', 'c) Atender ao público com cordialidade.', 'd) Retardar o atendimento ao público.'], correct: 'c', explanation: 'Atender ao público com cordialidade é um dever, não uma vedação.' },
        { id: '78', question: 'As Comissões de Ética têm a competência de:', options: ['a) Aplicar a pena de demissão.', 'b) Julgar crimes de responsabilidade.', 'c) Apurar condutas antiéticas e aplicar sanções éticas.', 'd) Legislar sobre a ética no serviço público.'], correct: 'c', explanation: 'As Comissões de Ética apuram condutas antiéticas e aplicam sanções éticas (artigo 6º da Lei nº 8.027/1990 e artigo 7º do Decreto nº 1.171/1994).' },
        { id: '79', question: 'O estágio probatório é um período de avaliação para fins de:', options: ['a) Promoção na carreira.', 'b) Estabilidade no serviço público.', 'c) Progressão funcional.', 'd) Aposentadoria.'], correct: 'b', explanation: 'O estágio probatório é um período de avaliação para fins de aquisição da estabilidade no serviço público (artigo 21 da Lei nº 8.112/1990).' },
        { id: '80', question: 'A acumulação de cargos de professor com outro técnico ou científico é:', options: ['a) Sempre proibida.', 'b) Permitida, havendo compatibilidade de horários.', 'c) Depende da autorização do Ministério da Educação.', 'd) Permitida apenas no ensino superior.'], correct: 'b', explanation: 'A acumulação de um cargo de professor com outro técnico ou científico é permitida, havendo compatibilidade de horários (artigo 37, inciso XVI, alínea “b”, da Constituição Federal).' },
        { id: '81', question: 'A responsabilidade civil do servidor público pode ocorrer em caso de:', options: ['a) Prática de crime contra a administração pública.', 'b) Ato omissivo ou comissivo que cause dano ao erário ou a terceiros.', 'c) Descumprimento de normas internas do órgão.', 'd) Violação de princípios éticos.'], correct: 'b', explanation: 'A responsabilidade civil decorre de ato omissivo ou comissivo que cause dano ao erário ou a terceiros (artigo 122 da Lei nº 8.112/1990).' },
        { id: '82', question: 'A licença para capacitação do servidor público federal pode ser concedida com remuneração por um período de até:', options: ['a) 3 meses.', 'b) 6 meses.', 'c) 1 ano.', 'd) 2 anos.'], correct: 'a', explanation: 'A licença para capacitação pode ser concedida com remuneração por até 3 meses a cada cinco anos de efetivo exercício (artigo 87 da Lei nº 8.112/1990).' },
        { id: '83', question: 'O regime de trabalho de Tempo Integral com Dedicação Exclusiva (DE) para os docentes federais implica a:', options: ['a) Obrigação de prestar 40 horas semanais de trabalho, com possibilidade de outras atividades remuneradas.', 'b) Dedicação integral às atividades acadêmicas, sendo vedado o exercício de outra atividade remunerada, salvo exceções legais.', 'c) Flexibilidade de horários, desde que cumpridas as atividades de ensino.', 'd) Possibilidade de exercer atividades de consultoria remunerada.'], correct: 'b', explanation: 'O regime de DE implica dedicação integral, com vedação de outra atividade remunerada, salvo exceções legais (artigo 20, § 1º, da Lei nº 12.772/2012).' },
        { id: '84', question: 'A avaliação de desempenho para progressão e promoção nas Carreiras do Magistério Federal considera:', options: ['a) Apenas a titulação do servidor.', 'b) Apenas o tempo de serviço.', 'c) Desempenho individual e institucional, produção acadêmica, atividades de ensino, pesquisa, extensão e gestão.', 'd) Apenas a participação em cursos de capacitação.'], correct: 'c', explanation: 'A avaliação para progressão e promoção considera diversos fatores relacionados ao desempenho e produção acadêmica (artigos 18 e 19 da Lei nº 12.772/2012).' },
        { id: '85', question: 'A Lei nº 8.027/1990 busca fortalecer:', options: ['a) A autonomia dos servidores públicos.', 'b) A discricionariedade da administração pública.', 'c) A integridade e a ética na atuação dos servidores.', 'd) A flexibilidade das normas de conduta.'], correct: 'c', explanation: 'A Lei nº 8.027/1990 busca fortalecer a integridade e a ética na atuação dos servidores.' },
        { id: '86', question: 'O Código de Ética Profissional do Servidor Público Civil estabelece como um dever:', options: ['a) Utilizar os serviços do cargo em proveito particular.', 'b) Ser conivente com erros ou infrações.', 'c) Comunicar imediatamente a seus superiores todo e qualquer ato ou fato contrário ao interesse público.', 'd) Retardar o atendimento ao público.'], correct: 'c', explanation: 'Comunicar atos contrários ao interesse público é um dever (Seção I, inciso IX, do Decreto nº 1.171/1994).' },
        { id: '87', question: 'A imparcialidade é um princípio ético que exige do servidor público:', options: ['a) Favorecer seus amigos e familiares.', 'b) Atuar sem preconceitos ou discriminações.', 'c) Defender os interesses de seu partido político.', 'd) Expressar suas opiniões pessoais durante o serviço.'], correct: 'b', explanation: 'A imparcialidade exige atuar sem preconceitos ou discriminações (Seção I, inciso V, do Decreto nº 1.171/1994).' },
        { id: '88', question: 'A principal finalidade das Comissões de Ética é:', options: ['a) Aplicar sanções disciplinares graves.', 'b) Promover a cultura ética no serviço público.', 'c) Investigar crimes de corrupção.', 'd) Controlar a vida privada dos servidores'], correct: 'b', explanation: 'A principal finalidade é promover a cultura ética no serviço público.' },
        { id: '89', question: 'A estabilidade do servidor público federal é adquirida após:', options: ['a) A aprovação no concurso público.', 'b) Dois anos de efetivo exercício.', 'c) Três anos de efetivo exercício e aprovação no estágio probatório.', 'd) Cinco anos de efetivo exercício.'], correct: 'c', explanation: 'A estabilidade é adquirida após três anos de efetivo exercício e aprovação no estágio probatório (artigo 21 da Lei nº 8.112/1990).' },
        { id: '90', question: 'A recondução de um servidor estável ocorre quando ele é:', options: ['a) Removido a pedido para outro órgão.', 'b) Readaptado em função de limitação de capacidade física.', 'c) Inabilitado em estágio probatório relativo a outro cargo.', 'd) Aposentado por invalidez.'], correct: 'c', explanation: 'A recondução ocorre em caso de inabilitação em estágio probatório relativo a outro cargo (artigo 29, inciso I, da Lei nº 8.112/1990).' },
        { id: '91', question: 'A Lei nº 12.772/2012 estabelece que a progressão e a promoção nas carreiras do magistério federal devem observar critérios de:', options: ['a) Antiguidade e merecimento.', 'b) Apenas antiguidade.', 'c) Apenas merecimento.', 'd) Discricionariedade da administração.'], correct: 'a', explanation: 'A progressão e a promoção devem observar critérios de antiguidade e merecimento (artigo 18, § 1º, e artigo 19, § 1º, da Lei nº 12.772/2012).' },
        { id: '92', question: 'O regime de trabalho de 20 horas semanais para docentes federais é:', options: ['a) Exclusivo para professores substitutos.', 'b) Uma opção para servidores em estágio probatório.', 'c) Uma das possibilidades de regime de trabalho, aplicável conforme a necessidade da instituição.', 'd) Destinado apenas a atividades de pesquisa.'], correct: 'c', explanation: 'O regime de 20 horas é uma das possibilidades de regime de trabalho (artigo 20 da Lei nº 12.772/2012).' },
        { id: '93', question: 'A Lei nº 8.027/1990 veda ao servidor público:', options: ['a) Apresentar sugestões para a melhoria dos serviços.', 'b) Participar de cursos de capacitação.', 'c) Aceitar cargo de gerência em empresa privada.', 'd) Exercer o direito de greve.'], correct: 'c', explanation: 'Aceitar cargo de gerência em empresa privada é uma vedação (artigo 4º, inciso I, da Lei nº 8.027/1990).' },
        { id: '94', question: 'O Código de Ética Profissional do Servidor Público Civil preconiza que a honestidade e a boa-fé são:', options: ['a) Qualidades desejáveis, mas não obrigatórias.', 'b) Princípios fundamentais que devem nortear a conduta do servidor.', 'c) Requisitos para a progressão na carreira.', 'd) Aspectos relevantes apenas para os cargos de chefia.'], correct: 'b', explanation: 'Honestidade e boa-fé são princípios fundamentais (Seção I, inciso II, do Decreto nº 1.171/1994).' },
        { id: '95', question: 'A publicidade dos atos administrativos, segundo o Código de Ética, visa a:', options: ['a) Proteger a intimidade dos servidores.', 'b) Garantir o sigilo das informações relevantes.', 'c) Assegurar a transparência e o controle social.', 'd) Dificultar o acesso da população aos documentos.'], correct: 'c', explanation: 'A publicidade visa assegurar a transparência e o controle social (Seção I, inciso XII, do Decreto nº 1.171/1994).' },
        { id: '96', question: 'A Lei nº 8.112/1990 permite a acumulação de um cargo de professor com:', options: ['a) Dois cargos técnicos.', 'b) Um cargo técnico ou científico.', 'c) Um cargo administrativo.', 'd) Qualquer outro cargo público.'], correct: 'b', explanation: 'A Lei nº 8.112/1990, em consonância com a Constituição Federal, permite a acumulação de um cargo de professor com outro técnico ou científico, desde que haja compatibilidade de horários.' },
        { id: '97', question: 'A licença para tratamento de saúde por período superior a ______ dias exige inspeção médica oficial.', options: ['a) 5', 'b) 10', 'c) 15', 'd) 30'], correct: 'c', explanation: 'A licença para tratamento de saúde por período superior a 15 dias exige inspeção médica oficial (artigo 203 da Lei nº 8.112/1990).' },
        { id: '98', question: 'A Carreira de Magistério Superior compreende as classes de:', options: ['a) Auxiliar, Assistente, Adjunto e Titular.', 'b) Professor I, Professor II e Professor III.', 'c) Ensino Fundamental, Ensino Médio e Ensino Superior.', 'd) Técnico, Tecnólogo e Superior.'], correct: 'a', explanation: 'A Carreira de Magistério Superior é estruturada em classes como Auxiliar, Assistente, Adjunto e Titular, conforme a Lei nº 12.772/2012.' },
        { id: '99', question: 'O Decreto nº 1.171/1994 estabelece que a atuação do servidor público deve ser pautada pela:', options: ['a) Busca incessante por vantagens pessoais.', 'b) Defesa dos interesses de grupos específicos.', 'c) Primazia do interesse público sobre o particular.', 'd) Omissão diante de condutas antiéticas de colegas.'], correct: 'c', explanation: 'A atuação do servidor deve ser pautada pela primazia do interesse público (Seção I, inciso XV, do Decreto nº 1.171/1994).' },
        { id: '100', question: 'Qual das normas estudadas trata especificamente das sanções éticas aplicáveis aos servidores públicos federais?', options: ['a) Lei nº 8.112/1990.', 'b) Lei nº 12.772/2012.', 'c) Lei nº 8.027/1990.', 'd) Decreto nº 1.171/1994.'], correct: 'd', explanation: 'O Decreto nº 1.171/1994, que aprova o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal, trata especificamente das sanções éticas aplicáveis (Seção V). A Lei nº 8.112/1990 trata das penalidades disciplinares, a Lei nº 12.772/2012 do regime de carreiras do magistério, e a Lei nº 8.027/1990 das normas de conduta e da Comissão de Ética.' }
    ];

    // BANCO DE QUESTÕES PARA "QUESTÕES RETIRADAS DE OUTRAS PROVAS"
    const questoesEstudo = [
        // Lei 8.112/1990
        {
            lei: "Lei 8.112/1990",
            numero: 1,
            enunciado: "O servidor responde civil, penal e administrativamente pelos atos praticados no exercício de suas funções?",
            alternativaCorreta: "Sim, conforme art. 121 da Lei 8.112/1990.",
            fonte: "QConcursos"
        },
        {
            lei: "Lei 8.112/1990",
            numero: 2,
            enunciado: "É permitido ao servidor comissionar pessoa estranha à repartição?",
            alternativaCorreta: "Não, conforme art. 117, VI.",
            fonte: "QConcursos"
        },
        {
            lei: "Lei 8.112/1990",
            numero: 3,
            enunciado: "As sanções civil, penal e administrativa podem ser aplicadas cumulativamente ao servidor público?",
            alternativaCorreta: "Sim, conforme art. 121, parágrafo único.",
            fonte: "EstudeGrátis"
        },

        // Lei 12.772/2012
        {
            lei: "Lei 12.772/2012",
            numero: 1,
            enunciado: "Qual a diferença entre progressão e promoção no plano de carreira do magistério federal?",
            alternativaCorreta: "Progressão é mudança de nível na mesma classe; promoção é mudança de classe.",
            fonte: "Questões Estratégicas"
        },
        {
            lei: "Lei 12.772/2012",
            numero: 2,
            enunciado: "O regime de 40 horas semanais pode ser exercido com dois turnos sem dedicação exclusiva?",
            alternativaCorreta: "Sim, conforme a estrutura prevista na Lei 12.772/2012.",
            fonte: "ConcursosAZ"
        },

        // Lei 8.027/1990
        {
            lei: "Lei 8.027/1990",
            numero: 1,
            enunciado: "É dever do servidor público agir com urbanidade, sigilo e lealdade?",
            alternativaCorreta: "Sim, são princípios fundamentais previstos na Lei 8.027/1990.",
            fonte: "QConcursos"
        },
        {
            lei: "Lei 8.027/1990",
            numero: 2,
            enunciado: "Delegar atribuição indevidamente configura falta administrativa?",
            alternativaCorreta: "Sim, é infração disciplinar.",
            fonte: "EstudeGrátis"
        },

        // Decreto 1.171/1994
        {
            lei: "Decreto 1.171/1994",
            numero: 1,
            enunciado: "Quais princípios regem o Código de Ética do Servidor Público?",
            alternativaCorreta: "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
            fonte: "EstudeGrátis"
        },
        {
            lei: "Decreto 1.171/1994",
            numero: 2,
            enunciado: "A quem compete apurar violação ao Código de Ética?",
            alternativaCorreta: "À Comissão de Ética instituída nos órgãos e entidades.",
            fonte: "QConcursos"
        }
    ];

    // BANCO DE QUESTÕES PARA O "SIMULADO EXTRA"
    const allQuestionsExtra = [
        { id: 'E01', question: 'Qual a capital do Brasil?', options: ['a) Rio de Janeiro', 'b) São Paulo', 'c) Brasília', 'd) Belo Horizonte'], correct: 'c', explanation: 'A capital do Brasil é Brasília, localizada no Distrito Federal.' },
        { id: 'E02', question: 'Qual o maior planeta do sistema solar?', options: ['a) Terra', 'b) Marte', 'c) Júpiter', 'd) Saturno'], correct: 'c', explanation: 'Júpiter é o maior planeta do nosso sistema solar.' },
        { id: 'E03', question: 'Quem pintou a Monalisa?', options: ['a) Vincent van Gogh', 'b) Pablo Picasso', 'c) Leonardo da Vinci', 'd) Claude Monet'], correct: 'c', explanation: 'A obra-prima Monalisa foi pintada por Leonardo da Vinci.' },
        { id: 'E04', question: 'Qual o elemento químico com o símbolo O?', options: ['a) Ouro', 'b) Oxigênio', 'c) Ósmio', 'd) Oganessônio'], correct: 'b', explanation: 'O símbolo químico O representa o Oxigênio.' },
        { id: 'E05', question: 'Em que ano o homem pisou na Lua pela primeira vez?', options: ['a) 1959', 'b) 1969', 'c) 1979', 'd) 1989'], correct: 'b', explanation: 'O homem pisou na Lua pela primeira vez em 1969, com a missão Apollo 11.' }
    ];

    // Variável para armazenar as questões do EPT
    let selectedQuestionsIA = []; // Para questões geradas por IA (com opções A, B, C, D)
    let selectedQuestoesEstudo = []; // Para questões retiradas de outras provas (pergunta e resposta)
    let selectedQuestionsExtra = []; // Para questões do simulado extra
    let selectedQuestionsEPT = []; // NOVO: Para questões do simulado EPT

    // Elementos da interface
    const choiceContainer = document.getElementById('choice-container');
    const iaQuestionsButton = document.getElementById('ia-questions-button');
    const provaQuestionsButton = document.getElementById('prova-questions-button');
    const extraQuestionsButton = document.getElementById('extra-questions-button');
    const eptQuestionsButton = document.getElementById('ept-questions-button'); // NOVO BOTÃO EPT

    // Elementos do simulado de IA
    const iaSimuladoContent = document.getElementById('ia-simulado-content');
    const questionsContainerIA = document.getElementById('questions-container');
    const submitButtonIA = document.getElementById('submit-button');
    const restartButtonIA = document.getElementById('restart-button');
    const resultsContainerIA = document.getElementById('results-container');
    const scoreSpanIA = document.getElementById('score');
    const totalQuestionsSpanIA = document.getElementById('total-questions');
    const answerKeyListIA = document.getElementById('answer-key');

    // Elementos do simulado de Prova
    const provaSimuladoContent = document.getElementById('prova-simulado-content');
    const provaQuestionsContainer = document.getElementById('prova-questions-container');
    const submitProvaButton = document.getElementById('submit-prova-button');
    const restartProvaButton = document.getElementById('restart-prova-button');
    const resultsProvaContainer = document.getElementById('results-prova-container');
    const scoreProvaSpan = document.getElementById('score-prova');
    const totalQuestionsProvaSpan = document.getElementById('total-questions-prova');
    const answerKeyProvaList = document.getElementById('answer-key-prova');

    // NOVOS ELEMENTOS PARA O SIMULADO EXTRA
    const extraSimuladoContent = document.getElementById('extra-simulado-content');
    const extraQuestionsContainer = document.getElementById('extra-questions-container');
    const submitExtraButton = document.getElementById('submit-extra-button');
    const restartExtraButton = document.getElementById('restart-extra-button');
    const resultsExtraContainer = document.getElementById('results-extra-container');
    const scoreSpanExtra = document.getElementById('score-extra');
    const totalQuestionsSpanExtra = document.getElementById('total-questions-extra');
    const answerKeyListExtra = document.getElementById('answer-key-extra');

    // NOVOS ELEMENTOS PARA O SIMULADO EPT
    const eptSimuladoContent = document.getElementById('ept-simulado-content'); // Adicionado
    const eptQuestionsContainer = document.getElementById('ept-questions-container'); // Adicionado
    const submitEptButton = document.getElementById('submit-ept-button'); // Adicionado
    const restartEptButton = document.getElementById('restart-ept-button'); // Adicionado
    const resultsEptContainer = document.getElementById('results-ept-container'); // Adicionado
    const scoreSpanEpt = document.getElementById('score-ept'); // Adicionado
    const totalQuestionsSpanEpt = document.getElementById('total-questions-ept'); // Adicionado
    const answerKeyListEpt = document.getElementById('answer-key-ept'); // Adicionado

    // Elemento do contador de acessos
    const accessCounterSpan = document.getElementById('access-counter');

    // --- Lógica do Contador de Acessos ---
    let accessCount = localStorage.getItem('accessCount');

    if (accessCount === null) {
        accessCount = 0;
    } else {
        accessCount = parseInt(accessCount);
    }

    accessCount++;
    localStorage.setItem('accessCount', accessCount);
    accessCounterSpan.textContent = accessCount;

    // --- Funções auxiliares ---
    function getRandomQuestions(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    // --- Funções para o Simulado de IA ---
    function renderIAQuestions() {
        selectedQuestionsIA = getRandomQuestions(allQuestionsIA, 10);
        questionsContainerIA.innerHTML = '';
        selectedQuestionsIA.forEach((q, index) => {
            const questionCard = document.createElement('div');
            questionCard.classList.add('question-card');
            questionCard.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <ol type="a">
                    ${q.options.map((option, i) => `
                        <li>
                            <label>
                                <input type="radio" name="question-${q.id}" value="${String.fromCharCode(97 + i)}">
                                ${option}
                            </label>
                        </li>
                    `).join('')}
                </ol>
            `;
            questionsContainerIA.appendChild(questionCard);
        });
        submitButtonIA.classList.remove('hidden');
        restartButtonIA.classList.add('hidden');
        resultsContainerIA.classList.add('hidden');
    }

    function checkIAAnswers() {
        let score = 0;
        answerKeyListIA.innerHTML = '';

        selectedQuestionsIA.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-${q.id}"]:checked`);
            const listItem = document.createElement('li');
            listItem.classList.add('answer-key-item');

            let userAnswer = '';
            if (selectedOption) {
                userAnswer = selectedOption.value;
            }

            if (userAnswer === q.correct) {
                score++;
                listItem.classList.add('correct');
                listItem.innerHTML = `<strong>Questão ${index + 1}: Correta!</strong> (Sua resposta: ${userAnswer.toUpperCase()}) - ${q.explanation}`;
            } else {
                listItem.classList.add('incorrect');
                const userAnswerDisplay = userAnswer ? userAnswer.toUpperCase() : 'Não respondida';
                listItem.innerHTML = `<strong>Questão ${index + 1}: Incorreta!</strong> (Sua resposta: ${userAnswerDisplay}, Correta: ${q.correct.toUpperCase()}) - ${q.explanation}`;
            }
            answerKeyListIA.appendChild(listItem);

            // Desabilitar radios após a verificação
            document.querySelectorAll(`input[name="question-${q.id}"]`).forEach(radio => {
                radio.disabled = true;
            });
        });

        scoreSpanIA.textContent = score;
        totalQuestionsSpanIA.textContent = selectedQuestionsIA.length;
        resultsContainerIA.classList.remove('hidden');
        submitButtonIA.classList.add('hidden');
        restartButtonIA.classList.remove('hidden');
    }

    // --- Funções para o Simulado de Prova ---
    function renderProvaQuestions() {
        selectedQuestoesEstudo = getRandomQuestions(questoesEstudo, 2); // Sorteia 2 questões
        provaQuestionsContainer.innerHTML = '';
        selectedQuestoesEstudo.forEach((q, index) => {
            const questionCard = document.createElement('div');
            questionCard.classList.add('prova-question-card');
            questionCard.innerHTML = `
                <p>${index + 1}. [${q.lei}] ${q.enunciado}</p>
                <input type="text" name="prova-question${index}" placeholder="Digite sua resposta aqui...">
                <small>Fonte: ${q.fonte}</small>
            `;
            provaQuestionsContainer.appendChild(questionCard);
        });
        submitProvaButton.classList.remove('hidden');
        restartProvaButton.classList.add('hidden');
        resultsProvaContainer.classList.add('hidden');
    }

    function checkProvaAnswers() {
        let score = 0;
        answerKeyProvaList.innerHTML = '';

        selectedQuestoesEstudo.forEach((q, index) => {
            const userAnswerInput = document.querySelector(`input[name="prova-question${index}"]`);
            const userAnswer = userAnswerInput ? userAnswerInput.value.trim() : '';
            const listItem = document.createElement('li');
            listItem.classList.add('answer-key-item');

            const normalizedUserAnswer = userAnswer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const normalizedCorrectAnswer = q.alternativaCorreta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            if (normalizedUserAnswer === normalizedCorrectAnswer) {
                score++;
                listItem.innerHTML = `Questão ${index + 1}: <span class="correct">Correta</span>. Resposta: "${q.alternativaCorreta}"`;
            } else {
                listItem.innerHTML = `Questão ${index + 1}: <span class="incorrect">Incorreta</span>. Sua resposta: "${userAnswer}". Resposta correta: "${q.alternativaCorreta}"`;
            }
            answerKeyProvaList.appendChild(listItem);
        });

        scoreProvaSpan.textContent = score;
        totalQuestionsProvaSpan.textContent = selectedQuestoesEstudo.length;
        resultsProvaContainer.classList.remove('hidden');
        submitProvaButton.classList.add('hidden');
        restartProvaButton.classList.remove('hidden');
    }

    // --- NOVAS FUNÇÕES PARA O SIMULADO EXTRA ---
    function renderExtraQuestions() {
        selectedQuestionsExtra = getRandomQuestions(allQuestionsExtra, 3); // Sorteia 3 questões para o simulado extra
        extraQuestionsContainer.innerHTML = '';
        selectedQuestionsExtra.forEach((q, index) => {
            const questionCard = document.createElement('div');
            questionCard.classList.add('question-card');
            questionCard.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <ol type="a">
                    ${q.options.map((option, i) => `
                        <li>
                            <label>
                                <input type="radio" name="question-extra-${q.id}" value="${String.fromCharCode(97 + i)}">
                                ${option}
                            </label>
                        </li>
                    `).join('')}
                </ol>
            `;
            extraQuestionsContainer.appendChild(questionCard);
        });
        submitExtraButton.classList.remove('hidden');
        restartExtraButton.classList.add('hidden');
        resultsExtraContainer.classList.add('hidden');
    }

    function checkExtraAnswers() {
        let score = 0;
        answerKeyListExtra.innerHTML = '';

        selectedQuestionsExtra.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-extra-${q.id}"]:checked`);
            const listItem = document.createElement('li');
            listItem.classList.add('answer-key-item');

            let userAnswer = '';
            if (selectedOption) {
                userAnswer = selectedOption.value;
            }

            if (userAnswer === q.correct) {
                score++;
                listItem.classList.add('correct');
                listItem.innerHTML = `<strong>Questão ${index + 1}: Correta!</strong> (Sua resposta: ${userAnswer.toUpperCase()}) - ${q.explanation}`;
            } else {
                listItem.classList.add('incorrect');
                const userAnswerDisplay = userAnswer ? userAnswer.toUpperCase() : 'Não respondida';
                listItem.innerHTML = `<strong>Questão ${index + 1}: Incorreta!</strong> (Sua resposta: ${userAnswerDisplay}, Correta: ${q.correct.toUpperCase()}) - ${q.explanation}`;
            }
            answerKeyListExtra.appendChild(listItem);

            document.querySelectorAll(`input[name="question-extra-${q.id}"]`).forEach(radio => {
                radio.disabled = true;
            });
        });

        scoreSpanExtra.textContent = score;
        totalQuestionsSpanExtra.textContent = selectedQuestionsExtra.length;
        resultsExtraContainer.classList.remove('hidden');
        submitExtraButton.classList.add('hidden');
        restartExtraButton.classList.remove('hidden');
    }

    // --- NOVAS FUNÇÕES PARA O SIMULADO EPT ---
    function renderEptQuestions() {
        // Usa allQuestionsEPT do script_ept.js (disponível globalmente)
        selectedQuestionsEPT = getRandomQuestions(allQuestionsEPT, 10); // Sorteia 10 questões para o simulado EPT
        eptQuestionsContainer.innerHTML = '';
        selectedQuestionsEPT.forEach((q, index) => {
            const questionCard = document.createElement('div');
            questionCard.classList.add('question-card');
            questionCard.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <ol type="a">
                    ${q.options.map((option, i) => `
                        <li>
                            <label>
                                <input type="radio" name="question-ept-${q.id}" value="${String.fromCharCode(97 + i)}">
                                ${option}
                            </label>
                        </li>
                    `).join('')}
                </ol>
            `;
            eptQuestionsContainer.appendChild(questionCard);
        });
        submitEptButton.classList.remove('hidden');
        restartEptButton.classList.add('hidden');
        resultsEptContainer.classList.add('hidden');
    }

    function checkEptAnswers() {
        let score = 0;
        answerKeyListEpt.innerHTML = '';

        selectedQuestionsEPT.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-ept-${q.id}"]:checked`);
            const listItem = document.createElement('li');
            listItem.classList.add('answer-key-item');

            let userAnswer = '';
            if (selectedOption) {
                userAnswer = selectedOption.value;
            }

            if (userAnswer === q.correct) {
                score++;
                listItem.classList.add('correct');
                listItem.innerHTML = `<strong>Questão ${index + 1}: Correta!</strong> (Sua resposta: ${userAnswer.toUpperCase()}) - ${q.explanation}`;
            } else {
                listItem.classList.add('incorrect');
                const userAnswerDisplay = userAnswer ? userAnswer.toUpperCase() : 'Não respondida';
                listItem.innerHTML = `<strong>Questão ${index + 1}: Incorreta!</strong> (Sua resposta: ${userAnswerDisplay}, Correta: ${q.correct.toUpperCase()}) - ${q.explanation}`;
            }
            answerKeyListEpt.appendChild(listItem);

            document.querySelectorAll(`input[name="question-ept-${q.id}"]`).forEach(radio => {
                radio.disabled = true;
            });
        });

        scoreSpanEpt.textContent = score;
        totalQuestionsSpanEpt.textContent = selectedQuestionsEPT.length;
        resultsEptContainer.classList.remove('hidden');
        submitEptButton.classList.add('hidden');
        restartEptButton.classList.remove('hidden');
    }
    // --- FIM DAS NOVAS FUNÇÕES EPT ---

    // --- Event Listeners ---
    iaQuestionsButton.addEventListener('click', () => {
        choiceContainer.classList.add('hidden');
        iaSimuladoContent.classList.remove('hidden');
        provaSimuladoContent.classList.add('hidden'); // Garante que outros simulados estejam ocultos
        extraSimuladoContent.classList.add('hidden'); // Garante que outros simulados estejam ocultos
        eptSimuladoContent.classList.add('hidden'); // Garante que o simulado EPT esteja oculto
        renderIAQuestions();
    });

    provaQuestionsButton.addEventListener('click', () => {
        choiceContainer.classList.add('hidden');
        provaSimuladoContent.classList.remove('hidden');
        iaSimuladoContent.classList.add('hidden'); // Garante que outros simulados estejam ocultos
        extraSimuladoContent.classList.add('hidden'); // Garante que outros simulados estejam ocultos
        eptSimuladoContent.classList.add('hidden'); // Garante que o simulado EPT esteja oculto
        renderProvaQuestions();
    });

    extraQuestionsButton.addEventListener('click', () => {
        choiceContainer.classList.add('hidden');
        extraSimuladoContent.classList.remove('hidden');
        iaSimuladoContent.classList.add('hidden'); // Garante que outros simulados estejam ocultos
        provaSimuladoContent.classList.add('hidden'); // Garante que outros simulados estejam ocultos
        eptSimuladoContent.classList.add('hidden'); // Garante que o simulado EPT esteja oculto
        renderExtraQuestions();
    });

    eptQuestionsButton.addEventListener('click', () => { // NOVO EVENT LISTENER PARA EPT
        choiceContainer.classList.add('hidden');
        eptSimuladoContent.classList.remove('hidden');
        iaSimuladoContent.classList.add('hidden'); // Garante que outros simulados estejam ocultos
        provaSimuladoContent.classList.add('hidden'); // Garante que outros simulados estejam ocultos
        extraSimuladoContent.classList.add('hidden'); // Garante que outros simulados estejam ocultos
        renderEptQuestions();
    });


    submitButtonIA.addEventListener('click', checkIAAnswers);
    restartButtonIA.addEventListener('click', () => {
        renderIAQuestions();
        resultsContainerIA.classList.add('hidden');
        submitButtonIA.classList.remove('hidden');
        restartButtonIA.classList.add('hidden');
    });

    submitProvaButton.addEventListener('click', checkProvaAnswers);
    restartProvaButton.addEventListener('click', () => {
        renderProvaQuestions();
        resultsProvaContainer.classList.add('hidden');
        submitProvaButton.classList.remove('hidden');
        restartProvaButton.classList.add('hidden');
    });

    submitExtraButton.addEventListener('click', checkExtraAnswers);
    restartExtraButton.addEventListener('click', () => {
        renderExtraQuestions();
        resultsExtraContainer.classList.add('hidden');
        submitExtraButton.classList.remove('hidden');
        restartExtraButton.classList.add('hidden');
    });

    submitEptButton.addEventListener('click', checkEptAnswers); // NOVO EVENT LISTENER PARA EPT
    restartEptButton.addEventListener('click', () => { // NOVO EVENT LISTENER PARA EPT
        renderEptQuestions();
        resultsEptContainer.classList.add('hidden');
        submitEptButton.classList.remove('hidden');
        restartEptButton.classList.add('hidden');
    });

    // Inicialização: Esconde os simulados e mostra as opções
    iaSimuladoContent.classList.add('hidden');
    provaSimuladoContent.classList.add('hidden');
    extraSimuladoContent.classList.add('hidden');
    eptSimuladoContent.classList.add('hidden'); // Oculta o novo simulado na inicialização
    choiceContainer.classList.remove('hidden');
});
