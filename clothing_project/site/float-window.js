// -----------------------------------------------------
// AUTO CREATE FLOATING WINDOW + EVENT FEST CHATBOT
// -----------------------------------------------------

(function () {

    // Create floating button
    const openBtn = document.createElement("button");
    openBtn.id = "floatOpenBtn";
    openBtn.textContent = "Chat";
    document.body.appendChild(openBtn);

    // Create floating window
    const floatBox = document.createElement("div");
    floatBox.id = "floatBox";

    floatBox.innerHTML = `
        <div id="floatCloseBtn">×</div>

        <h3 style="margin-top:10px;">✨ Shop Buddy Bot </h3>
        
        <div id="chatbox" style="
            width:100%; 
            height:350px; 
            background:rgba(255,255,255,0.8);
            border-radius:12px;
            overflow:hidden;
            display:flex;
            flex-direction:column;
        ">
            <div id="messages" style="
                flex:1;
                padding:10px;
                overflow-y:auto;
                display:flex;
                flex-direction:column;
                gap:8px;
                font-size:14px;
            ">
                <div class="msg bot">Hello 👋! Ask about products, sizes, offers, or anything related to our fashion store.</div>
            </div>

            <div id="inputArea" style="display:flex; border-top:1px solid #ccc;">
                <input id="userInput" type="text" placeholder="Type your message..."
                    style="flex:1; padding:10px; border:none; outline:none;">
                <button id="sendBtn" style="
                    background:#000000;
                    color:#fff;
                    border:none;
                   border-radius: 8px;
                    padding:10px 15px;
                    cursor:pointer;
                ">Send</button>
            </div>
        </div>
    `;
    document.body.appendChild(floatBox);

    // ------- CSS -------
    const style = document.createElement("style");
    style.textContent = `
        #floatOpenBtn {
            position: fixed;
    bottom: 20px;
    right: 20px;
    background: #000;
    color: #fff;
    padding: 14px 22px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    z-index: 99999;
    box-shadow: 0 0 15px rgba(0,0,0,0.4);
    font-weight: 600;
    letter-spacing: 1px;
    animation: pulse 1.8s infinite ease-in-out;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        #floatBox {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 330px;
            padding: 15px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            z-index: 99999;
            display: none;
        }

        #floatCloseBtn {
            position: absolute;
            top: 5px;
            right: 8px;
            font-size: 18px;
            cursor: pointer;
            background: #130909ff;
            color: white;
            padding: 2px 6px;
            border-radius: 50%;
        }

        .msg {
            padding: 10px;
            border-radius: 10px;
            max-width: 80%;
            word-wrap: break-word;
        }
        .user { background:#cfe2ff; align-self:flex-end; }
        .bot { background:#e8e8e8; align-self:flex-start; }
        .bot { 
    background: #f6f3f3ff; 
    color: #070404ff; 
    align-self: flex-start; 
    border: 1px solid rgba(255,255,255,0.1);
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
    0% { box-shadow: 0 0 10px rgba(0,0,0,0.6); }
    50% { box-shadow: 0 0 22px rgba(0,0,0,0.9); }
    100% { box-shadow: 0 0 10px rgba(0,0,0,0.6); }
}

@keyframes slideMsg {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
}
    `;
    document.head.appendChild(style);

    // ----------- FUNCTIONALITY -----------
    openBtn.onclick = () => {
        floatBox.style.display = "block";
        openBtn.style.display = "none";
    };

    document.addEventListener("click", (e) => {
        if (e.target.id === "floatCloseBtn") {
            floatBox.style.display = "none";
            openBtn.style.display = "block";
        }
    });

    // ----------- CHATBOT LOGIC -----------
    setTimeout(() => {

        const HF_TOKEN = "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";

        import("https://cdn.jsdelivr.net/npm/@gradio/client/+esm").then(({ Client }) => {

            const input = document.getElementById("userInput");
            const btn = document.getElementById("sendBtn");
            const messages = document.getElementById("messages");

            function addMessage(text, sender) {
                const msg = document.createElement("div");
                msg.classList.add("msg", sender);
                msg.textContent = text;
                messages.appendChild(msg);
                messages.scrollTop = messages.scrollHeight;
            }

            btn.addEventListener("click", async () => {
                const userMessage = input.value.trim();
                if (!userMessage) return;

                addMessage(userMessage, "user");
                input.value = "";
                addMessage("⏳ Thinking...", "bot");

                try {
                    const client = await Client.connect("Manish890111/clothing_bot", { hf_token: HF_TOKEN });
                    const result = await client.predict("/chat", { message: userMessage });

                    const botMsg = result.data[0] || "Sorry, I didn't understand that.";
                    messages.lastChild.textContent = "💬 " + botMsg;
                } catch (err) {
                    messages.lastChild.textContent = "⚠️ Error: " + err.message;
                }
            });

            input.addEventListener("keypress", (e) => {
                if (e.key === "Enter") btn.click();
            });

        });

    }, 500);

})();
