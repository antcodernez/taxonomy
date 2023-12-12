import bot from "./public/img/imgia/bot.svg";
import user from "./public/img/imgia/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");

let loadInterval;

function loader(element) {
  element.textContent = '';
  loadInterval = setInterval(() => {
    element.textContent += ".";
    if(element.textContent === "....")
      {
        element.textContent = "";     
      }
  }, 300) ;
}

function typeText(element, text)
  {
    let index = 0;
    let interval = setInterval(() => {
      if(index < 100)
        {
          element.innerHTML += text[index];
          index++;
        }
      else
        {
          clearInterval(interval);
        }
    }, 20);
  }

function generateUniqueId() 
  {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);
    return `id-${timestamp}-${hexadecimalString}`;
  }

function chatStripe (isAi, value, uniqueID) 
  {
      return (
        `
        <div class="wrapper ${isAi && 'ai'}">
          <div class="chat">
            <div className="profile">
              <img src="${isAi ? bot : user}" alt="${isAi ? 'bot' : 'user'}"/>
            </div>
            <div class="message" id="${uniqueID}">${value}</div>
          </div>
        </div>
        `
      )
  }

const handleSubmit = async e => {
  e.preventDefault();
  const data = new FormData(form);
  // user's chatstripe
  chatContainer.innerHTML += chatStripe(false, data.get("prompt"));
  form.reset();

  //bot's chatstripe
  const uniqueID = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true, " ", uniqueID);
  chatContainer.scrollTop = chatContainer.scrollHeight;
  const messageDiv = document.getElementById(uniqueID);
  loader(messageDiv);
  
  const response = await fetch('http://localhost:5000', {
  //fetch data from server -> bot´s response
    method: "POST",
    // headers: { 
    //   "Content-Type": "application/json" 
    // },
    body: JSON.stringify({
       prompt: data.get("prompt")
      })
  });

  clearInterval(loadInterval);
  messageDiv.innerHTML = "";
  const dataResponse = await response.json();
  messageDiv.innerHTML = await dataResponse.message.content;
  // if(response != null)
  //   {
  //     const parsedData = await response.message;
  //     console.log(parsedData);
  //     // typeText(messageDiv,  parsedData);
  //     messageDiv.innerText = parsedData;
  //   }
  // else
  //   {
  //     const err = await response.text();
  //     messageDiv.innerHTML = "Something went wrog";
  //     console.log(err); 
  //   }
  }


form.addEventListener("submit", handleSubmit);

form.addEventListener("keyup", e => {
  if(e.keyCode === 13) 
    {
      handleSubmit(e);
    }
});