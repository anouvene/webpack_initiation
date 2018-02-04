/**
 * Préfixer automatiquement votre code CSS pour tous les navigateurs
 * -webkit- => chrome, opera, safari
 * -moz- => Firefox
 * -o- => opera (ancienne versions)
 * -ms- => microsoft
 */
module.exports = {
    plugins: [
        require("autoprefixer")
    ]
}