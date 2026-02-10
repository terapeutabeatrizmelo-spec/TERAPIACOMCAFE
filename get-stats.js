const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function getStats() {
    console.log('--- ESTATÍSTICAS DE ACESSO: TERAPIA COM CAFÉ ---');
    const namespace = 'terapiacomcafe_v3';
    const key = 'visits';

    try {
        const response = await fetch(`https://api.countapi.xyz/get/${namespace}/${key}`);
        const data = await response.json();

        console.log(`Total de Visualizações: ${data.value}`);
        console.log(`Data da Consulta: ${new Date().toLocaleString('pt-BR')}`);
        console.log('------------------------------------------------');
    } catch (error) {
        console.error('Erro ao buscar estatísticas:', error.message);
    }
}

getStats();
