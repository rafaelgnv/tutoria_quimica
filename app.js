// Script principal da plataforma QuimicaMente

document.addEventListener('DOMContentLoaded', function() {
    // Inicialização da plataforma
    console.log('QuimicaMente - Plataforma de tutoria em química inicializada!');
    
    // Sistema de notificação para demonstração
    setTimeout(function() {
        alert('Bem-vindo à QuimicaMente! Temos 3 aulas ao vivo acontecendo agora. Confira!');
    }, 3000);
    
    // Interação com cards de tutores
    initTutorCards();
    
    // Inicialização do sistema de agendamento (demonstração)
    initAgendarAulas();
    
    // Simulação de contador de visualizações em tempo real para aulas ao vivo
    initLiveCounter();
});

// Função para inicializar interação com cards de tutores
function initTutorCards() {
    const tutorCards = document.querySelectorAll('.tutor-card');
    
    tutorCards.forEach(card => {
        card.addEventListener('click', function() {
            // Em uma implementação real, isso abriria um modal com mais informações do tutor
            const tutorName = card.querySelector('h3').textContent;
            const tutorArea = card.querySelector('.tutor-info p').textContent;
            console.log(`Tutor selecionado: ${tutorName} (${tutorArea})`);
            
            // Aqui poderia carregar dados do tutor via API e exibir em um modal
            // showTutorModal(tutorId);
        });
    });
}

// Função para inicializar sistema de agendamento
function initAgendarAulas() {
    const agendarButtons = document.querySelectorAll('.tutor-card .btn');
    
    agendarButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Evita acionar o evento do card
            const tutorCard = this.closest('.tutor-card');
            const tutorName = tutorCard.querySelector('h3').textContent;
            const tutorArea = tutorCard.querySelector('.tutor-info p').textContent;
            
            // Em uma implementação real, abriria um calendário de agendamento
            alert(`Você está agendando uma aula com ${tutorName} (${tutorArea}). 
                  Em um sistema real, abriria um calendário para seleção de horários disponíveis.`);
            
            // Aqui chamaria uma função para exibir o calendário
            // showScheduleCalendar(tutorId);
        });
    });
}

// Simulação de contador de visualizações em tempo real
function initLiveCounter() {
    // Atualiza número de alunos em aulas ao vivo a cada 10 segundos
    setInterval(function() {
        const viewCounters = document.querySelectorAll('.class-meta div:first-child');
        
        viewCounters.forEach(counter => {
            // Se for uma aula ao vivo, incrementa o número de alunos
            if (counter.textContent.includes('alunos')) {
                const currentCount = parseInt(counter.textContent.match(/\d+/)[0]);
                
                // 30% de chance de aumentar o contador a cada ciclo
                if (Math.random() > 0.7) {
                    counter.textContent = `👥 ${currentCount + 1} alunos`;
                }
            }
        });
    }, 10000);
}

// Função para busca de tutores (a ser implementada)
function searchTutors(query) {
    console.log(`Buscando tutores com o termo: ${query}`);
    // Implementação da busca
}

// Função para filtrar aulas por assunto (a ser implementada)
function filterClasses(subject) {
    console.log(`Filtrando aulas pelo assunto: ${subject}`);
    // Implementação do filtro
}

// Função para exibir modal de tutor (a ser implementada)
function showTutorModal(tutorId) {
    console.log(`Exibindo informações do tutor ID: ${tutorId}`);
    // Implementação do modal
}

// Função para exibir calendário de agendamento (a ser implementada)
function showScheduleCalendar(tutorId) {
    console.log(`Exibindo calendário para agendar com tutor ID: ${tutorId}`);
    // Implementação do calendário
}
