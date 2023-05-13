type secret_friend = {
  name: string
}

const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const fisherYates = (secret_friends: secret_friend[]): secret_friend[] => {
  //si el array es <= 1 regresa el mismo array
  if (secret_friends.length <= 1) return secret_friends

  //se itera todo el array
  for (let i = 0; i < secret_friends.length; i++) {
    //se genera un numero aleatorio en cada iteración mayor a 0 y menor que la longitud del array
    const randomIndex: number = randomIntFromInterval(
      i,
      secret_friends.length - 1
    )

    //Se creo una variable temporal igual al valor del arreglo en la iteración actual
    const temp: secret_friend = secret_friends[i]
    //Se intercambian los valores del arreglo del actual por el random y viceversa
    secret_friends[i] = secret_friends[randomIndex]
    secret_friends[randomIndex] = temp
  }
  return secret_friends
}

export { fisherYates }
