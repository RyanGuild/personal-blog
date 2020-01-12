module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Ryan Guild Consulting","short_name":"RG Consulting","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"minimal-ui"},
    },{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/Ryan/personal-blog/src/layouts/landing-layout.tsx"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
