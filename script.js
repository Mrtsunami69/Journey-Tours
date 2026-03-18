document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // CHAT TOGGLE
  // ==========================
  const chatBtn = document.getElementById("chat-toggle");
  const chatbox = document.getElementById("chatbox");

  chatBtn.addEventListener("click", () => {
    chatbox.style.display =
      chatbox.style.display === "flex" ? "none" : "flex";
  });

  // ==========================
  // CHATBOT LOGIC (UPGRADED 🔥)
  // ==========================
  const input = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");
  const messages = document.getElementById("chat-messages");

  function addMessage(text, className) {
    const msg = document.createElement("p");
    msg.className = className;
    msg.innerHTML = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping(callback) {
    const typing = document.createElement("p");
    typing.className = "bot";
    typing.innerText = "Typing...";
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {
      typing.remove();
      callback();
    }, 600);
  }

  // ==========================
  // SMART TEXT REPLIES
  // ==========================
  function getReply(text) {
    text = text.toLowerCase();

    if (text.includes("destination")) {
      return "🌍 <strong>Family-Friendly Destinations:</strong><br><br>• Caribbean all-inclusive resorts (Cancun, Punta Cana)<br>• Disney & Universal theme parks<br>• Family cruises<br>• Adventure & nature trips<br><br>All options are safe, fun, and perfect for families.";
    }

    if (text.includes("price") || text.includes("cost")) {
      return "💰 <strong>Vacation Pricing:</strong><br><br>Most family vacations range between <strong>$4,000–$5,500</strong> for a family of four.<br><br>Prices vary depending on destination and travel season.";
    }

    if (text.includes("insurance")) {
      return "🛡️ <strong>Travel Insurance:</strong><br><br>Covers medical emergencies, cancellations, delays, and lost luggage.<br><br>We highly recommend it for peace of mind.";
    }

    if (text.includes("book")) {
      return "✈️ <strong>Booking:</strong><br><br>Click <strong>'Start Your Journey'</strong> or visit our Contact page.<br><br>We’ll handle everything for you!";
    }

    if (text.includes("hello") || text.includes("hi")) {
      return "👋 Hello! I'm here to help you plan a stress-free family vacation. Ask me anything or choose an option below 👇";
    }

    return "🤖 I can help with destinations, pricing, insurance, and booking. Try selecting an option below 👇";
  }

  function botReply(text) {
    showTyping(() => {
      addMessage(getReply(text), "bot");
    });
  }

  // ==========================
  // INPUT (USER TYPING)
  // ==========================
  sendBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    botReply(text);
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });

  // ==========================
  // QUICK REPLIES BUTTONS
  // ==========================
  const quickBtns = document.querySelectorAll(".quick-replies button");

  function getMenuReply(topic) {
    if (topic === "destinations") {
      return "🌍 <strong>Top Family Destinations:</strong><br><br>• Caribbean resorts<br>• Disney parks<br>• Cruises<br>• Adventure trips<br><br>All designed for safety and family fun.";
    }

    if (topic === "prices") {
      return "💰 <strong>Pricing Guide:</strong><br><br>Family vacations typically cost <strong>$4,000–$5,500</strong>.<br><br>We help you find the best value for your budget.";
    }

    if (topic === "insurance") {
      return "🛡️ <strong>Insurance:</strong><br><br>Protects against emergencies, cancellations, and delays.<br><br>Highly recommended for families.";
    }

    if (topic === "booking") {
      return "✈️ <strong>How to Book:</strong><br><br>Click <strong>'Start Your Journey'</strong> or go to our Contact page.<br><br>We guide you step-by-step.";
    }

    return "Please choose an option!";
  }

  quickBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const topic = btn.dataset.topic;
      const label = btn.innerText;

      addMessage(label, "user");

      showTyping(() => {
        addMessage(getMenuReply(topic), "bot");
      });
    });
  });

  // ==========================
  // SCROLL TO TOP
  // ==========================
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // ==========================
  // DARK MODE
  // ==========================
  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

});