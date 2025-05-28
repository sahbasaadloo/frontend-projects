# Financial Dashboard

A modern and responsive **Financial Dashboard** built with **HTML**, **CSS**, and **JavaScript**. It displays key financial cards and metrics such as total income, expenses, balance, and recent transactions in a clean UI format.

## Features

- Summary cards (Income, Expenses, Balance)
- Transactions table or list
- Responsive grid layout (CSS Grid / Flexbox)
- light color theme (optional toggle)
- JavaScript-powered dynamic values (can be extended to fetch from APIs)

## Preview

![Dashboard Preview](./pics/5f4ebf8b732%20(1).png)  
![Dashboard Preview](./pics/5f4ebf8b732%20(2).png)  
![Dashboard Preview](./pics/76a742700f3.png) 
![Dashboard Preview](./pics/5f4ebf8b732.png)  
![Dashboard Preview](./pics/5f4ebf8b733.png)  

## Demo

Live demo of this project is available here:  
[Live Demo](https://dainty-lebkuchen-6f6a22.netlify.app)

## 🛠️ Technologies Used

- **HTML5** — Semantic structure
- **CSS3** — Modern layout with Grid & Flexbox
- **JavaScript (ES6+)** — DOM manipulation and dynamic updates
- **Chart.js** — Visual representation of data with charts
## 📊 Chart.js Integration

This dashboard uses Chart.js to visualize financial data (Income and Expenses) across monthly intervals. The chart is dynamic and updates based on selected filters.

```js
const chartData = {
  labels: ['Jan', 'Feb', ..., 'Oct'],
  datasets: [
    {
      label: 'Expenses',
      data: generateData(),
      borderColor: '#000',
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
    {
      label: 'Income',
      data: generateData(),
      borderColor: '#00bfff',
      backgroundColor: 'rgba(0,191,255,0.1)',
    }
  ]
};

const chartConfig = {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
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

new Chart(document.getElementById('myChart'), chartConfig);

financial-dashboard/
│
├── index.html   
├── README.md               
├── style/                   
│   ├── new.css 
│
│
├── js/
│   ├── new.js 
│   └── chart-config.js     
│
├── assets/
│   ├── pics/             
│   │   ├── preview1.png
│   │   ├── preview2.png
│   │   └── ...
│   └── fonts/
│



