import * as $ from 'jquery'
import Post from "@models/Post"
import React from 'react'
import { render } from 'react-dom'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import './babel'
import yandexLogo from '@/img/yandex.png'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'


const post = new Post('Webpack post title', yandexLogo)

$('pre').addClass('code').html(post.toString())
console.log('post to sting:', post.toString())

const App = () => (
  <div className='container'>
    <h1>Webpack test</h1>
    <hr />
    <div className='logo'></div>
    <hr />
    <pre />
    <hr />
    <div className='box'>
      <h2>Less</h2>
    </div>
    <hr />
    <div className='card'>
      <h2>Sass/scss</h2>
    </div>
  </div>
)

render(<App />, document.getElementById('app'))