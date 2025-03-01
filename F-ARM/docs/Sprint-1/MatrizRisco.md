---
title: "Matriz de Risco"
sidebar_position: 3
sidebar_label: "Matriz de Risco"
---

## 🛑 **Matriz de Risco do Projeto F-ARM**
A matriz de risco será estruturada com **probabilidade x impacto**, conforme o modelo visto na imagem que você enviou.

| **Risco** | **Impacto** | **Probabilidade** | **Plano de Mitigação** |
|-----------|------------|------------------|----------------------|
| **Falha na comunicação LoRaWAN (interferência ou distância excessiva)** | Alto | Média | Ajustar configuração de potência e Spreading Factor, usar repetidores se necessário. |
| **Falta de cobertura LoRaWAN na área de testes** | Médio | Alto | Implantar gateway próprio ou testar backup via Wi-Fi/4G. |
| **Consumo energético elevado dos sensores e ESP32** | Alto | Média | Implementar *deep sleep*, otimizar consumo, testar painéis solares e baterias de maior capacidade. |
| **Falha em sensores (calibração imprecisa ou mau funcionamento)** | Médio | Alto | Implementar validação de dados e backup de sensores. |
| **Problemas na transmissão MQTT para AWS IoT Core** | Alto | Média | Implementar *retry* automático e monitoramento com logs. |
| **Custo elevado dos componentes e infraestrutura** | Médio | Alto | Buscar fornecedores alternativos e priorizar custo-benefício sem comprometer a qualidade. |
| **Dificuldade na integração entre hardware e software** | Alto | Média | Criar testes incrementais antes da integração final. |
| **Problemas de segurança na transmissão de dados (hacking ou interceptação)** | Alto | Alto | Implementar criptografia AES para LoRa e TLS para MQTT, além de autenticação JWT. |
| **Baixa usabilidade do aplicativo pelos produtores rurais** | Médio | Média | Realizar testes de usabilidade e coletar feedback contínuo. |
| **Falta de testes em ambiente real antes da entrega** | Alto | Baixa | Criar ambiente controlado antes da implantação na fazenda. |
| **Manutenção difícil do hardware em campo** | Médio | Alto | Projetar a instalação para permitir trocas rápidas de sensores e baterias. |