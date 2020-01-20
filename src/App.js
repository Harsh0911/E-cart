import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";

function Product(props) {
  const names = props.name.map(name => <li>{name}</li>);
  const values = props.value.map(value => <li>{value}</li>);
  return (
    <React.Fragment>
      <div id="cart-item-name">
        <ul>{names}</ul>
      </div>
      <div id="cart-item-value">
        <ul>{values}</ul>
      </div>
    </React.Fragment>
  );
}

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchasedValue: Array(5).fill(null),
      purchasedName: Array(5).fill(null),
      counter: -1
    };
  }

  renderProducts() {
    return (
      <div id="col2">
        <h2 align="center">
          <b>PRODUCTS</b>
        </h2>
        <ul class="prodlist">
          <li
            onClick={() => {
              this.clickHandle("1", "Mouse");
            }}
          >
            Mouse
          </li>
          <li
            onClick={() => {
              this.clickHandle("2", "Keyboard");
            }}
          >
            Keyboard
          </li>
          <li
            onClick={() => {
              this.clickHandle("3", "RAM");
            }}
          >
            RAM
          </li>
          <li
            onClick={() => {
              this.clickHandle("4", "Monitor");
            }}
          >
            Monitor
          </li>
          <li
            onClick={() => {
              this.clickHandle("5", "HDD");
            }}
          >
            HDD
          </li>
        </ul>
      </div>
    );
  }
  clickHandle(id, name) {
    let pricemap = new Map();
    pricemap.set("1", 150);
    pricemap.set("2", 300);
    pricemap.set("3", 2000);
    pricemap.set("4", 3000);
    pricemap.set("5", 2500);

    const prodsValue = this.state.purchasedValue.slice();
    const prodsName = this.state.purchasedName.slice();
    var index = this.state.counter;
    prodsName[++index] = name;
    prodsValue[index] = pricemap.get(id);
    this.setState({
      purchasedValue: prodsValue,
      purchasedName: prodsName,
      counter: index
    });
  }
  findsum(a, c) {
    var sum = 0;
    console.log(a);
    for (var i = 0; i <= c; i++) {
      console.log(sum);
      sum = sum + a[i];
    }
    return sum;
  }
  renderCart() {
    var sum = this.findsum(this.state.purchasedValue, this.state.counter);
    return (
      <div id="col1">
        <h2 align="center">
          <b>CART</b>
        </h2>
        <Product
          value={this.state.purchasedValue}
          name={this.state.purchasedName}
        />
        <p id="cart-val">Cart Value:{sum}</p>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderCart()}
        {this.renderProducts()}
      </div>
    );
  }
}

ReactDOM.render(<Cart />, document.getElementById("root"));
