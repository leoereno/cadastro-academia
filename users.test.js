const { findUserById, createUser, calculateDiscount } = require('./users');

describe('Testes Unitários - Módulo de Utilizadores', () => {
  
  test('1. Deve encontrar um utilizador pelo ID existente', () => {
    const user = findUserById(1);
    expect(user.name).toBe('Alice');
  });

  test('2. Deve lançar erro ao procurar por um ID que não existe', () => {
    expect(() => findUserById(99)).toThrow('Utilizador não encontrado');
  });

  test('3. Deve criar um utilizador válido', () => {
    const newUser = createUser('Mariana', 22, "Normal");
    expect(newUser.id).toBeDefined();
    expect(newUser.name).toBe('Mariana');
  });

  test('4. Deve lançar erro ao tentar criar utilizador sem nome', () => {
    expect(() => createUser('', 30)).toThrow('Nome é obrigatório');
  });

  test('5. Deve aplicar 20% de desconto para pessoas com 60 anos ou mais', () => {
    const discount = calculateDiscount(65);
    expect(discount).toBe(0.2);
  });

  test('6. Deve criar um cadastro premium', () => {
    const newUser = createUser('Leo', 22, "Premium");
    expect(newUser.tipoCadastro).toBe("Premium");
  })
});