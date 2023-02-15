let topping = prompt("Por favor introduzca el topping que desea con su helado. Si no quiere topping, introduzca sin:","Ejemplo: oreo, brownie, sin...");
const sin = 1.90 ;
let precio;

switch (topping) {
    case ("oreo"):
      precio = sin + 1;
      debugger
      console.log(`El precio del helado es ${precio}€`)
      break;
    case ("kitkat"):
      precio = sin + 1.5;
      alert(`El precio del helado es ${precio}€`)
      break;
    case ("brownie"):
      precio = sin + 0.75;
      alert(`El precio del helado es ${precio}€`)
      break;
    case ("lacasitos"):
      precio = sin + 0.95;
      alert(`El precio del helado es ${precio}€`)
      break;
      case ("sin"):
        alert(`El precio del helado sin topping es de 1.90€`);
        break;            
    default:
        alert(`No tenemos ${topping}, lo sentimos`);
        alert(`El precio del helado sin topping es de 1.90€`);
      break;
  }