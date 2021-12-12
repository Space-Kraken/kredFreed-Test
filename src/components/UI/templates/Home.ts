export const Home ={
    bodyStyle: 'flex flex-row justify-center m-3 md:m-4',
    cardStyle: 'flex flex-col bg-white w-3/4 shadow-lg rounded-lg m-3 md:m-4 p-4',
    cardTitleStyle: 'font-bold text-xl',
    cardTextStyle: 'text-lg',
    cardButtonStyle: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    cardButtonTextStyle: 'text-lg',
    cardTitle: 'KredFreed Frontend Test ',
    cardText: `
        This is a test project for KredFreed Frontend Test.
        It is a simple project that uses React, Framer-motion, React-Router v6, TypeScript, 
        tailwindcss and Atomic desing.
        
        The project consists of creating a larog form, friendly with the user and with validations. 
    `,
    cardInteractive:true,
    actionInteractiveStyle:'flex flex-row justify-end px-6 pt-4',
    cardInteractiveButtons: [
        {
            cardButtonText: 'Go to the project',
            style: 'bg-blue-500 py-2 px-4 rounded-full text-white hover:bg-green-500',            
        },
    ]
}