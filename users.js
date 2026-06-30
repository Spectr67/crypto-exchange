class User {
  constructor(nickname, email = '', password = '', initialUsdt = 1000) {
    this.id = crypto.randomUUID().split('-')[0]
    this.nickname = nickname
    this.email = email
    this.password = password
    this.balance = {
      usdt: initialUsdt,
      ХЛЕБ: 0,
    }
  }

  deposit(symbol, amount) {
    if (amount <= 0) return
    if (!this.balance[symbol]) this.balance[symbol] = 0
    this.balance[symbol] += amount
  }

  withdraw(symbol, amount) {
    if (amount <= 0) return
    if (!this.balance[symbol] || this.balance[symbol] < amount) {
      return
    }
    this.balance[symbol] -= amount
  }

  swap(fromSymbol, toSymbol, amountFrom, rate) {
    if (amountFrom <= 0) return // Исправлен синтаксис условий
    if (!this.balance[fromSymbol] || this.balance[fromSymbol] < amountFrom) {
      return
    }

    const amountTo = amountFrom / rate

    if (!this.balance[toSymbol]) this.balance[toSymbol] = 0

    this.balance[fromSymbol] -= amountFrom
    this.balance[toSymbol] += amountTo
  }

  changeNickname(newNickname) {
    if (!newNickname?.trim()) return
    this.nickname = newNickname
  }

  changePassword(oldPassword, newPassword, rePassword) {
    if (this.password !== oldPassword) {
      return console.log('[Profile Ошибка] Старый пароль неверен!')
    }

    if (!newPassword?.trim()) {
      return console.log('[Profile Ошибка] Новый пароль не может быть пустым')
    }

    if (newPassword !== rePassword) {
      return console.log('[Profile Ошибка] Новые пароли не совпадают!')
    }

    this.password = newPassword
    console.log(`[Profile] Пароль для ${this.nickname} успешно изменен`)
  }

  changeEmail(newEmail) {
    if (!newEmail?.includes('@'))
      return console.log('Некорректный формат email')
    this.email = newEmail
  }
}
const users = []

function createAccount(nickname, email, password, initialUsdt) {
  const candidate = users.find(
    u => u.email === email || u.nickname === nickname,
  )
  if (candidate) {
    console.log(
      `[Ошибка Регистрации] Пользователь с таким именем или email уже существует!`,
    )
    return null
  }

  const newUser = new User(nickname, email, password, initialUsdt)
  users.push(newUser)
  return newUser
}

function deleteAccount(userId, password) {
  const userIndex = users.findIndex(u => u.id === userId)
  if (userIndex === -1)
    return console.log(`[Ошибка Удаления] Пользователь не найден`)
  if (users[userIndex].password !== password)
    return console.log(`[Ошибка Удаления] Неверный пароль!`)

  console.log(`[Удаление] Пользователь ${users[userIndex].nickname} удален.`)
  users.splice(userIndex, 1)
}

console.log('--- БАЗА ПОЛЬЗОВАТЕЛЕЙ ПОСЛЕ СОЗДАНИЯ ---')
const ivan = createAccount('Иван', 'ivan@mgmail.com', '111', 1000)
const masha = createAccount('Мария', 'masha@gmail.com', '222', 500)
const petr = createAccount('Петр', 'petr@gmail.com', '333', 2000)
console.log(users)

console.log('\n--- ПРОВЕРКА ДЕПОЗИТА (Маша получает 20 ХЛЕБА) ---')
masha.deposit('ХЛЕБ', 20)
console.log('Баланс Марии:', masha.balance)

console.log('\n--- ПРОВЕРКА ВЫВОДА СРЕДСТВ (Иван выводит 300 usdt) ---')
ivan.withdraw('usdt', 300)
console.log('Баланс Ивана:', ivan.balance)

console.log(
  '\n--- ПРОВЕРКА НЕКОРРЕКТНОГО ВЫВОДА (Иван пытается вывести больше, чем есть) ---',
)
ivan.withdraw('usdt', 5000)
console.log('Баланс Ивана не изменился:', ivan.balance)

console.log(
  '\n--- ПРОВЕРКА СВАПА (Петр меняет 100 usdt на ХЛЕБ по курсу 5) ---',
)
petr.swap('usdt', 'ХЛЕБ', 100, 5)
console.log('Баланс Петра:', petr.balance)

console.log('\n--- ПРОВЕРКА ИЗМЕНЕНИЯ ПРОФИЛЯ (Иван меняет ник и почту) ---')
ivan.changeNickname('Vanya_Pro')
ivan.changeEmail('vanya_new@gmail.com')
console.log('Обновленный Иван:', { nickname: ivan.nickname, email: ivan.email })

console.log('\n--- ПРОВЕРКА СМЕНЫ ПАРОЛЯ ---')

ivan.changePassword('111', 'new_pass', 'wrong_re_pass')
// Успешно
ivan.changePassword('111', 'gold_pass', 'gold_pass')

console.log('\n--- ПРОВЕРКА УДАЛЕНИЯ АККАУНТА (Удаляем Петра) ---')
deleteAccount(petr.id, '333')
console.log(
  'Итоговый список пользователей в системе (Петра быть не должно):',
  users,
)
