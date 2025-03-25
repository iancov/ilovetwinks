document.getElementById('myForm').onsubmit = function(e) {
    e.preventDefault();
    
    var formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      size: document.getElementById('size').value,
      design: document.getElementById('design').value,
      pickup: document.getElementById('pickup').value,
      venmo: document.getElementById('venmo').value
    };
    
    fetch('https://script.google.com/macros/s/AKfycbxDE-sVvC7L0_ChCAW9B5a3yks8lPgf2EQx3wLeBQNODN9tHQyPf6tmmjiJ4rEshBM3/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.text())
      .then(text => console.log(text))
      .catch(error => console.error(error));
  };