$(document).ready(function () {
    function addTask(taskText) {
        if (taskText.trim() === '') return;
        const task = $('<li></li>').text(taskText);
        task.on('click', function () {
            $(this).toggleClass('completed');
        });
        $('#taskList').append(task);
        $('#taskInput').val('');
    }

    $('#addTaskBtn').on('click', function () {
        const taskText = $('#taskInput').val();
        addTask(taskText);
    });

    $('#taskInput').on('keypress', function (e) {
        if (e.which === 13) {
            const taskText = $('#taskInput').val();
            addTask(taskText);
        }
    });

    $('#showAll').on('click', function () {
        $('#taskList li').show();
        $('.filters button').removeClass('active');
        $(this).addClass('active');
    });

    $('#showActive').on('click', function () {
        $('#taskList li').show().filter('.completed').hide();
        $('.filters button').removeClass('active');
        $(this).addClass('active');
    });

    $('#showCompleted').on('click', function () {
        $('#taskList li').hide().filter('.completed').show();
        $('.filters button').removeClass('active');
        $(this).addClass('active');
    });

    $('#clearCompleted').on('click', function () {
        $('#taskList li.completed').remove();
    });
});
