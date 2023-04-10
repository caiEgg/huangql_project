module.exports = {
  // '@vue/cli-plugin-babel/preset'
  presets: [

    ['@vue/cli-plugin-babel/preset',  { "modules": false },"es2015"]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
