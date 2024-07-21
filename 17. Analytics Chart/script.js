document.addEventListener('DOMContentLoaded', function () {
    // Sales Chart
    var ctxSales = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(ctxSales, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales',
                data: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Traffic Chart
    var ctxTraffic = document.getElementById('trafficChart').getContext('2d');
    var trafficChart = new Chart(ctxTraffic, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Website Traffic',
                data: [500, 1000, 750, 2000, 1500, 3000, 2500],
                backgroundColor: [
                    '#1abc9c',
                    '#2ecc71',
                    '#3498db',
                    '#9b59b6',
                    '#e74c3c',
                    '#f1c40f',
                    '#34495e'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
