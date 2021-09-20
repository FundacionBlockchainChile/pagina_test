// console.log('Init app....')

$(function () {
  'use strict'

  // VARIABLES
  let horoscopo = $('#horoscopo')
  let buttonNext = $('#buttonNext')
  let index = 0
  let $tarot = []

  let imageSigns = [
    'assets/Aries.png',
    'assets/Tauro.png',
    'assets/Geminis.png',
    'assets/Cancer.png',
    'assets/Leo.png',
    'assets/Virgo.png',
    'assets/Libra.png',
    'assets/Escorpion.png',
    'assets/Sagitario.png',
    'assets/Capricornio.png',
    'assets/Acuario.png',
    'assets/Piscis.png',
  ]

  // FUNCTIONS
  const storeTarot = (tarot) => {
    $tarot = tarot
  }

  const appendTarot = () => {
    horoscopo.append(
      `<img class="sign" src="${imageSigns[index]}" />
      <h1>${$tarot[index].nombre}</h1>
      <h5>Fecha Signo: ${$tarot[index].fechaSigno}</h5>
      <p>Numero: ${$tarot[index].numero}</p>
      <p>Color: ${$tarot[index].color}</p>
      <p>
        Dinero: ${$tarot[index].dinero}
      </p>
      <p>
        Salud: ${$tarot[index].salud}
      </p>`
    )
    // console.log('index:', index)
  }

  const clearTarot = () => {
    horoscopo.empty()
  }

  // FETCH TAROT ON INIT
  $.get(`https://api.adderou.cl/tyaas/`, function showHoroscopo(res) {
    // console.log(Object.values(res.horoscopo))
    storeTarot(Object.values(res.horoscopo))
    // console.log('$tarot:', $tarot)
    appendTarot()
  })

  // BUTTON LOGIC
  buttonNext.click(function () {
    index = index + 1
    if (index > 11) index = 0
    clearTarot()
    appendTarot()
  })
})
