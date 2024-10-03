$(document).ready(function() {
    $('#taskForm').on('submit', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const taskText = $('#taskInput').val();
        if (taskText) {
            $('#taskList').append(`<li>${taskText}</li>`);
            $('#taskInput').val(''); // Limpa o campo de entrada
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed'); // Adiciona ou remove a classe 'completed'
    });
});
