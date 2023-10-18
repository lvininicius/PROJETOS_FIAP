import random

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

def obter_nomes_jogadores(num_jogadores):
    nomes = []
    for i in range(num_jogadores):
        nome = input(f"Nome do jogador {i + 1}: ")
        nomes.append(nome)
    return nomes

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

def gerar_cartelas_jogadores(nomes_jogadores):
    cartelas = {}
    for nome in nomes_jogadores:
        cartela = gerar_cartela()
        cartelas[nome] = cartela
    return cartelas

def exibir_cartela(cartela, nome_jogador):
    print(f"Cartela de {nome_jogador}:")
    print("+----------------+")
    for i in range(5):
        linha = cartela[i * 5:i * 5 + 5]
        linha = [str(num).rjust(2) if num != -1 else 'XX' for num in linha]
        print("| " + " ".join(linha) + " |")
    print("+----------------+")

def sortear_numero(antigos):
    while True:
        numero = random.randint(1, 75)
        if numero not in antigos:
            return numero

def verificar_ganhador(cartela):
    for i in range(5):
        linha = cartela[i * 5:i * 5 + 5]
        coluna = cartela[i::5]
        diagonal1 = cartela[::6]
        diagonal2 = cartela[4:21:4]
        if all(num == -1 for num in linha) or all(num == -1 for num in coluna) or all(num == -1 for num in diagonal1) or all(num == -1 for num in diagonal2):
            return True
    return False

def exibir_placar(vitorias):
    print("Placar de Vitórias:")
    for nome, vitoria in vitorias.items():
        print(f"{nome}: {vitoria} vitória(s)")

def main():
    while True:
        quantidade_jogadores = obter_quantidade_jogadores()
        nomes_jogadores = obter_nomes_jogadores(quantidade_jogadores)
        vitorias = {nome: 0 for nome in nomes_jogadores}
        
        jogar_novamente = True
        
        while jogar_novamente:
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

                        if verificar_ganhador(cartela):
                            print(f"Parabéns, jogador {nome} ganhou!")
                            vitorias[nome] += 1
                            exibir_placar(vitorias)
                            break

            jogar_novamente = input("Deseja jogar novamente? (s/n): ").strip().lower() == 's'
        
        exibir_placar(vitorias)
        opcao = input("Escolha uma opção: (1 - Iniciar Novamente, 2 - Sair): ").strip()
        
        
        if opcao == '1':
            continue
        elif opcao == '2':
            break

if __name__ == "__main__":
    main()