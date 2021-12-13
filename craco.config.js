module.exports = {
    style:{
        postcss:{
            plugins:[
                require('taildwindcss'),
                require('autoprefixer')
            ]
        }
    },
    webpack:{
        configure:{
            module:{
                rules:[
                    {
                        type:'javascript/auto',
                        test:/\.m?js$/,
                        include: /node_modules/,
                    }
                ]
            }
        }
    }
}