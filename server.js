// server.js

// 1. Importar os módulos necessários
const express = require('express');
const cors = require('cors');
const path = require('path');

// 2. Inicializar a aplicação Express
const app = express();
const PORT = 3000;

// 3. Configurar os Middlewares
// Habilita o CORS para permitir requisições de outras origens (seu arquivo HTML)
app.use(cors());
// Habilita o parsing de JSON no corpo das requisições
app.use(express.json({ limit: '50mb' })); // Aumenta o limite para acomodar dados de formulários grandes
// Habilita o parsing de dados de formulário urlencoded
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

/**
 * Converte um objeto de dados em uma string CSV.
 * @param {object} data - O objeto contendo os dados do formulário.
 * @returns {string} - Uma string formatada em CSV.
 */
function convertToCSV(data) {
    // Garante que o valor seja uma string e escapa aspas duplas
    const escape = (value) => {
        if (value === null || value === undefined) {
            return '';
        }
        const stringValue = String(value);
        // Se a string contém vírgula, aspas duplas ou quebra de linha, a envolvemos em aspas duplas
        if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
            // Escapa as aspas duplas existentes substituindo-as por duas aspas duplas
            return `"${stringValue.replace(/"/g, '""')}"`;
        }
        return stringValue;
    };

    // Cria o cabeçalho e a linha de valores
    const headers = Object.keys(data).join(',');
    const values = Object.values(data).map(escape).join(',');

    return `${headers}\n${values}`;
}


// 4. Definir a rota para receber os dados do formulário
app.post('/api/save', (req, res) => {
    console.log('Dados recebidos:', req.body);

    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).send('Nenhum dado recebido.');
    }
    
    try {
        // Converte os dados recebidos para o formato CSV
        const csvData = convertToCSV(data);
        
        // Define o nome do arquivo
        const participantId = data['participant-id'] || 'novo_paciente';
        const date = new Date().toISOString().slice(0, 10);
        const fileName = `dados_paciente_${participantId}_${date}.csv`;

        // Configura os headers da resposta para forçar o download do arquivo
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        
        // Envia o conteúdo CSV como resposta
        res.status(200).send(csvData);

    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        res.status(500).send('Erro interno no servidor ao gerar o arquivo CSV.');
    }
});

// Rota para servir o arquivo package.json (apenas para referência)
app.get('/package.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'package.json'));
});


// 5. Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log('Aguardando requisições na rota POST /api/save');
});

// 6. Criar um arquivo package.json para gerenciar as dependências
/* Para rodar este servidor, crie um arquivo package.json com o conteúdo abaixo
   e execute "npm install" no seu terminal.

   Conteúdo do package.json:
   {
     "name": "medical-form-backend",
     "version": "1.0.0",
     "description": "Backend para receber dados de um formulário médico.",
     "main": "server.js",
     "scripts": {
       "start": "node server.js"
     },
     "author": "",
     "license": "ISC",
     "dependencies": {
       "cors": "^2.8.5",
       "express": "^4.18.2"
     }
   }
*/
