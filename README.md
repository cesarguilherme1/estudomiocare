<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Coleta de Dados - Pesquisa Médica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-out, padding 0.5s ease-out;
            padding: 0 1.5rem;
        }
        .accordion-button.active + .accordion-content {
            max-height: 15000px; /* Increased for larger sections */
            padding: 1.5rem;
        }
        .accordion-button .icon {
            transition: transform 0.3s ease-in-out;
        }
        .accordion-button.active .icon {
            transform: rotate(180deg);
        }
        .form-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
        }
        .form-group {
            display: flex;
            flex-direction: column;
        }
        .form-group-full {
            grid-column: 1 / -1;
        }
        .conditional {
            display: none;
        }
        .conditional.visible {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
            padding: 1rem;
            background-color: #f0f9ff;
            border-radius: 0.5rem;
            border: 1px solid #bae6fd;
        }
        .conditional-inline {
            display: none;
        }
        .conditional-inline.visible {
            display: flex;
            align-items: center;
        }
        .sub-section-title {
            font-semibold: text-lg;
            color: #1e3a8a; /* Tailwind's blue-800 */
            border-bottom-width: 2px;
            border-color: #e5e7eb; /* Tailwind's gray-200 */
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
            margin-top: 1.5rem;
        }
    </style>
</head>
<body class="bg-gray-100">

    <div class="container mx-auto p-4 sm:p-6 lg:p-8 max-w-6xl">
        <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-gray-800">Ficha de Coleta de Dados</h1>
                <p class="text-gray-600 mt-2">Registro de Miocardiopatias e Miocardites em Adultos</p>
            </div>

            <form id="medical-form" class="space-y-4">

                <!-- Seção 1: Identificação e Dados Pessoais -->
                <div class="border border-gray-200 rounded-lg">
                    <button type="button" class="accordion-button w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg focus:outline-none">
                        <h2 class="text-xl font-semibold text-gray-700">1. Identificação e Dados Pessoais</h2>
                        <svg class="icon w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="accordion-content">
                        <div class="form-section">
                            <div class="form-group">
                                <label for="participant-id" class="font-medium text-gray-700 mb-1">Número de Identificação</label>
                                <input type="text" id="participant-id" name="participant-id" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                            </div>
                            <div class="form-group">
                                <label for="collection-date" class="font-medium text-gray-700 mb-1">Data da Coleta</label>
                                <input type="date" id="collection-date" name="collection-date" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                            </div>
                             <div class="form-group">
                                <label for="hospital" class="font-medium text-gray-700 mb-1">Hospital</label>
                                <input type="text" id="hospital" name="hospital" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                            </div>
                            <div class="form-group form-group-full">
                                <label for="full-name" class="font-medium text-gray-700 mb-1">Nome Completo</label>
                                <input type="text" id="full-name" name="full-name" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                            </div>
                             <div class="form-group">
                                <label for="birth-date" class="font-medium text-gray-700 mb-1">Data de Nascimento</label>
                                <input type="date" id="birth-date" name="birth-date" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                            </div>
                            <div class="form-group">
                                <label class="font-medium text-gray-700 mb-1">Sexo</label>
                                <div class="flex items-center space-x-4 pt-2">
                                    <label><input type="radio" name="sexo" value="Masculino" class="mr-1">Masculino</label>
                                    <label><input type="radio" name="sexo" value="Feminino" class="mr-1">Feminino</label>
                                    <label class="flex items-center"><input type="radio" name="sexo" value="Outro" class="mr-1">Outro:</label>
                                    <input type="text" name="sexo-outro" class="p-1 border border-gray-300 rounded-md flex-grow">
                                </div>
                            </div>
                             <div class="form-group">
                                <label class="font-medium text-gray-700 mb-1">Raça Autodeclarada</label>
                                <select name="raca" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                                    <option value="">Selecione</option>
                                    <option value="Branca">Branca</option>
                                    <option value="Preta">Preta</option>
                                    <option value="Parda">Parda</option>
                                    <option value="Amarela">Amarela</option>
                                    <option value="Indígena">Indígena</option>
                                    <option value="Não declarada">Não declarada</option>
                                </select>
                            </div>
                             <div class="form-group">
                                <label for="telefone" class="font-medium text-gray-700 mb-1">Telefone de Contato (com DDD)</label>
                                <input type="tel" id="telefone" name="telefone" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="(XX) XXXXX-XXXX">
                            </div>
                            <div class="form-group">
                                <label for="email" class="font-medium text-gray-700 mb-1">E-mail</label>
                                <input type="email" id="email" name="email" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="exemplo@email.com">
                            </div>
                             <div class="form-group form-group-full">
                                <label for="endereco" class="font-medium text-gray-700 mb-1">Endereço Completo</label>
                                <input type="text" id="endereco" name="endereco" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                            </div>
                            <div class="form-group">
                                <label for="cidade" class="font-medium text-gray-700 mb-1">Cidade/UF</label>
                                <input type="text" id="cidade" name="cidade" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Cidade / ES">
                            </div>
                            <div class="form-group">
                                <label for="cep" class="font-medium text-gray-700 mb-1">CEP</label>
                                <input type="text" id="cep" name="cep" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="XXXXX-XXX">
                            </div>
                            <div class="form-group">
                                <label for="escolaridade" class="font-medium text-gray-700 mb-1">Escolaridade</label>
                                <select id="escolaridade" name="escolaridade" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                                    <option value="">Selecione</option>
                                    <option value="Analfabeto">Analfabeto</option>
                                    <option value="Fundamental Incompleto">Fundamental Incompleto</option>
                                    <option value="Fundamental Completo">Fundamental Completo</option>
                                    <option value="Médio Incompleto">Médio Incompleto</option>
                                    <option value="Médio Completo">Médio Completo</option>
                                    <option value="Superior Incompleto">Superior Incompleto</option>
                                    <option value="Superior Completo">Superior Completo</option>
                                    <option value="Pós-graduação">Pós-graduação</option>
                                </select>
                            </div>
                            <div class="form-group form-group-full">
                                <label class="font-medium text-gray-700 mb-1">Renda Familiar Mensal</label>
                                <div class="grid grid-cols-2 md:grid-cols-3 gap-2 pt-2">
                                    <label><input type="radio" name="renda" value="Até 1 SM" class="mr-1"> Até 1 SM</label>
                                    <label><input type="radio" name="renda" value=">1 a 2 SM" class="mr-1"> >1 a 2 SM</label>
                                    <label><input type="radio" name="renda" value=">2 a 3 SM" class="mr-1"> >2 a 3 SM</label>
                                    <label><input type="radio" name="renda" value=">3 a 5 SM" class="mr-1"> >3 a 5 SM</label>
                                    <label><input type="radio" name="renda" value=">5 a 10 SM" class="mr-1"> >5 a 10 SM</label>
                                    <label><input type="radio" name="renda" value=">10 SM" class="mr-1"> >10 SM</label>
                                    <label><input type="radio" name="renda" value="Não informado" class="mr-1"> Não informado</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Seção 2: Dados Clínicos -->
                <div class="border border-gray-200 rounded-lg">
                    <button type="button" class="accordion-button w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg focus:outline-none">
                        <h2 class="text-xl font-semibold text-gray-700">2. Dados Clínicos</h2>
                        <svg class="icon w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="accordion-content">
                        <div class="space-y-6">
                            <!-- Diagnóstico Cardiológico -->
                            <div>
                                <h3 class="font-semibold text-lg text-gray-800 border-b pb-2 mb-4">Diagnóstico Cardiológico</h3>
                                <div class="form-group">
                                    <label class="font-medium text-gray-700 mb-2">Diagnóstico de Miocardiopatia?</label>
                                    <div class="flex items-center space-x-4">
                                        <label><input type="radio" name="miocardiopatia" value="Sim" onchange="toggleConditional(this, 'miocardiopatia-details', 'Sim')"> Sim</label>
                                        <label><input type="radio" name="miocardiopatia" value="Não" onchange="toggleConditional(this, 'miocardiopatia-details', 'Sim')"> Não</label>
                                    </div>
                                    <div id="miocardiopatia-details" class="conditional">
                                        <div class="form-group">
                                            <label for="miocardiopatia-tipo" class="font-medium text-gray-700 mb-1">Se sim, qual tipo?</label>
                                            <input type="text" id="miocardiopatia-tipo" name="miocardiopatia-tipo" class="w-full p-2 border border-gray-300 rounded-md">
                                        </div>
                                        <div class="form-group">
                                            <label for="miocardiopatia-data" class="font-medium text-gray-700 mb-1">Data do diagnóstico:</label>
                                            <input type="date" id="miocardiopatia-data" name="miocardiopatia-data" class="w-full p-2 border border-gray-300 rounded-md">
                                        </div>
                                    </div>
                                </div>
                                 <div class="form-group mt-4">
                                    <label class="font-medium text-gray-700 mb-2">Diagnóstico de Miocardite?</label>
                                    <div class="flex items-center space-x-4">
                                        <label><input type="radio" name="miocardite" value="Sim" onchange="toggleConditional(this, 'miocardite-details', 'Sim')"> Sim</label>
                                        <label><input type="radio" name="miocardite" value="Não" onchange="toggleConditional(this, 'miocardite-details', 'Sim')"> Não</label>
                                    </div>
                                    <div id="miocardite-details" class="conditional">
                                        <div class="form-group">
                                            <label for="miocardite-causa" class="font-medium text-gray-700 mb-1">Se sim, qual tipo/causa?</label>
                                            <input type="text" id="miocardite-causa" name="miocardite-causa" class="w-full p-2 border border-gray-300 rounded-md">
                                        </div>
                                        <div class="form-group">
                                            <label for="miocardite-data" class="font-medium text-gray-700 mb-1">Data do diagnóstico:</label>
                                            <input type="date" id="miocardite-data" name="miocardite-data" class="w-full p-2 border border-gray-300 rounded-md">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Comorbidades -->
                            <div>
                                <h3 class="font-semibold text-lg text-gray-800 border-b pb-2 mb-4">Comorbidades</h3>
                                <div class="form-section">
                                    <div class="form-group">
                                        <label class="font-medium text-gray-700">HAS</label>
                                        <div>
                                            <label><input type="radio" name="has" value="Sim"> Sim</label>
                                            <label><input type="radio" name="has" value="Não"> Não</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="font-medium text-gray-700">DM</label>
                                        <div>
                                            <label><input type="radio" name="dm" value="Sim"> Sim</label>
                                            <label><input type="radio" name="dm" value="Não"> Não</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="font-medium text-gray-700">Dislipidemia</label>
                                        <div>
                                            <label><input type="radio" name="dislipidemia" value="Sim"> Sim</label>
                                            <label><input type="radio" name="dislipidemia" value="Não"> Não</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="font-medium text-gray-700">Obesidade</label>
                                        <div>
                                            <label><input type="radio" name="obesidade" value="Sim"> Sim</label>
                                            <label><input type="radio" name="obesidade" value="Não"> Não</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="font-medium text-gray-700">Doença Autoimune</label>
                                        <div>
                                            <label><input type="radio" name="autoimune" value="Sim" onchange="toggleConditional(this, 'autoimune-qual', 'Sim')"> Sim</label>
                                            <label><input type="radio" name="autoimune" value="Não" onchange="toggleConditional(this, 'autoimune-qual', 'Sim')"> Não</label>
                                        </div>
                                        <div id="autoimune-qual" class="conditional" style="grid-template-columns: 1fr;">
                                            <input type="text" name="autoimune-qual-input" placeholder="Qual?" class="w-full p-2 border border-gray-300 rounded-md">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Tabagismo -->
                            <div>
                                <h3 class="font-semibold text-lg text-gray-800 border-b pb-2 mb-4">Tabagismo</h3>
                                <div class="form-group">
                                    <div class="flex items-center space-x-4 flex-wrap">
                                        <label class="mr-4"><input type="radio" name="tabagismo" value="Não fumante" onchange="handleTabagismoChange()" class="mr-1">Não fumante</label>
                                        <label class="mr-4"><input type="radio" name="tabagismo" value="Ex-fumante" onchange="handleTabagismoChange()" class="mr-1">Ex-fumante</label>
                                        <label><input type="radio" name="tabagismo" value="Fumante atual" onchange="handleTabagismoChange()" class="mr-1">Fumante atual</label>
                                    </div>
                                    <div id="ex-fumante-details" class="conditional">
                                        <div class="form-group">
                                            <label for="parou-ha-quanto-tempo" class="font-medium text-gray-700 mb-1">Parou há quanto tempo?</label>
                                            <input type="text" id="parou-ha-quanto-tempo" name="parou-ha-quanto-tempo" class="w-full p-2 border border-gray-300 rounded-md">
                                        </div>
                                        <div class="form-group">
                                            <label for="ex-fumante-carga" class="font-medium text-gray-700 mb-1">Carga tabágica</label>
                                            <input type="text" id="ex-fumante-carga" name="ex-fumante-carga" class="w-full p-2 border border-gray-300 rounded-md">
                                        </div>
                                    </div>
                                    <div id="fumante-atual-details" class="conditional">
                                        <div class="form-group">
                                            <label for="cigarros-por-dia" class="font-medium text-gray-700 mb-1">Quantos cigarros/dia?</label>
                                            <input type="text" id="cigarros-por-dia" name="cigarros-por-dia" class="w-full p-2 border border-gray-300 rounded-md">
                                        </div>
                                        <div class="form-group">
                                            <label for="fumante-atual-carga" class="font-medium text-gray-700 mb-1">Carga tabágica</label>
                                            <input type="text" id="fumante-atual-carga" name="fumante-atual-carga" class="w-full p-2 border border-gray-300 rounded-md">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Medicações -->
                            <div>
                                <h3 class="font-semibold text-lg text-gray-800 border-b pb-2 mb-4">Medicações de Uso Prévio/Contínuo</h3>
                                <div id="medications-container" class="space-y-4">
                                    <!-- Dynamic medication fields will be added here -->
                                </div>
                                <button type="button" id="add-medication" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm">
                                    + Adicionar Medicação
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Seção 3: Dados do Exame Físico da Admissão -->
                <div class="border border-gray-200 rounded-lg">
                    <button type="button" class="accordion-button w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg focus:outline-none">
                        <h2 class="text-xl font-semibold text-gray-700">3. Dados do Exame Físico da Admissão</h2>
                        <svg class="icon w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="accordion-content">
                        <div class="form-section">
                            <div class="form-group">
                                <label for="admission-date" class="font-medium text-gray-700 mb-1">Data da Admissão</label>
                                <input type="date" id="admission-date" name="admission-date" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                            </div>
                            <div class="form-group">
                                <label for="pas" class="font-medium text-gray-700 mb-1">Pressão Arterial Sistólica (PAS)</label>
                                <input type="text" id="pas" name="pas" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="mmHg">
                            </div>
                            <div class="form-group">
                                <label for="pad" class="font-medium text-gray-700 mb-1">Pressão Arterial Diastólica (PAD)</label>
                                <input type="text" id="pad" name="pad" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="mmHg">
                            </div>
                            <div class="form-group">
                                <label for="fc" class="font-medium text-gray-700 mb-1">Frequência Cardíaca (FC)</label>
                                <input type="text" id="fc" name="fc" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="bpm">
                            </div>
                            <div class="form-group form-group-full">
                                <label class="font-medium text-gray-700 mb-1">Classe Funcional da NYHA</label>
                                <div class="flex items-center space-x-4 pt-2">
                                    <label><input type="radio" name="nyha" value="I" class="mr-1">I</label>
                                    <label><input type="radio" name="nyha" value="II" class="mr-1">II</label>
                                    <label><input type="radio" name="nyha" value="III" class="mr-1">III</label>
                                    <label><input type="radio" name="nyha" value="IV" class="mr-1">IV</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Seção 4: Exames Complementares -->
                <div class="border border-gray-200 rounded-lg">
                    <button type="button" class="accordion-button w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg focus:outline-none">
                        <h2 class="text-xl font-semibold text-gray-700">4. Exames Complementares</h2>
                        <svg class="icon w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="accordion-content">
                        <!-- Hemograma -->
                        <h3 class="sub-section-title">Hemograma</h3>
                        <div class="form-section">
                            <div class="form-group"><label for="hemoglobina" class="font-medium text-gray-700 mb-1">Hemoglobina (g/dL)</label><input type="text" id="hemoglobina" name="hemoglobina_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="hemoglobina_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="hemoglobina_data" name="hemoglobina_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="hematocrito" class="font-medium text-gray-700 mb-1">Hematócrito (%)</label><input type="text" id="hematocrito" name="hematocrito_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="hematocrito_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="hematocrito_data" name="hematocrito_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="leucocitos" class="font-medium text-gray-700 mb-1">Leucócitos (/mm³)</label><input type="text" id="leucocitos" name="leucocitos_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="leucocitos_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="leucocitos_data" name="leucocitos_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="plaquetas" class="font-medium text-gray-700 mb-1">Plaquetas (/mm³)</label><input type="text" id="plaquetas" name="plaquetas_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="plaquetas_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="plaquetas_data" name="plaquetas_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                        </div>

                        <!-- Bioquímica -->
                        <h3 class="sub-section-title">Bioquímica</h3>
                        <div class="form-section">
                            <div class="form-group"><label for="glicose" class="font-medium text-gray-700 mb-1">Glicose (mg/dL)</label><input type="text" id="glicose" name="glicose_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="glicose_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="glicose_data" name="glicose_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="ureia" class="font-medium text-gray-700 mb-1">Ureia (mg/dL)</label><input type="text" id="ureia" name="ureia_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="ureia_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="ureia_data" name="ureia_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="creatinina" class="font-medium text-gray-700 mb-1">Creatinina (mg/dL)</label><input type="text" id="creatinina" name="creatinina_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="creatinina_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="creatinina_data" name="creatinina_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="sodio" class="font-medium text-gray-700 mb-1">Sódio (mEq/L)</label><input type="text" id="sodio" name="sodio_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="sodio_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="sodio_data" name="sodio_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="potassio" class="font-medium text-gray-700 mb-1">Potássio (mEq/L)</label><input type="text" id="potassio" name="potassio_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="potassio_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="potassio_data" name="potassio_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="nt_pro_bnp" class="font-medium text-gray-700 mb-1">NT-pró-BNP (pg/mL)</label><input type="text" id="nt_pro_bnp" name="nt_pro_bnp_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="nt_pro_bnp_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="nt_pro_bnp_data" name="nt_pro_bnp_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="bnp" class="font-medium text-gray-700 mb-1">BNP (pg/mL)</label><input type="text" id="bnp" name="bnp_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="bnp_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="bnp_data" name="bnp_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="pcr" class="font-medium text-gray-700 mb-1">PCR (mg/L)</label><input type="text" id="pcr" name="pcr_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="pcr_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="pcr_data" name="pcr_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="vhs" class="font-medium text-gray-700 mb-1">VHS (mm/1ª hora)</label><input type="text" id="vhs" name="vhs_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="vhs_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="vhs_data" name="vhs_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="hba1c" class="font-medium text-gray-700 mb-1">HbA1c (%)</label><input type="text" id="hba1c" name="hba1c_valor" class="w-full p-2 border border-gray-300 rounded-md"></div>
                            <div class="form-group"><label for="hba1c_data" class="font-medium text-gray-700 mb-1">Data</label><input type="date" id="hba1c_data" name="hba1c_data" class="w-full p-2 border border-gray-300 rounded-md"></div>
                        </div>
                        
                        <!-- Troponina e D-dímero -->
                        <div class="form-section mt-4">
                            <div class="form-group form-group-full border-t pt-4">
                                <label class="font-medium text-gray-700 mb-1">Troponina</label>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <input type="text" name="troponina_valor" placeholder="Valor" class="p-2 border border-gray-300 rounded-md">
                                    <input type="text" name="troponina_ref" placeholder="Valor de Referência" class="p-2 border border-gray-300 rounded-md">
                                    <div class="flex items-center space-x-4">
                                        <label><input type="radio" name="troponina_tipo" value="T"> T</label>
                                        <label><input type="radio" name="troponina_tipo" value="I"> I</label>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <label><input type="radio" name="troponina_unidade" value="ng/mL"> ng/mL</label>
                                        <label><input type="radio" name="troponina_unidade" value="pg/mL"> pg/mL</label>
                                    </div>
                                    <input type="date" name="troponina_data" class="p-2 border border-gray-300 rounded-md col-span-2 md:col-span-1">
                                </div>
                            </div>
                            <div class="form-group form-group-full border-t pt-4">
                                <label class="font-medium text-gray-700 mb-1">D-dímero</label>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <input type="text" name="ddimero_valor" placeholder="Valor" class="p-2 border border-gray-300 rounded-md">
                                    <div class="flex items-center space-x-4">
                                        <label><input type="radio" name="ddimero_unidade" value="ng/mL"> ng/mL</label>
                                        <label><input type="radio" name="ddimero_unidade" value="µg/L"> µg/L</label>
                                    </div>
                                    <input type="date" name="ddimero_data" class="p-2 border border-gray-300 rounded-md">
                                </div>
                            </div>
                        </div>

                        <!-- Outros Exames -->
                        <h3 class="sub-section-title">Outros Exames</h3>
                        <div class="space-y-4">
                            <div class="form-group form-group-full"><label for="ecg_achados" class="font-medium text-gray-700 mb-1">Eletrocardiograma (ECG) - Achados e Data</label><textarea id="ecg_achados" name="ecg_achados" rows="2" class="w-full p-2 border border-gray-300 rounded-md"></textarea><input type="date" name="ecg_data" class="w-full p-2 border border-gray-300 rounded-md mt-2"></div>
                            <div class="form-group form-group-full"><label for="rx_achados" class="font-medium text-gray-700 mb-1">RX de Tórax - Achados e Data</label><textarea id="rx_achados" name="rx_achados" rows="2" class="w-full p-2 border border-gray-300 rounded-md"></textarea><input type="date" name="rx_data" class="w-full p-2 border border-gray-300 rounded-md mt-2"></div>
                            <div class="form-group form-group-full"><label for="eco_achados" class="font-medium text-gray-700 mb-1">Ecocardiograma - Achados e Data</label><input type="text" name="eco_feve" placeholder="FEVE (%)" class="w-full p-2 border border-gray-300 rounded-md mb-2"><textarea id="eco_achados" name="eco_achados" rows="2" class="w-full p-2 border border-gray-300 rounded-md"></textarea><input type="date" name="eco_data" class="w-full p-2 border border-gray-300 rounded-md mt-2"></div>
                            <div class="form-group form-group-full"><label for="ressonancia_achados" class="font-medium text-gray-700 mb-1">Ressonância Cardíaca - Achados e Data</label><textarea id="ressonancia_achados" name="ressonancia_achados" rows="2" class="w-full p-2 border border-gray-300 rounded-md"></textarea><input type="date" name="ressonancia_data" class="w-full p-2 border border-gray-300 rounded-md mt-2"></div>
                            <div class="form-group form-group-full"><label for="cintilografia_achados" class="font-medium text-gray-700 mb-1">Cintilografia Miocárdica - Achados e Data</label><textarea id="cintilografia_achados" name="cintilografia_achados" rows="2" class="w-full p-2 border border-gray-300 rounded-md"></textarea><input type="date" name="cintilografia_data" class="w-full p-2 border border-gray-300 rounded-md mt-2"></div>
                            <div class="form-group form-group-full"><label for="angiotomografia_achados" class="font-medium text-gray-700 mb-1">Angiotomografia Coronariana - Achados e Data</label><textarea id="angiotomografia_achados" name="angiotomografia_achados" rows="2" class="w-full p-2 border border-gray-300 rounded-md"></textarea><input type="date" name="angiotomografia_data" class="w-full p-2 border border-gray-300 rounded-md mt-2"></div>
                            <div class="form-group form-group-full"><label for="coronariografia_achados" class="font-medium text-gray-700 mb-1">Coronariografia (Cateterismo) - Achados e Data</label><textarea id="coronariografia_achados" name="coronariografia_achados" rows="2" class="w-full p-2 border border-gray-300 rounded-md"></textarea><input type="date" name="coronariografia_data" class="w-full p-2 border border-gray-300 rounded-md mt-2"></div>
                        </div>
                    </div>
                </div>

                <!-- Seção 5: Procedimentos Realizados -->
                <div class="border border-gray-200 rounded-lg">
                    <button type="button" class="accordion-button w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg focus:outline-none">
                        <h2 class="text-xl font-semibold text-gray-700">5. Procedimentos Realizados</h2>
                        <svg class="icon w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="accordion-content">
                        <div class="space-y-4">
                            <div class="form-group form-group-full flex-row items-center justify-between border-b pb-2"><label class="font-medium text-gray-700">Cardioversão Química</label><div class="flex items-center space-x-4"><label><input type="radio" name="cardioversao_quimica" value="Sim" onchange="toggleConditionalInline(this, 'cardioversao_quimica_data_wrapper', 'Sim')"> Sim</label><label><input type="radio" name="cardioversao_quimica" value="Não" onchange="toggleConditionalInline(this, 'cardioversao_quimica_data_wrapper', 'Sim')"> Não</label><div id="cardioversao_quimica_data_wrapper" class="conditional-inline" style="gap: 0.5rem;"><label for="cardioversao_quimica_data" class="font-medium text-gray-700 ml-4">Data:</label><input type="date" id="cardioversao_quimica_data" name="cardioversao_quimica_data" class="p-2 border border-gray-300 rounded-md"></div></div></div>
                            <div class="form-group form-group-full flex-row items-center justify-between border-b pb-2"><label class="font-medium text-gray-700">Cardioversão Elétrica</label><div class="flex items-center space-x-4"><label><input type="radio" name="cardioversao_eletrica" value="Sim" onchange="toggleConditionalInline(this, 'cardioversao_eletrica_data_wrapper', 'Sim')"> Sim</label><label><input type="radio" name="cardioversao_eletrica" value="Não" onchange="toggleConditionalInline(this, 'cardioversao_eletrica_data_wrapper', 'Sim')"> Não</label><div id="cardioversao_eletrica_data_wrapper" class="conditional-inline" style="gap: 0.5rem;"><label for="cardioversao_eletrica_data" class="font-medium text-gray-700 ml-4">Data:</label><input type="date" id="cardioversao_eletrica_data" name="cardioversao_eletrica_data" class="p-2 border border-gray-300 rounded-md"></div></div></div>
                            <div class="form-group form-group-full border-b pb-2"><div class="flex items-center justify-between"><label class="font-medium text-gray-700">Implante de Marcapasso Cardíaco (MP)</label><div class="flex items-center space-x-4"><label><input type="radio" name="mp_implante" value="Sim" onchange="toggleConditional(this, 'mp_details', 'Sim')"> Sim</label><label><input type="radio" name="mp_implante" value="Não" onchange="toggleConditional(this, 'mp_details', 'Sim')"> Não</label></div></div><div id="mp_details" class="conditional mt-2"><div class="form-group"><label for="mp_data" class="font-medium text-gray-700 mb-1">Data:</label><input type="date" id="mp_data" name="mp_data" class="w-full p-2 border border-gray-300 rounded-md"></div><div class="form-group"><label for="mp_tipo" class="font-medium text-gray-700 mb-1">Tipo:</label><input type="text" id="mp_tipo" name="mp_tipo" class="w-full p-2 border border-gray-300 rounded-md"></div></div></div>
                            <div class="form-group form-group-full flex-row items-center justify-between border-b pb-2"><label class="font-medium text-gray-700">Implante de CDI</label><div class="flex items-center space-x-4"><label><input type="radio" name="cdi_implante" value="Sim" onchange="toggleConditionalInline(this, 'cdi_data_wrapper', 'Sim')"> Sim</label><label><input type="radio" name="cdi_implante" value="Não" onchange="toggleConditionalInline(this, 'cdi_data_wrapper', 'Sim')"> Não</label><div id="cdi_data_wrapper" class="conditional-inline" style="gap: 0.5rem;"><label for="cdi_data" class="font-medium text-gray-700 ml-4">Data:</label><input type="date" id="cdi_data" name="cdi_data" class="p-2 border border-gray-300 rounded-md"></div></div></div>
                            <div class="form-group form-group-full border-b pb-2"><div class="flex items-center justify-between"><label class="font-medium text-gray-700">Implante de Ressincronizador Cardíaco (TRC)</label><div class="flex items-center space-x-4"><label><input type="radio" name="trc_implante" value="Sim" onchange="toggleConditional(this, 'trc_details', 'Sim')"> Sim</label><label><input type="radio" name="trc_implante" value="Não" onchange="toggleConditional(this, 'trc_details', 'Sim')"> Não</label></div></div><div id="trc_details" class="conditional mt-2"><div class="form-group"><label for="trc_data" class="font-medium text-gray-700 mb-1">Data:</label><input type="date" id="trc_data" name="trc_data" class="w-full p-2 border border-gray-300 rounded-md"></div><div class="form-group"><label class="font-medium text-gray-700 mb-1">Tipo:</label><div class="flex items-center space-x-4 flex-wrap"><label><input type="radio" name="trc_tipo" value="TRC-P"> TRC-P</label><label><input type="radio" name="trc_tipo" value="TRC-D"> TRC-D</label><label class="flex items-center"><input type="radio" name="trc_tipo" value="Outro"> Outro:</label><input type="text" name="trc_tipo_outro" class="p-1 border border-gray-300 rounded-md flex-grow"></div></div></div></div>
                            <div class="form-group form-group-full border-b pb-2"><div class="flex items-center justify-between"><label class="font-medium text-gray-700">Uso de Dispositivos de Assistência Ventricular (DAV)</label><div class="flex items-center space-x-4"><label><input type="radio" name="dav_uso" value="Sim" onchange="toggleConditional(this, 'dav_details', 'Sim')"> Sim</label><label><input type="radio" name="dav_uso" value="Não" onchange="toggleConditional(this, 'dav_details', 'Sim')"> Não</label></div></div><div id="dav_details" class="conditional mt-2"><div class="form-group"><label for="dav_data" class="font-medium text-gray-700 mb-1">Data:</label><input type="date" id="dav_data" name="dav_data" class="w-full p-2 border border-gray-300 rounded-md"></div><div class="form-group"><label for="dav_tipo" class="font-medium text-gray-700 mb-1">Tipo:</label><input type="text" id="dav_tipo" name="dav_tipo" class="w-full p-2 border border-gray-300 rounded-md"></div></div></div>
                            <div class="form-group form-group-full flex-row items-center justify-between"><label class="font-medium text-gray-700">Realização de Transplante Cardíaco</label><div class="flex items-center space-x-4"><label><input type="radio" name="transplante_cardiaco" value="Sim" onchange="toggleConditionalInline(this, 'transplante_data_wrapper', 'Sim')"> Sim</label><label><input type="radio" name="transplante_cardiaco" value="Não" onchange="toggleConditionalInline(this, 'transplante_data_wrapper', 'Sim')"> Não</label><div id="transplante_data_wrapper" class="conditional-inline" style="gap: 0.5rem;"><label for="transplante_data" class="font-medium text-gray-700 ml-4">Data:</label><input type="date" id="transplante_data" name="transplante_data" class="p-2 border border-gray-300 rounded-md"></div></div></div>
                        </div>
                    </div>
                </div>

                <!-- Seção 6: Dados da Internação Atual -->
                <div class="border border-gray-200 rounded-lg">
                    <button type="button" class="accordion-button w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg focus:outline-none">
                        <h2 class="text-xl font-semibold text-gray-700">6. Dados da Internação</h2>
                        <svg class="icon w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="accordion-content">
                        <div id="internacoes-container" class="space-y-6">
                            <!-- Dynamic hospitalization sections will be added here -->
                        </div>
                        <button type="button" id="add-internacao" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm">
                            + Adicionar Internação
                        </button>
                    </div>
                </div>

                <!-- Seção 7: Ocorrência de Eventos (Seguimento) -->
                <div class="border border-gray-200 rounded-lg">
                    <button type="button" class="accordion-button w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg focus:outline-none">
                        <h2 class="text-xl font-semibold text-gray-700">7. Ocorrência de Eventos (Seguimento)</h2>
                        <svg class="icon w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="accordion-content">
                        <div id="events-container" class="space-y-6">
                            <!-- Dynamic event sections will be added here -->
                        </div>
                        <button type="button" id="add-event" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm">
                            + Adicionar Registro de Evento
                        </button>
                    </div>
                </div>


                <!-- Botão de Submissão -->
                <div class="flex justify-end pt-6">
                    <button type="submit" class="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-colors duration-300">
                        Salvar e Exportar Dados
                    </button>
                </div>

            </form>
        </div>
        
        <!-- Modal de Sucesso -->
        <div id="success-modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full hidden z-50">
            <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div class="mt-3 text-center">
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900 mt-2">Sucesso!</h3>
                    <div class="mt-2 px-7 py-3">
                        <p class="text-sm text-gray-500">
                            Os dados foram enviados ao servidor e o download do arquivo CSV foi iniciado. O formulário será limpo.
                        </p>
                    </div>
                    <div class="items-center px-4 py-3">
                        <button id="close-modal" class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // --- Lógica do Acordeão ---
            const accordionButtons = document.querySelectorAll('.accordion-button');
            accordionButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Fecha todos os outros acordeões
                    accordionButtons.forEach(otherButton => {
                        if (otherButton !== button && otherButton.classList.contains('active')) {
                            otherButton.classList.remove('active');
                        }
                    });
                    // Alterna o acordeão clicado
                    button.classList.toggle('active');
                });
            });
            // Abre o primeiro acordeão por padrão
            if(accordionButtons.length > 0) {
                accordionButtons[0].classList.add('active');
            }


            // --- Lógica para campos condicionais ---
            window.toggleConditional = (element, targetId, triggerValue = 'Sim') => {
                const target = document.getElementById(targetId);
                if (target) {
                    if (element.value === triggerValue && element.checked) {
                        target.classList.add('visible');
                    } else {
                        target.classList.remove('visible');
                    }
                }
            };
            
            window.toggleConditionalInline = (element, targetId, triggerValue = 'Sim') => {
                const target = document.getElementById(targetId);
                if (target) {
                    if (element.value === triggerValue && element.checked) {
                        target.classList.add('visible');
                    } else {
                        target.classList.remove('visible');
                    }
                }
            };

            // --- Lógica para Tabagismo ---
            window.handleTabagismoChange = () => {
                const statusRadio = document.querySelector('input[name="tabagismo"]:checked');
                const exFumanteDetails = document.getElementById('ex-fumante-details');
                const fumanteAtualDetails = document.getElementById('fumante-atual-details');

                exFumanteDetails.classList.remove('visible');
                fumanteAtualDetails.classList.remove('visible');

                if (statusRadio) {
                    const status = statusRadio.value;
                    if (status === 'Ex-fumante') {
                        exFumanteDetails.classList.add('visible');
                    } else if (status === 'Fumante atual') {
                        fumanteAtualDetails.classList.add('visible');
                    }
                }
            };
            
            // --- Lógica para adicionar medicações dinamicamente ---
            const addMedicationBtn = document.getElementById('add-medication');
            const medicationsContainer = document.getElementById('medications-container');
            let medicationCount = 0;

            const addMedicationField = () => {
                medicationCount++;
                const medicationDiv = document.createElement('div');
                medicationDiv.className = 'medication-entry p-4 border border-gray-200 rounded-lg relative';
                medicationDiv.innerHTML = `
                    <div class="form-section">
                        <div class="form-group">
                            <label class="font-medium text-gray-700 mb-1 text-sm">Medicação ${medicationCount}</label>
                            <input type="text" name="medication-name-${medicationCount}" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Nome da Medicação">
                        </div>
                        <div class="form-group">
                            <label class="font-medium text-gray-700 mb-1 text-sm">Dose</label>
                            <input type="text" name="medication-dose-${medicationCount}" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Ex: 50mg">
                        </div>
                        <div class="form-group">
                            <label class="font-medium text-gray-700 mb-1 text-sm">Frequência</label>
                            <input type="text" name="medication-freq-${medicationCount}" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Ex: 1x ao dia">
                        </div>
                    </div>
                    <button type="button" class="remove-btn absolute top-2 right-2 text-red-500 hover:text-red-700">&times;</button>
                `;
                medicationsContainer.appendChild(medicationDiv);
                medicationDiv.querySelector('.remove-btn').addEventListener('click', () => {
                    medicationDiv.remove();
                });
            };
            addMedicationBtn.addEventListener('click', addMedicationField);
            addMedicationField();


            // --- Lógica para adicionar internações dinamicamente ---
            const addInternacaoBtn = document.getElementById('add-internacao');
            const internacoesContainer = document.getElementById('internacoes-container');
            let internacaoCount = 0;

            const addInternacaoSection = () => {
                internacaoCount++;
                const internacaoDiv = document.createElement('div');
                internacaoDiv.className = 'internacao-entry p-4 border border-blue-200 bg-blue-50 rounded-lg relative';
                internacaoDiv.innerHTML = `
                    <h4 class="font-bold text-lg mb-4 text-blue-800">Registro de Internação ${internacaoCount}</h4>
                    <button type="button" class="remove-btn absolute top-2 right-2 text-red-500 hover:text-red-700 text-2xl font-bold">&times;</button>
                    <div class="form-section">
                        <div class="form-group">
                            <label for="internacao-data-admissao-${internacaoCount}" class="font-medium text-gray-700 mb-1">Data da Internação</label>
                            <input type="date" id="internacao-data-admissao-${internacaoCount}" name="internacao-data-admissao-${internacaoCount}" class="w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        <div class="form-group">
                            <label for="internacao-cid-admissao-${internacaoCount}" class="font-medium text-gray-700 mb-1">CID Principal da Admissão</label>
                            <input type="text" id="internacao-cid-admissao-${internacaoCount}" name="internacao-cid-admissao-${internacaoCount}" class="w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        <div class="form-group form-group-full">
                            <label class="font-medium text-gray-700 mb-1">Alta ou Óbito</label>
                            <div class="flex items-center space-x-4">
                                <label><input type="radio" name="internacao-status-${internacaoCount}" value="Alta" class="mr-1">Alta</label>
                                <label><input type="radio" name="internacao-status-${internacaoCount}" value="Óbito" class="mr-1">Óbito</label>
                                <label for="internacao-data-saida-${internacaoCount}" class="font-medium text-gray-700 ml-4">Data:</label>
                                <input type="date" id="internacao-data-saida-${internacaoCount}" name="internacao-data-saida-${internacaoCount}" class="p-2 border border-gray-300 rounded-md">
                            </div>
                        </div>
                        <div class="form-group form-group-full">
                            <label for="internacao-cid-saida-${internacaoCount}" class="font-medium text-gray-700 mb-1">CID Principal da Alta ou Óbito</label>
                            <input type="text" id="internacao-cid-saida-${internacaoCount}" name="internacao-cid-saida-${internacaoCount}" class="w-full p-2 border border-gray-300 rounded-md">
                        </div>
                    </div>
                `;
                internacoesContainer.appendChild(internacaoDiv);
                internacaoDiv.querySelector('.remove-btn').addEventListener('click', () => {
                    internacaoDiv.remove();
                });
            };
            addInternacaoBtn.addEventListener('click', addInternacaoSection);
            addInternacaoSection();


            // --- Lógica para adicionar eventos dinamicamente ---
            const addEventBtn = document.getElementById('add-event');
            const eventsContainer = document.getElementById('events-container');
            let eventCount = 0;

            const addEventSection = () => {
                eventCount++;
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event-entry p-4 border border-blue-200 bg-blue-50 rounded-lg relative';
                eventDiv.innerHTML = `
                    <h4 class="font-bold text-lg mb-4 text-blue-800">Registro de Evento ${eventCount}</h4>
                    <div class="space-y-4">
                        <!-- Óbito -->
                        <div class="form-group">
                            <label class="font-medium text-gray-700">Óbito?</label>
                            <div>
                                <label><input type="radio" name="obito-${eventCount}" value="Sim" onchange="toggleConditional(this, 'obito-details-${eventCount}', 'Sim')"> Sim</label>
                                <label><input type="radio" name="obito-${eventCount}" value="Não" onchange="toggleConditional(this, 'obito-details-${eventCount}', 'Sim')"> Não</label>
                            </div>
                            <div id="obito-details-${eventCount}" class="conditional">
                                <div class="form-group">
                                    <label class="font-medium text-gray-700 mb-1">Data do Óbito</label>
                                    <input type="date" name="obito-data-${eventCount}" class="w-full p-2 border border-gray-300 rounded-md">
                                </div>
                                <div class="form-group">
                                    <label class="font-medium text-gray-700 mb-1">Causa</label>
                                    <input type="text" name="obito-causa-${eventCount}" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Cardiovascular, Não Cardiovascular, etc.">
                                </div>
                            </div>
                        </div>
                        <!-- Outros Eventos -->
                        <div class="form-group">
                            <label class="font-medium text-gray-700">Insuficiência Cardíaca (descompensação)?</label>
                             <div>
                                <label><input type="radio" name="ic-${eventCount}" value="Sim"> Sim</label>
                                <label><input type="radio" name="ic-${eventCount}" value="Não"> Não</label>
                            </div>
                        </div>
                         <div class="form-group">
                            <label class="font-medium text-gray-700">Arritmias Graves?</label>
                             <div>
                                <label><input type="radio" name="arritmia-${eventCount}" value="Sim"> Sim</label>
                                <label><input type="radio" name="arritmia-${eventCount}" value="Não"> Não</label>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="remove-btn absolute top-2 right-2 text-red-500 hover:text-red-700 text-2xl font-bold">&times;</button>
                `;
                eventsContainer.appendChild(eventDiv);
                eventDiv.querySelector('.remove-btn').addEventListener('click', () => {
                    eventDiv.remove();
                });
            };
            addEventBtn.addEventListener('click', addEventSection);
            addEventSection();


            // --- Lógica de Submissão e Geração de CSV ---
            const form = document.getElementById('medical-form');
            form.addEventListener('submit', async function (event) {
                event.preventDefault();

                const formData = new FormData(form);
                const data = {};
                for (let [key, value] of formData.entries()) {
                    // Apenas adiciona ao objeto se o valor não for vazio
                    if (value) {
                       data[key] = value;
                    }
                }
                
                // Processa as medicações
                const medications = [];
                document.querySelectorAll('.medication-entry').forEach((entry, index) => {
                    const name = entry.querySelector(`input[name^="medication-name"]`).value;
                    const dose = entry.querySelector(`input[name^="medication-dose"]`).value;
                    const freq = entry.querySelector(`input[name^="medication-freq"]`).value;
                    if (name || dose || freq) {
                        medications.push(`Nome: ${name || 'N/A'}, Dose: ${dose || 'N/A'}, Frequência: ${freq || 'N/A'}`);
                    }
                });
                data['medications'] = medications.join(' | ');

                // Processa as internações
                const internacoes = [];
                document.querySelectorAll('.internacao-entry').forEach((entry, index) => {
                    const internacaoIndex = index + 1;
                    const dataAdmissao = entry.querySelector(`input[name^="internacao-data-admissao"]`).value;
                    const cidAdmissao = entry.querySelector(`input[name^="internacao-cid-admissao"]`).value;
                    const status = entry.querySelector(`input[name="internacao-status-${internacaoIndex}"]:checked`)?.value || 'Não informado';
                    const dataSaida = entry.querySelector(`input[name^="internacao-data-saida"]`).value;
                    const cidSaida = entry.querySelector(`input[name^="internacao-cid-saida"]`).value;

                    if (dataAdmissao || cidAdmissao) {
                        const internacaoString = `Internação ${internacaoIndex}: Data Adm.(${dataAdmissao || 'N/A'}), CID Adm.(${cidAdmissao || 'N/A'}), Status(${status}), Data Saída(${dataSaida || 'N/A'}), CID Saída(${cidSaida || 'N/A'})`;
                        internacoes.push(internacaoString);
                    }
                });
                data['internacoes'] = internacoes.join(' | ');

                // Processa os eventos
                const events = [];
                document.querySelectorAll('.event-entry').forEach((entry, index) => {
                    const eventIndex = index + 1;
                    const obito = entry.querySelector(`input[name="obito-${eventIndex}"]:checked`)?.value || 'Não';
                    let obito_data = '';
                    let obito_causa = '';
                    if (obito === 'Sim') {
                        obito_data = entry.querySelector(`input[name="obito-data-${eventIndex}"]`)?.value || 'N/A';
                        obito_causa = entry.querySelector(`input[name="obito-causa-${eventIndex}"]`)?.value || 'N/A';
                    }
                    const ic = entry.querySelector(`input[name="ic-${eventIndex}"]:checked`)?.value || 'Não';
                    const arritmia = entry.querySelector(`input[name="arritmia-${eventIndex}"]:checked`)?.value || 'Não';
                    
                    const eventString = `Evento ${eventIndex}: Óbito(${obito}), Data Óbito(${obito_data}), Causa Óbito(${obito_causa}), IC(${ic}), Arritmia(${arritmia})`;
                    events.push(eventString);
                });
                data['events'] = events.join(' | ');
                
                // Envia os dados para o backend
                try {
                    const response = await fetch('http://localhost:3000/api/save', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    });

                    if (!response.ok) {
                        throw new Error(`Erro do servidor: ${response.status} ${response.statusText}`);
                    }

                    // Pega o nome do arquivo do header Content-Disposition
                    const disposition = response.headers.get('content-disposition');
                    let fileName = `dados_paciente.csv`;
                    if (disposition && disposition.indexOf('attachment') !== -1) {
                        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                        const matches = filenameRegex.exec(disposition);
                        if (matches != null && matches[1]) {
                            fileName = matches[1].replace(/['"]/g, '');
                        }
                    }

                    // Cria um blob com os dados CSV recebidos e inicia o download
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', fileName);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                    
                    showSuccessModal();

                } catch (error) {
                    console.error('Falha ao enviar dados para o servidor:', error);
                    alert('Não foi possível conectar ao servidor. Verifique se ele está rodando e tente novamente.');
                }
            });
            
            const modal = document.getElementById('success-modal');
            const closeModalBtn = document.getElementById('close-modal');
            
            const showSuccessModal = () => {
                modal.classList.remove('hidden');
            };

            const hideSuccessModal = () => {
                modal.classList.add('hidden');
                form.reset();
                medicationsContainer.innerHTML = '';
                addMedicationField();
                internacoesContainer.innerHTML = '';
                addInternacaoSection();
                eventsContainer.innerHTML = '';
                addEventSection();
                document.querySelectorAll('.accordion-button').forEach((btn, index) => {
                    if (index === 0) btn.classList.add('active');
                    else btn.classList.remove('active');
                });
                handleTabagismoChange();
            };
            
            closeModalBtn.addEventListener('click', hideSuccessModal);
            window.addEventListener('click', (event) => {
                if (event.target == modal) {
                    hideSuccessModal();
                }
            });
        });
    </script>
</body>
</html>
