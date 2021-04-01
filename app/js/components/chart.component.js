
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

        setTimeout(() => {
            this.buildChart(chartName, color, value);
        }, 700);
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
        const bodyEl = document.querySelector('body');
        let messageOrder = 0;

        myChart.addEventListener('click', () => {
            const messages = [
                `Thank you for visiting my website!`,
                `Can't wait for be part of your team! :)`,
                `This SPA website was made 100% by me without any frameworks! Isn't awesome?!`,
                `Since you entered in my website, ${Math.floor(Math.random() * 1000)} javascripts frameworks were made!`,
                `Ok, I think you already saw that nothing will happen clicking here...`,
                `One last time: nothing will gonna happen...`,
                `Congratiulations! You completed the quest! :D`,
                `Sorry, I lied... There still nothing. I'll repeat all previous messages.`,
                `Bye and thanks for beeing here playing (?) with my portfolio! Have a great day! :)`
            ];

            alert(messages[messageOrder]);

            if(messageOrder >= messages.length){
                messageOrder = 0;
            } else {
                messageOrder++;
            }
        });

        myChart.addEventListener('mouseenter', () => {
            bodyEl.classList.add('animated-color');
            bodyEl.classList.add(`theme-${id}`);
        })

        myChart.addEventListener('mouseleave', () => {
            bodyEl.classList.remove('animated-color');
            bodyEl.classList.remove(`theme-${id}`);
        })
    }

}

customElements.define('app-chart', ChartComponent);