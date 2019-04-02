function getIt() {
  $('p').on('click', function () {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function () {
    $('img').append('class = "tasty"')
  })
}

function pressIt() {
  $('form').on('keydown', function (key) {
    if (key.which === 71){
      alert('G was pressed')
    }
  })
}

function submitIt() {
  $('form').on('submit', function () {
    alert('Your form is going to be submitted now.')
  })
}
