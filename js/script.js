textTA.onkeydown = textTA.oninput = textTA.onchange = () => {
  const { length } = textTA.value

  if (length > 100) {
    charsCount.innerText = `Текст превышает длину на ${length - 100} символов!`
  } else {
    charsCount.innerText = `${textTA.value.length} / 100`
  }
}