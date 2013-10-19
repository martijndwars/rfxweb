var socket = io.connect('http://localhost:8080');

$(function () {
    $('#A1On').click(function () {
        socket.emit('lightOn');
    });

    $('#A1Off').click(function () {
        socket.emit('lightOff');
    });

    socket.on('ACK', function () {
        var alert = $('<div></div>', {
            class: 'alert alert-info'
        }).text('Acknowledgement received');

        $('.panel-body').append(alert);

        setTimeout(function () {
            alert.fadeOut('slow');
        }, 1000);
    });
});