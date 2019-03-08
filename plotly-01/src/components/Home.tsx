import * as React from 'react'
import Plot from 'react-plotly.js'
import { connect } from 'react-redux'
import { Cats, Dogs } from '../actions/cats'
import  { animalData } from '../util/data'

class Home extends React.Component<any, object> {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <Plot
          data={[
            {
              x: animalData.cats.dates,
              y: animalData.cats.qty,
              type: 'scatter',
              mode: 'points',
              name: 'Cats',
              marker: {color: 'red'},
            },
            {
              x: animalData.dogs.dates,
              y: animalData.dogs.qty,
              type: 'scatter',
              mode: 'points',
              name: 'Dogs',
              marker: {color: 'blue'},
            }
          ]}
          layout={ {responsive: true, width: '100%', height: '100%', title: 'Scatter Plot'} }
        />
        <Plot
          data={[{
            type: 'table',
            header: {
              values: animalData.cats.dates,
              align: "center",
              line: {width: 1, color: 'black'},
              fill: {color: "grey"},
              font: {family: "Arial", size: 12, color: "white"}
            },
            cells: {
              values: [['CATS', 'DOGS'], animalData.cats.qty, animalData.dogs.qty],
              align: "center",
              line: {color: "black", width: 1},
              font: {family: "Arial", size: 11, color: ["black"]}
            }
          }]}
          layout={ {responsive: true, width: '100%', height: '100%', title: 'Table'} }
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    cats: state.cats,
    dogs: state.dogs
  }
}

export default connect(mapStateToProps, { Cats, Dogs })(Home)
