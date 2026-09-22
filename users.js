const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Carlos', age: 65 },
];

function findUserById(id) {
  const user = users.find((u) => u.id === id);
  if (!user) {
    throw new Error('Utilizador não encontrado');
  }
  return user;
}

function createUser(name, age) {
  if (!name || name.trim() === '') {
    throw new Error('Nome é obrigatório');
  }
  if (age < 0) {
    throw new Error('Idade inválida');
  }
  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);
  return newUser;
}

function calculateDiscount(age) {
  if (age >= 60) return 0.2;
  if (age < 18) return 0.1;
  return 0.0;
}

module.exports = {
  findUserById,
  createUser,
  calculateDiscount,
};