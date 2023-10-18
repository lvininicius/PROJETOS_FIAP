import random
# Módulo output_functions.py
# Este módulo lida com as funções de exibição de informações para os jogadores.

# Função para exibir a cartela de bingo de um jogador
def exibir_cartela(cartela, nome_jogador):
    print(f"Cartela de {nome_jogador}:")
    print("+----------------+")
    for i in range(5):
        linha = cartela[i * 5:i * 5 + 5]
        linha = [str(num).rjust(2) if num != -1 else 'XX' for num in linha]
        print("| " + " ".join(linha) + " |")
    print("+----------------+")

# Função para exibir o placar de vitórias
def exibir_placar(vitorias):
    print("Placar de Vitórias:")
    for nome, vitoria in vitorias.items():
        print(f"{nome}: {vitoria} vitória(s)")