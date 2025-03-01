---
title: "Análise Financeira"
sidebar_position: 0
sidebar_label: "Análise Financeira"
---

# 💰 Análise Financeira do MVP

## 📌 Custos do MVP

| **Categoria**             | **Item**                      | **Descrição**                                                                 | **Faixa de Preço/Unidade**                |
|---------------------------|--------------------------------|-----------------------------------------------------------------------------|------------------------------------------|
| **Hardware**              | ESP32                          | Placa de desenvolvimento com Wi-Fi/Bluetooth para leitura de sensores e envio de dados | R$50–75 (~US$10–15)                       |
| **Hardware**              | Sensores RS485                 | Sensores básicos para agricultura (umidade, temperatura) – opções simples ou multiparâmetro | US$20–100 (simples: ~R$100–500; avançados: US$150–500) |
| **Hardware**              | Gateway LoRa                   | Gateway LoRaWAN básico (indoor para MVP)                                    | US$100–300; em alguns casos ~US$139      |
| **Hardware**              | Baterias e Componentes         | Bateria recarregável, painel solar, reguladores, cabos e caixa de proteção para cada nó sensor | Aproximadamente R$300–600 por nó; gateway (único) ~R$700–1500 |
| **Serviços na Nuvem**     | AWS IoT Core                   | Uso do tier gratuito (250.000 mensagens/mês) e custo baixo após o limite    | ~US$0,08 por 1 milhão de minutos conectados |
| **Serviços na Nuvem**     | AWS Lambda                     | Funções serverless com 1 milhão de execuções grátis; uso esporádico para MVP | Custo insignificante no início          |
| **Serviços na Nuvem**     | Banco de Dados/S3              | Instância micro (ex.: RDS) e armazenamento (S3) para dados históricos       | R$15/mês (RDS); US$0,023/GB/mês (S3)    |
| **Implementação**         | Desenvolvimento de Software    | Programação do firmware, configuração do backend (IoT Core, Lambdas, dashboards) | US$10.000–11.000 (~R$50–55 mil)       |
| **Implementação**         | Montagem e Testes              | Montagem dos protótipos, soldagem, testes de bancada e de campo             | Alguns milhares de reais                |
| **Implementação**         | Documentação e Ajustes         | Preparação de documentação, treinamento e ajustes iniciais                   | Custo indireto (horas da equipe)        |
| **Operacional**           | Conectividade de Dados         | Conexão do gateway à internet (Wi-Fi ou SIM 4G/IOT)                          | R$30–60/mês                              |
| **Operacional**           | Consumo de Energia             | Baixo consumo dos dispositivos; recarga ou uso de pequenos painéis solares   | Custo muito baixo                        |
| **Operacional**           | Suporte e Manutenção           | Monitoramento e manutenção preventiva (visitas, reinícios)                   | Dezenas a poucas centenas de reais/mês   |

## 📌 Previsão da Versão Industrial

| **Categoria**                         | **Item**                              | **Descrição**                                                                 | **Faixa de Preço/Investimento**                |
|---------------------------------------|--------------------------------------|-----------------------------------------------------------------------------|------------------------------------------|
| **Hardware**                          | Placas Eletrônicas Personalizadas    | PCB customizada integrando microcontrolador, rádio e interfaces; inclui custo de engenharia/ferramental (NRE) | Upfront: US$5.000–20.000 (R$25k–100k); Produção: US$30–50 (R$150–250) por unidade |
| **Hardware**                          | Sensores Certificados                | Sensores robustos com certificações (IP67, calibração garantida) para uso prolongado | US$150–500; no Brasil: R$800–1500 por sensor |
| **Hardware**                          | Fonte de Energia Dedicada            | Fontes industriais (rede elétrica) ou sistemas solares dimensionados (painel maior, controlador, bateria de alta capacidade) | Rede elétrica: R$100–200; Kit solar: R$500–1000 por unidade |
| **Hardware**                          | Comunicação Otimizada                | Módulos integrados de comunicação (LoRaWAN certificados ou módulos celulares) | LoRa: US$10–20; Celular: ~US$50 cada |
| **Hardware**                          | Carcaça e Conectores Industriais     | Invólucros resistentes (IP65/IP67) e conectores à prova d’água para proteção dos componentes | R$100–300 por unidade |
| **Infraestrutura**                     | LoRaWAN Público                      | Uso de redes de terceiros (ex.: Everynet) com assinatura mensal por dispositivo | US$0,50/dispositivo/mês (aprox. R$2,50) |
| **Infraestrutura**                     | LoRaWAN Privado                      | Implantação de gateways industriais outdoor, instalação e conexão via link (ex.: 4G) | Gateways: US$500–2000 cada (ex.: ~US$800 = R$4k); dados: ~R$200/mês |
| **Infraestrutura**                     | Comunicação Celular                   | Conectividade individual via 4G/5G/NB-IoT com plano M2M | US$50–150/mês por dispositivo |
| **Implementação e Escalabilidade**     | Design e Certificações               | Homologação (FCC, CE, Anatel) e testes de conformidade dos dispositivos | US$10k–20k (R$50–100k) |
| **Implementação e Escalabilidade**     | Manufatura em Escala                 | Setup da linha de produção, testes de qualidade e ferramental para produção em volume | Investimento de dezenas de milhares de reais |
| **Implementação e Escalabilidade**     | Cloud e Software                     | Atualizações para backend, escalabilidade do banco de dados e gerenciamento de dispositivos | Exemplo: banco de dados robusto ~US$200/mês (varia conforme uso) |
| **Implementação e Escalabilidade**     | Logística e Instalação               | Transporte dos equipamentos, instalação e calibração dos sensores e gateways | Custos variáveis conforme projeto |
| **Operacional**                         | Manutenção de Dispositivos           | Calibração, limpeza, troca de baterias e atualizações de firmware (OTA) | US$500–2000/ano por grupo ou fazenda |
| **Operacional**                         | Suporte e Atualizações               | Desenvolvimento contínuo, patches de segurança e suporte técnico | Custo operacional variável |
| **Operacional**                         | Depreciação de Equipamentos          | Degradação de gateways e sensores (exemplo: gateway com vida útil de 5 anos) | Ex.: Gateway de R$5000 → ~R$1000/ano |

📌 **Resumo:** A estimativa de custos do MVP inclui hardware, serviços em nuvem, implementação e operação, garantindo viabilidade para um sistema IoT eficiente e escalável. A previsão da versão industrial considera investimentos adicionais para escalabilidade, certificações e robustez dos dispositivos.



