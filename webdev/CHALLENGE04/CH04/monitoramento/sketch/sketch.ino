#include <Arduino.h>
#include <WiFi.h>

const char *ssid = "FIAP-IBM";
const char *password = "Challenge@23!";
const char *serverAddress = "http://127.0.0.1:5000/cadastro_arduino";

int status = WL_IDLE_STATUS;

int ledVerde = 22;
int ledAmarelo = 23;
int ledVermelho = 25;

void setup() {
  Serial.begin(115200);

  // Inicializar a conexão com a rede WiFi
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando ao WiFi...");
  }

  Serial.println("Conectado à rede WiFi");
}

void loop() {
  float distancia, vol;
  distancia = random(1, 300); // Simulação da leitura do sensor
  vol = 300 - distancia;

  Serial.print("volume: ");
  Serial.println(vol);

  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;

    if (client.connect(serverAddress, 80)) {
      Serial.println("Conectado ao servidor");

      // Crie uma string com os dados a serem enviados
      String postData = "{\"volume\": " + String(int(vol)) + "}";
      
      // Envie a requisição HTTP POST
      client.print("POST /cadastro_arduino HTTP/1.1\r\n");
      client.print("Host: ");
      client.print(serverAddress);
      client.print("\r\n");
      client.print("Content-Type: application/json\r\n");
      client.print("Content-Length: ");
      client.print(postData.length());
      client.print("\r\n");
      client.print("Connection: close\r\n\r\n");
      client.print(postData);

      Serial.println("Enviando dados para o servidor");

      // Aguarde a resposta do servidor
      while (client.connected()) {
        if (client.available()) {
          char c = client.read();
          Serial.print(c);
        }
      }

      // Feche a conexão
      client.stop();
      Serial.println("Conexão fechada");
    } else {
      Serial.println("Falha na conexão com o servidor");
    }
  }

  delay(5000); // Aguarde 5 segundos antes da próxima leitura simulada
}
