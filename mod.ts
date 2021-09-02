const generate = () => {
  return Math.round(Math.random() * 1000000)
}

const response = () => {
  return `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Número da Sorte</title>
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: sans-serif;
        }
        body, html, .container {
          min-height: 100vh;
        }
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .text-uppercase {
          text-transform: uppercase;
        }
        .text-center {
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 class="text-uppercase text-center">Número da Sorte</h1>
        <h2 class="text-center">${generate()}</h2>
      </div>
    </body>
    </html>
  `
}

addEventListener('fetch', event => {
  event.respondWith(
    new Response(response(), {
      status: 200,
      headers: { 'content-type': 'text/html' }
    })
  )
})
