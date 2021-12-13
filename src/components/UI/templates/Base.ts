export const Base = {
    //? Body class (Style) definition
    bodyStyle: "min-h-screen bg-gray-300 flex flex-col content-center flex-grow",
    
    //? Navbar class (Style) definition
    navbarStyle: "bg-white shadow-md",
    
    //? NavLink class (Style) definition
    linkStyle:"px-2",
    
    //? NavLinks definicion
    /** 
    * NavLink Structure
    * In a object named navbarRoutes
    * define an array with each route 
    * do you want in the navbar
    * For each link you need to define:
    *   name -> this define the text 
    *   page -> this is the page
    *           that you want to push
    *           in the nav history    
    */
    navbarRoutes:[
        {
            name: "Página Inicial",
            page: "/"
        },
        {
            name: "Formulário",
            page: "/add-user"
        },
    ],

    userLinks: [
        {
            name: "Iniciar session",
            page: "/login"
        },
        {
            name: "Registrarse",
            page: "/signup"
        },
        {
            name: "Logout",
            page: "/logout"
        },
    ]
}