'use strict';

// const e = React.createElement;

class RestaurantItem extends React.Component {
  constructor(props) {
    super(props);
    this.item = props.item;
  }

  listTags(tags) {
    return tags.map((tag) =>
      (<li className="tagItem" key={tag}>{tag}</li>)
    )
  }
  
  render() {

    return (
      <div className="restaurantItem card bg-secondary">
        <div className="restaurantName">{this.item.name}</div>
        <img className="restaurantPic" src={this.item.pic}></img>
        <ul className="restaurantTags">{this.listTags(this.item.tags)}</ul>
        <div className="restaurantAddress bg-info">{this.item.address}</div>
      </div>
    );
  }
}

// export default RestaurantItem;