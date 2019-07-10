import json
import io

from pprint import pprint
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.test import APITestCase
from albums.models import Album

class AlbumTests(APITestCase):
    fixtures = ['album_fixtures.json']

    def test_get_all_albums(self):
        response = self.client.get('/albums/albums/', format='json')
        stream = io.BytesIO(response.content)
        data = JSONParser().parse(stream)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(data), 3)