module.exports = {
    content: [
        "./src/views/**/*.hbs",
        "./public/js/**/*.js",
        "./public/css/**/*.css",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        fontFamily: {
            manrope: ["Manrope", "sans-serif"],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            black: "#010717",
            primary: "#ff0042",
            gray: {
                lighter: "#FAF7F3",
                light: "#323232",
                dark: "#010717",
                txt: "#4c4d56",
                line: "#E5E5E5",
            },
        },
        extend: {
            colors: {
                success: "#22c55e", // Màu xanh lá
                error: "#ef4444", // Màu đỏ
            },
        },
    },
    plugins: [],
};
