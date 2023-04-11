'use strict';

// import RestaurantItem from "./RestaurantItem.js";

// const e = React.createElement;

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
  }

  listItems = this.props.items.map((item) =>
      (<RestaurantItem item={item} key={item.name} />)
    )

  render() {
    // console.log("finalREsyy:", this.props.items);
    return (
      <div className="restaurantList">
        {this.listItems}
      </div>
    );
  }
}

// export default RestaurantList;