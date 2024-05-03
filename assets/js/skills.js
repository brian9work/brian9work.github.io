const obj = [
    {
        type:"HTML",
        element:icons.html,
        color:'#E34C26'
    },{
        type:"CSS",
        element:icons.css,
        color:'#1572B6'
    },{
        type:"JAVASCRIPT",
        element:icons.javaScript,
        color:'#F7DF1E'
    },{
        type:"SASS",
        element:icons.sass,
        color:'#CC6699'
    },{
        type:"MySQL",
        element:icons.mysql,
        color:'#336791'
    },{
        type:"GITHUB",
        element:icons.github1,
        color:'#181717'
    },{
        type:"PHP",
        element:icons.php,
        color:'#777BB4'
    },{
        type:"REACT",
        element:icons.react,
        color:'#61DAFB'
    },{
        type:"REACT NATIVE",
        element:icons.reactNative,
        color:'#61DAFB'
    },{
        type:"Bootstrap",
        element:icons.bootstrap,
        color:'#7952B3'
    },{
        type:"Vite",
        element:icons.vite,
        color:'#646CFF'
    }
]

// style="color: orange;font-size: 70px;"
style="font-size: 70px;"
obj.map(o =>{
    document.getElementById("contSkills").innerHTML+=`
    <div class="col-md-2 col-sm-3 col-4 d-flex flex-column justify-content-center align-items-center">
       <div class="d-flex flex-column justify-content-center align-items-center rounded-3 pt-4">
        <div class="icon">
          ${o.element}
        </div>
        <div class="mt-2">
           <p class="fs-6 text-center">${o.type.toLocaleUpperCase()}</p>
        </div>
       </div>
    </div>
    `
})
