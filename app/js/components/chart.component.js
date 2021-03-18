
class ChartComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const chartName = this.getAttribute('chartName');
        const color = this.getAttribute('color');
        const image = this.getAttribute('image');
        const value = this.getAttribute('value');

        const template = document.createElement('template');

        template.innerHTML = `
            <div class="hability ${chartName}">
                <div class="circle">
                    <div class="logo">
                        <img src="${image}">
                    </div>
                </div>
                <canvas id="${chartName}" width="70" height="70"></canvas>
            </div>
        `;

        this.appendChild(template.content.cloneNode(true));

        this.buildChart(chartName, color, value);
    }

    buildChart(id, color, value) {
        const ctx = document.getElementById(id).getContext('2d');
        const chart = new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [value, 100 - value],
                    backgroundColor: [color, '#ff000000'],
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

        const myChart = document.querySelector(`.${id}`);

        myChart.addEventListener('click', () => {
            const messages = [
                `Thank you for visiting my website!`,
                `Can't wait for be part of your team! :)`,
                `This SPA website was made 100% by me without any frameworks! Isn't awesome?!`,
                `Since you entered in my website, ${Math.floor(Math.random() * 1000)} javascripts frameworks were made!`,
            ]
        });

        myChart.addEventListener('mouseenter', () => {
            document.querySelector('body').classList.add('animated-color');
            document.querySelector('body').classList.add(`theme-${id}`);
        })

        myChart.addEventListener('mouseleave', () => {
            document.querySelector('body').classList.remove('animated-color');
            document.querySelector('body').classList.remove(`theme-${id}`);
        })
    }

}

customElements.define('app-chart', ChartComponent);