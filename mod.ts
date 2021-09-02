const generate = () => {
  return Math.round(Math.random() * 1000000)
}

addEventListener('fetch', event => {
  event.respondWith(
    new Response(`Seu número da sorte de hoje é: ${generate()}`, {
      status: 200,
      headers: { 'content-type': 'text/plain' }
    })
  )
})
