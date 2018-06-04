const fragment = document.createDocumentFragment()
const art = document.querySelector(".messages")

const section1 = document.createElement("section")
section1.className = "message"
section1.textContent= "Broomhilda: What's in the eggnog this year?"
fragment.appendChild(section1)

const section2 = document.createElement("section")
section2.className = "message"
section2.textContent = "Me: Nothing?"
fragment.appendChild(section2)

const section3 = document.createElement("section")
section3.className = "message"
section3.textContent = "Broomhilda: Shiza..."
fragment.appendChild(section3)

const section4 = document.createElement("section")
section4.className = "message"
section4.textContent = "Me: No more drunk Holidays Aunt Broomhilda!!"
fragment.appendChild(section4)

const section5 = document.createElement("section")
section5.className = "message"
section5.textContent = "Broomhilda: Ich by Nein StahckenBlahcken!!"
fragment.appendChild(section5)

console.log(section1, section2, section3, section4, section5)

document.querySelector("#messages").appendChild(fragment)