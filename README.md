# API de Consulta de Capitais

Atividade Prática 01 — Desenvolvimento Back-end (Node.js, TypeScript e Express).

A API recebe a sigla de uma UF (26 estados + DF) e retorna a capital em JSON.

## Como executar

Pré-requisito: Node.js 18+ instalado.

```bash
npm install
npm run dev      # modo desenvolvimento
# ou
npm run build && npm start
```

O servidor sobe em `http://localhost:3000`.

## Endpoint

`GET /estados/:sigla` (maiúsculas ou minúsculas)

Sucesso — `GET /estados/sp` → `200 OK`
```json
{ "sigla": "SP", "capital": "São Paulo" }
```

Sigla inexistente — `GET /estados/XX` → `404 Not Found`
```json
{ "erro": "Estado não encontrado." }
```

## Testes

Requisições em `docs/testes/testes.http` e prints em `docs/testes/`.

## Estrutura

```
src/server.ts    # servidor, dados e rota
package.json
tsconfig.json
```
