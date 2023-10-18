import random
# Módulo cartela.py
# Este módulo lida com a geração das cartelas de bingo.

# Função para gerar uma cartela de bingo válida
def gerar_cartela():
    cartela = []

    # Define os intervalos para cada coluna
    intervalos = [(1, 15), (16, 30), (31, 45), (46, 60), (61, 75)]

    for _ in range(5):  # Para cada linha
        linha = []
        numeros_coluna = [list(range(intervalo[0], intervalo[1] + 1)) for intervalo in intervalos]

        for _ in range(5):
            for coluna in numeros_coluna:
                numero_coluna = random.choice(coluna)
                coluna.remove(numero_coluna)
                linha.append(numero_coluna)
        cartela.extend(linha)

    return cartela

# Função para gerar as cartelas de bingo para cada jogador
def gerar_cartelas_jogadores(nomes_jogadores):
    cartelas = {}
    for nome in nomes_jogadores:
        cartela = gerar_cartela()
        cartelas[nome] = cartela
    return cartelas