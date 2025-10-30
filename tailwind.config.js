export default {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            /* 🎨 Font tanımı */
            fontFamily: {
                montserrat: ["Montserrat"], // artık .font-montserrat ile çağırabilirsin
            },

            /* 🎨 Renk değişkenleri */
            colors: {
                branddark: "#101A1C", // özel koyu renk
            },
        },
    },
    plugins: [],
};
