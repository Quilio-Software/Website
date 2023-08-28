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

                'gray/50': '#EFEFEF',
                'gray/600': '#595959',
                'gray/900': '#0D0D0D',
            },
            backgroundImage: {
                'gradient-2': 'linear-gradient(to top right, #F3BEDA, #E79D49, #FF7983, #E74993)',
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                avenir: ["Avenir", "sans-serif"]
            },
        },
    },
}