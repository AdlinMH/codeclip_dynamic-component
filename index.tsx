import React from 'react'

import BaseComponents from './BaseComponents'
import ComponentSpec from './ComponentSpec'

import Button from './components/Button'
import Image from './components/Image'
import Text from './components/Text'
import Icon from './components/Icon'
import View from './components/View'
import ScrollView from './components/ScrollView'

const ComponentsObject = { Button, Image, Text }

export const ComponentMap = Object.values(ComponentsObject).reduce((acc, curr) => {
  acc[curr.ComponentType] = new ComponentSpec(curr.Name, curr.ComponentType, curr, curr.HasChild)
  return acc
}, {})

export class Components extends BaseComponents {
  button = (props) => <Button navigation={this.navigation} {...props} />

  image = (props) => <Image navigation={this.navigation} {...props} />

  icon = (props) => <Icon navigation={this.navigation} {...props} />

  text = (props) => <Text {...props} />

  view = (props) => <View {...props} />

  scrollView = (props) => <ScrollView {...props} />
}

export { Button, Image, Text }
