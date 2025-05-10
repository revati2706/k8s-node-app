// index.js (Node.js with Express)

const express = require('express');
const app = express();
const port = 3000;

// Serve the HTML file when accessed on the root URL
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Joyful Poem</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                text-align: center;
                transition: background 3s ease;
            }
            #poem {
                font-size: 24px;
                padding: 50px;
            }
        </style>
    </head>
    <body>
        <div id="poem">
            <p>Roses are red, violets are blue,<br>
               The sun is shining, and so are you!<br>
               Happiness is all around,<br>
               Let’s make it last, let joy resound!</p>
        </div>
        <script>
            // Gradient cycling script
            let colorCycleIndex = 0;
            const gradients = [
                'linear-gradient(to right, #ff7e5f, #feb47b)', 
                'linear-gradient(to right, #6a11cb, #2575fc)', 
                'linear-gradient(to right, #ff6a00, #ee0979)', 
                'linear-gradient(to right, #2c3e50, #fd746c)',
            ];

            function changeGradient() {
                document.body.style.background = gradients[colorCycleIndex];
                colorCycleIndex = (colorCycleIndex + 1) % gradients.length;
            }

            // Start the gradient cycle
            setInterval(changeGradient, 3000);
            changeGradient();  // Set initial gradient
        </script>
    </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


