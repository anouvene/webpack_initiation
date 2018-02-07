"use strict";

// var OfflinePlugin = require('../node_modules/offline-plugin/runtime');
// OfflinePlugin.install({onInstalled: function() {openOfflineReady();}, onUpdating: function() {}, onUpdateReady: function() {OfflinePlugin.applyUpdate();}, onUpdated: function() {window.location.reload();}});


require("../assets/stylesheets/styles.scss");

window.onload = function() {
    let titre = document.querySelector('.titre');
    titre.innerHTML = "J'apprends Webpack !";

}


