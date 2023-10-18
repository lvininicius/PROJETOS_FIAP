import random
# Módulo input_functions.py
# Este módulo lida com as funções de entrada de dados.

# Função para coletar a quantidade de jogadores de 1 a 5
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

# Função para coletar os nomes dos jogadores com base na quantidade fornecida
def obter_nomes_jogadores(num_jogadores):
    nomes = []
    for i in range(num_jogadores):
        nome = input(f"Nome do jogador {i + 1}: ")
        nomes.append(nome)
    return nomes