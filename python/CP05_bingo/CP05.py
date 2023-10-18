import random

# Função para obter a quantidade de jogadores
def obter_quantidade_jogadores():
    while True:
        try:
            num_jogadores = int(input("Quantos jogadores (1 a 5)? "))
            if 1 <= num_jogadores <= 5:
                return num_jogadores
            else:
                print("Por favor, escolha um número entre 1 e 5.")
        except ValueError:
            print("Entrada inválida. Insira um número de jogadores válido.")

# Função para obter os nomes dos jogadores
def obter_nomes_jogadores(num_jogadores):
    nomes = []
    for i in range(num_jogadores):
        nome = input(f"Nome do jogador {i + 1}: ")
        nomes.append(nome)
    return nomes

# Função para gerar uma cartela
def gerar_cartela():
    cartela = []

    # Define os intervalos para cada coluna
    intervalos = [(1, 15), (16, 30), (31, 45), (46, 60), (61, 75)]

    for _ in range(5):  # Para cada linha
        linha = []
        for intervalo in intervalos:
            numero_coluna = random.randint(intervalo[0], intervalo[1])
            while numero_coluna in linha:
                numero_coluna = random.randint(intervalo[0], intervalo[1])
            linha.append(numero_coluna)
        cartela.extend(linha)

    return cartela

# Função para gerar as cartelas dos jogadores
def gerar_cartelas_jogadores(nomes_jogadores):
    cartelas = {}
    for nome in nomes_jogadores:
        cartela = gerar_cartela()
        cartelas[nome] = cartela
    return cartelas

# Função para exibir uma cartela com números marcados como "X"
def exibir_cartela(cartela):
    for i in range(5):
        linha = cartela[i * 5:i * 5 + 5]
        linha = ["X" if num == -1 else str(num) for num in linha]
        print(" ".join(linha))

# Função para sortear um número aleatório
def sortear_numero(antigos):
    while True:
        numero = random.randint(1, 75)
        if numero not in antigos:
            return numero

# Função para verificar se um jogador ganhou
def verificar_ganhador(cartela):
    # Verifica se uma linha, coluna ou diagonal foi preenchida com -1 (números sorteados)
    for i in range(5):
        linha = cartela[i * 5:i * 5 + 5]
        coluna = cartela[i::5]
        diagonal1 = cartela[::6]
        diagonal2 = cartela[4:21:4]
        if all(num == -1 for num in linha) or all(num == -1 for num in coluna) or all(num == -1 for num in diagonal1) or all(num == -1 for num in diagonal2):
            return True
    return False

# Função principal
def main():
    quantidade_jogadores = obter_quantidade_jogadores()
    nomes_jogadores = obter_nomes_jogadores(quantidade_jogadores)
    cartelas_jogadores = gerar_cartelas_jogadores(nomes_jogadores)
    numeros_sorteados = []

    while True:
        input("Pressione Enter para sortear um número...")
        numero_sorteado = sortear_numero(numeros_sorteados)
        numeros_sorteados.append(numero_sorteado)
        print(f"Número sorteado: {numero_sorteado}")

        for nome, cartela in cartelas_jogadores.items():
            if numero_sorteado in cartela:
                indice = cartela.index(numero_sorteado)
                cartela[indice] = -1  # Marca o número na cartela como -1 quando sorteado
                exibir_cartela(cartela)
                if verificar_ganhador(cartela):
                    print(f"Parabéns, jogador {nome} ganhou!")
                    return

if __name__ == "__main__":
    main()
import random

# Função para obter a quantidade de jogadores
def obter_quantidade_jogadores():
    while True:
        try:
            num_jogadores = int(input("Quantos jogadores (1 a 5)? "))
            if 1 <= num_jogadores <= 5:
                return num_jogadores
            else:
                print("Por favor, escolha um número entre 1 e 5.")
        except ValueError:
            print("Entrada inválida. Insira um número de jogadores válido.")

# Função para obter os nomes dos jogadores
def obter_nomes_jogadores(num_jogadores):
    nomes = []
    for i in range(num_jogadores):
        nome = input(f"Nome do jogador {i + 1}: ")
        nomes.append(nome)
    return nomes

# Função para gerar uma cartela
def gerar_cartela():
    cartela = []

    # Define os intervalos para cada coluna
    intervalos = [(1, 15), (16, 30), (31, 45), (46, 60), (61, 75)]

    for _ in range(5):  # Para cada linha
        linha = []
        for intervalo in intervalos:
            numero_coluna = random.randint(intervalo[0], intervalo[1])
            while numero_coluna in linha:
                numero_coluna = random.randint(intervalo[0], intervalo[1])
            linha.append(numero_coluna)
        cartela.extend(linha)

    return cartela

# Função para gerar as cartelas dos jogadores
def gerar_cartelas_jogadores(nomes_jogadores):
    cartelas = {}
    for nome in nomes_jogadores:
        cartela = gerar_cartela()
        cartelas[nome] = cartela
    return cartelas

# Função para exibir uma cartela com números marcados como "X"
def exibir_cartela(cartela):
    for i in range(5):
        linha = cartela[i * 5:i * 5 + 5]
        linha = ["X" if num == -1 else str(num) for num in linha]
        print(" ".join(linha))

# Função para sortear um número aleatório
def sortear_numero(antigos):
    while True:
        numero = random.randint(1, 75)
        if numero not in antigos:
            return numero

# Função para verificar se um jogador ganhou
def verificar_ganhador(cartela):
    # Verifica se uma linha, coluna ou diagonal foi preenchida com -1 (números sorteados)
    for i in range(5):
        linha = cartela[i * 5:i * 5 + 5]
        coluna = cartela[i::5]
        diagonal1 = cartela[::6]
        diagonal2 = cartela[4:21:4]
        if all(num == -1 for num in linha) or all(num == -1 for num in coluna) or all(num == -1 for num in diagonal1) or all(num == -1 for num in diagonal2):
            return True
    return False

# Função principal
def main():
    quantidade_jogadores = obter_quantidade_jogadores()
    nomes_jogadores = obter_nomes_jogadores(quantidade_jogadores)
    cartelas_jogadores = gerar_cartelas_jogadores(nomes_jogadores)
    numeros_sorteados = []

    while True:
        input("Pressione Enter para sortear um número...")
        numero_sorteado = sortear_numero(numeros_sorteados)
        numeros_sorteados.append(numero_sorteado)
        print(f"Número sorteado: {numero_sorteado}")

        for nome, cartela in cartelas_jogadores.items():
            if numero_sorteado in cartela:
                indice = cartela.index(numero_sorteado)
                cartela[indice] = -1  # Marca o número na cartela como -1 quando sorteado
                exibir_cartela(cartela)
                if verificar_ganhador(cartela):
                    print(f"Parabéns, jogador {nome} ganhou!")
                    return

if __name__ == "__main__":
    main()
