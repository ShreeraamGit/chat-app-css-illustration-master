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
    fontFamily: {
        'body': ["'Rubik', sans-serif;"],
    },
    textColor: {
        'rightHeading': "hsl(271, 36%, 24%)",
    },
    plugins: [],
}
plugins: [],
}