import random
# Módulo gameplay.py
# Este módulo trata das funções relacionadas à jogabilidade do bingo.

# Função para sortear um número aleatório não repetido
def sortear_numero(antigos):
    while True:
        numero = random.randint(1, 75)
        if numero not in antigos:
            return numero

# Função para verificar se um jogador ganhou
def verificar_ganhador(cartela):
    for i in range(5):
        linha = cartela[i * 5:i * 5 + 5]
        coluna = cartela[i::5]
        diagonal1 = cartela[::6]
        diagonal2 = cartela[4:21:4]
        if all(num == -1 for num in linha) or all(num == -1 for num in coluna) or all(num == -1 for num in diagonal1) or all(num == -1 for num in diagonal2):
            return True
    return False