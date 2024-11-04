import TerserPlugin from 'terser-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

export const optimization = {
    minimize: true,
    minimizer: [new TerserPlugin()],
};

export const plugins = [
    new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/, // Adjust based on the file types you want to compress
        threshold: 10240, // Only compress files larger than 10 KB
        minRatio: 0.8, // Only compress if compression ratio is above 0.8
    }),
];
