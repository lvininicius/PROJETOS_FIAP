from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Verifica se o diretório "data" existe e cria se não existir
if not os.path.exists('data'):
    os.makedirs('data')

# Define o caminho completo para o arquivo JSON
json_file_path = os.path.join('data', 'lixeiras.json')

# Verifica se o arquivo JSON existe e cria se não existir
if not os.path.exists(json_file_path):
    with open(json_file_path, 'w') as arquivo_json:
        json.dump([], arquivo_json)

@app.route('/cadastro_arduino', methods=['POST'])
def cadastrar_lixeira_arduino():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Dados ausentes"}), 400

        volume = data.get('volume')

        if volume is None:
            return jsonify({"error": "Campo 'volume' ausente"}), 400

        lixeira = {
            'volume': volume
        }

        # Carregue os dados existentes do arquivo JSON
        with open(json_file_path, 'r', encoding='utf-8') as arquivo_json:
            dados = json.load(arquivo_json)

        # Adicione o novo volume aos dados existentes
        dados.append(lixeira)

        # Salve os dados atualizados de volta no arquivo JSON
        with open(json_file_path, 'w') as arquivo_json:
            json.dump(dados, arquivo_json, indent=2)

        return jsonify({"message": "Volume registrado com sucesso!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/consultar', methods=['GET'])
def consultar_lixeiras():
    try:
        # Carregue os dados do arquivo JSON
        with open(json_file_path, 'r') as arquivo_json:
            dados = json.load(arquivo_json)
        return jsonify(dados)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/cadastro', methods=['POST'])
def cadastrar_lixeira():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Dados ausentes"}), 400

        nomeLixeira = data.get('nomeLixeira')
        cidadeLixeira = data.get('cidadeLixeira')
        localLixeira = data.get('localLixeira')

        if not nomeLixeira or not cidadeLixeira or not localLixeira:
            return jsonify({"error": "Campos obrigatórios ausentes"}), 400

        lixeira = {
            'nomeLixeira': nomeLixeira,
            'cidadeLixeira': cidadeLixeira,
            'localLixeira': localLixeira
        }

        # Carregue os dados existentes do arquivo JSON
        with open(json_file_path, 'r', encoding='utf-8') as arquivo_json:
            dados = json.load(arquivo_json)

        # Adicione a nova lixeira aos dados existentes
        dados.append(lixeira)

        # Salve os dados atualizados de volta no arquivo JSON
        with open(json_file_path, 'w') as arquivo_json:
            json.dump(dados, arquivo_json, indent=2)

        return jsonify({"message": "Lixeira cadastrada com sucesso!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/excluir', methods=['POST'])
def excluir_lixeira():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Dados ausentes"}), 400

        nomeLixeira = data.get('nomeLixeira')

        if not nomeLixeira:
            return jsonify({"error": "Campo 'nomeLixeira' ausente"}), 400

        with open(json_file_path, 'r', encoding='utf-8') as arquivo_json:
            dados = json.load(arquivo_json)

        # Encontrar a lixeira pelo nome
        lixeira_para_excluir = next((lixeira for lixeira in dados if lixeira['nomeLixeira'] == nomeLixeira), None)

        if lixeira_para_excluir:
            dados.remove(lixeira_para_excluir)

            # Salvar os dados atualizados de volta no arquivo JSON
            with open(json_file_path, 'w', encoding='utf-8') as arquivo_json:
                json.dump(dados, arquivo_json, indent=2)

            return jsonify({"message": "Lixeira excluída com sucesso!"}), 200
        else:
            return jsonify({"error": "Lixeira não encontrada"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)