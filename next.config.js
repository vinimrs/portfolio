/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
};

module.exports = nextConfig;

const withImages = require('next-images');
module.exports = withImages({
    esModule: true,
});

// next-react-svg
// const withReactSvg = require('next-react-svg')
// const path = require('path')

// module.exports = withReactSvg({
//   include: path.resolve(__dirname, 'src/assets/svg'),
//   webpack(config, options) {
//     return config
//   }
// })

/* Use somente se for usar babel.config.js */
// webpack: (config, options) => {                                                                                                                                                                                                                                                                                                                                                                          
//     const nextBabelLoader = findNextBabelLoader(config);                                                                                                                                                    
//     // Set Babel root to workspace root, so config                                                                                                                                                          
//     // applies to workspace modules.                                                                                                                                                                        
//     nextBabelLoader.options.root = resolve('..');                                                                                                                                                           
//     // But use the local config                                                                                                                                                                             
//     nextBabelLoader.options.configFile = resolve('.babelrc');                                                                                                                                               
//     return config;                                                                                                                                                                                          
// }

// function findNextBabelLoader(config) {                                                                                                                                                                      
//     for (const rule of config.module.rules) {                                                                                                                                                               
//         // server
//         if (                                                                                                                                                                                                
//             rule.use &&                                                                                                                                                                                     
//             rule.use.loader === 'next-babel-loader'                                                                                                                                                         
//         ) {                                                                                                                                                                                                 
//             return rule.use;                                                                                                                                                                                
//         }
//         // client 
//         else if (                                                                                                                                                                                         
//             rule.use &&                                                                                                                                                                                     
//             Array.isArray(rule.use) &&                                                                                                                                                                      
//             rule.use[1].loader === 'next-babel-loader'                                                                                                                                                      
//         ) {                                                                                                                                                                                                 
//             return rule.use[1];                                                                                                                                                                             
//         }                                                                                                                                                                                                   
//     }                                                                                                                                                                                                       
//     throw new Error('`next-babel-loader` not found');                                                                                                                                                       
// } 
