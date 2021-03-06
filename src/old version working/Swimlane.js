import React from 'react';
import Card from './Card';
import './Swimlane.css';
import Dragula from 'dragula';
import 'C:/xampp/htdocs/YCombinator/shiptivitas-1/node_modules/dragula/dist/dragula.css';

export default class Swimlane extends React.Component {
  render() {
    const cards = this.props.clients.map(client => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    })
    return (
      <div className="Swimlane-column" >
        <div className="Swimlane-title">{this.props.name}</div>
        <div className="Swimlane-dragColumn" ref={this.props.dragulaRef} ref={this.dragulaDecorator}>
          {cards}
        </div>
      </div>);
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {};
	    console.log(componentBackingInstance);
      Dragula([componentBackingInstance], options);
	}
    };
	
}
