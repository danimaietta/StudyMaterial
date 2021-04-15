import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
  return (
    <>
      <h1>Steps</h1>
      <h3>Your package.json</h3>
      <p>
        {` "scripts": {
            "start": "webpack-dev-server",
            "build": "SET NODE_ENV='production' && webpack"
          },`}
      </p>
      <h3>Your webpack.config.js</h3>
      <p>
        {` output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index_bundle.js',
            publicPath: '/'
          }, `}
      </p>
      <p>
        {`mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',`}
      </p>
      <h3>Run the scripts</h3>
      <p>{`npm run-script build`}</p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
