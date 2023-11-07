from flask import Flask, jsonify, request

app = Flask(__name__)

# Dados simulados (use seu próprio sistema de armazenamento de dados, como um banco de dados)
lixeirasDisponiveis = {'lixeira Exemplo': ['Sao Paulo', 'Parque Capuava']}

@app.route('/consultar', methods=['GET'])
def consultar_lixeiras():
    return jsonify(lixeirasDisponiveis)

@app.route('/cadastro', methods=['POST'])
def cadastrar_lixeira():
    data = request.get_json()
    nomeLixeira = data.get('nomeLixeira')
    cidadeLixeira = data.get('cidadeLixeira')
    localLixeira = data.get('localLixeira')

    if nomeLixeira and cidadeLixeira and localLixeira:
        # Simule a validação e o armazenamento dos dados
        lixeirasDisponiveis[nomeLixeira] = [cidadeLixeira, localLixeira]
        return jsonify({'message': 'Lixeira cadastrada com sucesso'})
    else:
        return jsonify({'error': 'Dados incompletos ou inválidos'}, 400)

if __name__ == '__main__':
    app.run(debug=True)
