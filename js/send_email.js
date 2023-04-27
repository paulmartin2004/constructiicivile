function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting
          
  // Get form data
  const nume = document.getElementById("nume").value;
  const prenume = document.getElementById("prenume").value;
  const email = document.getElementById("email").value;
  const telefon = document.getElementById("telefon").value;
  const mesaj = document.getElementById("mesaj").value;

  // Construct mailto link
  const subject = encodeURIComponent("Mesaj de la " + nume +" " + prenume);
  const body = encodeURIComponent("Nume: " + nume +"\nPrenume: " + prenume +"\nTelefon: " + telefon + "\nEmail: " + email + "\n\nMesaj:\n" + mesaj + "\n\n");
  const mailtoLink = "mailto:pm8470403@gmail.com?subject=" + subject + "&body=" + body;

  // Open mailto link
  window.location.href = mailtoLink;
}