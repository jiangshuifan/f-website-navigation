const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                '@': resolve('src'),
                "assets":"@/assets",
                "common":"@/common",
                "components":"@/components",
                "views":"@/views",
                "network":"@/network"
            }
        }
    }

}