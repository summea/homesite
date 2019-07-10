from rest_framework import serializers
from albums.models import Album

class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'title', 'summary', 'image', 'link')