document.getElementById("emailBtn").addEventListener("click", async () => {
  alert("This would trigger an email via your backend (Netlify Function + Resend API).");
  
  // Example fetch to Netlify function
  /*
  const res = await fetch("/.netlify/functions/send-email", {
    method: "POST",
    body: JSON.stringify({
      to: "fan@example.com",
      subject: "Your LSU Order Confirmation",
      body: "Here are your event details..."
    }),
  });
  const data = await res.json();
  alert(data.message);
  */
});
