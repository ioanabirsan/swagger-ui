import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'
import ImPropTypes from 'react-immutable-proptypes'
import schemaOrg from './schema-org'
import Parser from 'html-react-parser'

let rdfKeywords = {"x-rdf-type": "rdf:type", "x-same-as": "owl:sameAs"}

const braceOpen = '{'
const braceClose = '}'

let descriptionStyle = {
  textDecoration: 'none',
  color: '#505050'
}

export default class ObjectModel extends Component {

  static propTypes = {
    schema: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    getConfigs: PropTypes.func.isRequired,
    expanded: PropTypes.bool,
    onToggle: PropTypes.func,
    specSelectors: PropTypes.object.isRequired,
    name: PropTypes.string,
    displayName: PropTypes.string,
    isRef: PropTypes.bool,
    expandDepth: PropTypes.number,
    depth: PropTypes.number,
    specPath: ImPropTypes.list.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      schemaOrg: schemaOrg
    }
  }

  getConceptDescriptionFromSchemaOrg (id) {
    if (!id) { return null }

    let concept = this.getConceptFromSchemaOrg(id)

    if (!concept) {return null}

    let description = this.getDescription(concept)
    return description
  }

  getConceptFromSchemaOrg (id) {
    let schemaOrg = this.getSchemaOrg()
    return schemaOrg['@graph'].find(concept => concept['@id'] === id)
  }

  getSchemaOrg () {
    return this.state.schemaOrg
  }

  getDescription (concept) {
    return concept['rdfs:comment']
  }

  getProperty (properties, propertyName) {
    for (let [key, value] of properties.entries()) {
      if (key === propertyName) {
        for (let [innerKey, innerValue] of value.entries()) {
          if (innerKey in rdfKeywords) {
            return innerValue
          }
        }
      }
    }
    return null
  }

  componentWillMount () {
    fetch('https://schema.org/version/3.7/schema.jsonld')
      .then(response => response.json())
      .then(schema => this.setState({schemaOrg: schema}))
      .catch(() => this.setState({schemaOrg: schemaOrg}))
  }

  render () {
    let {schema, name, displayName, isRef, getComponent, getConfigs, depth, onToggle, expanded, specPath, ...otherProps} = this.props
    let {specSelectors, expandDepth} = otherProps
    const {isOAS3} = specSelectors

    if (!schema) {
      return null
    }

    const {showExtensions} = getConfigs()

    let description = schema.get('description')
    let properties = schema.get('properties')
    let additionalProperties = schema.get('additionalProperties')
    let title = schema.get('title') || displayName || name
    let requiredProperties = schema.get('required')
    let extensionClass = schema.get('x-same-as') || schema.get('x-rdf-type') || null

    let conceptDescription = this.getConceptDescriptionFromSchemaOrg(extensionClass)

    const JumpToPath = getComponent('JumpToPath', true)
    const Markdown = getComponent('Markdown')
    const Model = getComponent('Model')
    const ModelCollapse = getComponent('ModelCollapse')

    const JumpToPathSection = () => {
      return <span className="model-jump-to-path"><JumpToPath specPath={specPath}/></span>
    }
    const collapsedContent = (<span>
        <span>{braceOpen}</span>...<span>{braceClose}</span>
      {
        isRef ? <JumpToPathSection/> : ''
      }
    </span>)

    const anyOf = specSelectors.isOAS3() ? schema.get('anyOf') : null
    const oneOf = specSelectors.isOAS3() ? schema.get('oneOf') : null
    const not = specSelectors.isOAS3() ? schema.get('not') : null

    const titleEl = title && <span className="model-title">
      {isRef && schema.get('$$ref') && <span className="model-hint">{schema.get('$$ref')}</span>}
      <span className="model-title__text">
        <span>
          {/*if it doesn't exist, do not display empty <>*/}
          <p>{title} {extensionClass && <a href={extensionClass} target="_blank">&lt;{extensionClass}&gt;</a>}
          </p>
          <p><a style={descriptionStyle} href={extensionClass} target={'_blank'}>{conceptDescription}</a></p>
        </span>
      </span>
    </span>

    return <span className="model">
      <ModelCollapse
        modelName={name}
        title={titleEl}
        onToggle={onToggle}
        expanded={expanded ? true : depth <= expandDepth}
        collapsedContent={collapsedContent}>

         <span className="brace-open object">{braceOpen}</span>
        {
          !isRef ? null : <JumpToPathSection/>
        }
        <span className="inner-object">
            {
              <table className="model">
                <tbody>
                {
                  !description ? null : <tr style={{color: '#666', fontWeight: 'normal'}}>
                    <td style={{fontWeight: 'bold'}}>description:</td>
                    <td>
                      <Markdown source={description}/>
                    </td>
                  </tr>
                }
                {
                  !(properties && properties.size) ? null : properties.entrySeq().map(
                    ([key, value]) => {
                      let isDeprecated = isOAS3() && value.get('deprecated')
                      let isRequired = List.isList(requiredProperties) && requiredProperties.contains(key)
                      let tableRowStyle = {
                        borderBottom: '1px solid #85929e'
                      }
                      let propertyStyle =
                        {
                          verticalAlign: 'top',
                          padding: '0.5em'
                        }
                      if (isRequired) {
                        propertyStyle.fontWeight = 'bold'
                      }

                      let extensionProperty = this.getProperty(properties, key)
                      let propertyDescription
                      if (this.getConceptDescriptionFromSchemaOrg(extensionProperty)) {
                        propertyDescription = Parser(this.getConceptDescriptionFromSchemaOrg(extensionProperty))
                      } else {
                        propertyDescription = this.getConceptDescriptionFromSchemaOrg(extensionProperty)
                      }

                      return (<tr style={tableRowStyle} itemProp={extensionProperty} key={key}
                                  className={isDeprecated && 'deprecated'}>
                        <td style={propertyStyle}>
                          {key}{isRequired && <span style={{color: 'red'}}>*</span>}
                        </td>
                        <td style={propertyStyle}>
                          <Model key={`object-${name}-${key}_${value}`} {...otherProps}
                                 required={isRequired}
                                 getComponent={getComponent}
                                 specPath={specPath.push('properties', key)}
                                 getConfigs={getConfigs}
                                 schema={value}
                                 depth={depth + 1}/>
                        </td>
                        <td style={propertyStyle}>
                          <a href={extensionProperty} target="_blank">
                            {/*if it doesn't exist, do not display empty <>*/}
                            {extensionProperty && <span>&lt;{extensionProperty}&gt;</span>}
                          </a>
                        </td>
                        <td style={propertyStyle}>
                          <a style={descriptionStyle} href={extensionProperty} target="_blank">{propertyDescription}</a>
                        </td>
                      </tr>)
                    }).toArray()
                }
                {
                  // empty row before extensions...
                  !showExtensions ? null : <tr>&nbsp;</tr>
                }
                {
                  !showExtensions ? null :
                    schema.entrySeq().map(
                      ([key, value]) => {
                        if (key.slice(0, 2) !== 'x-') {
                          return
                        }

                        const normalizedValue = !value ? null : value.toJS ? value.toJS() : value

                        return (<tr key={key} style={{color: '#777'}}>
                          <td>
                            {key}
                          </td>
                          <td style={{verticalAlign: 'top'}}>
                            {JSON.stringify(normalizedValue)}
                          </td>
                        </tr>)
                      }).toArray()
                }
                {
                  !additionalProperties || !additionalProperties.size ? null
                    : <tr>
                      <td>{'< * >:'}</td>
                      <td>
                        <Model {...otherProps} required={false}
                               getComponent={getComponent}
                               specPath={specPath.push('additionalProperties')}
                               getConfigs={getConfigs}
                               schema={additionalProperties}
                               depth={depth + 1}/>
                      </td>
                    </tr>
                }
                {
                  !anyOf ? null
                    : <tr>
                      <td>{'anyOf ->'}</td>
                      <td>
                        {anyOf.map((schema, k) => {
                          return <div key={k}><Model {...otherProps} required={false}
                                                     getComponent={getComponent}
                                                     specPath={specPath.push('anyOf', k)}
                                                     getConfigs={getConfigs}
                                                     schema={schema}
                                                     depth={depth + 1}/></div>
                        })}
                      </td>
                    </tr>
                }
                {
                  !oneOf ? null
                    : <tr>
                      <td>{'oneOf ->'}</td>
                      <td>
                        {oneOf.map((schema, k) => {
                          return <div key={k}><Model {...otherProps} required={false}
                                                     getComponent={getComponent}
                                                     specPath={specPath.push('oneOf', k)}
                                                     getConfigs={getConfigs}
                                                     schema={schema}
                                                     depth={depth + 1}/></div>
                        })}
                      </td>
                    </tr>
                }
                {
                  !not ? null
                    : <tr>
                      <td>{'not ->'}</td>
                      <td>
                        <div>
                          <Model {...otherProps}
                                 required={false}
                                 getComponent={getComponent}
                                 specPath={specPath.push('not')}
                                 getConfigs={getConfigs}
                                 schema={not}
                                 depth={depth + 1}/>
                        </div>
                      </td>
                    </tr>
                }
                </tbody>
              </table>
            }
        </span>
        <span className="brace-close">{braceClose}</span>
      </ModelCollapse>
    </span>
  }
}
