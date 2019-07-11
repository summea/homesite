import React from 'react';
import axios from 'axios';
import { Image, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    var that = this;
    axios.get('http://127.0.0.1:8000/albums/albums/', {
      })
      .then(function(response) {
        that.setState({
          albums: response.data
        })
      })
      .catch(function(error) {
        console.log(error)
      });
  }

  render() {
    const albumsList = this.state.albums.map((album) =>
      <List.Item key={album.title}>
        <Image avatar src={album.image} />
        <List.Content>
          <List.Header>{album.title}</List.Header>
          <List.Description>{album.summary}</List.Description>
        </List.Content>
      </List.Item>
    );
    
    return (
      <div>
        <List>
          {albumsList}
        </List>
      </div>
    )
  }
}

export default AlbumList;