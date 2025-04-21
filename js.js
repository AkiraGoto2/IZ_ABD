document.getElementById("newsForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const imageInput = document.getElementById("newsImage");
    const titleInput = document.getElementById("newsTitle");
    const textInput = document.getElementById("newsText");
  
    const file = imageInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function() {
      const newsContainer = document.getElementById("newsContainer");
  
      const newsItem = document.createElement("div");
      newsItem.className = "news-item";
  
      const imageSrc = reader.result;
      const title = titleInput.value;
      const text = textInput.value;
  
      newsItem.innerHTML = `
        <img src="${imageSrc}" alt="Новость">
        <div>
          <h2><strong>${title}</strong></h2>
          <p>${text}</p>
          <div class="news-actions">
            <button class="edit-btn">Редактировать</button>
            <button class="delete-btn">Удалить</button>
          </div>
        </div>
      `;

      const editButton = newsItem.querySelector(".edit-btn");
      const deleteButton = newsItem.querySelector(".delete-btn");
  
      editButton.addEventListener("click", () => {
        titleInput.value = title;
        textInput.value = text;
        imageInput.value = ""; 
        newsItem.remove();
      });
  
      deleteButton.addEventListener("click", () => {
        newsItem.remove();
      });
  
      newsContainer.prepend(newsItem);
  
      imageInput.value = "";
      titleInput.value = "";
      textInput.value = "";
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  });


  function addThesis() {
    const input = document.getElementById("newThesisInput");
    const thesisText = input.value.trim();
    const select = document.getElementById("thesis-select");
  
    if (thesisText === "") {
      alert("Пожалуйста, введите тему.");
      return;
    }
  
    const option = document.createElement("option");
    option.value = thesisText;
    option.textContent = thesisText;
  
    select.appendChild(option);
    input.value = ""; 
  }


  function changeRole(selectElement) {
    const userName = selectElement.closest("tr").cells[0].textContent;
    const newRole = selectElement.value;
    console.log(`Роль пользователя ${userName} изменена на: ${newRole}`);
  }
  
  function deleteUser(buttonElement) {
    const userRow = buttonElement.closest("tr");
    const userName = userRow.cells[0].textContent;
    userRow.remove();
    console.log(`Пользователь ${userName} удалён`);
  }