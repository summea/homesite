from django.http import Http404
from django.shortcuts import HttpResponse,render

from layouts.models import Layout
from .models import Page

def index(request):
    try:
        page = Page.objects.get(pk=1)
        # ref: https://stackoverflow.com/a/4669501/1167750 
        context = {'page': page, 'content': page.layout.body.replace("{{ content }}", page.body)}
    except:
        raise Http404("Page not found.")
    return render(request, 'pages/view.html', context)

def view(request, page_id):
    try:
        page = Page.objects.get(pk=page_id)
        # ref: https://stackoverflow.com/a/4669501/1167750 
        context = {'page': page, 'content': page.layout.body.replace("{{ content }}", page.body)}
    except:
        raise Http404("Page not found.")
    return render(request, 'pages/view.html', context)

