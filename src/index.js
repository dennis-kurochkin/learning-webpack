import Post from './Post';
import webpackLogo from './assets/webpack-logo.png';
import csv from './assets/data.csv';
import './css/styles.css';

const post = new Post('Webpack Post Title', webpackLogo);

console.log('Post to String', post.toString());

console.log(csv);