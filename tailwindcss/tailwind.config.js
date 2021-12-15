module.exports = {
    mode: "jit",
    purge: ["../*.html"],
    content: [],
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            'main-bg': 'hsl(270, 20%, 96%)',
        })
    },
    plugins: [],
}