function getData() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let newSection = document.createElement("div");
        let newNode = document.createTextNode(this.responseText);
        newSection.appendChild(newNode);
        document.getElementById("demo").append(newSection);
      }
    };
    xhr.open("GET", "http://localhost:3000/posts", true);
    xhr.send();
  }
  
  function sendData() {
    let xhr = new XMLHttpRequest();
    let requestBody = {
      "userId": 1,
      "id": 101,
      "title": "Newly Added Title",
      "body": "Newly added body"
    };
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 201) {
        console.log("Data added successfully");
      }
    };
    xhr.open("POST", "http://localhost:3000/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(requestBody));
  }
  