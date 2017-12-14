import React, { Component } from 'react'
import { connect } from 'react-redux'
import CPUItemPanel from './CPUItemPanel'
import { startGetCPUs } from '../../../actions/partsCPU'

export class CpuFeatured extends Component {
  constructor(props){
    super(props);
    this.state = {
      CPUs: []
    }
  }
  componentDidMount(){
   this.props.getCPUs()
   
  }
  componentWillReceiveProps(nextProps){    
    this.setState({ CPUs: nextProps.CPUs })
  }
  render() {
    return (
      <div>
        {
          this.state.CPUs && (
            this.state.CPUs.map((item) => {
              return <CPUItemPanel
                key={item._id}
                title={item.brand}
                subTitle={item.chipset}
              />
            })
          )
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  CPUs: state.partsCPU
})

const mapDispatchToProps = dispatch => ({
  getCPUs: () => dispatch(startGetCPUs())
})

export default connect(mapStateToProps, mapDispatchToProps)(CpuFeatured)