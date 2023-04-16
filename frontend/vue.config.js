const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

const useSourceMap = process.env.GENERATE_SOURCEMAP === "true";
const publicPath = process.env.PUBLIC_URL || "/";

const config = {
    publicPath: publicPath,

    //build시 생성파일 frontend 폴더가 아닌 설정 경로로 설치
    outputDir: process.env.BUILD_PATH || "dist",

    productionSourceMap: useSourceMap,

    devServer: {
        proxy: {
            "/openapi": {
                // 프록시 요청을 보낼 서버의 주소
                target: "http://openapi.1365.go.kr",
                changeOrigin : true,
            },
        },
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                // 전역으로 사용할 라이브러리 세팅
                isMorpheus: [
                    path.resolve(path.join(__dirname, "src/common/morpheus.native")),
                    "isMorpheus",
                ],
                $: "jquery",
                jquery: "jquery",
                "window.jQuery": "jquery",
                jQuery: "jquery",
                d3: "d3",
            }),
            // new MomentLocalesPlugin({
            //     localesToKeep: ["ko"],
            // }),
        ],
    },
};

module.exports = config;