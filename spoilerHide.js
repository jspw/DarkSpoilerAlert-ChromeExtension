keywords = [
  "DARK",
  "Dark",
  "Jonas",
  "dark spoiler",
  "Adam",
  "adam",
  "jonas",
  "hanna",
  "Jonas",
  "Hanna",
  "Noah",
  "noah",
  "NOAH",
  "Kahnwald",
  "Michael",
  "Martha",
  "Nielsen",
  "Magnus",
  "Mikkel",
  "Ulrich",
  "Katharina",
  "Mads",
  "Tronte",
  "Helene",
  "Albers",
  "Agnes",
  "Doppler",
  "Franziska",
  "Elisabeth",
  "Charlotte",
  "Helge",
  "Tannhaus",
  "Bartosz",
  "Tiedemann",
  "Regina",
  "Aleksander",
  "Claudia",
  "Egon",
  "Doris",
  "Tauber",
  "Silja",
  "Erit Lux",
  "Sic Mundus",
  "Eva",
  "Apocalypse",
  "Winden",
  "Everything is connected",
  "Everything is Connected",
  "Everything Is connected",
  "everything is connected",


];

tags = "SPANEMBIULOLI";
count = 0;





for (var i = 0; i < keywords.length; i++) {
  o = $(`:contains(${keywords[i]}):not(:has(:contains(${keywords[i]})))`);
  for (var j = 0; j < o.length; j++) {
    if (!o[j].parentNode || o[j].parentNode.nodeName === "BODY") {
      continue;
    }
    hideSpoiler(o[j]);
    count++;
  }
}

if (count >= 10) {
  headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, b");
  for (var i = 0; i < headings.length; i++) hideNode(headings[i]);
}

function hideSpoiler(node) {
  ancestor = node.parentNode;
  if (ancestor != null) {
    if (ancestor.parentNode != null && ancestor.tagName != "BODY")
      ancestor = ancestor.parentNode;
    imgs = ancestor.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++)
      imgs[i].style.webkitFilter = "blur(8px)";
    lists = ancestor.getElementsByTagName("li");
    for (var i = 0; i < lists.length; i++) hideNode(lists[i]);
  }

  if (node == null || node.parentNode == null) return;

  all_child = node.parentNode.children;
  for (var i = 0; i < all_child; i++) {
    var type = all_child[i].tagName;
    if (tags.match(type) != null) hideNode(all_child[i]);
  }

  hideNode(node);
}

function hideNode(node) {
  node.textContent = "[TEXT BLOCKED:DARK SPOILER DETECTED]";
  node.style.color = "red";
}

// replaceText(document.body);

// function replaceText(element) {
//   if (element.hasChildNodes()) {
//     element.childNodes.forEach(replaceText);
//   } else if (element.nodeType === Text.TEXT_NODE) {
//     if (element.textContent.match(/Dark/gi)) {
//       const newElement = document.createElement("span");
//       newElement.innerHTML = element.textContent.replace(
//         /(coronavirus)/gi,
//         '<span class="rainbow">Spoiler Alert</span>'
//       );
//       element.replaceWith(newElement);
//     }
//   }
// }


// var elements = document.getElementsByTagName('*');

// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];

//     for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j];

//         if (node.nodeType === 3) {
//             var text = node.nodeValue;
//             var replacedText = text.replace(/dark/gi, '[spoiler alert]');
//             // node.style.backgroundColor = 'red';

//             if (replacedText !== text) {
//                 element.replaceChild(document.createTextNode(replacedText), node);
//             }
//         }
//     }
// }