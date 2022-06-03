export default function createNewElement(elementToCreate, elementContent = null, elementClass = null, elementId = null ){
  let newElement = document.createElement(elementToCreate);

  if(elementContent) newElement.innerText = elementContent;

  if(elementClass) newElement.className = elementClass;

  if(elementId) newElement.id = elementId;

  return newElement;
}