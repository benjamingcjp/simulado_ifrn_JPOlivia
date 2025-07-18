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
        { id: '07', question: 'O adicional noturno, conforme a Lei nº 8.112/1990, é devido pelo trabalho prestado no período compreendido entre:', options: ['a) 20h e 5h do dia seguinte.', 'b) 22h e 6h do dia seguinte.', 'c) 21h e 4h do dia seguinte.', 'd) 23h e 7h do dia seguinte.'], correct: 'b', explanation: 'O artigo 75 da Lei nº 8.112/1990 define o adicional noturno para o trabalho prestado entre 22h e 5h. Correção: A alternativa correta é b) 22h e 5h do dia seguinte.' }, // Correção da alternativa correta para b)
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
        { id: '20', question: 'A recondução é o retorno do servidor estável ao cargo anteriormente ocupado, em decorrência de:', options: ['a) Inabilitação em estágio probatório relativo a outro cargo.', 'b) Reintegração de outro servidor.', 'c) Aproveitamento do servidor em disponibilidade.', 'd) Todas as alternativas anteriores.'], correct: 'a', explanation: 'A recondução ocorre nas três situações mencionadas (artigo 29).' }, // Correção da alternativa correta para a)

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

    // NOVO BANCO DE QUESTÕES PARA "EPT no Brasil"
    const eptQuestions = [
        {
            id: 'ept01',
            question: "Qual lei federal estabelece as diretrizes e bases da Educação Profissional e Tecnológica (EPT) no Brasil, articulando-a com os diferentes níveis e modalidades da educação e com o mundo do trabalho?",
            options: ["a) Lei nº 8.666/93", "b) Lei nº 9.394/96", "c) Lei nº 11.892/2008", "d) Lei nº 10.172/2001"],
            answer: "b",
            explanation: "A Lei de Diretrizes e Bases da Educação Nacional (LDB), Lei nº 9.394/96, é o principal marco legal que organiza a EPT no Brasil."
        },
        {
            id: 'ept02',
            question: "Em qual modalidade de oferta da Educação Profissional Técnica de Nível Médio o estudante cursa o ensino médio e o técnico na mesma instituição, em um currículo único?",
            options: ["a) Concomitante", "b) Subsequente", "c) Integrada", "d) FIC (Formação Inicial e Continuada)"],
            answer: "c",
            explanation: "A modalidade integrada é caracterizada pela união do ensino médio com o técnico em um currículo único na mesma instituição."
        },
        {
            id: 'ept03',
            question: "Qual o principal marco legal que criou os Institutos Federais de Educação, Ciência e Tecnologia no Brasil?",
            options: ["a) Lei nº 9.394/96 (LDB)", "b) Lei nº 11.892/2008", "c) Decreto nº 5.154/2004", "d) Portaria MEC nº 1.000/2010"],
            answer: "b",
            explanation: "A Lei nº 11.892/2008 é a lei de criação dos Institutos Federais de Educação, Ciência e Tecnologia."
        },
        {
            id: 'ept04',
            question: "Um dos princípios fundamentais da EPT é a relação entre trabalho e educação. Qual a concepção dessa relação na EPT?",
            options: ["a) A educação deve apenas capacitar para o mercado de trabalho, sem preocupação com formação integral.", "b) O trabalho é visto como um princípio educativo que desenvolve o ser humano integralmente, para o trabalho e para a vida.", "c) O foco principal é o conhecimento teórico, dissociado da prática laboral.", "d) A educação e o trabalho são esferas completamente separadas e independentes."],
            answer: "b",
            explanation: "Essa é a concepção central da EPT: o trabalho como princípio educativo que forma o indivíduo de maneira completa."
        },
        {
            id: 'ept05',
            question: "Qual dos conceitos abaixo NÃO é uma base conceitual da Educação Profissional e Tecnológica (EPT) no Brasil?",
            options: ["a) Flexibilidade e Adaptabilidade", "b) Integração de Saberes", "c) Inovação e Empreendedorismo", "d) Autodidatismo como única forma de aprendizado"],
            answer: "d",
            explanation: "A EPT valoriza diversas metodologias de ensino, não apenas o autodidatismo como única forma de aprendizado."
        },
        {
            id: 'ept06',
            question: "O Projeto Político-Pedagógico (PPP) de uma instituição educacional é considerado 'político' por qual razão?",
            options: ["a) Porque é elaborado apenas por políticos e não pela comunidade escolar.", "b) Porque reflete os valores e as escolhas da instituição em relação à sociedade e à educação que deseja oferecer.", "c) Porque aborda somente questões administrativas e financeiras.", "d) Porque é um documento que não permite alterações ou discussões."],
            answer: "b",
            explanation: "O caráter político do PPP reside em sua expressão dos valores, compromissos e visão da instituição com a sociedade."
        },
        {
            id: 'ept07',
            question: "Qual característica é fundamental para o PPP do IFRN, refletindo a natureza de uma instituição federal que abrange múltiplos campi?",
            options: ["a) Foco exclusivo em um único nível de ensino (ex: apenas graduação).", "b) Atuação restrita a uma única modalidade de ensino (ex: apenas presencial).", "c) Estrutura multicampi, exigindo que o PPP contemple particularidades locais e mantenha a unidade de princípios.", "d) Adoção de um currículo rígido e imutável para todos os cursos."],
            answer: "c",
            explanation: "A estrutura multicampi é uma característica central dos IFs, e o PPP deve conciliar as especificidades de cada campus com a unidade institucional."
        },
        {
            id: 'ept08',
            question: "A indissociabilidade entre Ensino, Pesquisa e Extensão é uma marca dos Institutos Federais. Como o PPP do IFRN deve tratar essa indissociabilidade?",
            options: ["a) Deve focar apenas no ensino, deixando a pesquisa e a extensão como atividades secundárias.", "b) Deve detalhar como essa integração se dará nos cursos e projetos da instituição.", "c) Deve considerar a pesquisa e a extensão como responsabilidades exclusivas dos professores universitários.", "d) Deve incentivar a separação das três dimensões para melhor organização."],
            answer: "b",
            explanation: "O PPP precisa especificar os mecanismos e formas de articulação entre ensino, pesquisa e extensão na prática institucional."
        },
        {
            id: 'ept09',
            question: "O PPP do IFRN, como o de outras instituições públicas, geralmente prevê a 'Gestão Democrática'. O que isso implica?",
            options: ["a) A gestão é centralizada na figura do diretor geral, sem participação da comunidade.", "b) O documento é construído de forma participativa, envolvendo a comunidade acadêmica.", "c) As decisões são tomadas apenas por representantes dos pais e responsáveis.", "d) O PPP é um documento secreto, conhecido apenas pela alta direção da instituição."],
            answer: "b",
            explanation: "A gestão democrática implica na construção coletiva e participativa do PPP, envolvendo alunos, servidores e pais."
        },
        {
            id: 'ept10',
            question: "A avaliação institucional, conforme as diretrizes de um PPP, tem como principal objetivo:",
            options: ["a) Apenas classificar os alunos e professores com base em desempenho em provas.", "b) Garantir a melhoria contínua da qualidade educacional da instituição.", "c) Atender a exigências burocráticas sem impacto na prática pedagógica.", "d) Promover a competição entre os diferentes campi da instituição."],
            answer: "b",
            explanation: "O principal objetivo da avaliação institucional é aprimorar processos, identificar pontos fortes e fracos para a melhoria contínua da qualidade."
        },
        {
            id: 'ept11',
            question: "Qual dos seguintes termos melhor descreve a natureza jurídica dos Institutos Federais, conferindo-lhes independência na gestão?",
            options: ["a) Empresa Pública", "b) Fundação Pública", "c) Autarquia", "d) Sociedade de Economia Mista"],
            answer: "c",
            explanation: "Os Institutos Federais são autarquias, o que lhes confere autonomia administrativa, financeira e didático-pedagógica."
        },
        {
            id: 'ept12',
            question: "A 'Formação Omnilateral' é uma concepção central do currículo integrado na EPT. O que ela significa?",
            options: ["a) A formação do aluno deve ser direcionada apenas para uma única área profissional específica.", "b) Visa à formação integral do ser humano, em todas as suas dimensões (cognitiva, afetiva, social, ética, política).", "c) Prioriza o conhecimento técnico em detrimento dos saberes humanísticos.", "d) Significa que o ensino deve ser ofertado em todas as modalidades de educação a distância."],
            answer: "b",
            explanation: "A formação omnilateral compreende o desenvolvimento pleno do indivíduo em suas múltiplas dimensões, indo além da formação técnica."
        },
        {
            id: 'ept13',
            question: "Qual o papel da pesquisa na identidade e concepções institucionais dos Institutos Federais?",
            options: ["a) É uma atividade opcional, desenvolvida apenas por alguns professores.", "b) Deve ser realizada apenas em nível de pós-graduação, sem envolvimento do ensino técnico.", "c) É um dos pilares, indissociável do ensino e da extensão, contribuindo para a inovação e o avanço do conhecimento.", "d) Limita-se a estudos de mercado para atender às demandas de empresas privadas."],
            answer: "c",
            explanation: "A indissociabilidade entre ensino, pesquisa e extensão é uma marca registrada dos IFs, com a pesquisa impulsionando a inovação e o conhecimento."
        },
        {
            id: 'ept14',
            question: "O princípio de 'Trabalho como Princípio Educativo' na prática pedagógica do IFRN implica que:",
            options: ["a) O foco principal é apenas preparar o aluno para uma função específica do mercado de trabalho.", "b) A prática pedagógica deve articular teoria e prática, contextualizando os saberes e valorizando a experiência.", "c) O ensino deve ser desvinculado das demandas do mundo do trabalho para garantir a autonomia do aluno.", "d) Os alunos devem aprender apenas fazendo, sem a necessidade de fundamentos teóricos."],
            answer: "b",
            explanation: "Essa concepção entende o trabalho como um meio para a produção de conhecimento, onde a teoria e a prática se complementam na construção do saber."
        },
        {
            id: 'ept15',
            question: "Qual metodologia de ensino é frequentemente priorizada na prática pedagógica orientada pelos princípios do IFRN?",
            options: ["a) Aulas expositivas e transmissivas, com o professor como único detentor do conhecimento.", "b) Metodologias que colocam o estudante no centro do processo de aprendizagem, como resolução de problemas e projetos.", "c) Avaliações somativas como único instrumento de verificação da aprendizagem.", "d) Exclusão de tecnologias digitais no ambiente de sala de aula."],
            answer: "b",
            explanation: "As metodologias ativas, como resolução de problemas e projetos, são valorizadas por promoverem o protagonismo do aluno."
        },
        {
            id: 'ept16',
            question: "O que o currículo integrado busca superar em relação à visão tradicional de ensino?",
            options: ["a) A integração entre teoria e prática, pois defende a separação dos conhecimentos.", "b) A fragmentação do conhecimento em disciplinas isoladas, conectando diferentes áreas do saber.", "c) O papel do professor como mediador, priorizando o autodidatismo exclusivo do aluno.", "d) A contextualização dos saberes, priorizando o conhecimento abstrato e desvinculado da realidade."],
            answer: "b",
            explanation: "O currículo integrado visa à superação da fragmentação disciplinar, buscando a conexão e a articulação dos saberes."
        },
        {
            id: 'ept17',
            question: "No contexto do currículo integrado na EPT, o trabalho é considerado o 'eixo articulador'. O que isso significa?",
            options: ["a) O trabalho é apenas o resultado final da formação do aluno.", "b) O trabalho é a base para a produção de conhecimento e para a integração de diferentes saberes.", "c) O trabalho é uma atividade separada da teoria e das disciplinas escolares.", "d) O foco é apenas no treinamento de habilidades manuais para o trabalho."],
            answer: "b",
            explanation: "O trabalho, como princípio educativo, atua como elemento central que conecta e dá sentido aos diferentes conhecimentos do currículo."
        },
        {
            id: 'ept18',
            question: "Qual é o princípio do currículo integrado que busca a colaboração entre áreas afins e, em sua forma mais avançada, a superação das fronteiras disciplinares?",
            options: ["a) Fragmentação Disciplinar", "b) Contextualização", "c) Interdisciplinaridade e Transdisciplinaridade", "d) Especialização Unidisciplinar"],
            answer: "c",
            explanation: "Esses conceitos expressam a busca por conexões entre disciplinas e, em um nível mais profundo, a superação de suas fronteiras."
        },
        {
            id: 'ept19',
            question: "A Pedagogia Histórico-Crítica é um dos fundamentos do currículo integrado. O que ela defende em relação à educação?",
            options: ["a) Que a educação deve ser neutra, sem se envolver com questões sociais.", "b) Que o conhecimento é inato e não depende da interação com a realidade social.", "c) Que a educação deve partir da realidade social, buscando compreender e transformar essa realidade.", "d) Que o currículo deve ser padronizado e imposto de cima para baixo, sem considerar a realidade local."],
            answer: "c",
            explanation: "Essa pedagogia propõe que a educação se baseie na análise crítica da realidade social para transformá-la."
        },
        {
            id: 'ept20',
            question: "Um dos princípios do currículo integrado é a 'Problematização da Realidade'. Qual a implicação disso para a aprendizagem?",
            options: ["a) A aprendizagem ocorre apenas através da memorização de fatos e conceitos desvinculados de problemas reais.", "b) A aprendizagem ocorre a partir da análise de problemas reais, exigindo a mobilização de diferentes conhecimentos e a busca por soluções.", "c) Os problemas são apresentados de forma simplificada, sem conexão com o mundo do trabalho.", "d) Apenas o professor é responsável por apresentar as soluções para os problemas."],
            answer: "b",
            explanation: "A problematização da realidade coloca o aluno diante de desafios reais, que demandam a aplicação e integração de conhecimentos para encontrar soluções."
        },
        // Novas questões de EPT no Brasil
        {
            id: 'ept21',
            question: "A Educação Profissional e Tecnológica (EPT) no Brasil está regulamentada principalmente por qual Lei?",
            options: ["a) LDB (Lei 9.394/1996)", "b) Lei 11.741/2008", "c) Lei 13.415/2017 (Reforma do Ensino Médio)", "d) Todas as anteriores"],
            answer: "d",
            explanation: "A EPT no Brasil é regulamentada por um conjunto de leis, sendo a LDB a base, complementada por outras como a Lei 11.741/2008 e a Lei 13.415/2017."
        },
        {
            id: 'ept22',
            question: "Qual documento estabelece as Diretrizes Curriculares Nacionais para a Educação Profissional?",
            options: ["a) Parecer CNE/CEB 11/2012", "b) Decreto 5.154/2004", "c) Portaria MEC 1.045/2021", "d) Resolução CNE/CP 01/2020"],
            answer: "a",
            explanation: "O Parecer CNE/CEB 11/2012 estabelece as Diretrizes Curriculares Nacionais para a Educação Profissional Técnica de Nível Médio."
        },
        {
            id: 'ept23',
            question: "A EPT no Brasil é organizada em três níveis. Quais são eles?",
            options: ["a) Básico, Técnico e Tecnológico", "b) Formação Inicial, Técnico e Superior", "c) Básico, Intermediário e Avançado", "d) Fundamental, Médio e Superior"],
            answer: "b",
            explanation: "Os três níveis da EPT são Formação Inicial e Continuada (FIC), Educação Profissional Técnica de Nível Médio e Educação Superior (Tecnológica)."
        },
        {
            id: 'ept24',
            question: "O que caracteriza a **articulação entre educação e trabalho** na EPT?",
            options: ["a) Priorizar apenas o ensino teórico", "b) Integrar conhecimentos científicos e tecnológicos com a prática profissional", "c) Eliminar disciplinas gerais do currículo", "d) Focar apenas em estágios obrigatórios"],
            answer: "b",
            explanation: "A articulação entre educação e trabalho na EPT visa a integração entre a base científica, tecnológica e a aplicação prática no mundo do trabalho."
        },
        {
            id: 'ept25',
            question: "Qual órgão é responsável pela oferta da EPT em nível federal no Brasil?",
            options: ["a) Secretarias Estaduais de Educação", "b) Institutos Federais (IFs) e Rede Federal", "c) Universidades Privadas", "d) SENAI e SENAC"],
            answer: "b",
            explanation: "Os Institutos Federais e toda a Rede Federal de Educação Profissional, Científica e Tecnológica são os principais responsáveis pela oferta da EPT em nível federal."
        },
        {
            id: 'ept26',
            question: "O PPP do IFRN tem como principal objetivo:",
            options: ["a) Definir apenas a estrutura física da instituição", "b) Orientar as práticas pedagógicas e administrativas com base em princípios democráticos", "c) Estabelecer apenas o calendário acadêmico", "d) Limitar-se aos aspectos burocráticos da gestão"],
            answer: "b",
            explanation: "O Projeto Político-Pedagógico (PPP) é um documento que norteia todas as ações da instituição, com base em princípios democráticos e educacionais."
        },
        {
            id: 'ept27',
            question: "Qual princípio **NÃO** faz parte do PPP do IFRN?",
            options: ["a) Indissociabilidade entre ensino, pesquisa e extensão", "b) Educação elitista e excludente", "c) Formação cidadã e profissional", "d) Integração com o mundo do trabalho"],
            answer: "b",
            explanation: "O IFRN, como instituição pública federal, preza pela inclusão e por uma educação de qualidade para todos, combatendo a elitização."
        },
        {
            id: 'ept28',
            question: "O PPP do IFRN deve ser construído com a participação de:",
            options: ["a) Apenas dos professores", "b) Apenas da direção da instituição", "c) Toda a comunidade escolar (docentes, discentes, técnicos e sociedade)", "d) Exclusivamente do MEC"],
            answer: "c",
            explanation: "A gestão democrática do IFRN implica na participação de todos os segmentos da comunidade escolar na construção do PPP."
        },
        {
            id: 'ept29',
            question: "A concepção de educação do IFRN está alinhada com:",
            options: ["a) Apenas o mercado de trabalho", "b) Uma perspectiva crítica e emancipatória", "c) O ensino tecnicista sem reflexão", "d) A formação exclusivamente acadêmica"],
            answer: "b",
            explanation: "A educação no IFRN busca formar cidadãos críticos, capazes de intervir na realidade, e profissionais qualificados com uma visão ampla."
        },
        {
            id: 'ept30',
            question: "O PPP do IFRN prevê a integração entre:",
            options: ["a) Apenas teoria e prática", "b) Ensino, pesquisa e extensão", "c) Apenas atividades técnicas", "d) Disciplinas isoladas sem conexão"],
            answer: "b",
            explanation: "A indissociabilidade entre ensino, pesquisa e extensão é um dos pilares da identidade dos Institutos Federais, e deve estar presente no PPP."
        },
        {
            id: 'ept31',
            question: "Os Institutos Federais, como o IFRN, têm como missão principal:",
            options: ["a) Oferecer apenas cursos técnicos", "b) Promover educação profissional, científica e tecnológica com excelência", "c) Atender apenas demandas locais", "d) Ser uma instituição exclusivamente de pesquisa"],
            answer: "b",
            explanation: "A missão dos IFs é a oferta de educação profissional e tecnológica em todos os seus níveis e modalidades, com base na ciência e tecnologia."
        },
        {
            id: 'ept32',
            question: "Qual valor **NÃO** está presente na identidade do IFRN?",
            options: ["a) Inclusão social", "b) Meritocracia excludente", "c) Sustentabilidade", "d) Compromisso com a sociedade"],
            answer: "b",
            explanation: "A identidade do IFRN é pautada pela inclusão, buscando oferecer oportunidades a todos, não por uma meritocracia excludente."
        },
        {
            id: 'ept33',
            question: "A Rede Federal de Educação Profissional inclui:",
            options: ["a) Apenas os Institutos Federais", "b) IFs, CEFETs e Escolas Técnicas Vinculadas a Universidades", "c) Apenas o SENAI e SENAC", "d) Universidades particulares"],
            answer: "b",
            explanation: "A Rede Federal é composta pelos Institutos Federais, CEFETs e as escolas técnicas vinculadas a universidades federais."
        },
        {
            id: 'ept34',
            question: "O IFRN se destaca por:",
            options: ["a) Oferecer apenas cursos superiores", "b) Integrar diferentes níveis de ensino (básico, técnico e superior)", "c) Ignorar a formação humana", "d) Não possuir vinculação com o MEC"],
            answer: "b",
            explanation: "Uma das características distintivas dos IFs é a oferta de cursos em todos os níveis da educação profissional e tecnológica, da FIC ao ensino superior."
        },
        {
            id: 'ept35',
            question: "A identidade dos IFs está ligada à:",
            options: ["a) Formação tecnicista sem reflexão crítica", "b) Articulação entre educação, ciência, tecnologia e inovação", "c) Exclusão social", "d) Manutenção de privilégios de classe"],
            answer: "b",
            explanation: "Os Institutos Federais se caracterizam pela integração entre ensino, pesquisa, extensão e inovação, contribuindo para o desenvolvimento científico e tecnológico."
        },
        {
            id: 'ept36',
            question: "Qual princípio **NÃO** orienta a prática pedagógica na EPT?",
            options: ["a) Flexibilidade curricular", "b) Fragmentação do conhecimento", "c) Interdisciplinaridade", "d) Contextualização do ensino"],
            answer: "b",
            explanation: "A EPT busca a integração e a contextualização do conhecimento, combatendo a fragmentação disciplinar."
        },
        {
            id: 'ept37',
            question: "A indissociabilidade entre ensino, pesquisa e extensão significa:",
            options: ["a) Que essas dimensões devem ser trabalhadas de forma isolada", "b) Que devem ser integradas para uma formação completa", "c) Que apenas o ensino é importante", "d) Que a extensão é opcional"],
            answer: "b",
            explanation: "A indissociabilidade é a premissa de que ensino, pesquisa e extensão são interdependentes e se complementam para uma formação integral."
        },
        {
            id: 'ept38',
            question: "A avaliação na EPT deve ser:",
            options: ["a) Somente classificatória", "b) Processual, formativa e diagnóstica", "c) Restrita a provas escritas", "d) Desvinculada do projeto pedagógico"],
            answer: "b",
            explanation: "A avaliação na EPT deve ser um processo contínuo que acompanha o desenvolvimento do estudante, com foco na melhoria da aprendizagem."
        },
        {
            id: 'ept39',
            question: "A interdisciplinaridade no ensino técnico busca:",
            options: ["a) Fragmentar os saberes", "b) Integrar conhecimentos de diferentes áreas", "c) Priorizar apenas o conteúdo técnico", "d) Ignorar a base comum nacional"],
            answer: "b",
            explanation: "A interdisciplinaridade visa conectar e articular os conhecimentos de diferentes disciplinas para uma compreensão mais completa da realidade."
        },
        {
            id: 'ept40',
            question: "A prática pedagógica na EPT deve considerar:",
            options: ["a) Apenas as demandas do mercado", "b) A realidade dos estudantes e do território", "c) Exclusivamente o livro didático", "d) Aulas expositivas sem participação ativa"],
            answer: "b",
            explanation: "A EPT deve ser contextualizada e relevante para a realidade local e para os interesses dos estudantes."
        },
        {
            id: 'ept41',
            question: "O currículo integrado na EPT propõe:",
            options: ["a) Separar formação geral e técnica", "b) Articular conhecimentos científicos, tecnológicos e humanísticos", "c) Eliminar disciplinas de base comum", "d) Priorizar apenas habilidades práticas"],
            answer: "b",
            explanation: "O currículo integrado busca superar a dicotomia entre a formação geral e a formação profissional, integrando-as de forma orgânica."
        },
        {
            id: 'ept42',
            question: "Qual documento reforça a importância do currículo integrado?",
            options: ["a) Parecer CNE/CEB 11/2012", "b) Decreto 9.235/2017", "c) Portaria MEC 1.000/2020", "d) Lei 13.415/2017"],
            answer: "a",
            explanation: "O Parecer CNE/CEB 11/2012, que estabelece as DCNs da EPT de Nível Médio, reforça a concepção de currículo integrado."
        },
        {
            id: 'ept43',
            question: "A integração entre formação geral e técnica visa:",
            options: ["a) Reduzir a carga horária", "b) Promover uma visão fragmentada do saber", "c) Formar cidadãos críticos e profissionais qualificados", "d) Priorizar apenas o ensino teórico"],
            answer: "c",
            explanation: "O objetivo é formar indivíduos completos, com conhecimentos técnicos e humanísticos, capazes de atuar no mundo e na sociedade."
        },
        {
            id: 'ept44',
            question: "O currículo integrado no IFRN pressupõe:",
            options: ["a) Disciplinas estanques sem diálogo", "b) Projetos que unam diferentes áreas do conhecimento", "c) Abandono da formação humanística", "d) Foco exclusivo em estágios"],
            answer: "b",
            explanation: "A abordagem por projetos é uma estratégia eficaz para promover a integração e a interdisciplinaridade no currículo."
        },
        {
            id: 'ept45',
            question: "Qual desafio **NÃO** está associado à implementação do currículo integrado?",
            options: ["a) Resistência à mudança de paradigma", "b) Falta de formação docente", "c) Facilidade em fragmentar conhecimentos", "d) Excessiva valorização da interdisciplinaridade"],
            answer: "d",
            explanation: "A excessiva valorização da interdisciplinaridade não é um desafio, mas sim um objetivo da implementação do currículo integrado."
        },
        {
            id: 'ept46',
            question: "A EPT no Brasil tem como um de seus objetivos:",
            options: ["a) Restringir o acesso às classes populares", "b) Promover inclusão social e desenvolvimento regional", "c) Manter o ensino elitizado", "d) Ignorar as demandas do mundo do trabalho"],
            answer: "b",
            explanation: "A EPT é um instrumento de inclusão social e de desenvolvimento econômico e social das regiões."
        },
        {
            id: 'ept47',
            question: "O IFRN segue qual modelo educacional?",
            options: ["a) Tecnicista e conservador", "b) Crítico, integrado e emancipatório", "c) Exclusivamente profissionalizante", "d) Desvinculado da pesquisa"],
            answer: "b",
            explanation: "O modelo educacional dos IFs é pautado pela formação integral, crítica, com a indissociabilidade entre ensino, pesquisa e extensão."
        },
        {
            id: 'ept48',
            question: "A articulação entre teoria e prática na EPT é fundamental porque:",
            options: ["a) Desvaloriza o conhecimento científico", "b) Permite a aplicação do saber em situações reais", "c) Prioriza apenas o ensino teórico", "d) Ignora a formação técnica"],
            answer: "b",
            explanation: "A articulação entre teoria e prática é crucial para que o estudante compreenda e aplique os conhecimentos em contextos reais."
        },
        {
            id: 'ept49',
            question: "A pesquisa na EPT deve:",
            options: ["a) Ser restrita a pós-graduação", "b) Integrar-se ao ensino e extensão desde a formação básica", "c) Ser opcional para os alunos", "d) Não ter vinculação com o currículo"],
            answer: "b",
            explanation: "A pesquisa nos IFs não se restringe à pós-graduação, mas perpassa todos os níveis e modalidades de ensino."
        },
        {
            id: 'ept50',
            question: "A extensão no IFRN tem como propósito:",
            options: ["a) Isolar a instituição da comunidade", "b) Promover diálogo entre escola e sociedade", "c) Restringir-se a eventos internos", "d) Ser atividade complementar sem avaliação"],
            answer: "b",
            explanation: "A extensão é um processo educativo, cultural e científico que articula a instituição com a sociedade, promovendo a troca de saberes."
        },
        {
            id: 'ept51',
            question: "Qual decreto regulamentou a Educação Profissional Técnica de Nível Médio após a LDB?",
            options: ["a) Decreto 2.208/1997", "b) Decreto 5.154/2004", "c) Decreto 6.302/2007", "d) Decreto 9.057/2017"],
            answer: "b",
            explanation: "O Decreto nº 5.154/2004 regulamentou a Educação Profissional Técnica de Nível Médio, estabelecendo as formas de oferta integrada e subsequente."
        },
        {
            id: 'ept52',
            question: "A Lei 11.741/2008 alterou a LDB para:",
            options: ["a) Extinguir a EPT", "b) Flexibilizar a articulação entre ensino médio e profissional", "c) Priorizar apenas o ensino superior", "d) Eliminar a formação técnica integrada"],
            answer: "b",
            explanation: "A Lei nº 11.741/2008 alterou a LDB, tornando a Educação Profissional e Tecnológica parte integrante da educação nacional."
        },
        {
            id: 'ept53',
            question: "O Programa Nacional de Acesso ao Ensino Técnico e Emprego (PRONATEC) foi criado pela:",
            options: ["a) Lei 12.513/2011", "b) Medida Provisória 746/2016", "c) Portaria MEC 1.144/2016", "d) Lei 13.415/2017"],
            answer: "a",
            explanation: "O PRONATEC foi instituído pela Lei nº 12.513/2011 com o objetivo de expandir, interiorizar e democratizar a oferta de cursos de EPT."
        },
        {
            id: 'ept54',
            question: "A Reforma do Ensino Médio (Lei 13.415/2017) impactou a EPT ao:",
            options: ["a) Ampliar a oferta de itinerários formativos técnicos", "b) Extinguir os cursos técnicos integrados", "c) Proibir a integração com o ensino regular", "d) Reduzir a carga horária prática"],
            answer: "a",
            explanation: "A Reforma do Ensino Médio, ao introduzir os itinerários formativos, ampliou as possibilidades de oferta de cursos técnicos."
        },
        {
            id: 'ept55',
            question: "Qual documento define as Diretrizes Curriculares Nacionais para a Formação Inicial e Continuada (FIC)?",
            options: ["a) Resolução CNE/CEB 01/2021", "b) Parecer CNE/CEB 11/2012", "c) Portaria MEC 1.045/2021", "d) Decreto 9.057/2017"],
            answer: "b",
            explanation: "O Parecer CNE/CEB 11/2012 também traz as diretrizes para a Formação Inicial e Continuada (FIC)."
        },
        {
            id: 'ept56',
            question: "A **contextualização** no ensino profissional significa:",
            options: ["a) Ignorar a realidade local", "b) Relacionar conteúdos com situações do mundo do trabalho", "c) Priorizar apenas aulas expositivas", "d) Fragmentar teoria e prática"],
            answer: "b",
            explanation: "Contextualizar significa trazer a realidade e as demandas do mundo do trabalho para o processo de ensino-aprendizagem."
        },
        {
            id: 'ept57',
            question: "A **flexibilidade curricular** na EPT permite:",
            options: ["a) Adaptar o currículo às demandas regionais e dos estudantes", "b) Eliminar disciplinas básicas", "c) Padronizar rigidamente os cursos", "d) Ignorar a Base Nacional Comum Curricular (BNCC)"],
            answer: "a",
            explanation: "A flexibilidade permite que o currículo seja ajustado às necessidades específicas de cada local e público-alvo."
        },
        {
            id: 'ept58',
            question: "A **interdisciplinaridade** é essencial na EPT porque:",
            options: ["a) Isola saberes técnicos e gerais", "b) Promove a integração de conhecimentos para resolver problemas complexos", "c) Desvaloriza a formação humana", "d) Restringe-se a projetos opcionais"],
            answer: "b",
            explanation: "A interdisciplinaridade permite que os alunos utilizem conhecimentos de diversas áreas para abordar e solucionar problemas reais."
        },
        {
            id: 'ept59',
            question: "A **avaliação formativa** prioriza:",
            options: ["a) Classificar alunos por notas", "b) Identificar dificuldades e redirecionar o processo de ensino-aprendizagem", "c) Aplicar apenas provas escritas", "d) Excluir estudantes com baixo rendimento"],
            answer: "b",
            explanation: "A avaliação formativa tem como foco principal o acompanhamento do aprendizado e a identificação de pontos que precisam ser aprimorados."
        },
        {
            id: 'ept60',
            question: "A **indissociabilidade entre ensino, pesquisa e extensão** no IFRN busca:",
            options: ["a) Formar técnicos sem visão crítica", "b) Integrar conhecimentos acadêmicos e sociais", "c) Restringir pesquisas a pós-graduação", "d) Ignorar a comunidade externa"],
            answer: "b",
            explanation: "A indissociabilidade garante que o conhecimento produzido na instituição seja aplicado e que a comunidade se beneficie desse conhecimento."
        },
        {
            id: 'ept61',
            question: "Um exemplo de currículo integrado é:",
            options: ["a) Oferecer Português e Matemática separadamente da formação técnica", "b) Desenvolver projetos que articulam Matemática e conhecimentos de Enfermagem", "c) Eliminar disciplinas de ciências humanas", "d) Priorizar apenas estágios supervisionados"],
            answer: "b",
            explanation: "Projetos que conectam diferentes áreas do saber são uma forma de promover a integração curricular."
        },
        {
            id: 'ept62',
            question: "Qual desafio **NÃO** é comum na implementação do currículo integrado?",
            options: ["a) Resistência docente à interdisciplinaridade", "b) Falta de infraestrutura para aulas práticas", "c) Excessiva valorização da integração teoria-prática", "d) Dificuldade em planejar coletivamente"],
            answer: "c",
            explanation: "A integração teoria-prática é um objetivo do currículo integrado, e sua valorização excessiva não é um desafio."
        },
        {
            id: 'ept63',
            question: "A Base Nacional Comum Curricular (BNCC) para o Ensino Médio:",
            options: ["a) Ignora a EPT", "b) Oferece diretrizes para integrar formação geral e técnica", "c) Restringe-se a cursos acadêmicos", "d) Elimina componentes técnicos"],
            answer: "b",
            explanation: "A BNCC para o Ensino Médio, com a oferta de itinerários formativos, busca integrar a formação geral básica com a EPT."
        },
        {
            id: 'ept64',
            question: "O eixo **\"Trabalho, Ciência, Tecnologia e Cultura\"** no currículo integrado reforça:",
            options: ["a) A separação entre conhecimentos científicos e profissionais", "b) A integração crítica dessas dimensões na formação", "c) O foco exclusivo em habilidades manuais", "d) A desvalorização da pesquisa"],
            answer: "b",
            explanation: "Esse eixo demonstra a preocupação em formar o estudante de maneira completa, relacionando o trabalho com a produção científica, tecnológica e cultural."
        },
        {
            id: 'ept65',
            question: "A carga horária dos cursos técnicos integrados deve incluir:",
            options: ["a) Apenas disciplinas técnicas", "b) Equilíbrio entre formação geral e específica", "c) Exclusão de componentes artísticos", "d) Redução da prática profissional"],
            answer: "b",
            explanation: "Os cursos integrados visam a uma formação equilibrada entre os conhecimentos da base comum nacional e os da formação técnica."
        },
        {
            id: 'ept66',
            question: "Além do ensino, qual pilar **NÃO** faz parte da missão dos IFs?",
            options: ["a) Pesquisa aplicada", "b) Extensão comunitária", "c) Formação exclusivamente teórica", "d) Inovação tecnológica"],
            answer: "c",
            explanation: "A missão dos IFs abrange ensino, pesquisa, extensão e inovação, com uma abordagem que vai além da formação meramente teórica."
        },
        {
            id: 'ept67',
            question: "O IFRN tem como um de seus valores institucionais:",
            options: ["a) Meritocracia excludente", "b) Sustentabilidade socioambiental", "c) Centralização decisória", "d) Desvinculação do território"],
            answer: "b",
            explanation: "A sustentabilidade socioambiental é um valor crescente e importante para as instituições de ensino, incluindo o IFRN."
        },
        {
            id: 'ept68',
            question: "A Rede Federal de EPT inclui:",
            options: ["a) Apenas os 38 Institutos Federais", "b) IFs, CEFETs e escolas técnicas vinculadas a universidades", "c) Apenas o SENAI e SENAC", "d) Instituições privadas"],
            answer: "b",
            explanation: "A Rede Federal é um conjunto de instituições públicas, incluindo IFs, CEFETs e escolas técnicas ligadas a universidades."
        },
        {
            id: 'ept69',
            question: "A autonomia dos IFs permite:",
            options: ["a) Criar cursos sem regulamentação", "b) Adaptar-se às demandas locais dentro da legislação", "c) Ignorar diretrizes nacionais", "d) Excluir disciplinas obrigatórias"],
            answer: "b",
            explanation: "A autonomia é fundamental para que os IFs possam responder às especificidades de suas regiões, sempre em conformidade com a legislação educacional."
        },
        {
            id: 'ept70',
            question: "O IFRN destaca-se por:",
            options: ["a) Oferecer apenas cursos superiores", "b) Integrar ensino médio, técnico e superior", "c) Não realizar pesquisas", "d) Ter atuação restrita a Natal"],
            answer: "b",
            explanation: "A integração dos diferentes níveis e modalidades de ensino é uma característica marcante dos Institutos Federais, incluindo o IFRN, que possui múltiplos campi."
        }
    ];

    // NOVO BANCO DE QUESTÕES PARA "Leis 8027 e 1171"
    const leis8027e1171Questions = [
        {
            id: 'lei8027_01',
            question: 'De acordo com a Lei nº 8.027/1990, qual das seguintes condutas é considerada falta administrativa punível com advertência por escrito?',
            options: ['a) Utilizar pessoal ou recursos materiais da repartição em serviços particulares.', 'b) Ausentar-se do serviço durante o expediente, sem prévia autorização do superior imediato.', 'c) Abandonar o cargo por mais de trinta dias consecutivos.', 'd) Aceitar propinas ou presentes em razão de suas atribuições.', 'e) Participar da gerência ou administração de empresa privada e transacionar com o Estado.'],
            answer: 'b',
            explanation: 'A conduta de ausentar-se do serviço sem prévia autorização é punível com advertência.'
        },
        {
            id: 'lei8027_02',
            question: 'Conforme a Lei nº 8.027/1990, a penalidade de demissão a bem do serviço público pode ser aplicada nos seguintes casos, EXCETO:',
            options: ['a) Valer-se de informação obtida em função do cargo para proveito pessoal.', 'b) Exercer comércio, exceto como acionista, cotista ou comanditário.', 'c) Apresentar inassiduidade habitual, com falta ao serviço por vinte dias interpoladamente em seis meses.', 'd) Ofensa física, em serviço, a servidor público ou a particular, salvo em legítima defesa.', 'e) Recusar fé a documentos públicos.'],
            answer: 'e',
            explanation: 'Recusar fé a documentos públicos não está diretamente listado como causa de demissão a bem do serviço público na Lei nº 8.027/1990.'
        },
        {
            id: 'lei8027_03',
            question: 'Segundo a Lei nº 8.027/1990, qual é a definição de servidor público para os efeitos desta lei?',
            options: ['a) A pessoa que presta serviços temporários ao Estado.', 'b) A pessoa legalmente investida em cargo ou emprego público na administração direta, autarquias ou fundações públicas.', 'c) Aquele que exerce função de confiança em qualquer esfera do poder.', 'd) O empregado de empresa pública ou sociedade de economia mista.', 'e) Qualquer cidadão que preste serviço voluntário ao Estado.'],
            answer: 'b',
            explanation: 'A Lei nº 8.027/1990 define servidor público como a pessoa legalmente investida em cargo ou emprego público na administração direta, autarquias ou fundações públicas.'
        },
        {
            id: 'lei8027_04',
            question: 'A Lei nº 8.027/1990 estabelece que são deveres dos servidores públicos civis, EXCETO:',
            options: ['a) Ser leal às instituições a que servir.', 'b) Guardar sigilo sobre assuntos da repartição, desde que envolvam questões relativas à segurança pública e da sociedade.', 'c) Manter conduta compatível com a moralidade pública.', 'd) Delegar a pessoa estranha à repartição atribuição de sua competência.', 'e) Representar contra ilegalidade, omissão ou abuso de poder.'],
            answer: 'd',
            explanation: 'Delegar atribuição a pessoa estranha à repartição é uma vedação ou proibição, não um dever do servidor público.'
        },
        {
            id: 'lei8027_05',
            question: 'De acordo com a Lei nº 8.027/1990, a penalidade de suspensão por até 90 (noventa) dias pode ser aplicada em qual das seguintes situações?',
            options: ['a) Improbidade administrativa.', 'b) Acumulação remunerada de cargos públicos.', 'c) Retirar, sem prévia autorização por escrito, qualquer documento ou objeto da repartição.', 'd) Revelação de segredo de que teve conhecimento em função do cargo.', 'e) Abandono de cargo.'],
            answer: 'c',
            explanation: 'Retirar, sem prévia autorização, documento ou objeto da repartição é passível de suspensão.'
        },
        {
            id: 'lei8027_06',
            question: 'Conforme a Lei nº 8.027/1990, a penalidade de advertência converte-se automaticamente em suspensão por trinta dias em caso de:',
            options: ['a) Improbidade administrativa.', 'b) Reincidência.', 'c) Insubordinação grave em serviço.', 'd) Ofensa física.', 'e) Procedimento desidioso.'],
            answer: 'b',
            explanation: 'A reincidência em infração punível com advertência pode levar à conversão em suspensão.'
        },
        {
            id: 'lei8027_07',
            question: 'Segundo a Lei nº 8.027/1990, qual das seguintes infrações é considerada grave e passível de aplicação da pena de demissão?',
            options: ['a) Recusar fé a documentos públicos.', 'b) Manter sob sua chefia imediata cônjuge, companheiro ou parente até o segundo grau civil.', 'c) Acumulação remunerada de cargos, empregos e funções públicas vedada pela Constituição Federal.', 'd) Praticar comércio de compra e venda de bens ou serviços no recinto da repartição.', 'e) Atuar como procurador ou intermediário junto a repartições públicas.'],
            answer: 'c',
            explanation: 'A acumulação remunerada de cargos, empregos e funções públicas vedada pela Constituição Federal é uma infração grave passível de demissão.'
        },
        {
            id: 'lei8027_08',
            question: 'A Lei nº 8.027/1990 dispõe que o servidor público civil responde civil, penal e administrativamente pelo exercício irregular de suas atribuições. As cominações civis, penais e disciplinares podem:',
            options: ['a) Apenas cumular-se, sendo dependentes entre si.', 'b) Apenas cumular-se, sendo independentes entre si.', 'c) Não cumular-se, sendo dependentes entre si.', 'd) Não cumular-se, sendo independentes entre si.', 'e) Apenas cumular-se, se houver conveniência para o serviço.'],
            answer: 'b',
            explanation: 'As responsabilidades civil, penal e administrativa são independentes e podem cumular-se.'
        },
        {
            id: 'lei8027_09',
            question: 'De acordo com a Lei nº 8.027/1990, qual o prazo para o servidor público apresentar a declaração de cargos públicos, empregos e funções que exerce, no ato de investidura?',
            options: ['a) Trinta dias após a investidura.', 'b) Sessenta dias após a investidura.', 'c) No ato de investidura.', 'd) Noventa dias após a investidura.', 'e) A qualquer tempo, desde que antes da posse.'],
            answer: 'c',
            explanation: 'A declaração deve ser apresentada no ato de investidura no cargo.'
        },
        {
            id: 'lei8027_10',
            question: 'Conforme a Lei nº 8.027/1990, a aplicação da penalidade de suspensão acarreta:',
            options: ['a) A conversão em multa, na base de cinquenta por cento da remuneração do servidor.', 'b) O cancelamento automático do valor da remuneração do servidor, durante o período de vigência da suspensão.', 'c) A destituição do cargo em comissão.', 'd) A instauração de processo administrativo disciplinar.', 'e) A exoneração do cargo.'],
            answer: 'b',
            explanation: 'A suspensão acarreta o cancelamento automático da remuneração durante o período de sua vigência.'
        },
        {
            id: 'decreto1171_11',
            question: 'De acordo com o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal (Decreto nº 1.171/1994), qual dos seguintes princípios NÃO deve nortear o servidor público?',
            options: ['a) Dignidade.', 'b) Decoro.', 'c) Zelo.', 'd) Eficácia.', 'e) Conveniência.'],
            answer: 'e',
            explanation: 'A conveniência não é um princípio ético fundamental para a conduta do servidor público, ao contrário dos demais listados.'
        },
        {
            id: 'decreto1171_12',
            question: 'Segundo o Decreto nº 1.171/1994, o servidor público não terá que decidir somente entre o legal e o ilegal, o justo e o injusto, o conveniente e o inconveniente, o oportuno e o inoportuno, mas principalmente entre:',
            options: ['a) O certo e o errado.', 'b) O honesto e o desonesto.', 'c) O público e o privado.', 'd) O ético e o antiético.', 'e) O moral e o imoral.'],
            answer: 'b',
            explanation: 'A decisão fundamental é entre o honesto e o desonesto, conforme o Código de Ética.'
        },
        {
            id: 'decreto1171_13',
            question: 'Conforme o Código de Ética (Decreto nº 1.171/1994), a moralidade da Administração Pública deve ser acrescida da ideia de que o fim é sempre:',
            options: ['a) O lucro.', 'b) O bem comum.', 'c) A eficiência.', 'd) A legalidade.', 'e) A impessoalidade.'],
            answer: 'b',
            explanation: 'O fim último da moralidade administrativa é sempre o bem comum.'
        },
        {
            id: 'decreto1171_14',
            question: 'O Decreto nº 1.171/1994 estabelece que a publicidade de qualquer ato administrativo constitui requisito de eficácia e moralidade, salvo em casos de:',
            options: ['a) Interesse particular do servidor.', 'b) Segurança nacional, investigações policiais ou interesse superior do Estado e da Administração Pública.', 'c) Conveniência da Administração Pública.', 'd) Decisão unilateral do servidor.', 'e) Acordo entre as partes envolvidas.'],
            answer: 'b',
            explanation: 'A publicidade é regra, mas há exceções para segurança nacional, investigações policiais ou interesse superior do Estado e da Administração Pública.'
        },
        {
            id: 'decreto1171_15',
            question: 'De acordo com o Código de Ética (Decreto nº 1.171/1994), qual das seguintes condutas é considerada vedada ao servidor público?',
            options: ['a) Desempenhar a tempo as atribuições do cargo.', 'b) Ser probo, reto, leal e justo.', 'c) Pleitear, solicitar, provocar, sugerir ou receber qualquer tipo de ajuda financeira para si ou terceiros.', 'd) Manter-se atualizado com as instruções e normas de serviço.', 'e) Apresentar-se ao trabalho com vestimentas adequadas.'],
            answer: 'c',
            explanation: 'Pleitear ou receber qualquer tipo de ajuda financeira para si ou terceiros é uma conduta vedada pelo Código de Ética.'
        },
        {
            id: 'decreto1171_16',
            question: 'Segundo o Decreto nº 1.171/1994, a pena aplicável ao servidor público pela Comissão de Ética é a de:',
            options: ['a) Advertência.', 'b) Suspensão.', 'c) Demissão.', 'd) Censura.', 'e) Multa.'],
            answer: 'd',
            explanation: 'A única penalidade que uma Comissão de Ética pode aplicar é a censura.'
        },
        {
            id: 'decreto1171_17',
            question: 'Conforme o Código de Ética (Decreto nº 1.171/1994), a Comissão de Ética é encarregada de orientar e aconselhar sobre a ética profissional do servidor, e também de:',
            options: ['a) Aplicar penas de demissão.', 'b) Conhecer de consultas, denúncias ou representações formuladas contra servidor por suposto descumprimento às normas.', 'c) Julgar processos administrativos disciplinares.', 'd) Realizar investigações criminais.', 'e) Definir a remuneração dos servidores.'],
            answer: 'b',
            explanation: 'A Comissão de Ética também é responsável por conhecer de consultas, denúncias ou representações sobre o descumprimento das normas éticas.'
        },
        {
            id: 'decreto1171_18',
            question: 'O Decreto nº 1.171/1994 dispõe que a infração das normas deste Código de Ética importará em censura e, conforme a gravidade, em:',
            options: ['a) Apenas censura.', 'b) Exoneração ou destituição de cargo em comissão, ou função de confiança, ou, ainda, em outras sanções previstas em lei.', 'c) Suspensão por até 90 dias.', 'd) Advertência por escrito.', 'e) Multa.'],
            answer: 'b',
            explanation: 'Além da censura, a infração pode resultar em exoneração, destituição de cargo em comissão/função de confiança, ou outras sanções previstas em lei.'
        },
        {
            id: 'decreto1171_19',
            question: 'Para os fins do Código de Ética (Decreto nº 1.171/1994), servidor público é todo aquele que, por força de lei, contrato ou qualquer ato jurídico, preste serviços de natureza:',
            options: ['a) Apenas permanente.', 'b) Apenas temporária.', 'c) Permanente, temporária ou excepcional, ainda que sem retribuição financeira.', 'd) Apenas com retribuição financeira.', 'e) Exclusivamente em órgãos da administração direta.'],
            answer: 'c',
            explanation: 'O Código abrange serviços de natureza permanente, temporária ou excepcional, mesmo sem retribuição financeira.'
        },
        {
            id: 'decreto1171_20',
            question: 'De acordo com o Decreto nº 1.171/1994, o servidor público que tiver conhecimento de qualquer ato ou fato que possa configurar desvio ético, deverá comunicá-lo:',
            options: ['a) À autoridade superior.', 'b) Ao Ministério Público.', 'c) À Comissão de Ética do seu órgão ou entidade.', 'd) À Polícia Federal.', 'e) À imprensa.'],
            answer: 'c',
            explanation: 'O servidor deve comunicar à Comissão de Ética do seu órgão ou entidade qualquer desvio ético.'
        }
    ];


    let selectedQuestionsIA = []; // Para questões geradas por IA (com opções A, B, C, D)
    let selectedQuestoesEstudo = []; // Para questões retiradas de outras provas (pergunta e resposta)
    let selectedEptQuestions = []; // Para questões de EPT no Brasil
    let selectedLeis8027e1171Questions = []; // NOVO: Para questões de Leis 8027 e 1171


    // Elementos da interface
    const choiceContainer = document.getElementById('choice-container');
    const iaQuestionsButton = document.getElementById('ia-questions-button');
    const provaQuestionsButton = document.getElementById('prova-questions-button');
    const eptBrasilButton = document.getElementById('ept-brasil-button'); // Novo botão
    const leis8027e1171Button = document.getElementById('leis-8027-1171-button'); // NOVO: Botão Leis 8027 e 1171

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

    // Elementos do simulado EPT no Brasil
    const eptBrasilSimuladoContent = document.getElementById('ept-brasil-simulado-content');
    const eptQuestionsContainer = document.getElementById('ept-questions-container');
    const submitEptButton = document.getElementById('submit-ept-button');
    const restartEptButton = document.getElementById('restart-ept-button');
    const resultsEptContainer = document.getElementById('results-ept-container');
    const scoreEptSpan = document.getElementById('score-ept');
    const totalQuestionsEptSpan = document.getElementById('total-questions-ept');
    const answerKeyEptList = document.getElementById('answer-key-ept');

    // NOVO: Elementos do simulado Leis 8027 e 1171
    const leis8027e1171SimuladoContent = document.getElementById('leis-8027-1171-simulado-content');
    const leis8027e1171QuestionsContainer = document.getElementById('leis-8027-1171-questions-container');
    const submitLeis8027e1171Button = document.getElementById('submit-leis-8027-1171-button');
    const restartLeis8027e1171Button = document.getElementById('restart-leis-8027-1171-button');
    const resultsLeis8027e1171Container = document.getElementById('results-leis-8027-1171-container');
    const scoreLeis8027e1171Span = document.getElementById('score-leis-8027-1171');
    const totalQuestionsLeis8027e1171Span = document.getElementById('total-questions-leis-8027-1171');
    const answerKeyLeis8027e1171List = document.getElementById('answer-key-leis-8027-1171');

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
                <ol type="a" class="options-container" data-question-id="${q.id}">
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
            const questionOptionsContainer = document.querySelector(`.options-container[data-question-id="${q.id}"]`);
            const labels = questionOptionsContainer.querySelectorAll('label');

            let userAnswer = '';
            if (selectedOption) {
                userAnswer = selectedOption.value;
            }

            labels.forEach(label => {
                const input = label.querySelector('input');
                if (input.value === q.correct) {
                    label.classList.add('correct');
                }
                if (selectedOption && input.value === selectedOption.value && selectedOption.value !== q.correct) {
                    label.classList.add('incorrect');
                }
            });

            if (userAnswer === q.correct) {
                score++;
                listItem.innerHTML = `<strong>Questão ${index + 1}: Correta!</strong> (Sua resposta: ${userAnswer.toUpperCase()}) - ${q.explanation}`;
            } else {
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
            questionCard.classList.add('question-card'); // Usando a mesma classe de estilo
            questionCard.innerHTML = `
                <p class="question-text">${index + 1}. [${q.lei}] ${q.enunciado}</p>
                <input type="text" id="prova-answer-${index}" class="text-answer-input" placeholder="Digite sua resposta aqui...">
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
            const userAnswerInput = document.getElementById(`prova-answer-${index}`);
            const userAnswer = userAnswerInput ? userAnswerInput.value.trim() : '';
            const listItem = document.createElement('li');
            listItem.classList.add('answer-key-item');

            // Comparação case-insensitive e sem acentos para maior flexibilidade
            const normalizedUserAnswer = userAnswer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const normalizedCorrectAnswer = q.alternativaCorreta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            if (normalizedUserAnswer === normalizedCorrectAnswer) {
                score++;
                listItem.innerHTML = `<strong>Questão ${index + 1}: Correta!</strong> Resposta: "${q.alternativaCorreta}"`;
                listItem.classList.add('correct');
            } else {
                listItem.innerHTML = `<strong>Questão ${index + 1}: Incorreta!</strong> Sua resposta: "${userAnswer}". Correta: "${q.alternativaCorreta}"`;
                listItem.classList.add('incorrect');
            }
            answerKeyProvaList.appendChild(listItem);

            if (userAnswerInput) {
                userAnswerInput.disabled = true; // Desabilita o campo de texto
            }
        });

        scoreProvaSpan.textContent = score;
        totalQuestionsProvaSpan.textContent = selectedQuestoesEstudo.length;
        resultsProvaContainer.classList.remove('hidden');
        submitProvaButton.classList.add('hidden');
        restartProvaButton.classList.remove('hidden');
    }

    // --- Funções para o Simulado EPT no Brasil ---
    function renderEptQuestions() {
        selectedEptQuestions = getRandomQuestions(eptQuestions, 5); // Sorteia 5 questões de EPT
        eptQuestionsContainer.innerHTML = '';
        selectedEptQuestions.forEach((q, index) => {
            const questionCard = document.createElement('div');
            questionCard.classList.add('question-card');
            questionCard.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <ol type="a" class="options-container" data-question-id="${q.id}">
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
            eptQuestionsContainer.appendChild(questionCard);
        });
        submitEptButton.classList.remove('hidden');
        restartEptButton.classList.add('hidden');
        resultsEptContainer.classList.add('hidden');
    }

    function checkEptAnswers() {
        let score = 0;
        answerKeyEptList.innerHTML = '';

        selectedEptQuestions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-${q.id}"]:checked`);
            const listItem = document.createElement('li');
            listItem.classList.add('answer-key-item');
            const questionOptionsContainer = document.querySelector(`.options-container[data-question-id="${q.id}"]`);
            const labels = questionOptionsContainer.querySelectorAll('label');

            let userAnswer = '';
            if (selectedOption) {
                userAnswer = selectedOption.value;
            }

            labels.forEach(label => {
                const input = label.querySelector('input');
                if (input.value === q.answer) { // Use q.answer para EPT
                    label.classList.add('correct');
                }
                if (selectedOption && input.value === selectedOption.value && selectedOption.value !== q.answer) {
                    label.classList.add('incorrect');
                }
            });

            if (userAnswer === q.answer) {
                score++;
                listItem.innerHTML = `<strong>Questão ${index + 1}: Correta!</strong> (Sua resposta: ${userAnswer.toUpperCase()}) - ${q.explanation}`;
            } else {
                const userAnswerDisplay = userAnswer ? userAnswer.toUpperCase() : 'Não respondida';
                listItem.innerHTML = `<strong>Questão ${index + 1}: Incorreta!</strong> (Sua resposta: ${userAnswerDisplay}, Correta: ${q.answer.toUpperCase()}) - ${q.explanation}`;
            }
            answerKeyEptList.appendChild(listItem);

            // Desabilitar radios após a verificação
            document.querySelectorAll(`input[name="question-${q.id}"]`).forEach(radio => {
                radio.disabled = true;
            });
        });

        scoreEptSpan.textContent = score;
        totalQuestionsEptSpan.textContent = selectedEptQuestions.length;
        resultsEptContainer.classList.remove('hidden');
        submitEptButton.classList.add('hidden');
        restartEptButton.classList.remove('hidden');
    }

    // NOVO: Funções para o Simulado Leis 8027 e 1171
    function renderLeis8027e1171Questions() {
        selectedLeis8027e1171Questions = getRandomQuestions(leis8027e1171Questions, 5); // Sorteia 5 questões
        leis8027e1171QuestionsContainer.innerHTML = '';
        selectedLeis8027e1171Questions.forEach((q, index) => {
            const questionCard = document.createElement('div');
            questionCard.classList.add('question-card');
            questionCard.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <ol type="a" class="options-container" data-question-id="${q.id}">
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
            leis8027e1171QuestionsContainer.appendChild(questionCard);
        });
        submitLeis8027e1171Button.classList.remove('hidden');
        restartLeis8027e1171Button.classList.add('hidden');
        resultsLeis8027e1171Container.classList.add('hidden');
    }

    function checkLeis8027e1171Answers() {
        let score = 0;
        answerKeyLeis8027e1171List.innerHTML = '';

        selectedLeis8027e1171Questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-${q.id}"]:checked`);
            const listItem = document.createElement('li');
            listItem.classList.add('answer-key-item');
            const questionOptionsContainer = document.querySelector(`.options-container[data-question-id="${q.id}"]`);
            const labels = questionOptionsContainer.querySelectorAll('label');

            let userAnswer = '';
            if (selectedOption) {
                userAnswer = selectedOption.value;
            }

            labels.forEach(label => {
                const input = label.querySelector('input');
                if (input.value === q.answer) {
                    label.classList.add('correct');
                }
                if (selectedOption && input.value === selectedOption.value && selectedOption.value !== q.answer) {
                    label.classList.add('incorrect');
                }
            });

            if (userAnswer === q.answer) {
                score++;
                listItem.innerHTML = `<strong>Questão ${index + 1}: Correta!</strong> (Sua resposta: ${userAnswer.toUpperCase()}) - ${q.explanation}`;
            } else {
                const userAnswerDisplay = userAnswer ? userAnswer.toUpperCase() : 'Não respondida';
                listItem.innerHTML = `<strong>Questão ${index + 1}: Incorreta!</strong> (Sua resposta: ${userAnswerDisplay}, Correta: ${q.answer.toUpperCase()}) - ${q.explanation}`;
            }
            answerKeyLeis8027e1171List.appendChild(listItem);

            // Desabilitar radios após a verificação
            document.querySelectorAll(`input[name="question-${q.id}"]`).forEach(radio => {
                radio.disabled = true;
            });
        });

        scoreLeis8027e1171Span.textContent = score;
        totalQuestionsLeis8027e1171Span.textContent = selectedLeis8027e1171Questions.length;
        resultsLeis8027e1171Container.classList.remove('hidden');
        submitLeis8027e1171Button.classList.add('hidden');
        restartLeis8027e1171Button.classList.remove('hidden');
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

    // Event Listener para o novo botão "EPT no Brasil"
    eptBrasilButton.addEventListener('click', () => {
        choiceContainer.classList.add('hidden');
        eptBrasilSimuladoContent.classList.remove('hidden');
        renderEptQuestions(); // Renderiza as questões de EPT
    });

    // NOVO: Event Listener para o botão "Leis 8027 e 1171"
    leis8027e1171Button.addEventListener('click', () => {
        choiceContainer.classList.add('hidden');
        leis8027e1171SimuladoContent.classList.remove('hidden');
        renderLeis8027e1171Questions(); // Renderiza as questões das Leis 8027 e 1171
    });

    submitButtonIA.addEventListener('click', checkIAAnswers);
    restartButtonIA.addEventListener('click', () => {
        iaSimuladoContent.classList.add('hidden'); // Esconde o conteúdo de IA
        choiceContainer.classList.remove('hidden'); // Volta para a tela de escolha
        // O renderIAQuestions será chamado novamente se o usuário escolher IA
    });

    submitProvaButton.addEventListener('click', checkProvaAnswers);
    restartProvaButton.addEventListener('click', () => {
        provaSimuladoContent.classList.add('hidden'); // Esconde o conteúdo de Prova
        choiceContainer.classList.remove('hidden'); // Volta para a tela de escolha
        // O renderProvaQuestions será chamado novamente se o usuário escolher Prova
    });

    // Event Listeners para o Simulado EPT no Brasil
    submitEptButton.addEventListener('click', checkEptAnswers);
    restartEptButton.addEventListener('click', () => {
        eptBrasilSimuladoContent.classList.add('hidden'); // Esconde o conteúdo de EPT
        choiceContainer.classList.remove('hidden'); // Volta para a tela de escolha
        // O renderEptQuestions será chamado novamente se o usuário escolher EPT
    });

    // NOVO: Event Listeners para o Simulado Leis 8027 e 1171
    submitLeis8027e1171Button.addEventListener('click', checkLeis8027e1171Answers);
    restartLeis8027e1171Button.addEventListener('click', () => {
        leis8027e1171SimuladoContent.classList.add('hidden'); // Esconde o conteúdo das Leis 8027 e 1171
        choiceContainer.classList.remove('hidden'); // Volta para a tela de escolha
        // O renderLeis8027e1171Questions será chamado novamente se o usuário escolher Leis 8027 e 1171
    });


    // Inicialização: Esconde todos os simulados e mostra as opções
    iaSimuladoContent.classList.add('hidden');
    provaSimuladoContent.classList.add('hidden');
    eptBrasilSimuladoContent.classList.add('hidden'); // Certifica que EPT está oculto no início
    leis8027e1171SimuladoContent.classList.add('hidden'); // NOVO: Certifica que Leis 8027 e 1171 está oculto no início

    choiceContainer.classList.remove('hidden'); // Garante que a escolha inicial é visível
});
