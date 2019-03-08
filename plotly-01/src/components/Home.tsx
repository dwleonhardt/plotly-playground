import * as React from 'react'
import { connect } from 'react-redux'
import { UsdExchange } from '../actions/usd-exchange'
import { Options } from './Dropdown'
const data = require('../util/markets.json')

  class Home extends React.Component<any, any> {


  render() {
    return (
      <select>
        {data.currencies.map((currencies: string, i: number) => <Options currency={currencies} key={i}/>)}
      </select>
    );

  }
}

const mapStateToProps = (state: any) => {
  return {
    animalData: state.animalData
  }
}

export default connect(mapStateToProps, { UsdExchange })(Home)
