# Pokenea Application

## Description
The Pokenea Application is a simple web application built with Node.js and Express.js to showcase random information about Pokeneas. It generates random Pokeneas and displays their details either in JSON format or as an HTML page.

## Features
- Randomly generate Pokeneas data
- Display Pokeneas information in JSON format
- Render Pokeneas information in HTML format with images and text
- Responsive design using Bootstrap

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Jhonnathan93/Taller2.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Taller2
   ```
3. Install dependencies:
   You can install nodejs [here](https://nodejs.org/en/).
   After
   ```bash
   npm install
   ```

## Usage
1. Start the server:
   ```bash
   node main.js
   ```
2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application (or the port that you are using).

## Routes
- `/`: Homepage.
- `/pokenea/Json`: Get a random Pokenea's information in JSON format.
- `/pokenea/HTML`: Get a random Pokenea's information rendered in HTML format.

## Directory Structure
```
pokenea-app/
├── config/
│   └── app.js
├── controllers/
│   └── pokeneaController.js
├── database/
│   └── pokeneas.js
├── models/
│   └── pokenea.js
├── resources/
│   ├── css/
│   │   └── app.css
│   ├── views/
│   │   ├── partials/
│   │   │   └── ... 
│   │   ├── app.css
│   │   └── partials/
│   │   │   └── app.css
├── routes/
│   └── routes.js
├── util/
│   └── util.js
├── main.js
├── package.json
└── README.md
```

## Credits
- **Developer:** [Santiago Neusa](sneusar@eafit.edu.co) & [Jhonnathan Ocampo](jsocampod@eafit.edu.co)
- **GitHub Repository:** [Link to GitHub Repo](https://github.com/your-username/pokenea-app)