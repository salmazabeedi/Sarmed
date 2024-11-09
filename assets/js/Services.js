function showServiceDetails(title, description) {
    document.getElementById('serviceTitle').innerText = title;
    document.getElementById('serviceDescription').innerText = description;
    document.getElementById('serviceDetails').style.display = 'flex';
  }
  
  function closeServiceDetails() {
    document.getElementById('serviceDetails').style.display = 'none';
  }
  