const ComponentSpec = class {
  constructor(name, componentType, component, hasChildren) {
    this._name = name
    this._componentType = componentType
    this._Component = component
    this._hasChildren = hasChildren
  }

  get name() {
    return this._name
  }

  get componentType() {
    return this._componentType
  }

  get Component() {
    return this._Component
  }

  get hasChildren() {
    return this._hasChildren
  }
}

export default ComponentSpec
