document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const historyList = document.getElementById('historyList');
  
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const searchTerm = searchInput.value.trim();
  
      if (searchTerm !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <div class="searchResult">
            <span class="medicationName">${searchTerm}</span>
            <span class="location">Localização não especificada</span>
            <span class="quantity">Quantidade não especificada</span>
          </div>
        `;
        historyList.appendChild(listItem);
  
        // Limpar o campo de pesquisa após a submissão
        searchInput.value = '';
      }
    });
  });
  
  