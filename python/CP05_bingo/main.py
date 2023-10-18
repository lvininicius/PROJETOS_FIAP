# Módulo main.py
# Este módulo é o ponto de entrada do programa.

import random
from input_functions import obter_quantidade_jogadores, obter_nomes_jogadores
from cartela import gerar_cartelas_jogadores
from gameplay import sortear_numero, verificar_ganhador
from output_functions import exibir_cartela, exibir_placar

def main():
    while True:
        # Coleta a quantidade de jogadores
        quantidade_jogadores = obter_quantidade_jogadores()

        # Coleta os nomes dos jogadores com base na quantidade
        nomes_jogadores = obter_nomes_jogadores(quantidade_jogadores)

        # Inicializa o placar de vitórias para cada jogador
        vitorias = {nome: 0 for nome in nomes_jogadores}
        
        jogar_novamente = True
        
        while jogar_novamente:
            # Gera as cartelas de bingo para todos os jogadores
            cartelas_jogadores = gerar_cartelas_jogadores(nomes_jogadores)

            # Inicializa a lista de números sorteados
            numeros_sorteados = []
        
            while not any(verificar_ganhador(cartela) for cartela in cartelas_jogadores.values()):
                input("Pressione Enter para sortear um número...")

                # Sorteia um número aleatório não repetido
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

                            # Atualiza o placar de vitórias para o jogador vencedor
                            vitorias[nome] += 1
                            exibir_placar(vitorias)
                            break

            # Pergunta se deseja jogar novamente
            jogar_novamente = input("Deseja jogar novamente? (s/n): ").strip().lower() == 's'
        
        # Exibe o placar final de vitórias
        exibir_placar(vitorias)
        opcao = input("Escolha uma opção: (1 - Iniciar Novamente, 2 - Sair): ").strip()
        
        if opcao == '1':
            continue
        elif opcao == '2':
            break

if __name__ == "__main__":
    main()