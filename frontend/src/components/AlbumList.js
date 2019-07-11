import React from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';
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
      <Table.Row key={album.title}>
        <Table.Cell>{album.title}</Table.Cell>
        <Table.Cell>{album.summary}</Table.Cell>
      </Table.Row>
    );
    
    return (
      <div>
        <h2>All Albums</h2>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Summary</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {albumsList}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default AlbumList;