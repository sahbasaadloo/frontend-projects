const toggleBtn = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".nav-list");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});


const ctx = document.getElementById('myChart').getContext('2d');

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

    const generateData = () => months.map(() => Math.floor(Math.random() * 100000));

    const chartData = {
      labels: months,
      datasets: [
        {
          label: 'Expenses',
          data: generateData(),
          borderColor: '#000',
          backgroundColor: 'rgba(0,0,0,0.1)',
          tension: 0.4,
        },
        {
          label: 'Income',
          data: generateData(),
          borderColor: '#00bfff',
          backgroundColor: 'rgba(0,191,255,0.1)',
          tension: 0.4,
        }
      ]
    };

    const chartConfig = {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context) => `$ ${context.formattedValue}`
            }
          }
        },
        scales: {
          y: {
            ticks: {
              callback: value => `$ ${value / 1000}k`
            }
          }
        }
      }
    };

    const myChart = new Chart(ctx, chartConfig);

    function setType(type) {
      // دکمه‌ها رو آپدیت کن
      document.querySelectorAll('#type-filters button').forEach(btn => btn.classList.remove('active'));
      document.querySelector(`#type-filters button[onclick="setType('${type}')"]`).classList.add('active');

      if (type === 'expenses') {
        myChart.data.datasets[0].hidden = false;
        myChart.data.datasets[1].hidden = true;
      } else {
        myChart.data.datasets[0].hidden = true;
        myChart.data.datasets[1].hidden = false;
      }
      myChart.update();
    }

    function setTime(range) {
      document.querySelectorAll('#time-filters button').forEach(btn => btn.classList.remove('active'));
      document.querySelector(`#time-filters button[onclick="setTime('${range}')"]`).classList.add('active');


      myChart.data.datasets.forEach(ds => {
        ds.data = generateData();
      });
      myChart.update();
    }

    
const hamburger = document.getElementById('hamburger-icon');
const menu = document.getElementById('left-menu');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('open');
});
