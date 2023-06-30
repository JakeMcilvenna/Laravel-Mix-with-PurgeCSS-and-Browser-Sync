# Laravel Mix Setup with PurgeCSS and Browser Sync

This script sets up Laravel Mix, a powerful build tool for Laravel applications, with additional features such as PurgeCSS for removing unused CSS and browser synchronization for live reloading during development. It provides a streamlined configuration for compiling and optimising front-end assets like JavaScript and Sass files. Additionally, it includes an option to version assets for production environments.

## Installation

To use this script, ensure that you have Node.js and npm (Node Package Manager) installed on your system. Follow the steps below:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the following command to initialize a new `package.json` file:
   
```npm init -y```

4. Install Laravel Mix and the Laravel Mix PurgeCSS plugin by executing the following command:

```npm install laravel-mix laravel-mix-purgecss --save-dev```


5. Create a new file in your project's root directory and name it `webpack.mix.js`.
6. Copy the provided script into the `webpack.mix.js` file.

## Usage

To start using Laravel Mix with the provided configuration, follow these steps:

1. Ensure you have completed the installation steps mentioned above.
2. Open your terminal or command prompt.
3. Navigate to your project directory.
4. Run the following command to compile your assets:

```npx mix```


This command will execute the `webpack.mix.js` file and compile the specified assets.

5. During development, Laravel Mix will automatically watch for changes to your assets and recompile them as needed. You can simply leave the terminal running.
6. Open your project in a web browser, and the changes will be automatically synchronized and reflected in real-time.

In a production environment, run the following command to version your assets:

```npx mix --production```


This will append a unique hash to the filename of your compiled assets, ensuring proper cache busting.

## Configuration Options

The provided script offers various configuration options that you can modify according to your needs. Here is a breakdown of each option:

- `mix.setPublicPath('dist')`: Sets the public path where compiled assets will be stored.
- `mix.js('src/app.js', 'dist')`: Compiles the specified JavaScript file(s) and outputs them to the designated directory.
- `mix.sass('src/app.scss', 'dist')`: Compiles the specified Sass file(s) and outputs them to the designated directory.
- `mix.sourceMaps(false, 'inline-source-map')`: Configures source map generation.
- `mix.purgeCss({...})`: Configures PurgeCSS to remove unused CSS from compiled files.
- `mix.browserSync({...})`: Sets up browser synchronization for live reloading during development.

## Documentation

For more detailed information on Laravel Mix and its capabilities, please refer to the official documentation: [https://laravel-mix.com/](https://laravel-mix.com/)

## License

This script is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and adapt it to suit your needs.
