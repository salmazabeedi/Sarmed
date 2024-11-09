function showPackageDetails(title, description) {
    document.getElementById('packageTitle').innerText = title;
    document.getElementById('packageDescription').innerText = description;
    document.getElementById('packageDetails').style.display = 'flex';
  }
  
  function closePackageDetails() {
    document.getElementById('packageDetails').style.display = 'none';
  }
  