import React from 'react';

class MenuItem extends React.Component {
  state = {
    expanded: false
  };

  toggleExpanded = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  render() {
    const { title, subItems } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <h3 onClick={this.toggleExpanded}>{title}</h3>
        {expanded && subItems &&
          <ul>
            {subItems.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        }
      </div>
    );
  }
}

export default MenuItem;
