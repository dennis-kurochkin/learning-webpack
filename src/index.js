import Post from '@models/Post';
import webpackLogo from './assets/webpack-logo.png';
import csv from './assets/data.csv';
import $ from 'jquery';
import './css/styles.css';

const post = new Post('Webpack Post Title', webpackLogo);

console.log('Post to String', post.toString());

console.log(csv);

$('pre').html(post.toString()).css('font-size', '20px').css('color', 'gray');