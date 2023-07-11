import React from 'react'

import { GetScreenRes_LayoutComponent } from '../layout/_types'

type ComponentProp = GetScreenRes_LayoutComponent | null

type ComponentsProp = ComponentProp | ComponentProp[] | null

class BaseComponents {
  constructor() {
    this._navigation = {}
  }

  get navigation() {
    return this._navigation
  }
  set navigation(value) {
    this._navigation = value
  }

  getComponents(templateArr?: ComponentsProp): ComponentsProp | JSX.Element | null {
    if (!Array.isArray(templateArr)) return null
    const tmp =
      templateArr?.length === 0
        ? null
        : templateArr.map((item) => this.getComponent(item)) as ComponentProp[]

    return tmp
  }

  getComponent(item?: ComponentProp): ComponentsProp | JSX.Element {
    if (!item?.type) return null

    if (item.type === 'root') return this.getComponents(item.children)

    if (!this[item.type]) return null
    const Component = this[item.type]

    return (
      <Component key={item.id} {...(item.props || null)}>
        {this.getComponents(item.children)}
      </Component>
    )
  }
}

export default BaseComponents
