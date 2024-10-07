// Gráfico de Produção (Meta X Realizado)
const ctxProducao = document.getElementById('metaRealizadoChart').getContext('2d');
const metaRealizadoChart = new Chart(ctxProducao, {
    type: 'bar',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07'],
        datasets: [{
            label: 'Produção Realizada',
            data: [80, 90, 85, 70, 95, 80, 100],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            barThickness: 40
        }, {
            label: 'Meta',
            data: [100, 100, 100, 100, 100, 100, 100],
            type: 'line',
            borderColor: '#ff6384',
            backgroundColor: 'transparent',
            pointBackgroundColor: '#ff6384',
            pointRadius: 5,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Produção'
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (context.dataset.type === 'line') {
                            label += ': ' + context.raw;
                        } else {
                            label += ': ' + context.raw;
                        }
                        return label;
                    }
                }
            }
        }
    }
});

// Gráfico de Disponibilidade (Diário)
const ctxDisponibilidade = document.getElementById('disponibilidadeChart').getContext('2d');
const disponibilidadeChart = new Chart(ctxDisponibilidade, {
    type: 'line',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07'],
        datasets: [{
            label: 'Disponibilidade (%)',
            data: [95, 90, 85, 80, 88, 91, 93],
            borderColor: '#4caf50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderWidth: 2,
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: '#4caf50'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Disponibilidade (%)'
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.raw + '%';
                    }
                }
            }
        }
    }
});

// Gráfico de Paradas (Diário)
const ctxParadas = document.getElementById('paradasChart').getContext('2d');
const paradasChart = new Chart(ctxParadas, {
    type: 'bar',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07'],
        datasets: [{
            label: 'Minutos Parados',
            data: [30, 15, 25, 10, 20, 5, 15],
            backgroundColor: 'rgba(255, 193, 7, 0.5)',
            borderColor: 'rgba(255, 193, 7, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Minutos Parados'
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.raw + ' minutos';
                    }
                }
            }
        }
    }
});

// Gráfico de Eficiência (Diário)
const ctxEficiencia = document.getElementById('eficienciaChart').getContext('2d');
const eficienciaChart = new Chart(ctxEficiencia, {
    type: 'line',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07'],
        datasets: [{
            label: 'Eficiência (%)',
            data: [85, 80, 90, 88, 92, 87, 89],
            borderColor: '#2196f3',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderWidth: 2,
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: '#2196f3'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Eficiência (%)'
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.raw + '%';
                    }
                }
            }
        }
    }
});

// Gráfico de Máquina com Mais Minutos Parados
const ctxMaquinasParadas = document.getElementById('maquinasParadasChart').getContext('2d');
const maquinasParadasChart = new Chart(ctxMaquinasParadas, {
    type: 'bar',
    data: {
        labels: ['Orisol A', 'Orisol B', 'Orisol C'],
        datasets: [{
            label: 'Minutos Parados',
            data: [120, 90, 60],
            backgroundColor: 'rgba(244, 67, 54, 0.5)',
            borderColor: 'rgba(244, 67, 54, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Minutos Parados'
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.raw + ' minutos';
                    }
                }
            }
        }
    }
});

// Gráfico de Principais Motivos de Parada (Colunas)
const ctxMotivosParadas = document.getElementById('motivosParadasChart').getContext('2d');
const motivosParadasChart = new Chart(ctxMotivosParadas, {
    type: 'bar',
    data: {
        labels: ['Manutenção', 'Falta de Materiais', 'Problemas Elétricos'],
        datasets: [{
            label: 'Minutos Parados',
            data: [40, 35, 25],
            backgroundColor: 'rgba(76, 175, 80, 0.5)',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Minutos Parados'
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.raw + ' minutos';
                    }
                }
            }
        }
    }
});

