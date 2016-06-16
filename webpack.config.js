module.exports = {
	entry: './client/client.js',
	output: {
		filename: 'public/bundle.js',
	},
	module: {
		loaders: [{
     		test: /\.js?$/, // A regexp to test the require path. accepts either js or jsx
    		loader: 'babel', // The module to load. "babel" is short for "babel-loader"
      		exclude: /node_modules/,
      		query: {
      			presets: ['react', 'es2015']
      		}		
    	}]
	}
}