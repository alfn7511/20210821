// commonJS => es5 => module.exports
// node 기본적으로 채택한 모듈 방식
// esm (ECMA script module) => es6

const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

// 브라우져에서 동작 안함 => node 환경에서 돌아가는 코드
module.exports = {
  entry: path.resolve(__dirname, './src'), // 앞뒤 경로를 합쳐주는 함수, __dirname => webpack config 가 있는 폴더의 경로
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  module: {
    // 어떤 파일을 가져와서 어떻게 변화시킬지
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // import시 확장자 생략가능
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'), //어떤 html을 기준으로 빌드할건지
      filename: 'index.html', //빌드된 html 파일 이름
    }),
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true, //SPA routing
    open: true,
    // hot: true,
    // inline: true,
  },
}
