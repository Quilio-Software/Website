/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*'
      ],
    theme: {
        extend: {
            colors: {
                'primary/400': '#9C49E7',

                'surface/primary': '#291F33',
                'surface/secondary': '#000A1A',

                'secondary/700-main': '#2D72E1',

                'gray/50': '#EFEFEF',
                'gray/200': '#BFBFBF',
                'gray/600': '#595959',
                'gray/900': '#0D0D0D',

                'card-whiteish': '#F1FCE7',
                'card-blackish': '#291F33',
                
                'service/gray': '#121115',
            },
            backgroundImage: {
                'gradient-2': 'linear-gradient(to top right, #F3BEDA, #E79D49, #FF7983, #E74993)',
                'surface/sunrise': 'linear-gradient(to top right, #F3BEDA, #E79D49, #FF7983, #2B01B2)',
                'surface/secondary-gradient': 'linear-gradient(to top right, #2A40AF, #2D72E1, #64B4FF)',

                'gradient-2-homepage-title': 'linear-gradient(to top right, #E79D49, #FF7983, #E74993)',

                /* TEMP - homepage background */
                'hompage-bg': "url('./assets/img/homepage/homepage-bg.png')",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                avenir: ["Avenir", "sans-serif"],
                uncut: ['Uncut Sans', 'sans-serif']
            },
            screens: {
                '2xl': '1536px',
                'xl': '1280px',
            },
            boxShadow: {
                'card-shadow': '2px 10px 5px rgba(0, 0, 0, 0.25)',
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
    ],
}