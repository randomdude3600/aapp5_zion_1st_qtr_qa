module.exports = {
	webpack(config) {
		config.module.rules.push(
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"]
			},
			{
				test: /\.ttf$/,
				use: [
				  {
					loader: 'ttf-loader',
					options: {
					  name: './font/[hash].[ext]',
					},
				  },
				]
			}
		);

		return config;
	}
};