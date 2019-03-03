import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TipoProducto from './../TipoProducto/TipoProducto';


class TabsProducto extends Component {
    constructor() {
      super();
      this.state = { tabIndex: 0 };
    }
    render() {
      return (
        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
          <TabList>
            <Tab>
                Cuenta de ahorro
            </Tab>
            <Tab>
                Cuenta Corriente
            </Tab>
          </TabList>
          <TabPanel>
            <TipoProducto />
          </TabPanel>
          <TabPanel>
            <TipoProducto />
          </TabPanel>
        </Tabs>
      );
    }
  }

export default TabsProducto;