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
        {
            lei: "Simulado 3",
            numero: 1,
            enunciado: "A Lei nº 8.112/90, ao dispor sobre o regime jurídico, dos servidores públicos federais, estabelece que se o servidor, quando tomar posse, no cargo efetivo, para o qual foi nomeado, deixar de entrar em exercício, no prazo legal, deverá",
            opcoes: ["a) ser exonerado do respectivo cargo.", "b) ser demitido por abandono.", "c) ficar em disponibilidade.", "d) ter cancelada a posse e a nomeação.", "e) ter seu ato de nomeação tornado sem efeito."],
            alternativaCorreta: "a",
            fonte: "QConcursos"
        },
        {
            lei: "Simulado 3",
            numero: 2,
            enunciado: "A Lei nº 8.112/90, que dispõe sobre o regime jurídico, do servidor público federal, prevê várias formas de provimento e vacância de cargos efetivos, algumas das quais, necessariamente, são comuns e simultâneas a ambas, como é o caso",
            opcoes: ["a) do aproveitamento.", "b) da readaptação.", "c) da reintegração", "d) da disponibilidade.", "e) da reversão."],
            alternativaCorreta: "b",
            fonte: "QConcursos"
        },
        {
            lei: "Simulado 3",
            numero: 3,
            enunciado: "Ao servidor público federal efetivo, além do vencimento, poderão ser atribuídas, ainda, vantagens classificadas como indenizações, gratificações e adicionais, algumas das quais, porém, se incorporam à sua remuneração mensal, em caráter permanente e definitivo, como é o caso",
            opcoes: ["a) das diárias.", "b) do adicional por tempo de serviço.", "c) do adicional noturno.", "d) do adicional de insalubridade.", "e) da retribuição pelo exercício de função."],
            alternativaCorreta: "b",
            fonte: "EstudeGrátis"
        },
        {
            lei: "Simulado 3",
            numero: 4,
            enunciado: "Entre as infrações cometidas por servidor público federal, que podem acarretar aplicação da penalidade de demissão, como prevê a Lei nº 8.112/90, pode-se incluir",
            opcoes: ["a) o fato de manter parente seu sob a sua chefia imediata.", "b) a recusa de fé a documento público e insubordinação.", "c) o aliciamento de colega à filiação em sindicato ou partido político.", "d) o abandono de cargo e a inassiduidade habitual.", "e) o exercício de comércio, na condição de cotista ou comanditário."],
            alternativaCorreta: "d",
            fonte: "QConcursos"
        },
        {
            lei: "Simulado 3",
            numero: 5,
            enunciado: "A ação disciplinar, quanto às infrações puníveis com suspensão, conforme expressa disposição contida na Lei nº 8.112/90, prescreve em:",
            opcoes: ["a) 2 anos.", "b) 180 dias.", "c) 120 dias.", "d) 3 anos.", "e) 5 anos."],
            alternativaCorreta: "a",
            fonte: "EstudeGrátis"
        },
        {
            lei: "Simulado 3",
            numero: 6,
            enunciado: "Dentre outras, constituem penas disciplinares aplicáveis aos servidores públicos, a",
            opcoes: ["a) repreensão e férias obrigatórias sem abono.", "b) cassação de aposentadoria e a exoneração.", "c) advertência verbal e licença para fins militares.", "d) destituição de cargo em comissão e o afastamento para outros órgãos.", "e) destituição de função comissionada e a cassação de disponibilidade."],
            alternativaCorreta: "e",
            fonte: "QConcursos"
        },
        {
            lei: "Simulado 3",
            numero: 7,
            enunciado: "Em matéria de acumulação de cargo, é certo que",
            opcoes: ["a) os princípios que regem essa acumulação não se aplicam aos empregos e funções nas empresas paraestatais.", "b) vige a regra da permissividade da acumulação de cargos, empregos e funções públicas, sendo exceção a proibição.", "c) vige a regra da não-acumulação de cargos, empregos e funções públicas, sendo exceção a acumulação.", "d) não será necessário atender à compatibilidade de horários, quando a acumulação for de cargo em comissão ou de caráter temporário.", "e) o aposentado pode, sempre e livremente, acumular provento e remuneração decorrente do exercício de cargo titularizado após a aposentadoria."],
            alternativaCorreta: "c",
            fonte: "EstudeGrátis"
        },
        {
            lei: "Simulado 3",
            numero: 8,
            enunciado: "Abelardo é titular do cargo de médico em hospital mantido por autarquia estadual, no qual trabalha de segunda a quarta-feira, toda semana. Paralelamente, ocupa cargo semelhante em hospital mantido pela Administração direta municipal, no qual trabalha às quintas e sextas-feiras. A acumulação de cargos, nessa hipótese, é",
            opcoes: ["a) permitida, por se tratar de dois cargos de profissional da área da saúde.", "b) permitida, por se tratar de hospitais mantidos por diferentes entes federativos.", "c) permitida, pois a proibição de acumulação não se estende a cargos da Administração indireta.", "d) proibida, pois a acumulação somente é permitida para cargos de professor.", "e) proibida, pois não se podem acumular cargos públicos."],
            alternativaCorreta: "a",
            fonte: "QConcursos"
        },
        {
            lei: "Simulado 3",
            numero: 9,
            enunciado: "NÃO é proibição aplicável ao servidor público:",
            opcoes: ["a) aceitar emprego ou comissão de Estado estrangeiro.", "b) valer-se do cargo para obter proveito pessoal, em detrimento da dignidade da função pública.", "c) delegar funções a pessoas estranhas à repartição, fora dos casos previstos em lei.", "d) ser membro do Conselho de Administração de sociedade de economia mista federal.", "e) retardar injustificadamente a tramitação de processo administrativo."],
            alternativaCorreta: "d",
            fonte: "EstudeGrátis"
        },
        {
            lei: "Simulado 3",
            numero: 10,
            enunciado: "Determinado servidor ausenta-se do serviço, sem causa justificada, pelo período de 45 dias alternados, no prazo de 4 meses. Posteriormente, o servidor retoma normalmente suas atividades. Em razão desse fato, é instaurado processo administrativo disciplinar, que poderá culminar com a aplicação da pena de",
            opcoes: ["a) demissão por inassiduidade habitual.", "b) advertência ou suspensão, por inassiduidade habitual.", "c) demissão por abandono de cargo.", "d) advertência, sem prejuízo da posterior demissão caso o servidor falte mais 15 dias nos próximos 12 meses.", "e) advertência, sem prejuízo da posterior demissão caso o servidor falte mais 15 dias nos próximos 8 meses."],
            alternativaCorreta: "e",
            fonte: "QConcursos"
        },
        {
            lei: "Simulado 4",
            numero: 11,
            enunciado: "IDECAN - 2019 - AGU – Administrador A Lei 8.112/90 dispõe sobre o regime jurídico dos servidores públicos civis da União, das autarquias e das fundações públicas federais. Nesse contexto normativo, assinale o que não é considerado requisito básico para investidura em cargo público.",
            opcoes: ["a) Nacionalidade brasileira", "b) Aptidão física e mental", "c) Gozo dos direitos políticos", "d) Idade mínima de dezoito anos", "e) Quitação com as obrigações militares, eleitorais e fiscais."],
            alternativaCorreta: "e",
            fonte: "IDECAN - 2019 - AGU"
        },
        {
            lei: "Simulado 4",
            numero: 12,
            enunciado: "2019 - IF-MS - Técnico em Tecnologia da Informação. De acordo com a Lei nº 8.112/1990, a remoção é o deslocamento do servidor no âmbito do mesmo quadro, com ou sem mudança de sede. Assinale a alternativa que NÃO descreve uma modalidade de remoção com mudança de sede prevista na Lei nº 8.112/1990.",
            opcoes: ["a) De ofício, no interesse da Administração.", "b) A pedido, independentemente do interesse da Administração, para acompanhamento de cônjuge, servidor público militar da União, que foi deslocado no interesse da Administração.", "c) A pedido, independentemente do interesse da Administração, em virtude de processo seletivo promovido, na hipótese em que o número de interessados for superior ao número de vagas, de acordo com as normas estabelecidas pelo órgão de lotação.", "d) A pedido, independentemente do interesse da Administração, por motivo de saúde de cônjuge do servidor, condicionada à comprovação por junta médica oficial.", "e) A pedido, independentemente do interesse da Administração, para acompanhamento de cônjuge que irá tomar posse em cargo público em outra localidade."],
            alternativaCorreta: "e",
            fonte: "IF-MS - 2019"
        },
        {
            lei: "Simulado 4",
            numero: 13,
            enunciado: "2019. IF-MS - Técnico em Tecnologia da Informação Além da nomeação, a Lei nº 8.112/1990 apresenta outras formas de provimento de cargos. Assinale a alternativa que NÃO contém uma forma de provimento prevista nessa lei.",
            opcoes: ["a) Recondução.", "b) Reversão.", "c) Promoção.", "d) Exoneração", "e) Reintegração."],
            alternativaCorreta: "d",
            fonte: "IF-MS - 2019"
        },
        {
            lei: "Simulado 4",
            numero: 14,
            enunciado: "2019.IF-MS – Pedagogo. A Lei nº 8.112, de 11 de dezembro de 1990, prevê a concessão de afastamentos e licenças aos servidores públicos. Entretanto, a referida Lei determina quais afastamentos e licenças podem ser concedidos aos servidores em estágio probatório. Assinale a alternativa que apresenta um afastamento ou uma licença permitida a um servidor em estágio probatório.",
            opcoes: ["a) Licença por motivo de afastamento do cônjuge ou companheiro.", "b) Licença capacitação.", "c) Licença para tratar de interesses particulares.", "d) Licença para desempenho de mandato classista.", "e) Afastamento para participar de curso de formação decorrente de aprovação em concurso para outro cargo em qualquer esfera da Administração Pública."],
            alternativaCorreta: "e",
            fonte: "IF-MS - 2019"
        },
        {
            lei: "Simulado 4",
            numero: 15,
            enunciado: "FCM - 2018 - IFN-MG - Professor – Administração. Preencha corretamente as lacunas do texto, a seguir, com base nos dispositivos legais do Regime Jurídico dos servidores públicos civis da União, das autarquias e das fundações públicas federais. A _____________ é o deslocamento do servidor, a pedido ou de ofício, no âmbito do mesmo quadro, com ou sem mudança de sede, ao passo que a _____________ é o deslocamento de cargo de provimento efetivo, ocupado ou vago no âmbito do quadro geral de pessoal, para outro órgão ou entidade do mesmo Poder, com prévia apreciação do órgão central do SIPEC. Já a _____________ é o retorno do servidor estável ao cargo anteriormente ocupado. A sequência que preenche corretamente as lacunas do texto é",
            opcoes: ["a) remoção / redistribuição / recondução", "b) remoção / recondução / redistribuição", "c) redistribuição / remoção / recondução", "d) redistribuição / recondução / remoção", "e) recondução / redistribuição / remoção"],
            alternativaCorreta: "a",
            fonte: "IFN-MG - 2018"
        },
        {
            lei: "Simulado 4",
            numero: 16,
            enunciado: "CESPE - 2018 - SEFAZ-RS - Assistente Administrativo Fazendário. Helena, servidora pública, requereu aposentadoria após ter cumprido os requisitos legais para tal. A aposentadoria foi concedida, mas Helena, por ter tido ciência do interesse da administração pública em seu retorno, resolveu solicitar, depois de meses, o retorno às atividades do cargo que desempenhara. Nessa situação hipotética, Helena solicitou",
            opcoes: ["a) readaptação.", "b) reversão.", "c) reintegração.", "d) recondução.", "e) remoção."],
            alternativaCorreta: "b",
            fonte: "SEFAZ-RS - 2018"
        },
        {
            lei: "Simulado 4",
            numero: 17,
            enunciado: "COMVEST UFAM - 2018 - UFAM - Técnico em Enfermagem. A respeito dos direitos e vantagens assegurados ao servidor público federal na Lei nº. 8.112/90, analise as afirmativas, identificando com “V” as verdadeiras e com “F” as falsas, assinalando a seguir a alternativa que possui a sequência CORRETA de cima para baixo: ( ) Remuneração é o vencimento do cargo efetivo, acrescido das vantagens pecuniárias permanentes estabelecidas em lei. ( ) Mediante autorização do servidor, poderá haver consignação em folha de pagamento em favor de terceiros, a critério da administração e com reposição de custos, na forma definida em lei ordinária. ( ) O vencimento do cargo efetivo, acrescido das vantagens de caráter permanente, é irredutível. ( ) Salvo por imposição legal, ou mandado judicial, nenhum desconto incidirá sobre a remuneração, provento, diárias ou indenizações. ( ) O vencimento, a remuneração e o provento não serão objeto de arresto, sequestro ou penhora, exceto nos casos de prestação de alimentos resultante de decisão judicial.",
            opcoes: ["a) F – F – F – V – F", "b) F – V – V – F – V", "c) V – V – V – F – V", "d) V – V – F – V – F", "e) V – F – V – F – V"],
            alternativaCorreta: "e",
            fonte: "UFAM - 2018"
        },
        {
            lei: "Simulado 4",
            numero: 18,
            enunciado: "(CESPE – TCE/PB 2018). A respeito da remuneração dos servidores, assinale a opção correta:",
            opcoes: ["a) O servidor público tem direito ao recebimento de remuneração pelo trabalho noturno em valor superior ao do diurno.", "b) Em razão do princípio da isonomia, é incabível, no serviço público, a aplicação de incentivos específicos para a proteção do mercado de trabalho da mulher.", "c) O servidor público tem direito ao recebimento do décimo terceiro salário com o acréscimo de um terço à remuneração normal.", "d) Os secretários estaduais e municipais são remunerados por subsídios acrescidos de gratificação pessoal.", "e) Durante todo o tempo em que durar o trabalho no serviço público, o órgão responsável pelos pagamentos deverá efetuar o recolhimento de FGTS do servidor."],
            alternativaCorreta: "a",
            fonte: "TCE/PB - 2018"
        },
        {
            lei: "Simulado 4",
            numero: 19,
            enunciado: "FCC – TRT 16ª Região – Analista Judiciário – 2014. Poliana, após tomar posse em determinado cargo público, não entrou em exercício no prazo estabelecido. Nos termos da Lei nº 8.112/90, a conduta de Poliana acarretará sua",
            opcoes: ["a) Demissão.", "b) Exoneração de ofício.", "c) Cassação de disponibilidade.", "d) Suspensão por noventa dias, até que regularize a falta cometida.", "e) Advertência, compelindo-a a regularizar a falta cometida"],
            alternativaCorreta: "b",
            fonte: "TRT 16ª Região - 2014"
        },
        {
            lei: "Simulado 4",
            numero: 20,
            enunciado: "FCC – TRE AL – Analista Judiciário – 2010. Carlos, titular de cargo efetivo junto ao Tribunal Regional Eleitoral, está sendo responsabilizado por valer-se do exercício de suas funções para lograr proveito pessoal em detrimento da dignidade da função pública. Nesse caso, o servidor estará sujeito à pena de:",
            opcoes: ["a) Demissão, incompatibilizando-o para nova investidura em cargo público federal, pelo prazo de cinco anos.", "b) Destituição do cargo público, ficando vedado seu retorno ao serviço público federal, mas podendo concorrer a cargo estadual ou municipal.", "c) Destituição de suas funções e declaração de sua inidoneidade para o serviço público.", "d) Suspensão de noventa dias, vedada a conversão da pena em multa pecuniária.", "e) Demissão, ficando vedada sua investidura em cargo público pelo prazo de dois anos."],
            alternativaCorreta: "a",
            fonte: "TRE AL - 2010"
        },
        {
            lei: "Simulado 4",
            numero: 21,
            enunciado: "FCC – TRE AP – Analista Judiciário – 2011. De acordo com a Lei nº 8.112/90, em regra, João, servidor público civil efetivo, que nunca praticou qualquer infração administrativa, terá a penalidade de advertência escrita aplicada se:",
            opcoes: ["a) Praticar usura sob qualquer de suas formas.", "b) Utilizar pessoal ou recursos materiais da repartição em serviços ou atividades particulares.", "c) Manter sob sua chefia imediata, em cargo ou função de confiança, cônjuge, companheiro ou parente até o segundo grau civil.", "d) Receber propina, comissão, presente ou vantagem de qualquer espécie, em razão de suas atribuições.", "e) Proceder de forma desidiosa."],
            alternativaCorreta: "c",
            fonte: "TRE AP - 2011"
        },
        {
            lei: "Simulado 4",
            numero: 22,
            enunciado: "CESPE. 2017. TRT. 7ª Região. Matilde, servidora pública federal do TRT 7.ª Região, será removida, por interesse do serviço, da 1.ª Vara do Trabalho da Região do Cariri para a 1.ª Vara do Trabalho de Sobral. Sendo a mudança de caráter permanente, caberá ao tribunal compensar as despesas de instalação da servidora na nova sede. Nessa situação, de acordo com a Lei n.º 8.112/1990, Matilde terá o direito à percepção da indenização denominada",
            opcoes: ["a) diárias.", "b) transporte.", "c) auxílio-moradia.", "d) ajuda de custo."],
            alternativaCorreta: "d",
            fonte: "TRT 7ª Região - 2017"
        },
        {
            lei: "Simulado 4",
            numero: 23,
            enunciado: "CESPE. 2016. TER.PI. Com relação aos direitos e vantagens dos servidores públicos federais regidos pela Lei n.º 8.112/1990, assinale a opção correta.",
            opcoes: ["a) Ao servidor ocupante de cargo efetivo investido em cargo de provimento em comissão é devido o pagamento de gratificação pelo seu exercício.", "b) O servidor em débito com o erário que for exonerado e não quitar o débito no prazo de sessenta dias terá seu débito inscrito em dívida ativa.", "c) Integram os vencimentos do cargo efetivo as vantagens pecuniárias permanentes estabelecidas em lei.", "d) A ajuda de custo tem a finalidade de compensar as despesas de instalação do servidor que, no interesse do serviço, passar a ter exercício em nova sede, excluídas as despesas com bagagem e bens pessoais.", "e) Na hipótese de o servidor receber diárias sem se afastar da sede, haverá a obrigatoriedade da restituição integral do valor recebido, salvo se apresentar documentação que comprove a impossibilidade do deslocamento."],
            alternativaCorreta: "b",
            fonte: "TER.PI - 2016"
        },
        {
            lei: "Simulado 4",
            numero: 24,
            enunciado: "UFTM. 2018. De acordo com a Lei n. 8.112/90, assinale a alternativa INCORRETA:",
            opcoes: ["a) O servidor fará jus a trinta dias de férias, que podem ser acumuladas, até o máximo de dois períodos, no caso de necessidade do serviço, ressalvadas as hipóteses em que haja legislação específica.", "b) Para o primeiro período aquisitivo de férias serão exigidos 12 (doze) meses de exercício.", "c) As férias poderão ser parceladas em até três etapas, desde que assim requeridas pelo servidor, e no interesse da administração pública.", "d) O servidor que opera direta e permanentemente com Raios X ou substâncias radioativas gozará 20 (vinte) dias consecutivos de férias, por semestre de atividade profissional, permitida a acumulação."],
            alternativaCorreta: "d",
            fonte: "UFTM - 2018"
        },
        {
            lei: "Simulado 4",
            numero: 25,
            enunciado: "COMVEST UFAM - 2018 - UFAM – Psicólogo. Paulo Castilho é servidor da UFAM, investido no cargo de Técnico-Administrativo em Educação. Há uma semana ele recebeu um convite para prestar serviços à Assembleia Geral da OEA, com sede em Washington, DC, EUA. Para que ele possa atender ao pedido, deverá afastar-se de seu cargo na UFAM, mediante autorização da autoridade competente. Considerando que Paulo se encontra em estágio probatório, ele:",
            opcoes: ["a) não poderá afastar-se de seu cargo até que seja aprovado no estágio probatório.", "b) poderá afastar-se de seu cargo, desde que seja autorizado pela reitoria da UFAM.", "c) não poderá afastar-se de seu cargo por estar situado no estrangeiro o órgão em que vai servir.", "d) poderá afastar-se de seu cargo, desde que seja por período inferior a dois anos.", "e) poderá afastar-se de seu cargo, condicionado à perda total de sua remuneração"],
            alternativaCorreta: "e",
            fonte: "UFAM - 2018"
        },
        {
            lei: "Simulado 5",
            numero: 8,
            enunciado: "(Cespe – PC/MA 2018) Pela suposta prática de falta funcional, foi instaurado procedimento administrativo disciplinar contra Luiz, servidor público estadual. Luiz respondeu, relativamente aos mesmos fatos, a ação penal ajuizada pelo MP local. À luz da disciplina da responsabilização dos servidores públicos, é correto afirmar que, nessa situação hipotética,",
            opcoes: ["a) eventual sentença absolutória criminal fundamentada no fato de a conduta do servidor público não constituir infração penal não impede a aplicação de penalidade em âmbito administrativo, com base na chamada falta residual.", "b) em razão da independência entre as instâncias administrativa e penal, eventual sentença absolutória criminal não repercutirá na esfera administrativa.", "c) eventual sentença absolutória criminal fundamentada na falta de provas implicará absolvição na esfera administrativa.", "d) em razão da possível influência da sentença criminal na instância administrativa, o procedimento administrativo disciplinar deverá permanecer suspenso até o término da ação penal.", "e) eventual sentença extintiva da punibilidade do crime, independentemente de seu fundamento, implicará no arquivamento do procedimento administrativo disciplinar."],
            alternativaCorreta: "a",
            fonte: "PC/MA - 2018"
        },
        {
            lei: "Simulado 5",
            numero: 9,
            enunciado: "(Cespe – PC/MA 2018) De acordo com o Regime Jurídico Único dos Servidores Públicos Civis do Estado do Maranhão — Lei n.º 6.107/1994 —, se um servidor for demitido do serviço público, mas obtiver, pela via judicial, a invalidação de sua demissão, a forma de provimento a que terá de ser submetido esse servidor será a:",
            opcoes: ["a) reversão.", "b) recondução.", "c) remoção.", "d) readaptação.", "e) reintegração."],
            alternativaCorreta: "e",
            fonte: "PC/MA - 2018"
        },
        {
            lei: "Simulado 5",
            numero: 10,
            enunciado: "(Cespe – PC/MA 2018) Tiago, investigador da Polícia Civil do Estado do Maranhão, utilizou, durante seis meses, equipamentos de informática da repartição na qual estava lotado para desenvolver serviços e atividades particulares, com o objetivo de ajudar a esposa dele, que estava montando uma empresa. Nessa situação hipotética, de acordo com o regime disciplinar estabelecido na Lei n.º 8.112/1990 e o Estatuto da Polícia Civil do Estado do Maranhão (PCMA), a conduta de Tiago o sujeita à pena de",
            opcoes: ["a) advertência, a ser aplicada pelo corregedor da PCMA.", "b) demissão, a ser aplicada pelo governador do estado.", "c) suspensão por até cento e oitenta dias, a ser aplicada pelo governador do estado.", "d) suspensão por até noventa dias, a ser aplicada pelo corregedor da PCMA.", "e) suspensão por até noventa dias, a ser aplicada pelo governador do estado."],
            alternativaCorreta: "b",
            fonte: "PC/MA - 2018"
        },
        {
            lei: "Simulado 5",
            numero: 11,
            enunciado: "(Cespe – PC/MA 2018) Julgue os itens a seguir, a respeito das licenças previstas na Lei n.º 6.107/1994, que dispõe sobre o Regime Jurídico Único dos Servidores do Estado do Maranhão. I – Não há previsão legal de licença para tratar de interesses particulares. II – A licença concedida dentro de sessenta dias a partir do término de outra licença da mesma espécie será considerada como prorrogação, desde que o servidor não tenha retornado a suas atividades. III – O servidor que tirar licença para acompanhar cônjuge ou companheiro(a) poderá permanecer no gozo do benefício por período superior a vinte e quatro meses. Assinale a opção correta.",
            opcoes: ["a) Apenas o item I está certo.", "b) Apenas o item II está certo.", "c) Apenas os itens I e III estão certos.", "d) Apenas os itens II e III estão certos.", "e) Todos os itens estão certos."],
            alternativaCorreta: "d",
            fonte: "PC/MA - 2018"
        },
        {
            lei: "Simulado 5",
            numero: 12,
            enunciado: "(Cespe – PC/MA 2018) Considerando a legislação que dispõe sobre o Regime Jurídico Único dos Servidores do Estado do Maranhão, assinale a opção correta acerca das prerrogativas dos servidores quanto a mandatos eletivos.",
            opcoes: ["a) O servidor investido em mandato de prefeito não será afastado do cargo, sendo-lhe facultado optar entre a remuneração do cargo original e a de prefeito.", "b) Havendo compatibilidade de horário, o servidor investido em mandato estadual ou federal perceberá as vantagens de seu cargo original, não podendo ser deste afastado.", "c) O servidor investido em mandato de vereador não poderá optar pela remuneração do cargo eletivo caso haja incompatibilidade de horários.", "d) O servidor que for investido em mandato eletivo poderá contabilizar o tempo de serviço para todos os efeitos, inclusive para fins de promoção por merecimento ou para avaliação de desempenho.", "e) O servidor terá direito a afastamento, sem remuneração, durante o período entre a escolha dele como candidato a cargo eletivo, por convenção partidária, e a véspera do registro de sua candidatura na justiça eleitoral."],
            alternativaCorreta: "e",
            fonte: "PC/MA - 2018"
        },
        {
            lei: "Simulado 5",
            numero: 13,
            enunciado: "(Cespe – PC/MA 2018) De acordo com a Lei n.º 6.107/1994, que dispõe sobre o Regime Jurídico Único dos Servidores Públicos Civis do Estado do Maranhão, a reintegração ocorrerá em decorrência",
            opcoes: ["a) da investidura do servidor estável em cargo de atribuições compatíveis com a limitação que tenha sofrido em sua capacidade física ou mental.", "b) do retorno à atividade de servidor aposentado por invalidez, quando forem declarados insubsistentes os motivos da aposentadoria.", "c) da reinvestidura do servidor estável no cargo anteriormente ocupado, quando invalidada a sua demissão por decisão judicial.", "d) da elevação do servidor de uma classe para outra imediatamente superior, no mesmo cargo, dentro da mesma carreira.", "e) da inabilitação do servidor em estágio probatório relativo a outro cargo."],
            alternativaCorreta: "c",
            fonte: "PC/MA - 2018"
        },
        {
            lei: "Simulado 5",
            numero: 14,
            enunciado: "(Cespe – PC/MA 2018) Acerca da administração pública, julgue os itens a seguir, com base na CF. I A vedação de acúmulo remunerado de cargos, empregos ou funções públicas não se estende às sociedades de economia mista. II O prazo de validade do concurso público será de até dois anos, podendo-se prorrogá-lo por igual período, enquanto houver cadastro de reserva. III Havendo compatibilidade de horários, é permitida a acumulação remunerada de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas. IV O servidor público da administração direta que for afastado para o exercício de mandato eletivo não terá esse tempo contado para o fim de promoção por merecimento. Estão certos apenas os itens",
            opcoes: ["a) I e III.", "b) II e IV.", "c) III e IV.", "d) I, II e III.", "e) I, II e IV"],
            alternativaCorreta: "c",
            fonte: "PC/MA - 2018"
        },
        {
            lei: "Simulado 5",
            numero: 15,
            enunciado: "(Cespe – PC/MA 2018) De acordo com a Lei n.º 8.112/1990, a perícia médica com finalidade administrativa demandará junta médica oficial quando a licença para tratamento de saúde",
            opcoes: ["a) exceder o prazo de cento e vinte dias no período de doze meses.", "b) exceder noventa dias consecutivos", "c) decorrer de causa que possa levar à interdição.", "d) ocorrer a pedido da chefia imediata, contra a vontade do servidor.", "e) ocorrer na vigência de processo administrativo disciplinar."],
            alternativaCorreta: "a",
            fonte: "PC/MA - 2018"
        },
        {
            lei: "Simulado 5",
            numero: 33,
            enunciado: "(Cespe – TRE/MS 2013) João foi demitido do serviço público por ter praticado falta grave. Dois anos depois, conseguiu anular, por meio de ação judicial, a decisão administrativa que o demitiu. Além de anular o ato administrativo, a decisão judicial determinou que João voltasse ao cargo público que ocupava anteriormente. De acordo com essa situação hipotética, assinale a opção que apresenta a forma de investidura utilizada para que João volte a ocupar o cargo público.",
            opcoes: ["a) recondução", "b) aproveitamento", "c) reversão", "d) readaptação", "e) reintegração"],
            alternativaCorreta: "e",
            fonte: "TRE/MS - 2013"
        },
        {
            lei: "Simulado 5",
            numero: 42,
            enunciado: "(Cespe – TRE/MS 2013) Acerca dos requisitos para a investidura em cargo público, assinale a opção correta.",
            opcoes: ["a) Vinte por cento das vagas de todos os concursos públicos devem ser reservadas aos portadores de deficiência, vedada qualquer alegação de incompatibilidade entre a deficiência e o cargo.", "b) Para ser investido em cargo público, o candidato deve ter, ao menos, o ensino fundamental completo.", "c) As universidades podem prover seus cargos com professores estrangeiros.", "d) A idade mínima para a investidura em cargo público é dezesseis anos.", "e) A investidura em o cargo público é concretizada com a publicação da nomeação no Diário Oficial."],
            alternativaCorreta: "c",
            fonte: "TRE/MS - 2013"
        },
        {
            lei: "Simulado 5",
            numero: 43,
            enunciado: "(Cespe – MPE/AC 2014) Acerca do entendimento do STJ sobre o processo administrativo disciplinar, assinale a opção correta.",
            opcoes: ["a) Não é obrigatória a intimação do interessado para apresentar alegações finais após o relatório final de processo administrativo disciplinar.", "b) Não é possível a utilização, em processo administrativo disciplinar, de prova emprestada produzida validamente em processo criminal, enquanto não houver o trânsito em julgado da sentença penal condenatória.", "c) No processo administrativo disciplinar, quando o relatório da comissão processante for contrário às provas dos autos, não se admite que a autoridade julgadora decida em sentido diverso do indicado nas conclusões da referida comissão, mesmo que o faça motivadamente.", "d) Considere que se constate que servidor não ocupante de cargo efetivo tenha-se valido do cargo comissionado para indicar o irmão para contratação por empresa recebedora de verbas públicas. Nessa situação, a penalidade de destituição do servidor do cargo em comissão só será cabível caso se comprove dano ao erário ou proveito pecuniário."],
            alternativaCorreta: "a",
            fonte: "MPE/AC - 2014"
        }
    ];


    let selectedQuestionsIA = []; // Para questões geradas por IA (com opções A, B, C, D)
    let selectedQuestoesEstudo = []; // Para questões retiradas de outras provas (pergunta e resposta)

    // Elementos da interface
    const choiceContainer = document.getElementById('choice-container');
    const iaQuestionsButton = document.getElementById('ia-questions-button');
    const provaQuestionsButton = document.getElementById('prova-questions-button');

    // Elementos do simulado de IA
    const iaSimuladoContent = document.getElementById('ia-simulado-content');
    const questionsContainerIA = document.getElementById('questions-container'); // Renomeado para IA
    const submitButtonIA = document.getElementById('submit-button'); // Renomeado para IA
    const restartButtonIA = document.getElementById('restart-button'); // Renomeado para IA
    const resultsContainerIA = document.getElementById('results-container'); // Renomeado para IA
    const scoreSpanIA = document.getElementById('score'); // Renomeado para IA
    const totalQuestionsSpanIA = document.getElementById('total-questions'); // Renomeado para IA
    const answerKeyListIA = document.getElementById('answer-key'); // Renomeado para IA

    // Elementos do simulado de Prova
    const provaSimuladoContent = document.getElementById('prova-simulado-content');
    const provaQuestionsContainer = document.getElementById('prova-questions-container');
    const submitProvaButton = document.getElementById('submit-prova-button');
    const restartProvaButton = document.getElementById('restart-prova-button');
    const resultsProvaContainer = document.getElementById('results-prova-container');
    const scoreProvaSpan = document.getElementById('score-prova');
    const totalQuestionsProvaSpan = document.getElementById('total-questions-prova');
    const answerKeyProvaList = document.getElementById('answer-key-prova');

    // Funções auxiliares
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
            questionCard.classList.add('question-card'); // Usa a mesma classe para estilização
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
        selectedQuestoesEstudo = getRandomQuestions(questoesEstudo, 10); // Sorteia 10 questões
        provaQuestionsContainer.innerHTML = '';
        selectedQuestoesEstudo.forEach((q, index) => {
            const questionCard = document.createElement('div');
            questionCard.classList.add('prova-question-card');
            questionCard.innerHTML = `
                <p>${index + 1}. [${q.lei}] ${q.enunciado}</p>
                <ol type="a">
                    ${q.opcoes.map((option, i) => `
                        <li>
                            <label>
                                <input type="radio" name="prova-question-${index}" value="${String.fromCharCode(97 + i)}">
                                ${option}
                            </label>
                        </li>
                    `).join('')}
                </ol>
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
            const selectedOption = document.querySelector(`input[name="prova-question-${index}"]:checked`);
            const listItem = document.createElement('li');
            listItem.classList.add('answer-key-item');

            let userAnswer = '';
            if (selectedOption) {
                userAnswer = selectedOption.value;
            }

            if (userAnswer === q.alternativaCorreta) {
                score++;
                listItem.classList.add('correct');
                listItem.innerHTML = `<strong>Questão ${index + 1}: Correta!</strong> (Sua resposta: ${userAnswer.toUpperCase()}) - ${q.opcoes.find(opt => opt.startsWith(q.alternativaCorreta)).substring(3)}`;
            } else {
                listItem.classList.add('incorrect');
                const userAnswerDisplay = userAnswer ? userAnswer.toUpperCase() : 'Não respondida';
                listItem.innerHTML = `<strong>Questão ${index + 1}: Incorreta!</strong> (Sua resposta: ${userAnswerDisplay}, Correta: ${q.alternativaCorreta.toUpperCase()}) - ${q.opcoes.find(opt => opt.startsWith(q.alternativaCorreta)).substring(3)}`;
            }
            answerKeyProvaList.appendChild(listItem);

            // Desabilitar radios após a verificação
            document.querySelectorAll(`input[name="prova-question-${index}"]`).forEach(radio => {
                radio.disabled = true;
            });
        });

        scoreProvaSpan.textContent = score;
        totalQuestionsProvaSpan.textContent = selectedQuestoesEstudo.length;
        resultsProvaContainer.classList.remove('hidden');
        submitProvaButton.classList.add('hidden');
        restartProvaButton.classList.remove('hidden');
    }

    // --- Event Listeners ---
    iaQuestionsButton.addEventListener('click', () => {
        choiceContainer.classList.add('hidden');
        iaSimuladoContent.classList.remove('hidden');
        renderIAQuestions();
    });

    provaQuestionsButton.addEventListener('click', () => {
        choiceContainer.classList.add('hidden');
        provaSimuladoContent.classList.remove('hidden');
        renderProvaQuestions();
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

    // Inicialização: Esconde os simulados e mostra as opções
    iaSimuladoContent.classList.add('hidden');
    provaSimuladoContent.classList.add('hidden');
    choiceContainer.classList.remove('hidden');
});
