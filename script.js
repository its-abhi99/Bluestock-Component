const ctx = document.getElementById('activeClientsChart').getContext('2d');
const activeClientsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'],
        datasets: [
            {
                label: 'Angel One',
                data: [5, 10, 15, 20, 25, 30, 35, 40],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false,
                tension: 0.1
            },
            {
                label: 'Zerodha',
                data: [3, 7, 12, 18, 22, 28, 35, 45],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: false,
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Years'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Active Clients (in lakhs)'
                }
            }
        }
    }
});
