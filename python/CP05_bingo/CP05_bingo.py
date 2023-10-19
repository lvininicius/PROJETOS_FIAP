#Lucas Vinicius de Almeida Brigida 99094
#Gabriel Riqueto RM98685
#Gabriel Oliveira Rodrigues RM98565 

import random

# Função para obter a quantidade de jogadores (entre 1 e 5)
def obter_quantidade_jogadores():
    while True:
        try:
            num_jogadores = int(input("Quantos jogadores (1 a 4)? "))
            if 1 <= num_jogadores <= 5:
                return num_jogadores
            else:
                print("Por favor, escolha um número entre 1 e 4.")
        except ValueError:
            print("Entrada inválida. Insira um número de jogadores válido.")

# Função para obter os nomes dos jogadores
def obter_nomes_jogadores(num_jogadores):
    nomes = []
    for i in range(num_jogadores):
        nome = input(f"Nome do jogador {i + 1}: ")
        nomes.append(nome)
    return nomes

# Função para gerar uma cartela de bingo
def gerar_cartela():
    cartela = []

    # Define os intervalos para cada coluna
    intervalos = [(1, 15), (16, 30), (31, 45), (46, 60), (61, 75)]

    for _ in range(5):  # Loop para cada linha da cartela
        linha = []
        numeros_coluna = [list(range(intervalo[0], intervalo[1] + 1)) for intervalo in intervalos]

        for _ in range(5):  # Loop para cada coluna da linha
            for coluna in numeros_coluna:
                numero_coluna = random.choice(coluna)  # Escolhe um número aleatório da coluna
                coluna.remove(numero_coluna)  # Remove o número escolhido da coluna
                linha.append(numero_coluna)
        cartela.extend(linha)  # Adiciona a linha à cartela

    return cartela

# Função para gerar cartelas para todos os jogadores
def gerar_cartelas_jogadores(nomes_jogadores):
    cartelas = {}
    for nome in nomes_jogadores:
        cartela = gerar_cartela()  # Gera uma cartela para um jogador
        cartelas[nome] = cartela  # Associa a cartela ao nome do jogador
    return cartelas

# Função para exibir uma cartela
def exibir_cartela(cartela, nome_jogador):
    print(f"Cartela de {nome_jogador}:")
    print("+----------------+")
    for i in range(5):
        linha = cartela[i * 5:i * 5 + 5]  # Seleciona os números de cada linha
        linha = [str(num).rjust(2) if num != -1 else 'XX' for num in linha]  # Formata os números na linha
        print("| " + " ".join(linha) + " |")  # Exibe a linha formatada
    print("+----------------+")

# Função para sortear um número de bingo
def sortear_numero(antigos):
    while True:
        numero = random.randint(1, 75)  # Gera um número aleatório de 1 a 75
        if numero not in antigos:  # Verifica se o número já foi sorteado
            return numero

# Função para verificar se um jogador ganhou
def verificar_ganhador(cartela):
    for i in range(5):
        linha = cartela[i * 5:i * 5 + 5]  # Seleciona os números de cada linha
        coluna = cartela[i::5]  # Seleciona os números de cada coluna
        diagonal1 = cartela[::6]  # Seleciona os números da diagonal principal
        diagonal2 = cartela[4:21:4]  # Seleciona os números da diagonal secundária

        # Verifica se uma linha ou diagonal está completamente preenchida com -1
        if all(num == -1 for num in linha) or all(num == -1 for num in diagonal1) or all(num == -1 for num in diagonal2):
            return True

    # Verifica se alguma coluna foi completamente preenchida com -1
    for j in range(5):
        if all(cartela[i * 5 + j] == -1 for i in range(5)):
            return True

    return False

# Função para exibir o placar de vitórias
def exibir_placar(vitorias):
    print("Placar de Vitórias:")
    for nome, vitoria in vitorias.items():
        print(f"{nome}: {vitoria} vitória(s)")

# Função principal
def main():
    while True:
        # Solicita o número de jogadores
        quantidade_jogadores = obter_quantidade_jogadores()
        # Obtém os nomes dos jogadores
        nomes_jogadores = obter_nomes_jogadores(quantidade_jogadores)
        # Inicializa o placar das vitórias
        vitorias = {nome: 0 for nome in nomes_jogadores}
        
        jogar_novamente = True
        
        while jogar_novamente:
            # Gera cartelas para cada jogador
            cartelas_jogadores = gerar_cartelas_jogadores(nomes_jogadores)
            numeros_sorteados = []
        
            while not any(verificar_ganhador(cartela) for cartela in cartelas_jogadores.values()):
                input("Pressione Enter para sortear um número...")
                numero_sorteado = sortear_numero(numeros_sorteados)
                numeros_sorteados.append(numero_sorteado)
                print(f"Número sorteado: {numero_sorteado}")

                for nome, cartela in cartelas_jogadores.items():
                    if numero_sorteado in cartela:
                        indice = cartela.index(numero_sorteado)
                        cartela[indice] = -1
                        exibir_cartela(cartela, nome)

                        # Verifica se um jogador ganhou após cada número sorteado
                        if verificar_ganhador(cartela):
                            print(f"Parabéns, jogador {nome} ganhou!")
                            vitorias[nome] += 1
                            exibir_placar(vitorias)
                            break

            # Pergunta se os jogadores desejam jogar novamente
            jogar_novamente = input("Deseja jogar novamente? (s/n): ").strip().lower() == 's'
        
        # Exibe o placar final
        exibir_placar(vitorias)
        opcao = input("Escolha uma opção: (1 - Iniciar Novamente, 2 - Sair): ").strip()
        
        if opcao == '1':
            continue
        elif opcao == '2':
            break

if __name__ == "__main__":
    main()