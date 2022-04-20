'use strict';

// const e = React.createElement;

class FilterItem extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    // console.log(this.props.name);
  }

  render() {
    // console.log("filt3:", this.props.filter);
    return (
      <li className="filterItem" key={this.name}>
        <input type="checkbox" className="filterItemCheckbox" name={this.name} onChange={this.props.filter}></input>
        <label htmlFor={this.name}>{this.name}</label>
      </li>
    );
  }
}

// export default FilterItem;