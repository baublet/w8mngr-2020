const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  watch = process.env.WATCH ? !!process.env.WATCH : false,
  TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  // Our index.html file is automatically generated from a template in
  // src/index.html using the HtmlWebpackPlugin. Use the options here to
  // configure the template.
  indexOptions = {
    template: "client/index.html",
    react:
      process.env.NODE_ENV == "production"
        ? "https://unpkg.com/react@16/umd/react.production.min.js"
        : "https://unpkg.com/react@16/umd/react.development.js",
    reactDom:
      process.env.NODE_ENV == "production"
        ? "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
        : "https://unpkg.com/react-dom@16/umd/react-dom.development.js"
  };

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: {
    main: path.resolve(__dirname, "client", "index.tsx"),
    tailwind: path.resolve(__dirname, "client", "styles.css")
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  watch,
  devServer: {
    inline: true,
    disableHostCheck: true,
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    port: 8080,
    proxy: {
      "/.netlify/lambda/graphql": "http://api:9000/graphql"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          configFileName: "tsconfig.client.json"
        }
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      // fixes https://github.com/graphql/graphql-js/issues/1272
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        WATCH: JSON.stringify(process.env.WATCH)
      }
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin(indexOptions),
    new ExtractTextPlugin("src/styles.css", {
      disable: process.env.NODE_ENV === "development"
    })
  ],
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".json", ".js", ".gql", ".graphql", ".mjs"],
    plugins: [new TsConfigPathsPlugin()]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  devtool:
    process.env.NODE_ENV == "production"
      ? false
      : "cheap-module-eval-source-map"
};

module.exports = webpackConfig;
