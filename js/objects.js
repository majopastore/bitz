console.log ("objects.literal");

//objeto literal 
    const carrera1 = { 
       id: 1,
       nombre: marketing, 
    }
    const carrera2 = { 
        id: 2,
        nombre: datascience, 
    }
     const carrera3 = { 
        id: 3,
        nombre: design, 
    }
     const carrera4 = { 
        id: 4,
        nombre: product, 
    }
    const carrera5 = { 
        id: 5,
        nombre: programming, 
    }
    const carrera6 = { 
        id: 6,
        nombre: softskills, 
    }
    const carrera7 = { 
        id: 7,
        nombre: content, 
    }
    const carrera8 = { 
        id: 8,
        nombre: ia, 
    }

//recorriendo las propiedades de cada carrera
  for (const key in carrera1){ 
   console.log (key, carrera1[key]);
 }

  for (const key in carrera2){ 
    console.log (key, carrera2[key]);
  }

  for (const key in carrera3){ 
    console.log (key, carrera3[key]);
  }

  for (const key in carrera4){ 
    console.log (key, carrera4[key]);
  }

  for (const key in carrera5){ 
    console.log (key, carrera5[key]);
  }

  for (const key in carrera6){ 
    console.log (key, carrera6[key]);
  }

  for (const key in carrera7){ 
    console.log (key, carrera7[key]);
  }

  for (const key in carrera8){ 
    console.log (key, carrera8[key]);
  }


//Función constructora
console.log ("function.constructura");
function Carreras (marketing, datascience, design, product, programming, softskills, content, ia) { 
         this.carrera1 = marketing
         this.carrera2 = datascience
         this.carrera3 = design
         this.carrera4 = product
         this.carrera5 = programming
         this.carrera6 = softskills
         this.carrera7 = content
         this.carrera8 = ia
}

const carrera1 = marketing ("content" , "grow" , "community manager" , "seo" , "copywriting")
const carrera2 = datascience ("excel", "tableau", "data studio")
const carrera2 = design ("ux", "ui", "after effects","research")
const carrera2 = product ("product manager", "e-commerce", "metodologías ágiles", " customer experience")
const carrera2 = programming ("SQL", "desarrollo web", "react", "wordpress" , "angular")
const carrera2 = softskills ("liderazgo", "HR")
const carrera2 = content ("pre-producción", "post-producción", "rodaje", "guion", "marketing de contenido")
const carrera2 = ia ("realidad virtual", "3D", "video")

mostrarDatos()  
    console.log ("function.constructura");
