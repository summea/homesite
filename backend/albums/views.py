from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from albums.models import Album
from albums.serializers import AlbumSerializer

def albums_list(request):
    if request.method == 'GET':
        albums = Album.objects.all()
        serializer = AlbumSerializer(albums, many=True)
        return JsonResponse(serializer.data, safe=False)