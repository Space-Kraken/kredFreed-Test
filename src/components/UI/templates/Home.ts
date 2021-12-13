export const Home ={
    bodyStyle: 'flex flex-row justify-center m-3 md:m-4',
    cardStyle: 'flex flex-col bg-white w-3/4 shadow-lg rounded-lg m-3 md:m-4 p-4',
    
    cardTitleStyle: 'font-bold text-xl mb-2',
    cardTitle: 'KredFreed Prueba Frontend ',
    
    cardTextStyle: 'text-lg',
    cardText: `
        Esta es una prueba de desarrollo de una aplicación web para la empresa KredFreed. 
        Esta pruena consiste en la creacion de un formulario de registro de usuarios. En este
        proyecto se implemento React, Framer-motion, React-Router v6, TypeScript, 
        tailwindcss and Atomic desing.
    `,
    
    cardInteractive:true,
    
    cardButtonTextStyle: 'text-lg',
    cardButtonStyle: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    
    actionInteractiveStyle:'flex flex-row justify-end px-6 pt-4',
    cardInteractiveButtons: [
        {
            cardButtonText: 'Ir al formulario',
            style: 'bg-blue-500 py-2 px-4 rounded-full text-white hover:bg-green-500',            
        },
    ]
}