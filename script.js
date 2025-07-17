document.addEventListener('DOMContentLoaded', () => {
    const iaQuestionsButton = document.getElementById('ia-questions-button');
    const provaQuestionsButton = document.getElementById('prova-questions-button');
    const choiceContainer = document.getElementById('choice-container');
    const iaSimuladoContent = document.getElementById('ia-simulado-content');
    const provaSimuladoContent = document.getElementById('prova-simulado-content');
    const questionsContainer = document.getElementById('questions-container');
    const submitButton = document.getElementById('submit-button');
    const restartButton = document.getElementById('restart-button');
    const resultsContainer = document.getElementById('results-container');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const answerKeyOl = document.getElementById('answer-key');
    const accessCounterSpan = document.getElementById('access-counter');

    const provaQuestionsContainer = document.getElementById('prova-questions-container');
    const submitProvaButton = document.getElementById('submit-prova-button');
    const restartProvaButton = document.getElementById('restart-prova-button');
    const resultsProvaContainer = document.getElementById('results-prova-container');
    const scoreProvaSpan = document.getElementById('score-prova');
    const totalQuestionsProvaSpan = document.getElementById('total-questions-prova');
    const answerKeyProvaOl = document.getElementById('answer-key-prova');

    let currentQuestions = [];
    let userAnswers = {};
    const DB_NAME = 'SimuladoDB';
    const DB_VERSION = 1;
    const STORE_NAME = 'iaQuestions';

    // --- Contador de Acessos ---
    let accessCount = localStorage.getItem('accessCount');
    if (accessCount) {
        accessCount = parseInt(accessCount) + 1;
    } else {
        accessCount = 1;
    }
    localStorage.setItem('accessCount', accessCount);
    accessCounterSpan.textContent = accessCount;

    // --- Funções de Banco de Dados (IndexedDB) ---
    function openDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onupgradeneeded = function(event) {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
                }
            };

            request.onsuccess = function(event) {
                resolve(event.target.result);
            };

            request.onerror = function(event) {
                console.error('Erro ao abrir o banco de dados:', event.target.errorCode);
                reject(event.target.errorCode);
            };
        });
    }

    async function addQuestionToDB(question) {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.add(question);

            request.onsuccess = () => resolve();
            request.onerror = () => reject('Erro ao adicionar questão.');
        });
    }

    async function getQuestionsFromDB() {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject('Erro ao buscar questões.');
        });
    }

    async function clearAllQuestionsFromDB() {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.clear();

            request.onsuccess = () => resolve();
            request.onerror = () => reject('Erro ao limpar questões.');
        });
    }

    // --- Funções de Simulado ---

    // Função para simular questões geradas por IA (substitua por sua lógica de IA real)
    async function generateIAQuestions() {
        // Tenta buscar questões do IndexedDB primeiro
        const storedQuestions = await getQuestionsFromDB();
        if (storedQuestions.length > 0) {
            console.log('Questões carregadas do IndexedDB.');
            return storedQuestions;
        }

        // Se não houver questões no IndexedDB, gera novas e armazena
        console.log('Gerando novas questões e armazenando no IndexedDB...');
        const newQuestions = [
            {
                id: 1,
                question: "Qual é a capital da França?",
                options: ["Berlim", "Madri", "Paris", "Roma"],
                answer: "Paris",
                explanation: "Paris é a capital e a cidade mais populosa da França."
            },
            {
                id: 2,
                question: "Qual elemento químico tem o símbolo 'O'?",
                options: ["Ouro", "Oxigênio", "Osmio", "Ósmio"],
                answer: "Oxigênio",
                explanation: "O é o símbolo químico para Oxigênio, um gás vital para a respiração."
            },
            {
                id: 3,
                question: "Quem escreveu 'Dom Quixote'?",
                options: ["Miguel de Cervantes", "William Shakespeare", "Gabriel García Márquez", "Machado de Assis"],
                answer: "Miguel de Cervantes",
                explanation: "'Dom Quixote' é uma das obras mais importantes da literatura espanhola, escrita por Miguel de Cervantes."
            },
            {
                id: 4,
                question: "Qual planeta é conhecido como 'Planeta Vermelho'?",
                options: ["Vênus", "Marte", "Júpiter", "Saturno"],
                answer: "Marte",
                explanation: "Marte é conhecido como o 'Planeta Vermelho' devido à presença de óxido de ferro em sua superfície."
            },
            {
                id: 5,
                question: "Em que ano a Proclamação da República do Brasil ocorreu?",
                options: ["1822", "1889", "1808", "1900"],
                answer: "1889",
                explanation: "A Proclamação da República do Brasil aconteceu em 15 de novembro de 1889, pondo fim ao período imperial."
            }
        ];

        // Adiciona as novas questões ao banco de dados
        for (const q of newQuestions) {
            await addQuestionToDB(q);
        }
        return newQuestions;
    }

    // Funções para questões de prova (simuladas)
    function generateProvaQuestions() {
        return [
            {
                id: 101,
                question: "Em qual continente fica o Egito?",
                options: ["Ásia", "África", "Europa", "América do Sul"],
                answer: "África"
            },
            {
                id: 102,
                question: "Qual o maior oceano do mundo?",
                options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
                answer: "Pacífico"
            },
            {
                id: 103,
                question: "Qual é o nome do processo pelo qual as plantas produzem seu próprio alimento?",
                options: ["Respiração", "Transpiração", "Fotossíntese", "Germinação"],
                answer: "Fotossíntese"
            }
        ];
    }

    function renderQuestions(questions, container, isIA = true) {
        container.innerHTML = '';
        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question-card');
            questionDiv.innerHTML = `
                <p class="question-text">${index + 1}. ${q.question}</p>
                <div class="options-container" data-question-id="${q.id}">
                    ${q.options.map((option, i) => `
                        <label>
                            <input type="${isIA ? 'radio' : 'radio'}" name="question-${q.id}" value="${option}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
            `;
            container.appendChild(questionDiv);
        });
        const submitBtn = isIA ? submitButton : submitProvaButton;
        submitBtn.classList.remove('hidden');
        submitBtn.onclick = () => checkAnswers(questions, container, isIA);
    }

    function checkAnswers(questions, container, isIA) {
        let score = 0;
        userAnswers = {};
        const resultsOl = isIA ? answerKeyOl : answerKeyProvaOl;
        resultsOl.innerHTML = '';

        questions.forEach(q => {
            const selectedOption = container.querySelector(`input[name="question-${q.id}"]:checked`);
            const questionElement = container.querySelector(`.options-container[data-question-id="${q.id}"]`);
            const labels = questionElement.querySelectorAll('label');

            labels.forEach(label => {
                label.classList.remove('correct', 'incorrect');
                const input = label.querySelector('input');
                if (input.value === q.answer) {
                    label.classList.add('correct');
                }
            });

            if (selectedOption) {
                userAnswers[q.id] = selectedOption.value;
                if (selectedOption.value === q.answer) {
                    score++;
                } else {
                    selectedOption.parentElement.classList.add('incorrect');
                }
            }

            const listItem = document.createElement('li');
            let explanationText = isIA && q.explanation ? `<br><em>Explicação: ${q.explanation}</em>` : '';
            listItem.innerHTML = `
                <strong>${q.question}</strong><br>
                Sua resposta: ${userAnswers[q.id] || 'Não respondido'}<br>
                Resposta correta: ${q.answer}
                ${explanationText}
            `;
            resultsOl.appendChild(listItem);
        });

        const scoreEl = isIA ? scoreSpan : scoreProvaSpan;
        const totalQuestionsEl = isIA ? totalQuestionsSpan : totalQuestionsProvaSpan;
        const resultsCont = isIA ? resultsContainer : resultsProvaContainer;
        const submitBtn = isIA ? submitButton : submitProvaButton;
        const restartBtn = isIA ? restartButton : restartProvaButton;

        scoreEl.textContent = score;
        totalQuestionsEl.textContent = questions.length;
        resultsCont.classList.remove('hidden');
        submitBtn.classList.add('hidden');
        restartBtn.classList.remove('hidden');
    }

    function resetQuiz(isIA = true) {
        const questionsCont = isIA ? questionsContainer : provaQuestionsContainer;
        const resultsCont = isIA ? resultsContainer : resultsProvaContainer;
        const submitBtn = isIA ? submitButton : submitProvaButton;
        const restartBtn = isIA ? restartButton : restartProvaButton;
        const answerKeyEl = isIA ? answerKeyOl : answerKeyProvaOl;

        questionsCont.innerHTML = '';
        resultsCont.classList.add('hidden');
        submitBtn.classList.add('hidden');
        restartBtn.classList.add('hidden');
        answerKeyEl.innerHTML = ''; // Limpa o gabarito
        userAnswers = {}; // Limpa as respostas do usuário

        // Volta para a tela de escolha se o quiz foi reiniciado
        if (isIA) {
            iaSimuladoContent.classList.add('hidden');
        } else {
            provaSimuladoContent.classList.add('hidden');
        }
        choiceContainer.classList.remove('hidden');
    }

    // --- Event Listeners ---
    iaQuestionsButton.addEventListener('click', async () => {
        choiceContainer.classList.add('hidden');
        iaSimuladoContent.classList.remove('hidden');
        currentQuestions = await generateIAQuestions();
        renderQuestions(currentQuestions, questionsContainer, true);
    });

    provaQuestionsButton.addEventListener('click', () => {
        choiceContainer.classList.add('hidden');
        provaSimuladoContent.classList.remove('hidden');
        currentQuestions = generateProvaQuestions();
        renderQuestions(currentQuestions, provaQuestionsContainer, false);
    });

    restartButton.addEventListener('click', () => resetQuiz(true));
    restartProvaButton.addEventListener('click', () => resetQuiz(false));

    // Opcional: Adicionar um botão para limpar o IndexedDB (para testes)
    // const clearDbButton = document.createElement('button');
    // clearDbButton.textContent = 'Limpar Questões Salvas (DEV)';
    // clearDbButton.classList.add('action-button');
    // clearDbButton.addEventListener('click', async () => {
    //     await clearAllQuestionsFromDB();
    //     alert('Questões do IndexedDB limpas!');
    // });
    // document.querySelector('.container').appendChild(clearDbButton);
});
