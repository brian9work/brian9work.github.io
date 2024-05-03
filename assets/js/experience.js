const experiences = [
    {
        title:"Website to promote a tourist center of fireflies called Xoletilandia",
        date:"2018",
        location:"Nanacamilpa Tlaxcala, México",
        description:"Es una pagina web para un centro turistico de luciernagas llamado Xoletilandia",
        icons: [
            icons.html,
            icons.css,
            icons.javaScript
        ]
    },{
        title:"Website to promote a tourist center of fireflies called Isondues",
        date:"2018",
        location:"Nanacamilpa Tlaxcala, México",
        description:"description",
        icons: [
            icons.html,
            icons.css,
            icons.javaScript
        ]
    },{
        title:"System to manage water payments, review accounts, generate bills and add new homes.",
        date:"2019",
        location:"Nanacamilpa Tlaxcala, México",
        description:"description",
        icons: [
            icons.html,
            icons.css,
            icons.javaScript,
            icons.php,
            icons.mysql,
            // icons.googleAuthenticator,
        ]
    },{
        title:"System for the management of COBAT high school certificates.",
        date:"2019",
        location:"Nanacamilpa Tlaxcala, México",
        description:"description",
        icons: [
            icons.html,
            icons.css,
            icons.javaScript,
            icons.php,
            icons.mysql,
            icons.google,
        ]
    },{
        title:"Tourism application for the advertising of tourist establishments",
        date:"2023",
        location:"Nanacamilpa Tlaxcala, México",
        description:"description",
        icons: [
            icons.reactNative,
            icons.php,
            icons.mysql,
            icons.google,
        ]
    },{
        title:"Creation of a calendar for the reservation of a law buffet's seats",
        date:"2023",
        location:"Nanacamilpa Tlaxcala, México",
        description:"description",
        icons: [
            icons.html,
            icons.css,
            icons.javaScript,
            icons.php,
            icons.mysql,
        ]
    },{
        title:"Order taking system for a sushi restaurant called 'Sushi maki'.",
        date:"2022",
        location:"Calpulalpan Tlaxcala, México",
        description:"description",
        icons: [
            icons.html,
            icons.css,
            icons.javaScript,
        ]
    },{
        title:"Automatic reservation system for a hamburger restaurant called 'Oyamel'.",
        date:"2023",
        location:"Nanacamilpa Tlaxcala, México",
        description:"description",
        icons: [
            icons.html,
            icons.css,
            icons.javaScript,
        ]
    },{
        title:"Online Store",
        date:"2024",
        location:"Apizaco Tlaxcala, México",
        description:"description",
        icons: [
            icons.react,
            icons.php,
            icons.sass,
            icons.mysql
        ]
    },{
        title:"System for the management of computer components for the psychology faculty of the Autonomous University of Tlaxcala.",
        date:"2024",
        location:"Tlaxcala Tlaxcala, México",
        description:"description",
        icons: [
            icons.html,
            icons.bootstrap,
            icons.javaScript,
            icons.php,
            icons.mysql,
        ]
    },{
        title:"Book management and lending system for the psychology faculty of the Universidad Autnoma de Tlaxcala",
        date:"2024",
        location:"Tlaxcala Tlaxcala, México",
        description:"description",
        icons: [
            icons.html,
            icons.bootstrap,
            icons.javaScript,
            icons.php,
            icons.mysql,
        ]
    },{
        title:"System for the management of credentials for the 'Cordinadora de comerciantes y tianguistas A.C.'.",
        date:"2024",
        location:"Chimalhuacan Estado de México, México",
        description:"description",
        icons: [
            icons.react,
            icons.bootstrap,
            icons.php,
            icons.mysql,
        ]
    },
];

// document.getElementById("experience").innerHTML="<h3 class='resume-title'>Professional Experience</h3>"
experiences.map(e =>{
    iconos = e.icons.join(" ");
    document.getElementById("experience").innerHTML+=`
        <div class="resume-item">
            <h4>${e.title}</h4>
            <h5>${e.date}</h5>
            <p><em>${e.location}</em></p>
            <p style="margin-bottom: 0;">${e.description}</p>
            <span style="font-size: 30px;text-align: end;display: block;">
                ${iconos}
            </span>
        </div>
    `
})
const experiences2 = [experiences[9],experiences[10],experiences[11]];
experiences2.map(e =>{
    iconos = e.icons.join(" ");
    document.getElementById("experience2").innerHTML+=`
        <div class="resume-item">
            <h4>${e.title}</h4>
            <h5>${e.date}</h5>
            <p><em>${e.location}</em></p>
            <p style="margin-bottom: 0;">${e.description}</p>
            <span style="font-size: 30px;text-align: end;display: block;">
                ${iconos}
            </span>
        </div>
    `
})