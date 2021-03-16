function initAboutMe() {
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: [70, 30],
                backgroundColor: [
                    'red',
                    '#ffffff00'
                ],
            }]
        },
        options: {
            responsive: false,
            tooltips: {
                enabled: false
            },
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        },
    });
}

function setView(id) {
    app.setView(app.views[id])
}