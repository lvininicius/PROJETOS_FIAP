@echo off

:: Instalação do Node.js e dependências do projeto
npm install concurrently --save

:: Configuração do ambiente virtual do Python
python -m venv venv
venv\Scripts\activate

:: Instalação das dependências do Flask
pip install Flask Flask-CORS

echo Setup concluído com sucesso!

