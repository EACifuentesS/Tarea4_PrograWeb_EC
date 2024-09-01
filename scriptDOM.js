// CSS
const style = document.createElement('style');
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .General {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        background: orange;
    }

    .header {
        background: lightblue;
        padding: 10px;
        width: 100%;
    }

    .custom-btn {
        margin: 0 10px;
        padding: 10px;
        border-radius: 5px;
        font-weight: bold;
    }

    .text-md-left {
        text-align: left;
    }

    .text-md-right {
        text-align: right;
    }

    .name-container {
        background: rgb(132, 0, 255);
        padding: 10px;
        transition: background 0.5s, transform 0.5s;
    }

    .name-container:hover {
        background: rgb(43, 0, 255);
    }

    .sidebar {
        background: rgb(103, 73, 252);
        padding: 10px;
        color: white;
    }

    .description {
        background: lightblue;
        color: darkblue;
        padding: 10px;
    }

    .multimedia {
        background: rgb(103, 73, 252);
        padding: 10px;
    }

    .footer {
        background: lightblue;
        padding: 10px;
        text-align: center;
    }
`;

document.head.appendChild(style);

document.head.innerHTML += `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TAREA2</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
`;

const container = document.createElement('div');
container.className = 'container General';
document.body.appendChild(container);

const header = document.createElement('header');
header.className = 'row my-4 header';
header.innerHTML = `
    <div class="col-12 col-md-6 text-center text-md-left Fila1Izq">
        <h1>Acerca de mí</h1>
    </div>
    <div class="col-12 col-md-6 text-center text-md-right Fila1Der">
        <a href="#" class="btn custom-btn btn-primary">Inicio</a>
        <a href="#" class="btn custom-btn btn-danger">Contáctanos</a>
    </div>
`;
container.appendChild(header);

const nameContainer = document.createElement('div');
nameContainer.className = 'name-container text-center mb-4';
nameContainer.innerHTML = `
    <h1>Erick Adán Cifuentes Sagarminaga</h1>
`;
container.appendChild(nameContainer);

const row = document.createElement('div');
row.className = 'row';
container.appendChild(row);

const sidebar = document.createElement('aside');
sidebar.className = 'col-12 col-lg-4 mb-4 sidebar';
sidebar.innerHTML = `
    <h3>Estudios</h3>
    <p>Centro de Estudios Diversificado (CED)<br>
    Bachiller en Ciencias y Letras con Orientación en Computación 2019-2020<br>
    Universidad Mesoamericana 2021-Presente</p>
`;
row.appendChild(sidebar);

const description = document.createElement('section');
description.className = 'col-12 col-lg-4 mb-4 description';
description.innerHTML = `
    <p>Soy una persona trabajadora y honesta, comprometida con la excelencia y la integridad en todas las
    áreas de mi vida. Actualmente, soy estudiante y me esfuerzo por equilibrar mis estudios con mi
    trabajo, demostrando dedicación y responsabilidad en ambos frentes.</p>
`;
row.appendChild(description);

const multimedia = document.createElement('aside');
multimedia.className = 'col-12 col-lg-4 mb-4 multimedia';
multimedia.innerHTML = `
    <img src="../PERSONAL/IMG/IMG11.jpg" alt="Imagen de Erick Adán Cifuentes Sagarminaga" class="img-fluid mb-3">
    <iframe src="https://www.youtube.com/embed/gNPy_CO4zqA?si=Eg2eJtcbXmzQbWFg" title="YouTube video player"
        class="w-100" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;
row.appendChild(multimedia);

const footer = document.createElement('footer');
footer.className = 'text-center mt-4 footer';
footer.innerHTML = `
    <p>Última Actualización: 01/08/2024 20:37:54</p>
`;
container.appendChild(footer);

const scriptJQuery = document.createElement('script');
scriptJQuery.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
document.body.appendChild(scriptJQuery);

const scriptPopper = document.createElement('script');
scriptPopper.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";
document.body.appendChild(scriptPopper);

const scriptBootstrap = document.createElement('script');
scriptBootstrap.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
document.body.appendChild(scriptBootstrap);
