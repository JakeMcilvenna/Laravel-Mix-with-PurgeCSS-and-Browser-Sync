let mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix.setPublicPath('dist');
mix.js('src/app.js', 'dist');
mix.sass('src/app.scss', 'dist');
mix.sourceMaps(false, 'inline-source-map');
mix.purgeCss({
	content: ['./**/*.php', './**/*.html'],
});
mix.browserSync({
	proxy: 'localhost:8888',
	files: [
		'./**/*.html',
		'./**/*.php',
		'./**/*.js',
		'./**/*.scss',
	] /* Reload if any file with one of these extensions is changed */,
	ignore: ['./.git', './node_modules', './build', './vendor', './dist'],
	browser: 'Firefox',
});

if (mix.inProduction()) {
	mix.version();
}
