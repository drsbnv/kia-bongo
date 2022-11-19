let mix = require('laravel-mix');
// require('mix-tailwindcss');
require('laravel-mix-tailwind');

mix.setPublicPath('/')
	.js('src/js/app.js', 'docs/js/scripts.js')
	.sass('src/scss/app.scss', 'docs/css/styles.css')
	.tailwind();



if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({
		server: {
			baseDir: "./docs",
		},
		files: ['docs/**/*.html', 'docs/js/scripts.js'],
		notify: false
	});
}

mix.disableSuccessNotifications();