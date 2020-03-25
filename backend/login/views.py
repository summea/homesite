import io

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

@csrf_exempt
def login(request):
    if request.method == 'POST':
        # set access token
        stream = io.BytesIO(request.body)
        data = JSONParser().parse(stream)
        response = JsonResponse({'login': True})
        #response.set_cookie('a', value='b')
        #response.set_cookie('accesstoken', value=data['data']['accesstoken'])
        #print(dir(response))
        #print(response._headers)
        response._headers['set-cookie'] = ('Set-Cookie', 'a=b')
        response._headers['authorization'] = ('Authorization', 'test')
        print(response._headers)
        return response

@csrf_exempt
def logout(request):
    pass