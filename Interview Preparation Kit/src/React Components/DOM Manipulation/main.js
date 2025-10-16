const list = document.createElement("ul");
list.id = "menu";
document.body.appendChild(list);
list.style.display = "flex";
list.style.gap = "20px";
list.style.justifyContent = "flex-end";
list.style.borderBottom = "5px solid black";
list.style.padding = "10px";

const items = ["About", "Projects", "Contact"];
items.forEach((itemText, index) => {
  const listItem = document.createElement("li");
  listItem.id = `menu-item-${index + 1}`;
  listItem.textContent = itemText;
  listItem.style.color = "blue";
  listItem.style.listStyleType = "none";
  listItem.style.fontSize = "20px";
  list.appendChild(listItem);
});

const heading = document.createElement("h1");
heading.textContent = "Welcome to My Website";
heading.style.textAlign = "center";
document.body.appendChild(heading);

const wrapper = document.createElement("div");
wrapper.id = "wrapper";
document.body.appendChild(wrapper);

const subhead1 = document.createElement("h2");
subhead1.textContent = "About Me";
subhead1.id = "subhead";
wrapper.appendChild(subhead1);

const para = document.createElement("p");
para.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in sem varius, mattis lacus vel, aliquam metus. Donec a tristique libero. Proin ut lectus vitae elit pellentesque laoreet non nec est. Nam finibus eget erat quis posuere. Etiam at bibendum orci, efficitur aliquet erat. Sed quis bibendum purus. Sed a egestas neque. Nunc vulputate nibh elit, eu lobortis mauris tincidunt quis.";
wrapper.appendChild(para);

const subhead2 = document.createElement("h2");
subhead2.textContent = "Projects";
subhead2.id = "subhead";
wrapper.appendChild(subhead2);

const para2 = document.createElement("p");
para2.innerHTML =
  "Curabitur sed feugiat elit. Vestibulum scelerisque cursus interdum. Nunc in augue et diam imperdiet commodo placerat eget nulla. Vivamus vel tortor aliquet, hendrerit diam sed, aliquam mi. Phasellus accumsan dictum magna, id tincidunt nunc finibus ac. Donec eu nunc purus. Aliquam ante urna, cursus non luctus quis, pellentesque sit amet lectus. Cras finibus in lectus quis pharetra. Sed ac congue augue. Morbi enim neque, pharetra vel ultricies a, luctus sodales mi. Vivamus posuere tempus diam, id scelerisque metus malesuada at. Fusce nec nunc a ligula vehicula auctor sed at justo";
wrapper.appendChild(para2);

document.querySelectorAll("#subhead").forEach((subhead) => {
  subhead.style.backgroundColor = "lightgray";
  subhead.style.padding = "10px";
});

const contact = document.createElement("button");
contact.textContent = "Contact Me";
contact.id = "contact-button";
contact.style.display = "block";
contact.style.margin = "20px auto";
contact.style.padding = "10px 20px";
contact.style.fontSize = "16px";
contact.style.cursor = "pointer";
wrapper.appendChild(contact);

contact.addEventListener("click", () => {
  wrapper.appendChild(modal);
  contact.disabled = true;
  contact.style.cursor = "not-allowed";
});

const modal = document.createElement("div");
modal.id = "modal-wrapper";
modal.style.position = "fixed";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.transform = "translate(-50%, -50%)";
modal.style.width = "fit-content";
modal.style.height = "fit-content";
modal.style.padding = "20px";
modal.style.background = "gray";
modal.style.border = "2px solid white";

const modalhead = document.createElement("h5");
modalhead.textContent = "Leave a message";
modalhead.style.color = "white";
modalhead.style.textAlign = "center";
modalhead.style.marginTop = "20px";
modal.appendChild(modalhead);

const textarea = document.createElement("textarea");
textarea.id = "message-box";
textarea.rows = "10";
textarea.cols = "30";
textarea.style.display = "block";
textarea.style.margin = "20px auto";
modal.appendChild(textarea);

const sendButton = document.createElement("button");
sendButton.textContent = "Send";
sendButton.id = "send-button";
sendButton.style.display = "block";
sendButton.style.margin = "10px auto";
sendButton.style.padding = "10px";
sendButton.style.fontSize = "14px";
sendButton.style.cursor = "pointer";
modal.appendChild(sendButton);

sendButton.addEventListener("click", () => {
  alert("Message sent!");
  wrapper.removeChild(modal);
  contact.disabled = false;
  contact.style.cursor = "pointer";
});

// document.body.removeChild(wrapper);
