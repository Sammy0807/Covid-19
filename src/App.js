import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import style from "./App.module.css";

import { fetchData } from "./api";
import coronaImages from "./img/image.png";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    console.log(data);
    return (
      <div>
        <div className={style.container}>
          <img className={style.image} src={coronaImages} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart country={country} data={data} />
        </div>
      </div>
    );
  }
}
