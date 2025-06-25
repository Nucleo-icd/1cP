let isSubmitting = false;

document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  if (isSubmitting) return;
  isSubmitting = true;

  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim().toLowerCase();

  if (username === 'ambulatorio' && password === 'ambulatorio') {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwVOSZnHUeKfRUyxy66QGegekodo8H4Hsf1efk2awz2w7ZCCjTmT8hSww2HEJ4cJOMZ6Q/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          setor: "Cirurgia de Cabeça e Pescoço"
        })
      });

      if (!response.ok) {
        console.error("Erro ao enviar os dados.");
      }
    } catch (error) {
      console.error("Erro na comunicação com a API:", error);
    } finally {
      window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiMzkzOTg3ZDEtZGU2MC00YWZlLWFlODAtMzRjNjk4Nzg5MDRlIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS08M2Q1LTE5MGE2Y2MwMTM2NSJ9";
    }
  } else {
    document.getElementById('error-message').style.display = "block";
    isSubmitting = false;
  }
});
