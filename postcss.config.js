const glob = require('glob-all');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

module.exports = function (webpackEnv) {

    const isEnvDevelopment = webpackEnv === 'development';
    const isEnvProduction = webpackEnv === 'production';
    const shouldUseRelativeAssetPaths = publicPath === './';

    const getStyleLoaders = (cssOptions, preProcessor) => {
        const loaders = [
            isEnvDevelopment && require.resolve('style-loader'),
            isEnvProduction && {
                loader: MiniCssExtractPlugin.loader,
                options: shouldUseRelativeAssetPaths ? { publicPath: '../../' } : {}
            },
            {
                loader: require.resolve('css-loader'),
                options: cssOptions
            },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    ident: 'postcss',
                    syntax: 'postcss-scss',
                    plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        require('postcss-preset-env')({
                            autoprefixer: {
                                flexbox: 'no-2009'
                            },
                            stage: 3
                        }),
                        require('@fullhuman/postcss-purgecss')({
                            content: [paths.appHtml, ...glob.sync(path.join(paths.appSrc, '/**/*.{js,jsx}'), { nodir: true })],
                            extractors: [
                                {
                                    extractor: class {
                                        static extract(content) {
                                            return content.match(/[\w-/:]+(?<!:)/g) || [];
                                        }
                                    },
                                    extensions: ['html', 'js', 'jsx']
                                }
                            ]
                        }),
                        require('postcss-normalize')
                    ].filter(Boolean),
                    sourceMap: isEnvProduction && shouldUseSourceMap
                }
            }
        ].filter(Boolean);
        if (preProcessor) {
            loaders.push({
                loader: require.resolve(preProcessor),
                options: {
                    sourceMap: isEnvProduction && shouldUseSourceMap
                }
            });
        }
        return loaders;
    };

    return {

        /* {...} */

        module: {
            rules: [

                /* {...} */

                {
                    oneOf: [

                        /* {...} */

                        {
                            test: /\.module\.(scss|sass)$/,
                            use: getStyleLoaders(
                                {
                                    importLoaders: 2,
                                    sourceMap: isEnvProduction && shouldUseSourceMap,
                                    modules: true,
                                    getLocalIdent: getCSSModuleLocalIdent
                                },
                                'sass-loader'
                            )
                        }

                        /* {...} */

                    ]
                }

                /* {...} */

            ]
        },

        /* {...} */

    };

};