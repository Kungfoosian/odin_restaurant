export default function createNewElement(elementToCreate, elementContent = null, elementClass = null ){
  let newElement = document.createElement(elementToCreate);

  if(elementContent) newElement.innerText = elementContent;

  if(elementClass) newElement.className = elementClass;

  return newElement;
}