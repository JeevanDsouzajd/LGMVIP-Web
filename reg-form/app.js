const infoPar = document.querySelector(".info-parent");
const name = document.getElementById("inputText");
const usn = document.getElementById("inputUsn");
const address = document.getElementById("inputAddr");
const phone = document.getElementById("inputPhone");
const gender = document.getElementsByName("gender");
const infowid = document.querySelector("body > section section:last-child");

infoPar.addEventListener("click", (e) => {
  const targetBtn = e.target;
  if (targetBtn.classList.contains("del-btn")) {
    delInfo(e);
  } else if (targetBtn.classList.contains("edit-btn")) {
    editInfo(e);
  }
});
appendInfo = (e) => {
  var gen;
  gender[0].checked == true ? (gen = "Male") : (gen = "Female");
  if (
    name.value.trim() == "" ||
    usn.value.trim() == "" ||
    address.value.trim() == "" ||
    phone.value.trim() == ""
  ) {
    alert("Empty");
  } else {
    const infoDiv = document.createElement("div");
    infoDiv.className = "info";
    const namep = document.createElement("p");
    namep.append(document.createTextNode(name.value));
    const usnp = document.createElement("p");
    usnp.append(document.createTextNode("USN: " + usn.value));
    const nump = document.createElement("p");
    nump.append(document.createTextNode("Phone: " + phone.value));
    const genp = document.createElement("p");
    genp.append(document.createTextNode("Gender: " + gen));
    const addrp = document.createElement("p");
    addrp.append(document.createTextNode("Address: " + address.value));

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("atnDiv");
    const edit = document.createElement("button");
    edit.classList.add("btn", "btn-primary", "edit-btn");
    edit.setAttribute("type", "Delete");
    edit.append(document.createTextNode("Edit"));
    const delBtn = document.createElement("button");
    delBtn.classList.add("btn", "btn-danger", "del-btn");
    delBtn.setAttribute("type", "Delete");
    delBtn.append(document.createTextNode("Delete"));

    infoDiv.appendChild(namep);
    infoDiv.appendChild(usnp);
    infoDiv.appendChild(nump);
    infoDiv.appendChild(addrp);
    infoDiv.appendChild(genp);
    infoPar.append(infoDiv);
    actionDiv.appendChild(delBtn);
    actionDiv.appendChild(edit);
    infoDiv.append(actionDiv);
  }
};

reset = () => {
  name.value = "";
  usn.value = "";
  phone.value = "";
  address.value = "";
};

delInfo = (e) => {
  const targetBtn = e.target;
  const trashParent = targetBtn.parentElement.parentElement;
  trashParent.classList.add("fall");
  trashParent.addEventListener("transitionend", (e) => {
    trashParent.remove();
  });
};

editInfo = (e) => {
  const targetBtn = e.target;
  const trashParent = targetBtn.parentElement.parentElement;
  name.value = trashParent.childNodes[0].textContent;
  usn.value = trashParent.childNodes[1].textContent.slice(5);
  phone.value = trashParent.childNodes[2].textContent.slice(7);
  address.value = trashParent.childNodes[3].textContent.slice(9);
  var gen = trashParent.childNodes[4].textContent.slice(8);
  gen === "Male" ? (gender[0].checked = true) : (gender[1].checked = true);
  trashParent.remove();
};
