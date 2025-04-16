document.addEventListener('DOMContentLoaded', function() {

    // Script para adicionar mais campos de equipamentos
    const addEquipmentButton = document.getElementById('addEquipment');
    if (addEquipmentButton) {
        addEquipmentButton.addEventListener('click', function() {
            const equipmentList = document.getElementById('equipmentList');
            // Conta apenas os 'equipment-item' para evitar contar o botão se ele estiver dentro
            const equipmentCount = equipmentList.querySelectorAll('.equipment-item').length + 1;

            const newEquipment = document.createElement('div');
            newEquipment.className = 'equipment-item';
            // Usando IDs e Names únicos
            newEquipment.innerHTML = `
                <div class="form-group">
                    <label for="equipment${equipmentCount}">Equipamento:</label>
                    <input type="text" id="equipment${equipmentCount}" name="equipment${equipmentCount}">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="model${equipmentCount}">Modelo:</label>
                        <input type="text" id="model${equipmentCount}" name="model${equipmentCount}">
                    </div>
                    <div class="form-group">
                        <label for="serialNumber${equipmentCount}">Nº de Série:</label>
                        <input type="text" id="serialNumber${equipmentCount}" name="serialNumber${equipmentCount}">
                    </div>
                </div>
                <div class="form-group">
                    <label for="location${equipmentCount}">Localização:</label>
                    <input type="text" id="location${equipmentCount}" name="location${equipmentCount}">
                </div>
                <div class="form-group">
                    <label for="status${equipmentCount}">Status do Equipamento:</label>
                    <input type="text" id="status${equipmentCount}" name="status${equipmentCount}">
                </div>
                <button type="button" class="btn-remove-item" style="position: absolute; top: 5px; right: 5px; background: #ffdddd; color: red; border: none; border-radius: 50%; width: 20px; height: 20px; font-size: 12px; line-height: 18px; cursor: pointer;">X</button>
            `;

            equipmentList.appendChild(newEquipment);
        });
    }

    // Script para adicionar mais campos de serviços
    const addServiceButton = document.getElementById('addService');
    if (addServiceButton) {
        addServiceButton.addEventListener('click', function() {
            const servicesList = document.getElementById('servicesList');
             // Conta apenas os 'service-item'
            const serviceCount = servicesList.querySelectorAll('.service-item').length + 1;

            const newService = document.createElement('div');
            newService.className = 'service-item';
            newService.innerHTML = `
                <div class="form-group">
                    <label for="serviceType${serviceCount}">Tipo de Serviço:</label>
                    <select id="serviceType${serviceCount}" name="serviceType${serviceCount}">
                        <option value="">Selecione</option>
                        <option value="limpeza">Limpeza</option>
                        <option value="atualizacao">Atualização de Software</option>
                        <option value="substituicao">Substituição de Peças</option>
                        <option value="configuracao">Configuração</option>
                        <option value="teste">Teste de Funcionamento</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="serviceDesc${serviceCount}">Descrição:</label>
                    <textarea id="serviceDesc${serviceCount}" name="serviceDesc${serviceCount}"></textarea>
                </div>
                 <button type="button" class="btn-remove-item" style="position: absolute; top: 5px; right: 5px; background: #ffdddd; color: red; border: none; border-radius: 50%; width: 20px; height: 20px; font-size: 12px; line-height: 18px; cursor: pointer;">X</button>
            `;

            servicesList.appendChild(newService);
        });
    }

     // Delegação de evento para remover itens (Equipamento ou Serviço)
     const equipmentListDiv = document.getElementById('equipmentList');
     const servicesListDiv = document.getElementById('servicesList');

     function handleRemoveItem(event) {
         if (event.target.classList.contains('btn-remove-item')) {
             // Encontra o '*-item' pai e remove
             const itemToRemove = event.target.closest('.equipment-item, .service-item');
             if (itemToRemove) {
                 itemToRemove.remove();
             }
         }
     }

     if (equipmentListDiv) {
         equipmentListDiv.addEventListener('click', handleRemoveItem);
     }
     if (servicesListDiv) {
         servicesListDiv.addEventListener('click', handleRemoveItem);
     }


    // Listener para o botão Salvar Relatório
    const submitReportButton = document.getElementById('submitReport');
    if (submitReportButton) {
        submitReportButton.addEventListener('click', function() {
            // Aqui você coletaria os dados de todos os forms
            alert('Simulação: Relatório salvo com sucesso!');
            // Ex: const clientData = new FormData(document.getElementById('clientForm'));
            //     fetch('/api/save-report', { method: 'POST', body: clientData ... });
        });
    }

    // Listener para o botão Novo Relatório
    const newReportButton = document.getElementById('newReport');
    if (newReportButton) {
        newReportButton.addEventListener('click', function () {
            // Abre a mesma página (ou a URL base do relatório) em nova aba
            // Certifique-se que 'vistoria.html' é o nome correto ou use location.pathname
            window.open(window.location.pathname, '_blank');
        });
    }

}); // Fim do DOMContentLoaded