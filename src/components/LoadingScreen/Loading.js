import React, { Component } from 'react'
import Typical from 'react-typical'

class Loading extends React.Component {
  render () {
    return (
      <Typical
        steps={['Hello', 1000, 'Hello world!', 500]}
        loop={1}
        wrapper="p"
      />
    )
  }
}

export default Loading;